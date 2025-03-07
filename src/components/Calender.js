import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import "./CalendarStyles.css";

const CalenderSection = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <h3 className="calendar-title">Calendar</h3>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date, view }) => {
          if (view === "month") {
            const day = date.getDate();
            if ([1, 8, 15, 22, 29].includes(day)) {
              return "holiday"; // Govt holidays
            }
            if ([19, 21].includes(day)) {
              return "leave"; // Leaves
            }
          }
        }}
      />
      <div className="legend">
        <span className="legend-item holiday">■ Govt Holiday</span>
        <span className="legend-item leave">■ Leave</span>
      </div>
    </div>
  );
};

export default CalenderSection;
