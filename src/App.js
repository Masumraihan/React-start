import logo from './logo.svg';
import './App.css';
const person ={
  name: "salman khan",
  style: "taklu"
}
const person2 = {
  name : "eve rahman",
  style: "nothing"
}
const style = {
  backgroundColor: 'pink',
  color:'black',
  padding:'10px'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1 style={style}>first person: {person.name + " " + person.style}</h1>
        <h2 style={{backgroundColor:'cyan',padding:'10px',color:'black'}}>second person: {person2.name + " " + person2.style}</h2>
        <Details></Details>
        <Details></Details>
        <Details></Details>
        <Details></Details>
        
      </header>
    </div>
  );
}
function Details(){
  const textStyle = {
    backgroundColor:'cyan',
    margin:'20px',
    padding:'10px 20px',
    borderRadius:'10px'
  }
  return (
    <div style={textStyle} >
      <h1 style={{color:'black'}}>Name: Masum Raihan</h1>
      <h3>job: Web developer</h3>
    </div>
  )
}


export default App;
