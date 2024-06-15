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

// Function to create a window element with a random position
function createWindow(title, contentHTML) {
  var windowElement = document.createElement('div');
  windowElement.className = 'window';
  windowElement.style.left = Math.random() * (window.innerWidth - 200) + 'px'; // Random left position
  windowElement.style.top = Math.random() * (window.innerHeight - 150) + 'px'; // Random top position

  var titlebar = document.createElement('div');
  titlebar.className = 'titlebar';
  titlebar.textContent = title;
  windowElement.appendChild(titlebar);

  var content = document.createElement('div');
  content.className = 'content';
  content.innerHTML = contentHTML;
  windowElement.appendChild(content);

  return windowElement;
}

// Add multiple windows to the body with different content
var windowsData = [
  { title: 'Abril 2', content: 'Fui al apple park <br><img src="../media/applepark.jpg" id="imagen">' },
  { title: 'Mayo 1', content: 'fui a comer' },
  { title: 'Enero 2', content: 'sali de fiesta' }
];

windowsData.forEach(function(windowData) {
  var windowElement = createWindow(windowData.title, windowData.content);
  document.body.appendChild(windowElement);
});

// Variables to hold the position of the mouse and the position of the window when dragging starts
var offsetX, offsetY, startX, startY, currentWindow;

// Function to handle the mouse down event
function handleMouseDown(e) {
  currentWindow = this.parentElement; // Get the parent window of the titlebar
  offsetX = e.clientX - currentWindow.offsetLeft;
  offsetY = e.clientY - currentWindow.offsetTop;
  startX = currentWindow.offsetLeft;
  startY = currentWindow.offsetTop;

  // Attach the mousemove and mouseup event listeners
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
}

// Function to handle the mouse move event
function handleMouseMove(e) {
  var newLeft = e.clientX - offsetX;
  var newTop = e.clientY - offsetY;
  currentWindow.style.left = newLeft + 'px';
  currentWindow.style.top = newTop + 'px';
}

// Function to handle the mouse up event
function handleMouseUp() {
  // Remove the mousemove and mouseup event listeners
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
}

// Attach the mousedown event listener to the titlebar of each window
var windowElements = document.querySelectorAll('.window');
windowElements.forEach(function(windowElement) {
  windowElement.querySelector('.titlebar').addEventListener('mousedown', handleMouseDown);
});

function updateWindowPositions() {
  windowElements.forEach(function(windowElement) {
    var left = parseFloat(windowElement.style.left);
    var top = parseFloat(windowElement.style.top);

    // Ensure windows stay within the visible area of the viewport
    left = Math.min(left, window.innerWidth - windowElement.offsetWidth);
    top = Math.min(top, window.innerHeight - windowElement.offsetHeight);

    windowElement.style.left = left + 'px';
    windowElement.style.top = top + 'px';
  });
}

// Attach resize event listener to update window positions
window.addEventListener('resize', updateWindowPositions);

// Update window positions initially
updateWindowPositions();