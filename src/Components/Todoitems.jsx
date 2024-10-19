import Todoitem from "./Todoitem"
const Todoitems=({todoitems , onDeleteClick})=>{
    return  <div class="item-container">
     {todoitems.map(item=>  <Todoitem todoName={item.Name} todoDate={item.dueDate} onDeleteClick={onDeleteClick} ></Todoitem> )}
  </div>

}

export default Todoitems