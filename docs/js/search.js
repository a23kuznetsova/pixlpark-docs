(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var searchInput = document.querySelector('.search .input-wrap input'),
            clearButton = document.querySelector('.search .input-wrap .clear-button');

        var targetBlock = document.querySelector('header .bottom-row');

        searchInput.classList.add('search-clone');
        clearButton.innerHTML = 'Очистить форму поиска';

        targetBlock.insertAdjacentElement('afterbegin', searchInput);
    });
})();