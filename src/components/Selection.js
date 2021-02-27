import React, { useState } from 'react'


const Selection=(props)=>{
    const {applyColor}=props;
    const [{background},updateSelectionStyle]=useState({ background: "" })

    <div className="fix-box" style={background:background}>
    <h2 className="subheading">Selection
    <button onClick={()=>applyColor(updateSelectionStyle)}>apply</button>
     </h2>
    </div>


}

export default Selection
