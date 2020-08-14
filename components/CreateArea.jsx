import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function update(event) {
    const { name, value } = event.target;
    setNote((prevNotes) => {
      return { ...prevNotes, [name]: value };
    });
  }

  function submit(event) {
    props.onAdd(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={update}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={update}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit" onClick={submit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
