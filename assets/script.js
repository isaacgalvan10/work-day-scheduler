let currentDay = $('#currentDay');
let today = moment().format('dddd, MMMM Do');
let d = new Date();
let hour = d.getHours();
currentDay.text(today);
console.log(hour);


// gets current hour and updates hour and runs colorTaskBar()
let getCurrentHour = setInterval(function(){
  d = new Date();
  hour = d.getHours();
  console.log(hour);
  colorTaskBar();
}, 30000);

let allTasks;

// checks if 
function colorTaskBar() {
  allTasks = $('[data-hour]');
  for(let i = 0; i < allTasks.length; i++) {
    if(allTasks[i].dataset.hour < hour) {
      allTasks[i].classList.remove('present');
      allTasks[i].classList.add('past');
    };
    if (allTasks[i].dataset.hour == hour) {
      allTasks[i].classList.remove('future');
      allTasks[i].classList.add('present');
    };
    if (allTasks[i].dataset.hour > hour) {
      allTasks[i].classList.remove('past');
      allTasks[i].classList.add('future');
    };
  }
}
colorTaskBar();

let taskContainer = $('#task-container');

let txtArea;
let savedTasks = [];
let txtAreaId;

taskContainer.click(function(event) {
  let tasks = $('.task');
  console.log(event.target)

  if(event.target.classList.contains('saveBtn')){
    txtAreaId = event.target.previousElementSibling.children[0].dataset.task;
    console.log(txtAreaId)
    txtArea = event.target.previousElementSibling.children[0].value;
    console.log(txtArea)

    savedTasks.push({
      id: txtAreaId,
      taskValue: txtArea 
    });
  }
  console.log(savedTasks)
});

function addToLocalStorage(task) {
  localStorage.setItem('task')
}