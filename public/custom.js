document.addEventListener('DOMContentLoaded', function () {
    const showInputBtn = document.querySelector('.showInputBtn');
    const searchform = document.querySelector('#searchform');

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
});
