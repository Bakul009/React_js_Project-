import React from "react";


export default function Meaning(props) {
  return (
    <div className="container Meaning">
      <div className="row">
        <div className="col-2 part">
          <p>{props.meaning.partOfSpeech}</p>
        </div>
        
        <div className="col-8 definitions">
          {props.meaning.definitions.map(function (definition,index) {
            return (
              <div key={index}>
                <div className="definition">{definition.definition}</div>
                <div className="example">{definition.example}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
