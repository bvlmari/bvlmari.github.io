function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    document.getElementById('clock').textContent =
      hours + ':' + minutes + ':' + seconds;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the clock immediately
  updateClock();

var windowElement = document.getElementById('myWindow');

// Variables to hold the position of the mouse and the position of the window when dragging starts
var offsetX, offsetY, startX, startY;

// Function to handle the mouse down event
function handleMouseDown(e) {
  // Save the initial mouse coordinates and the initial window position
  offsetX = e.clientX - windowElement.offsetLeft;
  offsetY = e.clientY - windowElement.offsetTop;
  startX = windowElement.offsetLeft;
  startY = windowElement.offsetTop;

  // Attach the mousemove and mouseup event listeners
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
}

// Function to handle the mouse move event
function handleMouseMove(e) {
  // Calculate the new position of the window
  var newLeft = e.clientX - offsetX;
  var newTop = e.clientY - offsetY;

  // Update the position of the window
  windowElement.style.left = newLeft + 'px';
  windowElement.style.top = newTop + 'px';
}

// Function to handle the mouse up event
function handleMouseUp() {
  // Remove the mousemove and mouseup event listeners
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
}

// Attach the mousedown event listener to the titlebar
windowElement.querySelector('.titlebar').addEventListener('mousedown', handleMouseDown);