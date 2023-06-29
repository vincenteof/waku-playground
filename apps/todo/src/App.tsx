import { createTodo } from './actions/todo.js'
import Input from './components/Input/index.js'
import TodoList from './components/TodoList/index.js'

const App = () => {
  return (
    <div className="w-96 mx-auto">
      <h1 className="text-center">Todo</h1>
        <div>
          <Input createTodo={createTodo}/>
          {/* @ts-expect-error */}
          <TodoList />
        </div>
    </div>
  )
}

export default App
