import { useTodos } from "../store/todo-context";

export default function DoneList() {
    const { todos, deleteTodo, undo } = useTodos();

    const completedTodos = todos.filter(todo => todo.completed === true);

    return (
        <div className="space-y-2">
            <h2 className="text-2xl font-bold">Done and Dusted!</h2>
            {completedTodos.length ? (completedTodos.map(todo => (
                <div
                    key={todo.id}
                    className="flex items-center bg-white shadow-md p-3"
                >
                    <span className="flex-1 line-through text-gray-400">{todo.task}</span>
                    <button 
                        className="btn btn-sm btn-warning text-gray-100"
                        onClick={() => undo(todo.id)}
                    >
                        Undo
                    </button>
                    <button 
                        className="btn bg-amber-500 text-amber-100 btn-sm ml-2"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        Delete
                    </button>
                </div>
            ))) : (
                <p className="text-gray-500 mt-3">No completed tasks.</p>
            )}
        </div>
    )

}