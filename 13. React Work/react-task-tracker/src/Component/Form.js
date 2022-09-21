import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = () => {};

  return (
    <div>
      <h1>Form Component</h1>
      <form>
        <label>
          Enter your name:
          <input type="text" />
        </label>
        <br />
        <br />
        <br />
        <label>
          Enter your monile no:
          <input type="number" />
        </label>
        <br />
        <br />
        <br />
        <label>
          Enter your Article:
          <textarea>Content of the text area goes here</textarea>
        </label>{" "}
        <br /> <br />
        <br />
        <label>
          Select the appropirate one
          <select>
            <option value="abc">abc</option>
            <option value="def" selected>
              def
            </option>
            <option value="ghi">ghi</option>
          </select>
        </label>
        <br />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
