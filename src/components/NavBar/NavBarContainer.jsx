import React, { useState, useEffect } from 'react'
import { getData } from '../../data/getData';
import NavBar from './NavBar';
import './NavBar.css'

function NavBarContainer() {
    const [cats, setCats] = useState([])

    useEffect(() => {
        setTimeout(()=>{
            getData()
                .then(res => ( res = res.map(it => it.type) ))
                .then(res => setCats( res.filter((it, i) => res.indexOf(it) === i) )) 
        }, 1000);
    }, [])
    
    return (
        <NavBar cats={cats} className="navbar" />
    )
}

export default NavBarContainer