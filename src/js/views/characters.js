import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Characters = () => {
    useEffect(() => {
        actions.loadCharacters()
    }, [])
    const { store, actions } = useContext(Context);
    console.log(store)
    return (
        <div>
            <h1>Character</h1>
            {!store.characters ? <h1>loading </h1> : store.characters.map((character, i) => {
                console.log(store)
                return (
                    <div key={character.uid} style={{width: 250}}>
                        <img style={{height: 150, width: 150}} src="https://cdn.vox-cdn.com/thumbor/632XKu70aaOQyRle6NDbklUR9b8=/85x0:1014x619/920x613/filters:focal(85x0:1014x619):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/12771259/ea_star_wars_darth_vader.0.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{character.name}</h5>
                                <p class="card-text">{character.description}</p>
                                <button class="btn btn-primary"><Link style={{color: 'white'}} to={`character/${character.uid}`}><p>Learn More</p></Link></button>
                            </div>
                            
                    </div>
                );
            })}
        </div>)
};