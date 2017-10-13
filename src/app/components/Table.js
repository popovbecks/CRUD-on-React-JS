"use strict";
import React from "react";
import $ from 'jquery';
import { Row } from "./Row";
export class Table extends React.Component {
    constructor () {
        super ();
        this.state = {
            data:[],
            edit:false
        };
        this.deleteBlock = this.deleteBlock.bind(this);
        this.updateForm = this.updateForm.bind(this);


    }
    componentDidMount () {
        $.ajax({
            url: "data/developmentDepart.json",
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (jqXHR) {
                console.log("ohoho");
            }.bind(this)


        })
    };

    rendNorm () {
        return (
            <table className="table table-sm" id="dev_table">
                <thead>
                <tr>
                    <th>First name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                <tr >
                    <td><input placeholder={'Enter first name'}  ref="inp_1" type="text"/></td>
                    <td><input placeholder={'Enter last name'} ref="inp_2" type="text"/></td>
                    <td><input placeholder={'Enter position'} ref="inp_3" type="text"/></td>
                    <td><input placeholder={'Enter phone'} ref="inp_4" type="text"/></td>
                    <td><button className = "btn btn-primary" onClick={this.addPerson.bind(this)} >Add new person</button></td>

                </tr>
                {this.state.data.map( (item, key) => {
                    return (
                        <Row  data = {item} key = {key} index ={key} del = {this.deleteBlock} updeiting ={this.updateForm} editing={this.editUser}/>
                    )

                })}
                </tbody>

            </table>
        );
    };

    deleteBlock(index) {
        let arr = this.state.data;
        arr.splice(index, 1);
        console.log(index);
        this.setState({data:this.state.data = arr});
    }

    updateForm (obj,i) {
        let arr = this.state.data;
        arr[i] = obj;
        this.setState({data:this.state.data = arr})
    }
    addPerson () {
        if(!this.refs.inp_1.value||!this.refs.inp_2.value||!this.refs.inp_3.value||!this.refs.inp_4.value){
            alert("Please, fill all fields!");

        } else {
            let arr = this.state.data;
            arr.push(this.getNewUser());
            this.setState({data:this.state.data = arr});
            this.refs.inp_1.value="";
            this.refs.inp_2.value="";
            this.refs.inp_3.value="";
            this.refs.inp_4.value="";
        }

    }
    getNewUser () {
        let input_1 = this.refs.inp_1.value;
        let input_2 = this.refs.inp_2.value;
        let input_3 = this.refs.inp_3.value;
        let input_4 = this.refs.inp_4.value;
        return (

            {
                "name": input_1,
                "lastName": input_2,
                "position": input_3,
                "phone": input_4
            }
        )


    }

    render () {
        if(!this.state.edit) {
            return this.rendNorm();
        }
    }
}