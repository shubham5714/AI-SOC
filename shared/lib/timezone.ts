/**
 * Utility functions for timezone conversions
 */

/**
 * Converts a date/time selected in user's timezone to UTC ISO string
 * @param date - Date object from DatePicker (contains date/time components)
 * @param userTimezone - User's timezone from database (e.g., 'Asia/Kolkata')
 * @returns UTC ISO string for database query
 */
export const convertUserTimezoneToUTC = (date: Date, userTimezone: string): string => {
    // Get the date/time components as the user selected them
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();

    console.log('Timezone Conversion Debug:', {
        'Selected Date Object': date.toString(),
        'Selected Components': { year, month: month + 1, day, hours, minutes, seconds },
        'Selected Time (User TZ)': `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
        'User Timezone': userTimezone
    });

    // The correct approach: 
    // User selected time in their timezone (e.g., 17:00 IST)
    // We need to find what UTC time, when displayed in user's timezone, equals the selected time
    // 
    // Example: User selects 17:00 IST
    // IST is UTC+5:30, so 17:00 IST = 11:30 UTC
    // We need to calculate: selectedTime - timezoneOffset = UTC time
    
    // Method: Use a reference date to calculate the timezone offset for the specific date
    // Then apply that offset to convert the selected time to UTC
    
    // Create a reference UTC date at the selected date/time
    const referenceUTC = new Date(Date.UTC(year, month, day, 12, 0, 0)); // Noon UTC on selected date
    
    // Format this reference in user's timezone to get the offset
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: userTimezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZoneName: 'longOffset'
    });

    // Get what noon UTC displays as in user's timezone
    const referenceParts = formatter.formatToParts(referenceUTC);
    const referenceHoursInTZ = parseInt(referenceParts.find(p => p.type === 'hour')?.value || '0');
    const referenceMinutesInTZ = parseInt(referenceParts.find(p => p.type === 'minute')?.value || '0');
    
    // Calculate offset: If 12:00 UTC displays as 17:30 IST, then offset is +5:30
    // So to convert 17:00 IST to UTC: 17:00 - 5:30 = 11:30 UTC
    const referenceTotalMinutes = 12 * 60; // Noon = 720 minutes
    const referenceTZTotalMinutes = referenceHoursInTZ * 60 + referenceMinutesInTZ;
    const timezoneOffsetMinutes = referenceTZTotalMinutes - referenceTotalMinutes;
    
    // Now convert selected time to UTC: selectedTime - offset
    const selectedTotalMinutes = hours * 60 + minutes;
    const utcTotalMinutes = selectedTotalMinutes - timezoneOffsetMinutes;
    
    // Handle day rollover if UTC time goes negative or over 24 hours
    let utcHours = Math.floor(utcTotalMinutes / 60);
    let utcMinutes = utcTotalMinutes % 60;
    let utcDay = day;
    let utcMonth = month;
    let utcYear = year;
    
    if (utcMinutes < 0) {
        utcHours -= 1;
        utcMinutes += 60;
    }
    if (utcHours < 0) {
        utcDay -= 1;
        utcHours += 24;
    }
    if (utcHours >= 24) {
        utcDay += 1;
        utcHours -= 24;
    }
    
    // Create the final UTC date
    const adjustedUTC = new Date(Date.UTC(utcYear, utcMonth, utcDay, utcHours, utcMinutes, seconds, milliseconds));

    // Verify the result
    const verifyParts = formatter.formatToParts(adjustedUTC);
    const verifyHours = parseInt(verifyParts.find(p => p.type === 'hour')?.value || '0');
    const verifyMinutes = parseInt(verifyParts.find(p => p.type === 'minute')?.value || '0');

    console.log('Timezone Conversion Result:', {
        'Reference UTC (noon)': referenceUTC.toISOString(),
        'Reference UTC displays in User TZ as': `${referenceHoursInTZ}:${String(referenceMinutesInTZ).padStart(2, '0')}`,
        'Timezone Offset (minutes)': timezoneOffsetMinutes,
        'Timezone Offset (hours)': `${timezoneOffsetMinutes >= 0 ? '+' : ''}${Math.floor(timezoneOffsetMinutes / 60)}:${String(Math.abs(timezoneOffsetMinutes % 60)).padStart(2, '0')}`,
        'Selected Time (User TZ)': `${hours}:${String(minutes).padStart(2, '0')}`,
        'Calculated UTC Time': `${utcHours}:${String(utcMinutes).padStart(2, '0')}`,
        'Final UTC (for DB)': adjustedUTC.toISOString(),
        'Final UTC displays in User TZ as': `${verifyHours}:${String(verifyMinutes).padStart(2, '0')}`,
        'Verification': verifyHours === hours && verifyMinutes === minutes ? '✓ Match' : '✗ Mismatch'
    });

    return adjustedUTC.toISOString();
};

