(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var searchResultBlock = document.querySelector('.sidebar .search'),
            sectionContent = document.querySelector('.content'),
            asideBlock = document.querySelector('aside.sidebar');

        var searchInput = document.querySelector('.search .input-wrap input'),
            clearButton = document.querySelector('.search .input-wrap .clear-button');

        var targetBlock = document.querySelector('header .bottom-row');

        var isReplacedSearchBlock = false;
        var isInFocus = false;

        var header = document.querySelector('header');
        var heightHeader = header.getBoundingClientRect().height;

        function replaceResultBlock() {
            switch (isReplacedSearchBlock) {
                case false:
                    sectionContent.insertAdjacentElement('afterbegin', searchResultBlock);
                    searchResultBlock = sectionContent.querySelector('.search');
                    isReplacedSearchBlock = true;
                    break;
                case true:
                    asideBlock.insertAdjacentElement('afterbegin', searchResultBlock);
                    searchResultBlock = asideBlock.querySelector('.search');
                    isReplacedSearchBlock = false;
            }
        }

        function showFixedHeader() {
            if (window.pageYOffset > heightHeader) {
                document.body.setAttribute('style', 'padding-top:' + heightHeader + 'px');
                header.classList.add('fixedHeader');
            } else {
                document.body.removeAttribute('style');
                header.classList.remove('fixedHeader');
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

            if (window.innerWidth <= 768) {
                isInFocus = true;
                sectionContent.scrollIntoView(true);
            }
        });

        searchInput.addEventListener('blur', function() {
            if (window.innerWidth <= 768) isInFocus = false;
        });

        searchInput.addEventListener('input', function() {
            if (window.innerWidth <= 768 && isInFocus) sectionContent.scrollIntoView(true);
        });

        window.addEventListener('resize', function() {
            var width = window.innerWidth;

            if (width <= 768 && !isReplacedSearchBlock) {
                replaceResultBlock();
            }

            if (width > 768 && isReplacedSearchBlock) {
                replaceResultBlock();
            }
        });

        document.addEventListener('scroll', showFixedHeader);
    });
})();