import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePick({ label, selectedDate, onDateChange }) {
//   const [value, setValue] = React.useState(dayjs());

  const handleDateChange = (newDate) => {
    const formattedDate = dayjs(newDate).format('YYYY-MM-DD');
    onDateChange(formattedDate);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker 
          label={label}
          value={selectedDate || null}
          onChange={handleDateChange}
          format='YYYY / MM / DD'
          slotProps={{
            textField: {
              size: "small",
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}