import React from "react";

function Form4({ values, shouldDisplay }) {
  return (

    <div style={{ display: shouldDisplay ? "block" : "none" }}>


      <h3>Form Results:</h3>
      <div className="grid grid-cols-3">
      {Object.entries(values).map(([key, values]) => (
        <p key={key}>
          {key}: {values}
        </p>
 
      ))}
      </div> 
    </div>
  );
}

export default Form4;
