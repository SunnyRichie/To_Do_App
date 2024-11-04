const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('listContainer');
const prioritySelect = document.getElementById('prioritySelect');
const clearAllBtn = document.getElementById('clearAllBtn');

// Add a new task
function addTask() {
  if (inputBox.value === '') {
    alert('You must write something');
    return;
  }

  let li = document.createElement('li');
  li.innerHTML = inputBox.value;
  li.classList.add(prioritySelect.value); // Add class based on priority
  listContainer.appendChild(li);

  let span = document.createElement('span');
  span.innerHTML = '\u00d7'; // X symbol for deleting the task
  li.appendChild(span);

  inputBox.value = '';
  saveData();
}

// Event listener for clicking on list items
listContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

// Save the list to local storage
function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

// Show saved tasks from local storage
function showTask() {
  listContainer.innerHTML = localStorage.getItem('data') || '';
}

// Clear all tasks
clearAllBtn.addEventListener('click', () => {
  if (confirm("Are you sure you want to clear all tasks?")) {
    listContainer.innerHTML = '';
    saveData();
  }
});

// Initialize the task list
showTask();
