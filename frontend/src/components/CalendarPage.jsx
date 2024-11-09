import React, {useState, useEffect} from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css'
import { eventsData } from "./eventsData";
import CalendarModal from "./CalendarModal";

function CalendarPage() {
  const localizer = momentLocalizer(moment);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalEventId, setModalEventId] = useState(null)
  const [newEvent, setNewEvent] = useState({})

  console.log('Calendar.jsx example start:', moment('11/23/2024 14:30', 'MM/DD/YYYY HH:mm').toDate())

  // Examples of what the shape of the data could look like in the backend
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

  // Convert an event to moment format
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
            id: event.id,
            start: moment(`${event.startDay} ${event.startTime}`, 'MM/DD/YYYY HH:mm').toDate(),
            end: moment(`${event.endDay} ${event.endTime}`, 'MM/DD/YYYY HH:mm').toDate(),
            title: `${event.title} ${event.startTime} - ${event.endTime}`
          }
        })

        //update state with the converted events
        setEvents(convertedEvents)
      // })
    
  }, [])
  
  
  const handleSelectEvent = (e) => {
    console.log('Event click:', e)
    setModalEventId(e.id)
    setIsOpen(true)
  }

  const stringDate = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') //Add padding at start
    const day = String(date.getDate()).padStart(2, '0') //Add padding at start

    return `${month}/${day}/${year}`
  }

  const stringTime = (date) => {
    const hour = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    return `${hour}:${minutes}`
  }

  const handleSelectSlot = (e) => {
    console.log('Slot click:', e)
    setModalEventId(0)
    setNewEvent({
      title: "New Event",
      startDay: stringDate(e.start),
      startTime: stringTime(e.start),
      endDay: stringDate(e.end),
      endTime: stringTime(e.end)
    })
    setIsOpen(true)
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "50vh", zIndex: 0}}
        selectable={true}
        longPressThreshold={20} 
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
      />
      <CalendarModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} modalEventId={modalEventId} newEvent={newEvent}/>
    </div>
  );
}

export default CalendarPage;
