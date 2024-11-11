export default function Layout({children}) {
    return (
        <div className="p-10 max-w-xl mx-auto space-y-10">
            <h1 className="text-3xl font-bold underline text-center">Todo App</h1>

            {children}
        </div>
    )
}