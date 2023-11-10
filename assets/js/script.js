document.getElementById('aboutme-link').addEventListener('click', function(event) {
    event.preventDefault();
    var isClickInside = document.getElementById('aboutme-aside').contains(event.target);
    var isAsideExpanded = document.getElementById('aboutme-aside').classList.contains('expand');

    if (!isClickInside && isAsideExpanded) {
        document.getElementById('aboutme-aside').classList.remove('expand');
    }
    else {document.getElementById('aboutme-aside').classList.add('expand');}
});

document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault();
    var isClickInside = document.getElementById('contact').contains(event.target);
    var isAsideExpanded = document.getElementById('contact').classList.contains('expand2');

    if (!isClickInside && isAsideExpanded) {
        document.getElementById('contact').classList.remove('expand2');
    }
    else {document.getElementById('contact').classList.add('expand2');}
});
