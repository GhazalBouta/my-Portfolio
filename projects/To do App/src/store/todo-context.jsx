import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export default function TodoProvider({children}) {
    const [todos, setTodos] = useState(() => {
        // load todos from local storage if exisiting
        const localTodos = localStorage.getItem("todos");
        return localTodos ? JSON.parse(localTodos) : [];
    });

    useEffect(() => {
        // save todos to local storage whenever they change
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const addTodo = (newTask) => {
        setTodos([...todos, { id: Date.now(), task: newTask, completed: false}]);
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const markAsDone = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: true };
            }
            return todo;
        })

        setTodos(updatedTodos);
    }

    const undo = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: false };
            }
            return todo;
        })

        setTodos(updatedTodos);
    }

    console.log(todos);

    return (
        <TodoContext.Provider value={{
            todos,
            addTodo,
            deleteTodo,
            markAsDone,
            undo
        }}>
            {children}
        </TodoContext.Provider>
    )
}