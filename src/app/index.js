"use strict";
import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Department_1 } from "./components/Department_1";
import { Department_2 } from "./components/Department_2";
import { Department_3 } from "./components/Department_3";
import { Department_4 } from "./components/Department_4";
class App extends React.Component {
    constructor () {
        super ();
        this.state = {
             view:false
        };

    }
    render () {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Department_1 name={"Development department"}/>
                    <Department_2 name={"Human resourse department"}/>
                    <Department_3 name={"Marketing department"}/>
                    <Department_4 name={"Project department"}/>

                </div>

            </div>
        );
    }
}
render(<App/>, window.document.getElementById("app"));