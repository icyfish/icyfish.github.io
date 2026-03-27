document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.post-content a');
    var host = window.location.hostname;
    links.forEach(function (link) {
        if (link.hostname && link.hostname !== host) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
