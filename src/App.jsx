import './App.css'
import Button from './components/Button/Button'

function App(){
  return (
    <div> 
      <Button text = "click me 1" onClickHandler={() => console.log("click me 1")}/>
      <Button text = "click me 2" onClickHandler={() => console.log("click me 2")}/>
      <Button text = "click me 3" onClickHandler={() => console.log("click me 3")}/>
    </div>
  )
}

export default App