// Importing code
import React, { useState } from 'react';
import "./App.css"
function TodoApp() {
  //Here We are declaring the 3 use State
  //1. todos - normal
  //2. NewTodo - which going to create\
  //3. Filter - to filter the completed and Not completed
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ name: '', description: '', status: 'not completed' });
  const [filter, setFilter] = useState('all'); // We are using all here to display as default
 

  // Creating the arrow function and Destructuring the data which we got and assigning it to do the respective name 
  const handleInputChange = (e) => {
        const { name, value } = e.target;
       setNewTodo({...newTodo,[name]: value});
  };


  // Next Function to adding the to add as new data
  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo({ name: '', description: '', status: 'not completed' });
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const updateTodoStatus = (index, newStatus) => {
        const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        console.log(todo+" " + newStatus)
        return { ...todo, status: newStatus };
      }
      return todo;
    });
    console.log(updatedTodos)
    setTodos(updatedTodos);
  };

  const filterTodos = () => {
    if (filter === 'completed') {
      return todos.filter(todo => todo.status === 'completed');
    } else if (filter === 'not completed') {
      return todos.filter(todo => todo.status === 'not completed');
    } else {
      return todos;
    }
  };

 

  return (

// We are creating the Content which is going to displayed 
<div className='Todo-app'>
      <h2 className='heading'>My todo</h2>
      <div className='content'>
        <input style={{borderColor:"aqua"}}type="text" name="name" placeholder="Todo Name"  value={newTodo.name} onChange={handleInputChange} />
        <input  style={{borderColor:"aqua"}}type="text" name="description" placeholder="Todo Description" value={newTodo.description} onChange={handleInputChange}/>
        <button style={{borderColor:"aqua", backgroundColor:"aqua",color:"white",padding:"2px 15px"}}onClick={addTodo}>AddTodo</button>
</div>
      
<div class="gap">
      <h5>MyTodos </h5>
      <p>Status Filter : 
      <select  style={{backgroundColor:"red"}} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not completed">Not Completed</option>
      </select>
      </p>  
</div>


<div className='Adding-new'style={{display:"flex", flexWrap:"wrap"}}>
      {filterTodos().map((todo, index) => (
        <div 
        key={index} 
        style={{width:'300px', height:"200px",backgroundColor:"aqua"}}>
         
          <h5>Name: {todo.name}</h5>
          <h6 className='text-wrap'>Description: {todo.description}</h6>
          <h6>Status:<select value={todo.status} onChange={(e) => updateTodoStatus(index, e.target.value)} style={{backgroundColor:"darkcyan"}}>
          <option value="not completed" >Not Completed</option>
            <option  value="completed" >Completed</option>  
          </select> </h6>
          

    <div class="button-container">        
          <button class="button" style={{backgroundColor:"darkcyan"}}onClick={ ()=> handleInputChange }>Edit</button>  
          <button class="button" style={{backgroundColor:"orange"}}onClick={() => deleteTodo(index)}>Delete</button> 
          </div>      
    </div>
 ))}
      
      </div>
</div>

  );
}

export default TodoApp;
