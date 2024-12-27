document.addEventListener('DOMContentLoaded', function () {
    const showInputBtn = document.querySelector('.showInputBtn');
    const searchform = document.querySelector('#searchform');

    // Toggle #searchform visibility on button click
    showInputBtn.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click from propagating to the document
        searchform.style.display = searchform.style.display === 'flex' ? 'none' : 'flex';
    });

    // Hide #searchform when clicking anywhere on the page
    document.addEventListener('click', function () {
        searchform.style.display = 'none';
    });

    // Prevent hiding #searchform when clicking inside it
    searchform.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
