
import Counter from"./Counter";
import Hillo from "./Hillo";
function App() {
  const allNames = ["Jikabs", "Glustavs", "Klucis"]
const hilloJSX = allNames.map((name, index) =>{
return <Hillo key = {index} name= {name}/>;
})

  return(
    <>
    <Counter/>
    <Counter/>
    <Counter/>
    {hilloJSX}
    </>
  )
}

export default App;
