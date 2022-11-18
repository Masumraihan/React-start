import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
//const person ={
//  name: "salman khan",
//  style: "taklu"
//}
//const person2 = {
//  name : "eve rahman",
//  style: "nothing"
//}
//const style = {
//  backgroundColor: 'pink',
//  color:'black',
//  padding:'10px'
//}
const jobStyle = {
  color:'gray',
  lineHeight:'1em'
}
const btnStyle ={
  backgroundColor:'gray',
  border:'none',
  padding:'10px 20px',
  borderRadius:'5px',
  cursor:'pointer'
}
//const products =[{name:'photoshop', price:'$99.99'},
//                {name:'illestator', price:'$60.99'},
//                {name:'premium Pro', price:'$77.99'},
//                {name: 'express', price:'$60.44'}
//];

const products =[{name:'photoshop', price:'$99.99'},
                {name:'illestator', price:'$60.99'},
                {name:'premium Pro', price:'$77.99'},
                {name: 'express', price:'$60.44'}
];

const names = ['Tamim','Sakib','Rahim','Liton','Afif'];
//const name = names.map(nam => nam);
//console.log(name);

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div>
        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
        </ul>
        <ul>
          {
          products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Details product={pd}></Details>)
        }
        </div>

        <Counter></Counter>
        <Users></Users>
        {/*<Todos></Todos>*/}
        

        {/*<h1 style={style}>first person: {person.name + " " + person.style}</h1>
        <h2 style={{backgroundColor:'cyan',padding:'10px',color:'black'}}>second person: {person2.name + " " + person2.style}</h2>
        <Details></Details>
        <Details></Details>
        <Details></Details>
        <Details></Details>*/}

        {/*<h1 style={style}>first person: {person.name + " " + person.style}</h1>
        <h2 style={{backgroundColor:'cyan',padding:'10px',color:'black'}}>second person: {person2.name + " " + person2.style}</h2>
        <Details name="Masum" job="web programmer"></Details>
        <Details name="palash" job="presentation creator"></Details>
        <Details name="robiul" job="mechanic of wood"></Details>
        <Details name="hasib" job="study"></Details>*/}

                          {/*ADOBE.COM COMPONENTS PRACTICE*/}
        {/*<Details name={products[0].name} price={products[0].price}></Details>
        <Details name={products[1].name} price={products[1].price}></Details>
        <Details name={products[2].name} price={products[2].price}></Details>
        <Details name={products[3].name} price={products[3].price}></Details>*/}

         {/*<Details product={products[0]} price={products[0]}></Details>
        <Details product={products[0]} price={products[0]}></Details>
        <Details product={products[0]} price={products[0]}></Details>
        <Details product={products[0]} price={products[0]}></Details>*/}

                            {/*ADOBE.COM COMPONENTS PRACTICE END*/}

        
        
      </header>
    </div>
  );
}
                          // useState start
                        
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => (setCount(count + 1));
  const handleDecrease = () => (setCount(count - 1));
  return (
    <div>
      <h1> Count: {count}</h1>
      <button style={btnStyle} onClick={handleIncrease}>Increase</button>
      <button style={btnStyle} onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
                      // DATA CALLING BY useEffect
function Users(){
  const [users , setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h1>Dynamic users :{users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

//function Todos(){
//  const [users, setUsers] = useState([]);
//  useEffect(() => {
//    fetch('https://jsonplaceholder.typicode.com/todos')
//    .then(res => res.json())
//    .then(data => setUsers(data))
//  },[])
//  return( 
//  <div>
//    <h1>Dynamic Todos : {users.length}</h1>
//    <ul>
//      {
//        users.map(user => <li>{user.title}</li>)
//      }
//    </ul>
//    {
//      console.log(users)
//    }
//  </div>
//  )
//}

                          {/*ADOBE.COM COMPONENTS PRACTICE START*/}

function Details(props){
  const boxStyle = {
    height:'300px',
    backgroundColor:'pink',
    margin:'20px',
    padding:'10px 20px',
    borderRadius:'10px'
  }

  return (
    <div style={boxStyle} >
      <h2 style={jobStyle}>Name: {props.product.name}</h2>
      <h3 style={jobStyle}>price: {props.product.price}</h3>
      <button style={btnStyle}>Buy Now</button>
    </div>
  )
}

//function Details(props){
//  const boxStyle = {
//    width:'400px',
//    backgroundColor:'pink',
//    margin:'20px',
//    padding:'10px 20px',
//    borderRadius:'10px'
//  }
//  return (
//    <div style={boxStyle} >
//      <h2 style={jobStyle}>Name: {props.name}</h2>
//      <h3 style={jobStyle}>price: {props.price}</h3>
//    </div>
//  )
//}

                       {/*ADOBE.COM COMPONENTS PRACTICE END*/}


//function Details(){
//  const textStyle = {
//    backgroundColor:'cyan',
//    margin:'20px',
//    padding:'10px 20px',
//    borderRadius:'10px'
//  }
//  return (
//    <div style={textStyle} >
//      <h2 style={{color:'black'}}>Name: Masum Raihan</h2>
//      <h3 style={jobStyle}>job: Web developer</h3>
//    </div>
//  )
//}
//function Details(props){
//  const textStyle = {
//    width:'400px',
//    backgroundColor:'cyan',
//    margin:'20px',
//    padding:'10px 20px',
//    borderRadius:'10px'
//  }
//  return (
//    <div style={textStyle} >
//      <h2 style={{color:'black',lineHeight:'5px'}}>Name: {props.name}</h2>
//      <h3 style={jobStyle}>job: {props.job}</h3>
//    </div>
//  )
//}




export default App;
