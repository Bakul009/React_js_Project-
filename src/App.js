
import './App.css';
import About from './components/About';
//import Dicbutton from './components/Dicbutton';
import Dictionary from './components/Dictionary';
//import Dictionary from './components/Dictionary';
import Navbars from './components/Navbars';
import TextBox from './components/TextBox';



function App() {
  
  
  let myStyle={
    color : 'yellow',
    backgroundColor: '#6a1b9a'}
    let myStyle2={
      color : 'orange',
      backgroundColor: '#FCFF0D'}
      let barStyle={
        color:"#0D53FF"
      }

   
  return (
    <div style={myStyle}>
  <Navbars title=<b>WriteHelp</b>/>
  
  <div className ="container my-3" style={myStyle}>
    <div className="accordion" id="accordionExample">
 <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle2} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <b style={barStyle} >Open Dictionary</b>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <Dictionary defaultKeyword="Start Learing"/>
      </div>
    </div>
  </div>
  </div>
  <TextBox heading ="Enter your text :"/>
  <About/>
  </div>
  </div>
  );
}

export default App;

