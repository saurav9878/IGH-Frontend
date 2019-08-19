import React from "react";

function AddInstaProfile() {
  return (
    <div className="Insta Credentials">
      <form>
        <label>
          Insta ID:
          <input type="text" />
        </label>
        <br />
        <label>
          Max Posts:
          <input
            type="number"
          />
        </label>
        <br />
        <label>
          Hash Tags:
          <input
            type="text"
          />
        </label>
        <br />
        <label>
          Sources:
          <input
            type="text"
          />
        </label>
        <br />
        <label>
          Post Type:
          <input
            type="number"
          />
        </label>
        <br />
        <button type="button">Update</button>
      </form>
    </div>
  );
}

export default AddInstaProfile;
