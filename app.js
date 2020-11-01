const addTodos = document.querySelector('.add')
const todosList = document.querySelector('.todos')
const searchTodos = document.querySelector('.search')


const generateNewTodo = todo => {
    let newTodo = document.createTextNode(todo)
    let li = document.createElement('li')
    let span = document.createElement('span')
    let i = document.createElement('i')
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    i.classList.add('fas', 'fa-trash-alt', 'delete')
    span.appendChild(newTodo)
    li.appendChild(i)
    li.prepend(span)
    todosList.prepend(li)
}

addTodos.addEventListener('submit', event => {
    event.preventDefault()
    const newTodo = addTodos.add.value.trim()
    if(newTodo.length) generateNewTodo(newTodo)
    addTodos.reset()  
})

todosList.addEventListener('click', event => {
    event.stopPropagation()
    console.log(event)
    if(event.target.classList.contains('delete')) return event.target.parentElement.remove()
})
searchTodos.addEventListener('submit', e => e.preventDefault())
searchTodos.search.addEventListener('keyup', () => {
    const todoSearchTxt = searchTodos.search.value.trim()
    Array.from(todosList.children)
    .filter(todo => !todo.children[0].textContent.includes(todoSearchTxt))
    .forEach(todo => {
        todo.classList.remove('d-flex')
        todo.classList.add('d-none') 
    })
    Array.from(todosList.children)
    .filter(todo => todo.children[0].textContent.includes(todoSearchTxt))
    .forEach(todo => {
        todo.classList.add('d-flex')
        todo.classList.remove('d-none')
    })
})



