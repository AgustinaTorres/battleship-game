import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <div class="row-md col-sm mt-4 d-flex justify-content-center ">
      <input
        class="row-md"
        placeholder="What's your Name?..."
        value={props.userName}
        onChange={props.handleChange}
      ></input>

      <button
        disabled={props.disableStartButton}
        type="button"
        class="btn btn-success mx-2 row-md"
        onClick={props.startPlaying}
      >
        START PLAYING
      </button>
    </div>
  );
}

export default Form;
