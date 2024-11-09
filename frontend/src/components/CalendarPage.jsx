import React, {useState} from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';

function CalendarPage() {
  const localizer = momentLocalizer(moment);

  console.log('start:', moment('11/23/2024 14:30').toDate())

  const singleEvent = {
    startDay: "11/23/2024",
    startTime: "9:00",
    endDay: "11/23/2024",
    endTime: "12:00",
    title: "Capstone Day!"
  }

  const anotherEvent = {
    startDay: "11/23/2024",
    startTime: "12:00",
    endDay: "11/23/2024",
    endTime: "24:00",
    title: "Nap!"
  }

  const [events, setEvents] = useState([
    {
      start: moment(`${singleEvent.startDay} ${singleEvent.startTime}`).toDate(),
      end: moment(singleEvent.endDay).toDate(),
      title: `Capstone Day! ${singleEvent.startTime}`
    }
  ])

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "50vh"}}
      />
    </div>
  );
}

export default CalendarPage;
