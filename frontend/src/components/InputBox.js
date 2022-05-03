import React from "react";

const InputBox = (props) => {
  const onChangeName = (event) => {
    props.setClient((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };

  const onChangeRepresentative = (event) => {
    props.setClient((prevState) => {
      return { ...prevState, representative: event.target.value };
    });
  };

  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>Create client:</label>
        <div>
          <input
            type="text"
            placeholder="client name"
            onChange={onChangeName}
            value={props.name}
          />
          <textarea
            rows="5"
            placeholder="client representative"
            onChange={onChangeRepresentative}
            value={props.representative}
          />
          <button type="submit">{props.text}</button>
        </div>
      </form>
    </div>
  );
};

export default InputBox;
