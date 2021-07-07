(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var searchResultBlock = document.querySelector('.sidebar .search'),
            sectionContent = document.querySelector('.content'),
            asideBlock = document.querySelector('aside.sidebar');

        var searchInput = document.querySelector('.search .input-wrap input'),
            clearButton = document.querySelector('.search .input-wrap .clear-button');

        var targetBlock = document.querySelector('header .bottom-row');

        var replacedSearchBlock = false;

        function replaceResultBlock() {
            switch (replacedSearchBlock) {
                case false:
                    sectionContent.insertAdjacentElement('afterbegin', searchResultBlock);
                    searchResultBlock = sectionContent.querySelector('.search');
                    replacedSearchBlock = true;
                    break;
                case true:
                    asideBlock.insertAdjacentElement('afterbegin', searchResultBlock);
                    searchResultBlock = asideBlock.querySelector('.search');
                    replacedSearchBlock = false;
            }

        }

        searchInput.classList.add('search-clone');
        searchInput.placeholder = 'Поиск по базе';
        clearButton.innerHTML = 'Очистить форму поиска';

        targetBlock.insertAdjacentElement('afterbegin', searchInput);
        if (window.innerWidth <= 768) {
            replaceResultBlock();

        }

        searchInput.addEventListener('focus', function() {
            if (window.innerWidth > 768 && document.body.classList.contains('close')) {
                document.body.classList.remove('close');
            }
        });

        window.addEventListener('resize', function() {
            var width = window.innerWidth;

            if (width <= 768 && !replacedSearchBlock) {
                replaceResultBlock();
            }

            if (width > 768 && replacedSearchBlock) {
                replaceResultBlock();
            }
        });
    });
})();