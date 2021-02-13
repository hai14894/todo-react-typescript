import React from 'react';
import { TodoListItem } from './TodoListItem';




const todos: Array<Todo> = [
  {text: "shopping", complete: true},
  {text: "go to gym", complete: false},
  {text: "study", complete: true}
]


const App: React.FC = () => {
  return (
    <div>
      <TodoListItem todo={todos[0]}/>
    </div>
  )
}



export default App;
