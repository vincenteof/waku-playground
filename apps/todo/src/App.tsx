
import Input from "./components/Input/index.js";
import Provider from "./components/Provider/index.js";
import TodoList from "./components/TodoList/index.js";

const App = () => {
  return (
    <div className="w-96 mx-auto">
      <h1 className="text-center">Todo</h1>
      <Provider>
        <div>
          <Input />
          <TodoList />
        </div>
      </Provider>
    </div>
  );
};

export default App;
