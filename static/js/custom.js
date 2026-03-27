document.addEventListener('DOMContentLoaded', function () {
    // Only run on single post pages (URL contains /post/)
    if (!/\/post\/[^/]+/.test(window.location.pathname)) return;

    var links = document.querySelectorAll('.post-content a');
    var host = window.location.hostname;
    links.forEach(function (link) {
        if (link.hostname && link.hostname !== host) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
