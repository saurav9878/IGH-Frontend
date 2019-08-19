import React from "react";
// import Edit_Insta_Profile from "./EditInstaProfile"
function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Insta ID</th>
        <th>Max Posts</th>
        <th>Hash Tags</th>
        <th>Post Type</th>
        <th>Sources</th>
      </tr>
    </thead>
  );
}
function ManageInsta(props) {
  var tableData = props.insta_data.map(function(obj, i) {
    return (
      <tr key={obj.insta_id}>
        <td>{obj.insta_id}</td>
        <td>{obj.max_posts}</td>
        <td>{obj.hash_tags.toString()}</td>
        <td>{obj.post_type}</td>
        <td>{obj.sources.toString()}</td>
        <td>
        <button type="button" onClick={()=> props.dash_this.setState(
          {
            ClickedOption:3,
            InstaEdit: obj
          })}>Edit</button>
      </td>
        <td>
        <button type="button">Delete</button>
      </td>
      </tr>
    );
  });
  // console.log(props.insta_data);
  return (
    <div className="Insta Details">
      <form>
        <table>
          <TableHeader />
          <tbody>{tableData}</tbody>
        </table>

        <button type="button" onClick={()=> props.dash_this.setState(
          {
            ClickedOption:4
          })}>
          Add Insta Accounts</button>
      </form>
    </div>
  );
}

export default ManageInsta;
