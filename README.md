# Camera
This example provides a basic implementation for opening and closing the camera on a web page. It leverages the getUserMedia API to access the camera and control the display of the video feed using HTML, CSS, and JavaScript.
#HTML FILE
The HTML file sets up the structure of the web page:

Includes a heading ("Camera Example").
Contains two buttons: "Open Camera" and "Close Camera".
Includes a video element where the camera feed will be displayed.
Links to external CSS and JavaScript files.
# CSS FILE
Applies basic styles to the body to set the font and center the content.
Styles the buttons with padding and font size.
Initially hides the video element and adds a border.
# JS FILE
Adds event listeners to the "Open Camera" and "Close Camera" buttons.
When the "Open Camera" button is clicked, it requests access to the user's camera using navigator.mediaDevices.getUserMedia.
If access is granted, it displays the camera feed in the video element and shows the video element.
When the "Close Camera" button is clicked, it stops the video stream and hides the video element.
