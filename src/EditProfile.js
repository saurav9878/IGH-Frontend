import React from "react"

function  EditProfile(props)
{
    // console.log(props.user_data)
    return (
        <div className="Credentials">
        <form>
            <label>
                Name:
                <input 
                type="text"
                placeholder={props.user_data.name}
                ></input>
            </label>
            <label>
                Email:
                <input
                type="text"
                placeholder={props.user_data.email}
                >
                </input>
            </label>
            <label>
                Password:
                <input type="text"></input>
            </label>
            <button type="button">Update</button>
        </form>
        </div>
    )
}

export default EditProfile;