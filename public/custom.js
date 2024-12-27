document.addEventListener('DOMContentLoaded', function () {
    const showInputBtn = document.querySelector('.showInputBtn');
    const searchform = document.querySelector('#searchform');
    
    const handleToggle = function () {
        showInputBtn.addEventListener('click', function (event) {
            event.stopPropagation();
            searchform.style.display = searchform.style.display === 'flex' ? 'none' : 'flex';
        });

        document.addEventListener('click', function () {
            searchform.style.display = 'none';
        });

        searchform.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    };

    const mediaQuery = window.matchMedia('(max-width: 769px)');
    if (mediaQuery.matches) {
        handleToggle();
    }

    mediaQuery.addEventListener('change', function (e) {
        if (e.matches) {
            handleToggle();
        } else {
            showInputBtn.removeEventListener('click', handleToggle);
            document.removeEventListener('click', handleToggle);
            searchform.removeEventListener('click', handleToggle);
            searchform.style.display = 'none';
        }
    });
});
