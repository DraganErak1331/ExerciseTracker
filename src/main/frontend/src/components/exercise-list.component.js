import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ExerciseList() {
    const Exercise = props => (
        <tr>
            <td>{props.exercise.user}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0, 10)}</td>
            <td>
                <Link to={`/edit/${props.exercise.id}`}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise.id) }}>delete</a>
            </td>
        </tr>
    )

    const [exercisesList, setExercisesList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/exercise-tracker/exercise-log-list")
            .then(response => {
                setExercisesList(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function deleteExercise(id) {
        axios.delete("http://localhost:8080/exercise-tracker/" + id)
            .then(response => { console.log(response.data) });

        window.location = "/";
    }

    function exerciseList() {
        return exercisesList.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={deleteExercise} key={currentexercise._id} />;
        })
    }


    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>User</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exerciseList()}
                </tbody>
            </table>
        </div>
    )
}