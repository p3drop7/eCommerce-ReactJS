import React from 'react'
import "./ItemDetail.css"
import "../ItemDetail/ItemCounter/ItemCounter.css"

function Detail({item={}}) {
    return (
        <>
            <div style={{backgroundImage: `url(${item.pictureSRC})`}} className="itemPicture" />
            <div className="itemDescription" >
                <p className="detailTitle" >{item.name}</p>
                <p className="detailPrice" >${item.price}</p>
            </div>
        </>
    )
}

export default Detail
