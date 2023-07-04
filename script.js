window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.right > div');
    var navItems = document.querySelectorAll('.navbar a');

    var currentSectionIndex = sections.length - 1;
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        var scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop - sectionHeight / 2) {
            currentSectionIndex = i;
        }
    }

    navItems.forEach(function(item, index) {
        if (index === currentSectionIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});



