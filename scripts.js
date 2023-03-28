// adding a new todo
let newTodoCounter = 1
// $('.addTodo').on('click', function() {
//     let newTodoText = $('input').val()
//     console.log('new todo is: ' + newTodoText)
//     console.log('new todo id is: ' +`id="todo`+newTodoCounter+`"`)
//     $('.todosContainer').append(`<div class='todoContainer' id='todoContainer`+newTodoCounter+`'><p class='todoItem' id='todoItem`+newTodoCounter+`'>`+newTodoText+`</p><button class='toDelete' id="toDelete`+newTodoCounter+`">Del</button><button class='toDone' id="toDone`+newTodoCounter+`">Done</button> </div>`)
//     // $('ul').append($('<li>', {class: 'todoItem', id:"todoItem"+newTodoCounter, text: newTodoText}))
//     newTodoCounter++
// })


$('button.addTodo').on('click', function() {
    let newTodoText = $('input').val()
    $('.todosContainer').append(
        `<div class='todoContainer' >
        <p class="todoItem" >`+newTodoText+`</p>
        <img class='toDelete' src="https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/trashcan_delete_remove-1024.png" alt="bin">
        <img class='toDone' src="https://cdn4.iconfinder.com/data/icons/web-essentials-6/24/checkmark-1024.png" alt="tick">
    </div>`
    )
    $('input').val('')
})



// striking all todoX after clicking on a todo list item

// Event binding on dynamically created elements; delegated event handlers 
// https://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements

$('.todosContainer').on('click', '.toDone', function(event) {
    $(this).siblings('.todoItem').toggleClass('done')
    $(this).toggleClass('toDoDone')

});

$('.todosContainer').on('click', '.toDelete', function(event) {
    $(this).parent().remove()
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