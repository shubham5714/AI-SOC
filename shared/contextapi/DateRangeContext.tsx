"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface DateRangeContextType {
  dateRange: [Date, Date];
  setDateRange: (dateRange: [Date, Date]) => void;
  isLoading: boolean;
}

const DateRangeContext = createContext<DateRangeContextType | undefined>(undefined);

interface DateRangeProviderProps {
  children: ReactNode;
}

export const DateRangeProvider: React.FC<DateRangeProviderProps> = ({ children }) => {
  const [dateRange, setDateRangeState] = useState<[Date, Date]>(() => {
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);
    return [sevenDaysAgo, today];
  });
  const [isLoading, setIsLoading] = useState(true);

  // Load date range from session storage on mount
  useEffect(() => {
    const loadDateRange = () => {
      try {
        const raw = sessionStorage.getItem('dateRange');
        if (raw) {
          const parsed = JSON.parse(raw);
          setDateRangeState([new Date(parsed[0]), new Date(parsed[1])]);
        } else {
          // Set default range and store in session
          const today = new Date();
          const sevenDaysAgo = new Date(today);
          sevenDaysAgo.setDate(today.getDate() - 7);
          const defaultRange = [sevenDaysAgo, today] as [Date, Date];
          setDateRangeState(defaultRange);
          sessionStorage.setItem('dateRange', JSON.stringify([defaultRange[0].toISOString(), defaultRange[1].toISOString()]));
        }
      } catch (error) {
        console.error('Error loading date range from session storage:', error);
        // Fallback to default range
        const today = new Date();
        const sevenDaysAgo = new Date(today);
        sevenDaysAgo.setDate(today.getDate() - 7);
        const defaultRange = [sevenDaysAgo, today] as [Date, Date];
        setDateRangeState(defaultRange);
        sessionStorage.setItem('dateRange', JSON.stringify([defaultRange[0].toISOString(), defaultRange[1].toISOString()]));
      } finally {
        setIsLoading(false);
      }
    };

    loadDateRange();
    
    // Listen for storage changes from other tabs
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'dateRange') {
        if (event.newValue) {
          try {
            const parsed = JSON.parse(event.newValue);
            setDateRangeState([new Date(parsed[0]), new Date(parsed[1])]);
          } catch (error) {
            console.error('Error parsing date range from storage event:', error);
          }
        }
      }
    };
    
    // Set up BroadcastChannel for cross-tab communication
    let broadcastChannel: BroadcastChannel | null = null;
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      broadcastChannel = new BroadcastChannel('dateRangeDataSync');
      broadcastChannel.onmessage = (event) => {
        if (event.data.type === 'dateRangeUpdated') {
          setDateRangeState(event.data.data);
        }
      };
    }
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      if (broadcastChannel) {
        broadcastChannel.close();
      }
    };
  }, []);

  // Persist date range to session storage when it changes
  useEffect(() => {
    if (!isLoading) {
      try {
        sessionStorage.setItem('dateRange', JSON.stringify([dateRange[0].toISOString(), dateRange[1].toISOString()]));
      } catch (error) {
        console.error('Error saving date range to session storage:', error);
      }
    }
  }, [dateRange, isLoading]);

  const setDateRange = (newDateRange: [Date, Date]) => {
    setDateRangeState(newDateRange);
    
    // Trigger cross-tab synchronization
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      const channel = new BroadcastChannel('dateRangeDataSync');
      channel.postMessage({ type: 'dateRangeUpdated', data: newDateRange });
      channel.close();
    }
  };

  const value: DateRangeContextType = {
    dateRange,
    setDateRange,
    isLoading
  };

  return (
    <DateRangeContext.Provider value={value}>
      {children}
    </DateRangeContext.Provider>
  );
};

export const useDateRangeContext = (): DateRangeContextType => {
  const context = useContext(DateRangeContext);
  if (context === undefined) {
    throw new Error('useDateRangeContext must be used within a DateRangeProvider');
  }
  return context;
};
