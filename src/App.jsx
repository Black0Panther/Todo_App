import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppName from './Components/AppName'
import Add from './Components/Add'
import "./App.css";
// import Todoitem from './Components/Todoitem'
import Todoitems from './Components/todoitems'
import WelcomeMessage from './Components/WelcomeMessage'

function App() {
  const [count, setCount] = useState(0)
  const initialTodo=[
  // {  
  //   Name: "Buy",
  //   dueDate: "14/10/23",
  // },
  // {
  //   Name: "Subscribe",
  //   dueDate: "right Now",
  // },
];
 
 const [todoitems,settodoitems]=useState([])

  const onHandle=(itemName,itemDueDate)=>{
     console.log(`Name:${itemName} Date : ${itemDueDate}`)
     const newItems = [...todoitems,{ Name: itemName,
      dueDate: itemDueDate}]
      settodoitems(newItems)
  }
//delete item 
  const handleDeleteButton=(todoItemName)=>{
    // console.log(`The Deleted item is ${todoItemName}`)
    const newAfterDelete=todoitems.filter(item=>item.Name !== todoItemName)
    settodoitems(newAfterDelete)
  }
  return (
    <center class="todo-container">

      <AppName></AppName>
      <Add onNewItem={onHandle}></Add>
     <Todoitems todoitems={todoitems} onDeleteClick={handleDeleteButton}></Todoitems>
     {todoitems.length===0 && <WelcomeMessage></WelcomeMessage>}
    </center>

  )
}

export default App 
