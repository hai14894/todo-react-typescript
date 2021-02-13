import React from 'react';
import { TodoListItem } from './TodoListItem';




const todos: Array<Todo> = [
  {text: "shopping", complete: true},
  {text: "go to gym", complete: false},
  {text: "study", complete: true}
]


const App: React.FC = () => {
  return (
    <React.Fragment>
      <TodoListItem todo={todos[0]}/>
      <TodoListItem todo={todos[1]}/>
      <TodoListItem todo={todos[2]}/>
    </React.Fragment>
  )
}



export default App;
