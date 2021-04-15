import React, { useState, useEffect, Fragment } from 'react';
import './mySearchBar.css'

interface IMySearchBar{
    setSearch: (val: string) => void
}

export const MySearchBar: React.FC<IMySearchBar> = ({ setSearch }) => {
    const inputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const { target: { value } = {} } = e;
        setSearch(value as string);
    }

    return (
        <div className='search-bar'>
            <input onChange={inputChange} placeholder='Please type search keyword'/>
        </div>)
}
