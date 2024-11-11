import TodoProvider from "./store/todo-context"
import Layout from "./components/layout";
import AddTodoForm from "./components/add-todo-form"
import TodoList from "./components/todo-list";
import DoneList from "./components/done-list";

export default function App() {
  return (
   <TodoProvider>
     <Layout>
        <AddTodoForm />
        <TodoList />
        <DoneList />
     </Layout>
   </TodoProvider>
  )
}