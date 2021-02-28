import React, { useState } from 'react'


const Selection=(props)=>{
    const {applyColor}=props;
    const {background}=props;
    

    return (
        <div className="fix-box" style={background}>
        <h2 className="subhheading">Selection</h2>
        <button onClick={applyColor}>Apply</button>

        </div>
    )


}

export default Selection
