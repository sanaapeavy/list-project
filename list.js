var cardContainer = $('.card-container');
var submit = $('.submit.btn');
submit.on('click', createNewGoal);

function createNewGoal() {
var newGoal = $('.new-goal').val();
appendNewGoal(newGoal)
$('.new-goal').val("");
}

function appendNewGoal(newGoal) {
  cardContainer.append (`
  <div class= "new-goal-card">
<p>${toDo}</p>
<input type="checkbox" class="checkbox">
</div>
`);

 var checkbox = $('.checkbox');
 checkbox.on("click",remove);
}

function remove() {
  event.target.parentNode.remove();
}
