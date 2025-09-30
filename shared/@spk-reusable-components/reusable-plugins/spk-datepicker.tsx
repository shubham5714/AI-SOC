import React from 'react';

const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });
import dynamic from 'next/dynamic';
interface SpkDatepickrProps {
  selected?: Date | null;
  onChange: (date: Date | null) => void;
  dateFormat?: string;
  showTimeSelect?: boolean;
  timeFormat?: string;
  timeIntervals?: number;
  minDate?: Date;
  maxDate?: Date;
  isClearable?: boolean;
  placeholderText?: string;
  className?: string;
  Timeinput?: string;
  disabled?: boolean;
  Inline?: boolean;
  showTimeInput?: boolean;
  Iconvisible?: boolean;
  showTimeSelectOnly?: boolean;
  Caption?: string;
  Localtime?: string;
  Yearpicker?: boolean;
  minTime?: Date;
  maxTime?: Date;
  showWeekNumbers?: boolean
}

const SpkDatepickr: React.FC<SpkDatepickrProps> = ({
  selected,
  onChange,
  dateFormat = 'dd/MM/yyyy',
  showTimeSelect = false,
  timeFormat = 'HH:mm',
  timeIntervals = 30,
  minDate,
  maxDate,
  Timeinput,
  isClearable,
  placeholderText = 'Select a date',
  className = '',
  disabled = false,
  Iconvisible,
  showTimeSelectOnly,
  showTimeInput,
  showWeekNumbers = false,
  Localtime,
  Caption,
  Inline,
  minTime,
  maxTime,
  Yearpicker,
  ...props
}) => {
  return (
    <DatePicker selected={selected} onChange={onChange} dateFormat={dateFormat} timeInputLabel={Timeinput} showTimeSelect={showTimeSelect} timeFormat={timeFormat} timeIntervals={timeIntervals} showTimeSelectOnly={showTimeSelectOnly} showWeekNumbers={showWeekNumbers} minDate={minDate} maxDate={maxDate} isClearable={isClearable} placeholderText={placeholderText} className={className} disabled={disabled} showIcon={Iconvisible} inline={Inline} showTimeInput={showTimeInput} timeCaption={Caption} showMonthYearPicker={Yearpicker} locale={Localtime} minTime={minTime} maxTime={maxTime}
      {...props} // Forward any additional props to DatePicker
    />
  );
};

export default SpkDatepickr;
