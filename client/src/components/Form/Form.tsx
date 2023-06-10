import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Teach");
  const [message, setMessage] = useState("");
  const [substitute, setSubstitute] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!title || !type || !message || !substitute) {
      alert("Please enter details correctly");
      return;
    }
    console.log({ title, type, message, substitute });
  }
  return (
    <div className="form-container">
      <form className="form-itself" onSubmit={handleSubmit}>
        <div className="form--title"> Create your offer </div>
        <div className="input-group">
          <label className="input-label" htmlFor="title">
            title
          </label>
          <input
            className="input-box"
            type="text"
            name="title"
            value={title}
            placeholder="Insert a title..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="offer-type">
            type
          </label>
          <select
            id="type"
            value={type}
            className="input-box"
            name="offer-type"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Teach">Teach</option>
            <option value="Learn">Learn</option>
          </select>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="input-box"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols="40"
            rows="5"
          ></textarea>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="substitute">
            Open to different learning offer ?
          </label>
          <textarea
            id="substitute"
            className="input-box"
            value={substitute}
            onChange={(e) => setSubstitute(e.target.value)}
            cols="50"
            rows="2"
          ></textarea>
        </div>
        <button className="create-btn" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
