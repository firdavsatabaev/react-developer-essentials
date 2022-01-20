
import './App.css';



function Header (props) {
  console.log(props)
  return (
    
    <h1>{props.name} Book Club!</h1>
  )
}

function Main () {
  return (
    <h2>We Read The Best Books!</h2>
  )
}

function Footer() {
  return (
    <h3>Address and Copyright</h3>
  )
}

function App() {
  return (
    <div className = "App">
     <Header name = "Jasmine's"/>
     <Main />
     <Footer />

    </div>
  )
  
  
}

export default App;
