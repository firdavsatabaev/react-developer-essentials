
import './App.css';



function Header (props) {
  console.log(props)
  return (
    <header>
      <h1>{props.name} Kitchen</h1>
    </header>
  )
}

function Main (props) {
  return (
    <section>
       <h2>We serve {props.adjective} food around. 
        <ul style = {{textAlign: "left"}}>
          {props.dishOjects.map((dishObjects, i) => 
          (<li key = {i}>dishes</li>))}
        </ul>
    
       </h2>
    </section>
   
  )
}
const dishObjects = dishes.map((dishes, i) => ({id: i , title: dishes}));
console.log(dishObjects)

function Footer(props) {
  return (
    <h3>Copyright {props.year}</h3>
  )
}
const dishes = [
  "Macaroni and Cheese",
  "Tofu",
  "Salmon"
]



function App() {
  return (
    <div className = "App">
     <Header name = "Harico's"/>
     <Main adjective = "best" dishes={dishes}/>
     <Footer year = {new Date().getFullYear()}/>

    </div>
  )
  
  
}

export default App;
