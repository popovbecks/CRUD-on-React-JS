"use strict";
import React from "react";
import { Table_4 } from "./Table_4";
export class Department_4 extends React.Component {
    constructor () {
        super ();
        this.state = {

            view:false
        };
        this.viewDepart = this.viewDepart.bind(this)

    }
    viewDepart() {
        this.setState({view:this.state.view = !this.state.view});
        console.log(this.state.view)
    }
    // unViewDepart() {
    //     this.setState({view:this.state.view = false})
    // }
    render () {
        if(this.state.view) {
            return (
                <div>
                    <table className="table table-inverse">
                        <thead>
                        <tr className="bg-danger">
                            <th>{this.props.name}</th>
                            <th className="list">
                                <button onClick={this.viewDepart} type="button" className="btn btn-warning" >List Employees</button>
                            </th>
                        </tr>

                        </thead>
                    </table>

                    <Table_4 />
                </div>

            )
        } else {
            return (

                <table className="table table-inverse">
                    <thead>
                    <tr className="bg-danger">
                        <th>{this.props.name}</th>
                        <th className="list">
                            <button onClick={this.viewDepart} type="button" className="btn btn-warning" id="dev_dep_btn">List Employees</button>
                        </th>
                    </tr>

                    </thead>
                </table>



            );
        }

    }
}