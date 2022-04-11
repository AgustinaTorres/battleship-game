import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <div class="form d-flex justify-content-center py-5 my-4">
      <input
        class="input text mx-5 "
        placeholder="What's your Name?..."
        value={props.userName}
        onChange={props.handleChange}
      ></input>
      <button
        type="button"
        class="btn start btn-success btn-sm "
        onClick={props.startPlaying}
      >
        START PLAYING
      </button>
    </div>
  );
}

export default Form;
