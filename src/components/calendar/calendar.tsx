import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { calendarProps } from "../../@types/components";
import moment from "moment";



export const CalendarComponent = ({ onDateSelect, isFrom, timeframe }: calendarProps) => {

  console.log("Time frames", timeframe);
  const datesArray = [
    "08-02-2023",
    "12-02-2023",
    "31-09-2023",
    "07-07-2023",
    "09-08-2023",
    "01-06-2023",
    "03-09-2023",
    "04-11-2023",
    "10-03-2023",
    "04-08-2023"
  ];

  const timeArray = timeframe ? timeframe : datesArray;

const dateObjects = timeArray.map(dateStr => {
  const [dd, mm, yyyy] = dateStr.split('-').map(Number);
  console.log("new Date", yyyy, mm -1, dd);
  return new Date(dd, mm - 1,yyyy );
});
const minDate = new Date(Math.min(...dateObjects.map(date => date.getTime())));
const maxDate = new Date(Math.max(...dateObjects.map(date => date.getTime())));
const startDateString = minDate.toLocaleDateString('en-GB');
const endDateString = maxDate.toLocaleDateString('en-GB');
const startDates = moment(`${startDateString}`, "DD-MM-YYYY");
const endDate = moment(`${endDateString}`, "DD-MM-YYYY");
const firstDayOfMonth = startDates.clone().startOf('month');
const lastDayOfMonth = endDate.clone().endOf('month');
const formattedFirstDay = firstDayOfMonth.format("DD-MM-YYYY");
const formattedLastDay = lastDayOfMonth.format("DD-MM-YYYY");
const initialFromDate = dayjs(`${formattedFirstDay}`, "DD-MM-YYYY");
const initialToDate = dayjs(`${formattedLastDay}`, "DD-MM-YYYY");


console.log("Initial From dates", initialFromDate, initialToDate)

  const handleDateChange = (date: any) => {
    const formattedDate = dayjs(date).format("DD-MM-YYYY");
    if (onDateSelect) {
      onDateSelect(formattedDate);
    }
  };

  const isDisabledDate = (date: any) => {
    const currentDate = dayjs(date);
    if (currentDate.isBefore(initialFromDate) || currentDate.isAfter(initialToDate)) {
      return true;
    }

    if (!isFrom) {
      return currentDate.date() !== currentDate.daysInMonth();
    } else {
      return currentDate.date() !== 1;
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={`Select ${isFrom ? "Start" : "End"} Date`}
        onChange={handleDateChange}
        shouldDisableDate={isDisabledDate}
        disableHighlightToday={true}
        format="DD-MM-YYYY"
        value={isFrom ? initialFromDate : initialToDate}
        slotProps={{
          textField: { size: "small" },
          day: {
            sx: {
              "&.MuiPickersDay-root.Mui-selected": {
                backgroundColor: "rgba(43, 82, 221, 1)",
              },
            },
          },
        }}
        sx={{
          marginTop: 1,
          label: {
            color: "rgba(34, 34, 35, 1)",
            fontSize: "90%",
            width: "70%",
          },
        }}
        data-testid="custom-calendar"
      />
    </LocalizationProvider>
  );
};
