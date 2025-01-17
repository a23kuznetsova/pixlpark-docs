# Список категорий продуктов
* В данном разделе представлен список категорий продуктов, которые можно отфильтровать:
    + __По группе__, задаваемой в настройках категории.
    + __По редактору__, используемому товарами категории для приёма заказов.
    + __По подрядчику__, связанному с какими-либо категориями.
    + __По доступности__ категории на сайте или в приложении.
        - __Не учитывать__ - все категории.
        - __Везде__ - категории, доступные и на сайте, и в приложении.
        - __Нигде__ - категории, которые нигде не доступны.
        - __Только на сайте__ - категории, доступные только на сайте.
        - __Только в приложении__ - категории, доступные только в приложении.
        - __На сайте или в приложении__ - категории, доступные на сайте или в приложении.

* Также в блоке фильтра последним элементом расположен блок "__Атрибуты__", в зависимости от которого в списке категорий будут или не будут отображаться их атрибуты.
* В левом верхнем углу расположена кнопка "__Добавить / Обновить__", которая позволяет выполнить следующие действия:
    + __Скопировать категорию с демо-сайта__ со всеми товарами и связанными с ними опциями.
    + __Дублировать существующую категорию__ со всеми товарами и связанными с ними опциями. В зависимости от настроек продукты дублированной категории могут наследоваться от исходной.
    + __Создать новую категорию__ с заданием её названия и выбором редактора.
    + __Обновить данные выбранных категорий__, для чего нужно:
        - Экспортировать данные выбранных категорий в эксель-файл.
        - Изменить данные в эксель-файле:
            - Во вкладке "__Категории__" можно изменить название и URL-адрес категорий.
            - Во вкладке "__Товары__" можно изменить название, URL-адрес, тиражность и стоимость товаров.
            - Во вкладке "__Опции__" можно изменить название опций, а также название и стоимость их позиций.
        - Импортировать данные по категориям из эксель-файла.

* Также на странице можно:
    + Перейти в карточку любой категории.
    + Включить или выключить доступность любой категории для сайта или приложения.
    + Изменить порядок следования категорий на сайте и в приложении.
    + Обновить цены выбранных категорий.
    + Дублировать выбранные категории (без наследования, но со всеми продуктами и опциями).
    + Удалить выбранные категории.
* Т.к. стоимость продукции не является дискретной величиной, то для обновления цен вводятся новые понятия:
    + __Тип цены__:
        - Базовая цена продукта.
        - Цена шага роста многостраничного продукта.
        - Цена поверхности.
        - Цена опции.
        - Цена позиции опции.
    + __Коэффициент__, на который нужно умножить каждый тип цены.
    + __Округление__ стоимости после применения коэффициента:
        - До четырех знаков после запятой.
        - До трех знаков после запятой.
        - До двух знаков после запятой.
        - До одного знака после запятой.
        - До целых.
        - До десятков.
        - До сотен.

![](../_media/print/print31.png ':size=70%')
![](../_media/print/print32.png ':size=70%')