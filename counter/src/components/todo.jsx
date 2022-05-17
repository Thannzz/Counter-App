import React,{useState} from 'react'

const Todo = () => {
    const [value,setValue] = useState('AB')
    const[todos,setTodos] = useState([])
  return (
    <div>Todo
        <input value={value} onChange={(e)=>{setValue(e.target.value)}} />
        <button onClick={()=>
            {setTodos([...todos,{value:value}]);
            setValue=('')}}>Add</button>

    </div>

  )
}

export default Todo