import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
    useEffect(() => {
        actions.loadPlanets()
    }, [])
    const { store, actions } = useContext(Context);
    console.log(store)
    return (
        <div key={Planets.uid} style={{ width: 250 }}>
            <img style={{ height: 150, width: 150 }} src="https://cdn.vox-cdn.com/thumbor/632XKu70aaOQyRle6NDbklUR9b8=/85x0:1014x619/920x613/filters:focal(85x0:1014x619):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/12771259/ea_star_wars_darth_vader.0.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{planet.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button class="btn btn-primary"><Link style={{ color: 'white' }} to={`planet/${Planets.uid}`}><p>Learn More</p></Link></button>
            </div>

        </div>)
}