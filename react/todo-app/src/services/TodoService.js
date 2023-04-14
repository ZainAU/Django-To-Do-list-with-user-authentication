export const getTasks = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_page=1")
    const deserailziedResponse = await res.json()
    return deserailziedResponse;
}

export const postTask = async (task) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos",{
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const deserailziedResponse = await res.json()
    return deserailziedResponse;
}