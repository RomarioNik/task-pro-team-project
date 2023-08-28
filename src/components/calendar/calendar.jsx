import * as React from 'react';

import { Button, Stack } from '@mui/material';
// import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format } from 'date-fns';
import dayjs from 'dayjs';
import { useState } from 'react';

import css from './calendar.module.css';

function ButtonField(props) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {},
  } = props;

  return (
    <Button
      sx={{
        margin: 0,
        padding: 0,
        color: '#bedbb0 ',
        textTransform: 'inherit',
        fontSize: '16px',
        justifyContent: 'left',
        align: 'center',
        '&:hover': {
          backgroundColor: 'inherit',
        },
      }}
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      onClick={() => setOpen?.(prev => !prev)}
      className={css.myButton}
    >
      {label ?? 'Pick a date'}
    </Button>
  );
}

function ButtonDatePicker(props) {
  const [open, setOpen] = useState(false);

  return (
    <DatePicker
      showDaysOutsideCurrentMonth
      slots={{ field: ButtonField, ...props.slots }}
      slotProps={{ field: { setOpen } }}
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    />
  );
}

export default function Calendar() {
  const [deadlineDate, setdDeadlineDate] = useState(null);
  const [sameDay, setsameDay] = useState(false);
  const today = dayjs();

  const chooseDeadlineDate = newValue => {
    const choisedDate = new Date(newValue.$d);

    const isSameDay = dayjs(choisedDate).isSame(today, 'day');
    setdDeadlineDate(choisedDate);
    console.log(isSameDay);
    if (isSameDay) {
      setsameDay(true);
    } else if (!isSameDay) {
      setsameDay(false);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={1}>
        <ButtonDatePicker
          label={`${
            deadlineDate == null
              ? 'Choose a deadline date'
              : sameDay
              ? `Today, ${format(deadlineDate, 'MMMM d')}`
              : format(deadlineDate, 'MM/dd/yyyy')
          }`}
          value={deadlineDate}
          onChange={chooseDeadlineDate}
          className={css.myButton}
        />
      </Stack>
    </LocalizationProvider>
  );
}

// function CalendarCom() {
//   const [open, setOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = date => {
//     setSelectedDate(date);
//     setOpen(false);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div>
//         <button onClick={() => setOpen(true)}>
//           {selectedDate ? selectedDate.toDateString() : 'Выберите дату'}
//         </button>
//         {open && (
//           <DateCalendar
//             open={open}
//             date={selectedDate}
//             onChange={handleDateChange}
//             onClose={() => setOpen(false)}
//           />
//         )}
//       </div>
//     </LocalizationProvider>
//   );
// }

// export default CalendarCom;
