import Meaning from "./Meaning";



export default function Result(props) {
  if (props.results) {
    return (
      <div className="Results">
       <h3> <b className="word">{props.results.word}</b> </h3>
        <br></br>
        <div className="horizontal"></div>

        {props.results.meanings.map(function (meaning,index) {
          return (
            <div key={index}>
            <Meaning meaning={meaning}/>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
