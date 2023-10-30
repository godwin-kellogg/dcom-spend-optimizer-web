import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { calendarProps } from "../../@types/components";

export const CalendarComponent = ({ onDateSelect, isFrom }: calendarProps) => {
  const handleDateChange = (date: any) => {
    const formattedDate = dayjs(date).format("DD-MM-YYYY");
    if (onDateSelect) {
      onDateSelect(formattedDate);
    }
  };

  const isDisabledDate = (date: any) =>
    !isFrom
      ? dayjs(date).date() !== dayjs(date).daysInMonth()
      : dayjs(date).date() !== 1;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={`Select ${isFrom ? "Start" : "End"} Date`}
        onChange={handleDateChange}
        shouldDisableDate={isDisabledDate}
        disableHighlightToday={true}
        format="DD-MM-YYYY"
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
