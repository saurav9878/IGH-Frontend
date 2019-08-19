import React from "react";

function EditInstaProfile(props) {
  return (
    <div className="Insta Credentials">
      <form>
        <label>
          Insta ID:
          <input
            type="text"
            placeholder={props.dash_this.state.InstaEdit.insta_id}
          />
        </label>
        <br></br>
        <label>Max Posts:
            <input
            type="number"
            placeholder={props.dash_this.state.InstaEdit.max_posts}
            ></input>
        </label>
        <br></br>
        <label>Hash Tags:
            <input
            type="text"
            placeholder={props.dash_this.state.InstaEdit.hash_tags.toString()}></input>
        </label>
        <br></br>
        <label>Sources:
            <input
            type="text"
            placeholder={props.dash_this.state.InstaEdit.sources.toString()}></input>
        </label>
        <br></br>
        <label>Post Type:
            <input
            type="number"
            placeholder={props.dash_this.state.InstaEdit.post_type.toString()}></input>
        </label>
        <br></br>
        <button type="button">Update</button>
      </form>
    </div>
  );
}

export default EditInstaProfile;
