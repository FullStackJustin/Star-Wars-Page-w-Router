import React, {useState, useEffect, useContext}from 'react';
import { Context } from "../store/appContext";
import {Link} from "react-router-dom";

export const Characters = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.loadCharacters()
    }, [])
    console.log(store)
    return (
        <div>
            <h1>Character</h1>
            {!store.characters ? <h1>loading </h1> : store.characters.map((character, i) => {
                return (
                    <div key={character.uid}>
                        <Link to={`/character/${character.uid}`}> <p>{character.name}</p></Link>
                    </div>
                );
            })}
        </div>)
};