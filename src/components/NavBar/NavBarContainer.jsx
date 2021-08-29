import React, { useState, useEffect } from 'react'
import { getFirestore } from '../../data/firebaseService'
import NavBar from './NavBar';
import './NavBar.css'

function NavBarContainer() {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const db = getFirestore()
        db.collection('items').get()
            .then(res => ( res = res.docs.map( item => item.data().type )))
            .then(res => setCats( res.filter((it, i) => res.indexOf(it) === i) ))
    }, [])
    
    return (
        <NavBar cats={cats} id="navBar" />
    )
}

export default NavBarContainer