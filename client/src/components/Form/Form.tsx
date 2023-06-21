import "./Form.css";
import { useState } from "react";
import { Offer } from "../../dataTypes";
import { postOffer } from "../../api/apiService";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import * as DOMPurify from "dompurify";

export default function Form() {
  const [comment, setComment] = useState("");
  const { register, handleSubmit, reset } = useForm<FieldValues>();

  const navigate = useNavigate();

  let clean = DOMPurify.sanitize;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    let newOffer: Offer = {
      title: clean(data.title),
      type: clean(data.type),
      message: clean(data.message),
      comment: clean(data.comment),
      author: clean(data.author),
      image: clean(data.image),
    };
    reset();
    postOffer(newOffer);
    navigate("/app");
  }

  return (
    <div className="form-container">

      <script type="text/javascript" src="dist/purify.min.js"></script>

      <form className="form-itself" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-title"> Create your offer </div>
        <div className="input-group">
          <label className="input-label" htmlFor="title">
            title
          </label>
          <input
            className="input-box"
            type="text"
            autoFocus={true}
            {...register("title", { required: true })}
            placeholder="Enter title"
          />
        </div>

        <div className="input-group">

          <label className="input-label" htmlFor="offer-type">
            Type
          </label>

          <select {...register("offer-type", { required: true })}>
            <option value="Teach">Teach</option>
            <option value="Learn">Learn</option>
          </select>

        </div>

        <div className="input-group">

          <label className="input-label" htmlFor="message">
            Message
          </label>

          <textarea {...register("message", {required: true, maxLength: 2000})}
            className="input-box"
            cols={40}
            rows={5}
          />

        </div>

        <div className="input-group">
    //TODO
          <label className="input-label" htmlFor="substitute">
            Open to learn something different?
          </label>
          <textarea
            id="substitute"
            className="input-box"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            cols={50}
            rows={2}
          ></textarea>

        </div>

        <button className="create-btn" type="submit">
          Create
        </button>

      </form>
    </div>
  );
}
