"use strict";
import React from "react";
import $ from 'jquery'
export class Row extends React.Component{
    constructor () {
        super ();
        this.state = {
            edit:false
        };

    }
    getNewObj () {
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


    };
    editUser() {

        this.setState({edit:this.state.edit = true});
        console.log("true")

    };

    remove () {
        return (this.props.del(this.props.index))

    };
    updateUser () {
        this.props.updeiting(this.getNewObj(),this.props.index);
        this.setState({edit:this.state.edit = false});
    }
    save () {


    }


    render () {
        if(this.state.edit) {
            return (
                <tr >
                    <td><input defaultValue={this.props.data.name} ref="inp_1" type="text"/></td>
                    <td><input defaultValue={this.props.data.lastName} ref="inp_2" type="text"/></td>
                    <td><input defaultValue={this.props.data.position} ref="inp_3" type="text"/></td>
                    <td><input defaultValue={this.props.data.phone} ref="inp_4" type="text"/></td>
                    <td><button className = "btn btn-primary" onClick={this.updateUser.bind(this)} >Save</button></td>

                </tr>

            )
        }else {
            return (
                <tr >
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.lastName}</td>
                    <td>{this.props.data.position}</td>
                    <td>{this.props.data.phone}</td>
                    <td><button onClick={this.editUser.bind(this)} className = "btn btn-success" >Edit</button></td>
                    <td ><button onClick={this.remove.bind(this)} className = "btn btn-danger" >Delete</button></td>
                </tr>
            )
        }

    }
}
