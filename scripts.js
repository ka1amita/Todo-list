// adding a new todo
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

$('.todosContainer').on('click', '.toDone', function(event) {
    $(this).siblings('.todoItem').toggleClass('done')
    $(this).toggleClass('toDoDone')

});

$('.todosContainer').on('click', '.toDelete', function(event) {
    $(this).parent().remove()
});
