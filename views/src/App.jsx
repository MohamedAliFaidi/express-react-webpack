
import './App.css'

function App() {


  const handleSubmit = async (event)=>{
    event.preventDefault()

    console.log(event.target.name.value,event.target.age.value)

    const data = await fetch("http://localhost:4444/api/person/create",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({name:event.target.name.value,age:event.target.age.value})
    })
     const jsonData = await data.json()     
     console.log(jsonData) 
  }


  return (
    <form onSubmit={handleSubmit} className="cent">
      <h1>Name</h1>
      <input type="text" name="name" placeholder="name" autoComplete="off" spellCheck="false" />
      <h1>age</h1>
      <input type="number" name="age" placeholder="age" />
      <input type="submit" name="submit" value="submit" />
    </form>
  );
}

export default App
