import "./Form.css";
import { useState } from "react";

import { postOffer } from "../../api/apiService";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [offer, setOffer] = useState("");
  const [type, setType] = useState("Teach");
  const [message, setMessage] = useState("");
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("John Doe");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!offer || !type || !message || !comment) {
      alert("Please enter details correctly");
      return;
    }
    postOffer({ offer, type, message, comment, author });
    setOffer("");
    setType("");
    setMessage("");
    setComment("");
    navigate("/app");
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
            value={offer}
            placeholder="Insert a title..."
            onChange={(e) => {
              setOffer(e.target.value);
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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
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
