"use strict";
import React from "react";
export class Header extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h1>CRUD Form</h1>
                        <h2 className="head">Departments and employees</h2>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}