import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue({ label }) {
  const [value, setValue] = React.useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker 
          label={label}
          defaultDate={
            dayjs()
          }
          value={value}
          onChange={(newStart) => setValue(newStart)}
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