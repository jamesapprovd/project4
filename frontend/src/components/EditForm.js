import React from "react";

// const buttonStyle = "";

const EditForm = (props) => {
  const handleNameChange = (event) => props.setName(event.target.value);
  const handleRepresentativeChange = (event) =>
    props.setContent(event.target.value);

  return (
    <>
      <form onSubmit={props.onSubmit}>
        <label className="text-grey">Edit:</label>
        <div>
          <input
            type="text"
            placeholder="name"
            defaultValue={props.name}
            onChange={handleNameChange}
          />
          <textarea
            rows="5"
            placeholder="representative"
            defaultValue={props.representative}
            onChange={handleRepresentativeChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default EditForm;
