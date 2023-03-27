// adding a new todo
let newTodoCounter = 1
$('.addTodo').on('click', function() {
    let newTodoText = $('input').val()
    console.log('new todo is: ' + newTodoText)
    console.log('new todo id is: ' +`id="todo`+newTodoCounter+`"`)
    // $('ul').append('<li id="todo' + newTodoCounter + '">' + newTodoText + '</ul>')
    $('ul').append($('<li>', {class:"todoItem", text: newTodoText}))
    // $('ul').append('<li id="todo' + newTodoCounter + '" onclick="struck(this)">' + newTodoText + '</ul>')
    newTodoCounter++
})

// striking all todoX after clicking on a todo list item

// Event binding on dynamically created elements; delegated event handlers 
// https://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements

$('ul').on('click', 'li', function() {
    $(this).toggleClass('done')
});


// this approach doesn't wotk with dynamic alements

// $('li.todoItem').on('click', function () {
//     $(this).toggleClass('done')
// })


// onclick="struck(this)" and function struck(ele) {}
// https://stackoverflow.com/questions/47795202/how-to-strike-through-a-list-item-without-disturbing-other-items-in-a-html-list

// function struck(ele) {
//     ele.style = "text-decoration:line-through";
//   }