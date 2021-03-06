import React, {useState, useEffect, useContext}from 'react';
import { Context } from "../store/appContext";
import Link from "react-router-dom";

export const Character = (props) => {
    console.log(props)
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.loadCharacter(id)
    }, [])
    console.log(store)
    let id = props.match.params.id
    return (
        <div>
           {!store.character ? <h1>loading</h1> : <p>{store.character.description}</p>}
        </div>)
};