import React, {useState, useEffect} from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { eventsData } from "./eventsData";

function CalendarPage() {
  const localizer = momentLocalizer(moment);

  console.log('Calendar.jsx example start:', moment('11/23/2024 14:30').toDate())

  // const singleEvent = {
  //   startDay: "11/23/2024",
  //   startTime: "9:00",
  //   endDay: "11/23/2024",
  //   endTime: "11:00",
  //   title: "Capstone Day!"
  // }

  // const anotherEvent = {
  //   startDay: "11/23/2024",
  //   startTime: "12:00",
  //   endDay: "11/23/2024",
  //   endTime: "24:00",
  //   title: "Nap!"
  // }

  // const [events, setEvents] = useState([
  //   {
  //     start: moment(`${singleEvent.startDay} ${singleEvent.startTime}`).toDate(),
  //     end: moment(`${singleEvent.endDay} ${singleEvent.endTime}`).toDate(),
  //     title: `Capstone Day! ${singleEvent.startTime}`
  //   },
  // ])

  const [events, setEvents] = useState([]) //Initialize state with empty array
  
  useEffect(() => {
    // fetch data from backend
      // .then(response => response.json())
      // .then((eventsData) => {
        //Loop over eventsData and convert the day and time to moment js

        const convertedEvents = eventsData.map((event) => {
          return {
            start: moment(`${event.startDay} ${event.startTime}`),
            end: moment(`${event.endDay} ${event.endTime}`),
            title: event.title
          }
        })

        //update state with the converted events
        setEvents(convertedEvents)
      // })
    
  }, [])
  
  
  const handleSelectEvent = (e)=>{
    console.log('Event click:', e)
  }

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "50vh"}}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
}

export default CalendarPage;
