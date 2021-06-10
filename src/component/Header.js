import React from 'react'

const Header = ({handleShow, show}) => {
    return (
        <header style = {{display:"flex", justifyContent: 'center' }}>
            <div style= {{display: 'flex', justifyContent: "space-between", width: "30%", alignItems:"center"}}>
                <h1>Book list</h1>
                <button onClick= {handleShow}>{show ? "CLOSE":"ADD"}</button>
            </div>
        </header>
    )
}

export default Header
