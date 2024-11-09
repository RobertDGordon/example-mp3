import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { eventsData } from "./eventsData";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "400px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "silver",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function CalendarModal(props) {
  const [modalEvent, setModalEvent] = useState({
    title: "",
    startDay: "",
    startTime: "",
    endDay: "",
    endTime: "",
  });

  const { modalIsOpen, setIsOpen, modalEventId } = props;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalEvent({
      ...modalEvent,
      [name]: value,
    });
  };

  useEffect(() => {
    // on modal load, use the modal id to fetch
    // check if there is an id
    if (modalEventId) {
      // fetch localhost:8000/api/events/${modalEventId}
      // .then((response) => response.json())
      // .then((data) => {
        // update state with the event data
        const example = eventsData.filter((event) => event.id === modalEventId);
        console.log("Example data:", example, "from:", modalEventId);
        setModalEvent(example[0]);
      // })
    }
  }, [modalEventId]); //use the dep array to re-run this effect to get the correct data

  return (
    <>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Event Modal"
      >
        <h2>{modalEvent.title}</h2>
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={modalEvent.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Start Day:
          <input
            type="text"
            name="startDay"
            placeholder="Start Day"
            value={modalEvent.startDay}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Start Time:
          <input
            type="text"
            name="startTime"
            placeholder="Start Time"
            value={modalEvent.startTime}
            onChange={handleInputChange}
          />
        </label>
        <label>
          End Day:
          <input
            type="text"
            name="endDay"
            placeholder="End Day"
            value={modalEvent.endDay}
            onChange={handleInputChange}
          />
        </label>
        <label>
          End Time:
          <input
            type="text"
            name="endTime"
            placeholder="End Time"
            value={modalEvent.endTime}
            onChange={handleInputChange}
          />
        </label>
        <button>Save</button>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default CalendarModal;
