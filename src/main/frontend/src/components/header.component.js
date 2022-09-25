import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./component.css";

export default function Header() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg header-customization">
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-brand">Excerise Tracker</li>
                    <li className="navbar-item">
                        <Link to={"/"} className="nav-link">Exercises</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={"/create-exercise-log"} className="nav-link">Create Exercise Log</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={"/create-user"} className="nav-link">Create User</Link>
                    </li>
                </ul>
            </div>
        </nav >
    );
}