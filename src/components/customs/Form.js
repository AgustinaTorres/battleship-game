import React from "react";

function Form(props) {
  return (
    <div class="form d-flex justify-content-center my-5">
      <input
        class="text mx-5"
        placeholder="Name"
        value={props.userName}
        onChange={props.handleChange}
      ></input>
      <button
        type="button"
        class="btn btn-success btn-sm "
        onClick={props.startPlaying}
      >
        START PLAYING
      </button>
    </div>
  );
}

export default Form;
