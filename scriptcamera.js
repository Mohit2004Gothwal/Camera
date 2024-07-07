document.getElementById('open-camera').addEventListener('click', function() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            const video = document.getElementById('video');
            video.srcObject = stream;
            video.style.display = 'block';
            window.localStream = stream; // Make the stream available globally
        })
        .catch(function(err) {
            console.error('Error accessing the camera: ' + err);
        });
});

document.getElementById('close-camera').addEventListener('click', function() {
    const video = document.getElementById('video');
    video.style.display = 'none';
    if (window.localStream) {
        const tracks = window.localStream.getTracks();
        tracks.forEach(function(track) {
            track.stop();
        });
    }
});
