import { useState } from "react";
import { GrAddCircle } from "react-icons/gr";


function Add({onNewItem}) {

  const [Name,setName]=useState();
  const [Date,setDate]=useState();
  
  const handleName=(event)=>{
      // console.log(event.target.value)
      setName(event.target.value)
  }
  const handleDate=(event)=>{
    // console.log(event.target.value)
    setDate(event.target.value)
  }

  const handleAddButtonClicked=()=>{
    onNewItem(Name,Date)
    setName("");
    setDate("");
  }
  return <div class="container text-center">

    <div class="row kg-row">
      <div class="col-6"><input type="text" value={Name} placeholder='Enter Todo Here' onChange={handleName} /></div>
      <div class="col-4"><input type="date" name="" value={Date} id="" onChange={handleDate} /></div>
      {/* <div class="col-2"><button type="button" onClick={handleAddButtonClicked} class="btn btn-success Kg-add">Add</button> */}
      <div class="col-2"><button type="button" onClick={handleAddButtonClicked} class="btn btn-success Kg-add"><GrAddCircle /></button>

      </div>
    </div>
  </div>

}
export default Add;