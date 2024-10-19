import { MdOutlineDelete } from "react-icons/md";

function Todoitem({todoName,todoDate , onDeleteClick}) {
// let todoName="BUY";
// let todoDate="4/10/24";

  return <div class="container">
    <div class="row kg-row">
      
      <div class="col-6">{todoName}</div>
      <div class="col-4">{todoDate}</div>
      <div class="col-2"><button type="button" class="btn btn-danger Kg-add" onClick={()=>onDeleteClick(todoName)}><MdOutlineDelete /></button>

      </div>
    </div>
  </div>

}

export default Todoitem;
