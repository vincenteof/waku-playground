import { queryAllTodo } from '../../actions/todo.js'

export default async function TodoList() {
  const todoItems = await queryAllTodo()
  return (
    <div>
      {todoItems.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
    </div>
  )
}
