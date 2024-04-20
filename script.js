// After 3 seconds, hide the logo display and show the main content
setTimeout(function() {
    document.getElementById('logo-display').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}, 3000); // 3000 milliseconds = 3 seconds