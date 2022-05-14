import React from "react";
import "../../styles/home.css";
import {Character} from "./character.js";
//import {Character} from "./character.js"
import {Characters} from "./characters.js"
import { Planets } from "./planets.js";

export const Home = () => {
	return (
	<div id="background" className="text-center mt-5">
		<h1 style={{color: 'white'}}>Characters</h1>
		<Characters />
		<h1 style={{color: 'white'}}>Planets</h1>
		< Planets />
	</div> )
};
