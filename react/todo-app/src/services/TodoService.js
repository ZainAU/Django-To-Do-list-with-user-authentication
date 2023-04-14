export const getTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_page=1")
    const deserailziedResponse = await res.json()
    return deserailziedResponse;
}

export const postTodo = async (todo) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos",{
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const deserailziedResponse = await res.json()
    return deserailziedResponse;
}