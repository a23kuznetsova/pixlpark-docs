(function() {
    // document.addEventListener('DOMContentLoaded', function() {
    //     document.querySelector('body[data-page*="_sidebar.md"] .content').style.display = 'none';
    // });

    window.addEventListener('load', function() {
        function addCardsHandlers() {
            var mainPage = document.body.dataset.page;

            if (mainPage === window.$docsify.homepage) {
                var categories = document.querySelectorAll('#main.markdown-section>ul>li');
                categories.forEach(function(category) {
                    var button = category.querySelector('.more-button');
                    button.addEventListener('click', function() {
                        if (!category.classList.contains('open')) {
                            category.classList.add('open');
                        } else {
                            category.classList.remove('open');
                        }
                    });
                });
            };
        }

        addCardsHandlers();
    });
})();