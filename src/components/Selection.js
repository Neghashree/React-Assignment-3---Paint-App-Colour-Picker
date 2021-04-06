import React,{useState} from "react";


const Selection = (props) => {

  const [selectedColour,updateSelectionStyle]=useState({background:""})
  const { applyColor} = props; //method
  //object

  return (
    <div className="fix-box"  style={selectedColour}>
       <h2 className="subhheading">Selection</h2>
      <button onClick={()=>applyColor(updateSelectionStyle)}>Apply
    
    </button>
    </div>
  );
};

export default Selection;
