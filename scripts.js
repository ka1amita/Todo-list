// adding a new todo
let counter = 1
$('.addTodo').on('click', () => {
    let newTodo = $('input').val()
    console.log('new todo is: ' + newTodo)
    $('ul').append('<li class="todo" id="todo' + counter + '">' + newTodo + '</ul>')
    counter++
})

// striking todo0 after clicking on a todo list item
$('#todo0').on('click', function () {
    console.log('click')
    $('#todo0').css({
        textDecoration: 'line-through'
    })
    console.log('line-through')

})

// striking all todoX after clicking on a todo list item

// toggle striking todo after clicking on a todo list item
