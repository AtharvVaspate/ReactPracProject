import React from "react";
import "./DateDisplay.css";

function DateDisplay(props) {
  const month = props.date?.toString();
  const day = props.date?.toString();

  return (
    <div>
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_day">{day}</div>
    </div>
  );
}

export default DateDisplay;
