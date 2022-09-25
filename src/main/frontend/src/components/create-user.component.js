import React, { useState } from "react";
import axios from "axios";

export default function CreateUser() {
    const [user, setUser] = useState("");
    const userInput = { user };

    function onChangeUser(e) {
        setUser(
            e.target.value
        );
    }

    function onSubmit(e) {
        e.preventDefault();

        axios.post("http://localhost:8080/exercise-tracker/create-user", userInput)
            .then(res => console.log(res.data));

        window.location = "/";
    }

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>User: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={user}
                        onChange={(onChangeUser)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}