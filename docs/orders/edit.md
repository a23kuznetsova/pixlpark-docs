# Карточка заказа

![](../_media/order/order01.png ':size=70%')
![](../_media/order/order02.png ':size=70%')

## 1. Основная информация
* __Тип заказа__
    + __Обычный заказ__ - заказ продукции от зарегистрированного пользователя с сайта или панели управления, требующий исполнения, оплаты и доставки.
    + __Коммерческое предложение__ - намерение зарегистрированного или анонимного пользователя в последующем оформить обычный заказ с указанными характеристиками (используется при создании заказа в панели управления; например, при регистрации заказа по телефону).
    + __Быстрый заказ__ - заказ продукции со страницы корзины сайта без регистрации но с заданием номера телефона.
    + __Заказ с формы__ - заказ нетипизированной продукции через форму произвольного заказа в шапке сайта или на произвольной странице CMS.
    + __Пополнение счета частного лица__ - заказ на пополнение счета клиента, являющегося частным лицом (может не отображаться в заказах).
    + __Пополнение счета организации__ - заказ на пополнение счета клиента, являющегося организацией (может не отображаться в заказах).
* __Статус заказа__
    + Производственное состояние заказа. Подробную информацию об изменении статусов заказа можно найти в разделе "[Смена статуса заказа](/orders/edit?id=_10-Смена-статуса-заказа)".
* __Статус оплаты__
    + Состояние оплаты заказа.
* __Источник заказа__
    + __Сайт__ - заказ оформлен на сайте.
    + __Приложение__ - заказ оформлен в мобильном приложении.
    + __Панель управления__ - заказ оформлен в панели управления.
    + __Запрос по API__ - заказ оформлен через программный интерфейс.
* __Связи с заказами__ - функция позволяет связывать заказы, к примеру, требующие единой отправки. Кроме того, заказы автоматически связываются при разделении сборного заказа на несколько составных.
* __Исполнитель__ - сотрудник компании с ролью "Подрядчик", назначенный исполнителем заказа. Исполнителю доступны только его заказы. В профиле сотрудника для роли "Подрядчик" можно задать ограничения по списку продукции раздела "__Печать__". Также в разделе "__Настройка / Управление заказами / Основная информация__" можно включить автоматическое назначение подрядчика исходя из позиций заказа и списка сотрудников с данной ролью.
* __Менеджер заказа__ - сотрудник, назначенный менеджером заказа. В зависимости от настроек раздела "__Настройка / Управление заказами / Основная информация__",  менеджер может видеть либо все заказы, либо только свои. Также менеджером автоматически может назначаться тот сотрудник, который зарегистрировал клиента, оформившего данный заказ.
* __Партнер__ - клиент, являющийся участником партнерской программы, по ссылке или партнерскому коду которого был совершен заказ.
![](../_media/order/order71.png ':size=70%')
> Некоторые описанные блоки могут быть скрыты из-за специфики заказа или настроек сервиса.

## 2. Элементы заказа
* __Позиции и стоимость__
    + __Позиции заказа__ - список товаров, содержащихся в заказе (наименование, цена за единицу, количество и сумма).
    + __Стоимостные характеристики__ - цена каждой позиции заказа, скидки, бонусы, доставки, налоги, комиссии и итоговая сумма к оплате.
* __Добавить позицию__
    + При нажатии ссылки "__добавить__" около заголовка в появившемся модальном окне можно добавить новую позицию к заказу:
        - Продукт раздела "[Печать](/print/products)".
        - Продукт раздела "[Магазин](/shop/products)".
        - Произвольный товар.
* __Редактировать позицию__
    + При нажатии ссылки "__редактировать__" около заголовка появляется возможность изменения наименования, стоимости, количества и итоговой суммы.
* __Редактировать товар__
    + __Запустить редактор__ - внести изменение в товар через редактор, который использовался при оформлении заказа (после внесения изменений архив заказа будет обновлен в течение 15-20 мин.).
    + __Добавить комментарий__ - указать дополнительную информацию, которая впоследствии может быть отображена в сопроводительном документе.
    + __Добавить опцию__ - добавить к товару доступную опцию.
    + __Удалить опцию__ - удалить опцию у товара.

![](../_media/order/order72.png ':size=50%')
## 3. Доступные действия
* __Смотреть обложку__ - просмотр обложки, содержащей иллюстрации всех позиций заказа.
* __Скачать заказ__ - скачивание архива заказа с подготовленными к печати файлами. При определенных настройках архив заказа может также содержать исходные файлы, загруженные клиентом.
* __Изменить статус__ - смена текущего статуса заказа либо на один из следующих по цепочке, либо на произвольный через пункт "Все статусы".
![](../_media/order/order73.png ':size=20%')
* __Распечатать документ__ - скачивание сопроводительного документа по заказу на основании одного из доступных [шаблонов](/orders/settings?id=%d0%a8%d0%b0%d0%b1%d0%bb%d0%be%d0%bd%d1%8b-%d0%b4%d0%be%d0%ba%d1%83%d0%bc%d0%b5%d0%bd%d1%82%d0%be%d0%b2).
![](../_media/order/order74.png ':size=20%')
* __Повторить заказ__ - повторное оформление заказа со всеми его настройками и ценами.
* __Отправить в Битрикс24__ - передача данных по заказу в CRM-систему [Битрикс24](/integration/crm).
> Некоторые описанные действия могут быть недоступны из-за специфики заказа или настроек сервиса.

## 4. Примененные скидки
* __Название скидки__ - наименование скидки, которая была активирована для заказа.
* __Значение скидки__ - сумма, на которую уменьшилась стоимость заказа.
![](../_media/order/order03.png ':size=20%')
> Данный раздел отображается, только если были применённые скидки.

## 5. Параметры заказа
* __Дополнительный номер__ - по умолчанию дополнительным номер заказа совпадает с основным. Но, его можно заменить на любой другой. Иногда в дополнительном номере заказа хранят номер из финансовой или ERP-системы для сопоставления заказов (например, в случае интеграции посредством (просто по нормам р.я. интеграция может быть с чем-то или посредством чего-то) API).
* __Дата оформления__ - дата и время оформления заказа пользователем в часовом поясе, указанном в региональных настройках сайта.
* __Время выдачи__ - дата и время выдачи заказа, которые выставляется либо автоматически при назначении заказу статуса "__Выдан__", либо вручную сотрудником компании.
* __Клиент__ - клиент, который считается владельцем заказа. Владельца заказа можно изменить, выбрав либо частное лицо из списка пользователей, либо зарегистрировав новое. В частности функция изменения нужна при смене типа заказа с "коммерческого предложения" на "обычный заказ".
![](../_media/order/order75.png ':size=20%')

## 6. Доставка заказа
### 6.1. Основная информация
* __Получатель заказа__ - ФИО и телефон человека, указанного в качестве получателя заказа на странице доставки. По умолчанию получатель заказа совпадает с оформителем.
* __Способ доставки__
    + Точка выдачи - собственный или партнерский офис.
    + Транспортная компания - внешняя логистическая компания.
    + Курьерская служба - собственная служба логистики.
* __Адрес доставки__ - полный адрес доставки или точки выдачи заказа.
* __Название доставки__ - название, время работы, телефон, адрес и дополнительная информация выбранного способа доставки.
* __Изменение доставки__ - при нажатии ссылки "__изменить__" около заголовка откроется страница редактирования доставки.
![](../_media/order/order04.png ':size=25%')

### 6.2. Редактирование доставки
* __Способ доставки__ - выбор способа доставки из всех доступных вне зависимости от их типа.
* __Стоимость доставки__ - задание стоимости доставки заказа.
* __Комментарий к доставке__ - изменение дополнительной информации по доставке (например, кода домофона или предпочтительного времени доставки).
* __Получатель заказа__ - указание ФИО и телефона получателя заказа.
* __Адрес доставки__ - выбор собственного/партнерского офиса, точки выдачи транспортной компании или указание адреса доставки курьером.
![](../_media/order/order05.png ':size=70%')

## 7. Оплата заказа
### 7.1. Основная информация
* __Статус оплаты__
    + Не оплачен.
    + Частично оплачен.
    + Оплачен полностью.
* __Способ оплаты__
    + Наличные при получении.
    + Банковский перевод.
    + Счет частного лица.
    + Счет организации.
* __Сумма оплаты__ - сумма внесенной предоплаты и остаток к оплате.
* __Изменение оплаты__ - при нажатии ссылки "изменить" около заголовка откроется страница редактирования оплаты.
![](../_media/order/order06.png ':size=25%')

### 7.2. Редактирование оплаты
* __Информация об оплате__
    + __Статус оплаты__ - текущий статус оплаты.
    + __Сумма заказа__ - итоговая стоимость заказа.
    + __Личный счет__ - сумма на личном счете клиента.
    + __Уже оплачено__ - сумма внесенной предоплаты.
    + __К оплате__ - сумма, оставшаяся к оплате.
* __Внесение оплаты__
    + __Сумма к оплате__ - вносимая сумма оплаты по последнему неоплаченному счету (в случае его отсутствия создается новый на всю сумму).
    + __Способ оплаты__ - способ оплаты по текущему поступлению средств.
    + __Комментарий__ - комментарий к оплате.
* __Ожидание оплаты__
    + __Сумма к оплате__ - сумма формируемого счета, ожидающего оплаты от клиента.
    + __Способ оплаты__ - ожидаемый способ оплаты (данный способ будет автоматически выбран при попытке оплаты заказа клиентом через личный кабинет).
    + __Плательщик__ - реквизиты организации, которая указана в счете в качестве плательщика (способ оплаты - банковский перевод).
    + __Получатель__ - реквизиты организации, которая указана в счете в качестве получателя платежа (тип организации - наша компания).
    + __Комментарий__ - дополнительная информация по оплате.
* __Счета на оплату__ - список всех счетов (оплаченных и неоплаченных) по заказу. Любой счет можно удалить, скачать, добавить к нему комментарий.
![](../_media/order/order07.png ':size=70%')

## 8. Обсуждение
* __Доступные действия__
    + __Смотреть макет__ - утвержденный клиентом макет заказа (по умолчанию совпадает с обложкой).
    + __Следить за комментариями__ - подписаться на получение уведомлений о появлении новых комментариев к заказу.
    + __Добавить комментарий__ - добавить новый комментарий к заказу, который может быть скрыт от клиента либо быть виден всем.
* __Лента обсуждения__
    + Список сообщений клиентов и сотрудников компании, упорядоченных по времени.
    + Сотрудник компании может запросить утверждение клиентом своего сообщения (например, если он содержит предложенный вариант дизайна макета).
    + Клиент может либо утвердить сообщение сотрудника, либо отклонить его.
* __Прикрепленные файлы__
    + Список прикрепленных к заказу файлов, которые в том числе доступны клиенту для скачивания.
    + Сотрудник компании может отметить загружаемый файл как утвержденный клиентом макет заказа.

![](../_media/order/order08.png ':size=70%')

## 9. История
* __Фильтр__
    + Фильтрация зафиксированных событий по типу:
        - __Общее__ - изменение содержимого, оплаты или статуса заказа.
        - __Доставка__ - изменение доставки заказа.
        - __Подряд__ - передача заказа на подряд.
* __Лента событий__
    + Список зафиксированных событий со следующими данными:
        - __Дата__ - дата события.
        - __Статус__ - производственный статус заказа.
        - __Имя__ - сотрудник, инициировавший изменение.
        - __Комментарий__ - системный комментарий.

![](../_media/order/order09.png ':size=70%')

## 10. Смена статуса заказа
* Полная схема изменения статуса выглядит следующим образом:
![](../_media/order/status_full.png ':size=70%')

* По умолчанию все заказы автоматически каждые 2 недели изменяют статус от "__Оформлен__" до "__Доставлен на точку выдачи__" в соответствии с представленной схемой. Под этим статусом подразуевается как собственные офисы продаж, так и пункты выдачи транспортных компаний. 

* Из "__Доставлен на точку выдачи__" в "__Выдан__" заказ переходит через 23 недели, при этом за неделю до смены статуса администраторам компании отправляется об этом уведомление. 

* Переопределить стандартную логику автоматической смены статуса можно в разделе "__Заказы / Настройка / Управление заказами / Правила обработки заказов__".

* Также можно изменить и станадртную цепочку смены статусов. Для этого в профиле сотрудника необходимо указать доступные ему статусы заказов. В итоге, например, схема изменения статуса заказа может выглядеть следующим образом:
![](../_media/order/status.png ':size=30%')
