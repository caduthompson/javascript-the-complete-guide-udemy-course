const task3Element = document.getElementById('task-3');

// Issue 1.
function greet() {
  alert('Hello everyone!');
}

function receiveName(userName) {
  alert('Hello ' + userName);
}

// Issue 2.
greet();
receiveName('Thompson');

// Issue 3.
task3Element.addEventListener('click', greet);


// Issue 4.
function combineString(str1, str2, str3) {
  const combinedText = `${str1} ${str2} ${str3}`;
  return combinedText;
}

// Issue 5.
const combinedString = combineString('What', 's', 'up!');
alert(combinedString);
