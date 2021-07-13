(function() {
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('body[data-page*="_sidebar.md"] .content').style.display = 'none';
    });

    window.addEventListener('load', function() {
        const subCatQuantity = 2;

        function addElement(content, parent, wrapper, wrapperClass, position) {
            var w = document.createElement(wrapper);

            w.classList.add(wrapperClass);
            w.innerHTML = content;
            parent.insertAdjacentElement(position, w);
        }

        var arrow = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.52 31.35"><polyline fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3px" fill-rule="evenodd" points="1.5 1.5 16.35 16.24 1.5 29.85"/></svg>';
        var els = document.querySelectorAll('body[data-page*="_sidebar.md"] #main.markdown-section>ul>li');

        els.forEach(item => {
            var title = item.childNodes[0].textContent;
            item.childNodes[0].textContent = '';
            addElement(title, item, 'span', 'category-title', 'afterbegin');

            var contentCategory = item.innerHTML;
            item.innerHTML = '';
            addElement(contentCategory, item, 'span', 'category', 'afterbegin');
            addElement(arrow, item.querySelector('.category'), 'button', 'more-button', 'beforeend');

            var subCatCount = item.querySelectorAll('.category ul li');

            if (subCatCount.length > subCatQuantity) {
                var button = item.querySelector('.category .more-button');

                item.classList.add('overflow');
                button.style.display = 'flex';
                button.addEventListener('click', function(evt) {
                    evt.preventDefault();
                    if (!item.classList.contains('open')) {
                        item.classList.add('open');
                    } else {
                        item.classList.remove('open');
                    }
                });
            };
        });
        document.querySelector('body[data-page*="_sidebar.md"] .content').style.display = '';
    });
})();