import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./component.css";

export default function EditExercise() {
    const [user, setUser] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [userList, setUserList] = useState([]);
    const { id } = useParams();
    const exercise = {
        id,
        user,
        description,
        duration,
        date
    }

    useEffect(() => {

        axios.get("http://localhost:8080/exercise-tracker/exercises/" + id)
            .then(response => {
                setUser(response.data.user);
                setDescription(response.data.description);
                setDuration(response.data.duration);
                setDate(new Date(response.data.date));
            })

        axios.get("http://localhost:8080/exercise-tracker/user-list")
            .then(response => {
                if (response.data.length > 0) {
                    setUserList(
                        response.data.map(user => user.user),
                    )
                }
            })
    }, [])

    function onChangeUser(e) {
        setUser(
            e.target.value
        );
    }

    function onChangeDescription(e) {
        setDescription(
            e.target.value
        );
    }

    function onChangeDuration(e) {
        setDuration(
            e.target.value
        );
    }

    function onChangeDate(selectedDate) {
        setDate(
            selectedDate
        );
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(exercise);

        axios.post("http://localhost:8080/exercise-tracker/edit-exercise/" + id, exercise)
            .then(res => console.log(res.data));

        window.location = "/";
    }

    return (
        <div>
            <h3>Edit Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>User: </label>
                    <select
                        required
                        className="selectBox form-control"
                        value={user}
                        onChange={onChangeUser}>
                        {
                            userList.map(function (user) {
                                return <option
                                    key={user}
                                    value={user}>{user}
                                </option>;
                            })
                        }
                    </select>
                </div>
                <div id="selectBox" className="form-group">
                    <label>Description: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={description}
                        onChange={onChangeDescription}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input
                        type="text"
                        className="form-control"
                        value={duration}
                        onChange={onChangeDuration}
                    />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={date}
                            onChange={onChangeDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}