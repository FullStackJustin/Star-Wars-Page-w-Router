import React, {useState, useEffect, useContext}from 'react';
import { Context } from "../store/appContext";
import Link from "react-router-dom";

export const Character = (props) => {
    console.log(props)
    const { store, actions } = useContext(Context);
    const fetchCharacter = "https://www.swapi.tech/api/"
    useEffect(() => {
        actions.loadCharacters()
    }, [])
    console.log(store)
    return (
        <div>
           <p>hi</p>
        </div>)
};