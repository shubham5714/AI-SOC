"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useUserContext } from './UserContext';
import { convertUserTimezoneToUTC } from '@/shared/lib/timezone';

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
  // Get user timezone from UserContext (if available)
  const { userData } = useUserContext();
  const userTimezone = userData?.timezone || 'UTC'; // Default fallback
  
  const [dateRange, setDateRangeState] = useState<[Date, Date]>(() => {
    const today = new Date();
    today.setHours(23, 59, 59, 999); // End of day
    const twoDaysAgo = new Date(today);
    twoDaysAgo.setDate(today.getDate() - 2);
    twoDaysAgo.setHours(0, 0, 0, 0); // Start of day
    return [twoDaysAgo, today];
  });
  const [isLoading, setIsLoading] = useState(true);

  // Load date range from session storage on mount
  useEffect(() => {
    const loadDateRange = () => {
      try {
        const raw = sessionStorage.getItem('dateRange');
        if (raw) {
          const parsed = JSON.parse(raw);
          const startDate = new Date(parsed[0]);
          const endDate = new Date(parsed[1]);
          setDateRangeState([new Date(startDate.getTime()), new Date(endDate.getTime())]);
        } else {
          // Set default range and store in session
          const today = new Date();
          today.setHours(23, 59, 59, 999); // End of day
          const twoDaysAgo = new Date(today);
          twoDaysAgo.setDate(today.getDate() - 2);
          twoDaysAgo.setHours(0, 0, 0, 0); // Start of day
          const defaultRange = [twoDaysAgo, today] as [Date, Date];
          setDateRangeState(defaultRange);
          // Convert to UTC using user's timezone (or default) before storing
          const startUTC = convertUserTimezoneToUTC(defaultRange[0], userTimezone);
          const endUTC = convertUserTimezoneToUTC(defaultRange[1], userTimezone);
          sessionStorage.setItem('dateRange', JSON.stringify([startUTC, endUTC]));
        }
      } catch (error) {
        console.error('Error loading date range from session storage:', error);
        // Fallback to default range
        const today = new Date();
        today.setHours(23, 59, 59, 999); // End of day
        const twoDaysAgo = new Date(today);
        twoDaysAgo.setDate(today.getDate() - 2);
        twoDaysAgo.setHours(0, 0, 0, 0); // Start of day
        const defaultRange = [twoDaysAgo, today] as [Date, Date];
        setDateRangeState(defaultRange);
        // Convert to UTC using user's timezone (or default) before storing
        const startUTC = convertUserTimezoneToUTC(defaultRange[0], userTimezone);
        const endUTC = convertUserTimezoneToUTC(defaultRange[1], userTimezone);
        sessionStorage.setItem('dateRange', JSON.stringify([startUTC, endUTC]));
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
        // Convert to UTC using user's timezone before storing (consistent with DatePicker)
        const startUTC = convertUserTimezoneToUTC(dateRange[0], userTimezone);
        const endUTC = convertUserTimezoneToUTC(dateRange[1], userTimezone);
        sessionStorage.setItem('dateRange', JSON.stringify([startUTC, endUTC]));
      } catch (error) {
        console.error('Error saving date range to session storage:', error);
      }
    }
  }, [dateRange, isLoading, userTimezone]);

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
