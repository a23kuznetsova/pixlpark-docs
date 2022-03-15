Вот от сюда все перенести: https://pixlpark.ru/faq/prices/calc

# Установка калькулятора на сайт

## Общая информация
!> В данной документации собрано лишь самое необходимое для адекватного использования калькулятора через скрипты. Использование свойств или методов, которые есть в калькуляторе, но не указаны тут, может кардинально повлиять на его работу. Чаще всего такие свойства или методы помечаются через _ в начале.<br />Используйте их на свой страх и риск.

### О хранении и доступе
* Все калькуляторы на странице хранятся в массиве pxpCalculators. Так, например, если на странице 2 калькулятора, то доступ ко второму будет по индексу 1 (считаем от нуля)
```
// получить массив калькуляторов
pxpCalculators
// получить второй калькулятор в массиве
pxpCalculators[1]
```
* Учитывая, что чаще всего на странице 1 калькулятор, то самым распространненым вариантом вызова будет:
`pxpCalculators[0]`

### PxpCalc
#### Модель калькулятора
##### Основные свойства

<details>
<summary>materialSelector</summary>

| | `MaterialSelectorController` |
|---|---|
| **описание** | Модуль выбора категорий, товаров и атрибутов |
| **пример вызова** | `pxpCalculators[0].materialSelector` |

</details>

<details>
<summary>editorSettingsController</summary>

| | `EditorSettingsController` |
|---|---|
| **описание** | Модуль выбора размеров редактора (только для редактора интерьеров) |
| **пример вызова** | `pxpCalculators[0].editorSettingsController` |

</details>

<details>
<summary>customWorkSelector</summary>

| | `CalcCustomWorkSelectorController` |
|---|---|
| **описание** | Модуль выбора опций и их позиций |
| **пример вызова** | `pxpCalculators[0].customWorkSelector` |

</details>

<details>
<summary>circulationSelector</summary>

| | `CirculationSelectorController` |
|---|---|
| **описание** | Модуль выбора количества товара и страниц |
| **пример вызова** | `pxpCalculators[0].circulationSelector` |

</details>

<details>
<summary>totalPriceCalculator</summary>

| | `CalcTotalPriceViewController` |
|---|---|
| **описание** | Модуль отображения финальной цены, а так же продолжения заказа |
| **пример вызова** | `pxpCalculators[0].totalPriceCalculator` |

</details>

<details>
<summary>isMaterialTypeUpdate</summary>

| | `boolean` |
|---|---|
| **описание** | Возвращает информацию об обновлении категорий и товарах |
| **пример вызова** | |
| получить текущее состояние | `pxpCalculators[0].isMaterialTypeUpdate()` |
| присвоить состояние true | `pxpCalculators[0].isMaterialTypeUpdate(true)` |

</details>

<details>
<summary>isMaterialUpdate</summary>

| | `boolean` |
|---|---|
| **описание** | Возвращает информацию об обновлении товаров категории |
| **пример вызова** |  |
| получить текущее состояние | `pxpCalculators[0].isMaterialUpdate()` |
| присвоить состояние true | `pxpCalculators[0].isMaterialUpdate(true)` |

</details>

<details>
<summary>inUpdate</summary>

| | `boolean` |
|---|---|
| **описание** | Возвращает информацию об общем обновлении состояния калькулятора. Имеет значение true, если isMaterialTypeUpdate имеет значение true или isMaterialUpdate имеет значение true |
| **пример вызова** | получить текущее состояние `pxpCalculators[0].inUpdate()` |

</details>

##### Основные методы

<details>
<summary>info</summary>

| | `void` |
|---|---|
| **описание** | Расписывает текущее состояние калькулятора в консоли. Содержит в себе: |
| 1 | Id калькулятора, например `pxpProducCalc_pr2gifts_ad6e6921cb544c059becf00ec4939601` |
| 2 | Id выбранной категории |
| 3 | Id выбранного товара категории |
| 4 | Выбранные опции товара и их кратное состояние (название опции, Id опции, выбранные позиции опции, все позиции опции) |
| **пример вызова** | `pxpCalculators[0].info()` |
| примечание | Метод очень полезен для быстрого поиска необходимых данных по категориям, товарам и опциям, вам достаточно взять нужный Id и искать по нему в админке |

</details>

<details>
<summary>update</summary>

| | `void` |
|---|---|
| **описание** | Обновляет текущее состояние калькулятора |
| условие выполения | Поле `inUpdate` является false |
| **пример вызова** | `pxpCalculators[0].update()` |

</details>

### О первом запуске
* После того как калькулятор загрузился и первый раз получил данные о категории и товаре, происходит следующее:
    1. Калькулятор ищет на странице метод `onCompleteLoadPxpCalc`.
    1. Если он его находит, то исполняет, передавая первым параметром калькулятор.
* Таким образом, если вам необходимо проделать какие-то операции с калькулятором, то лучше всего это делать именно через этот метод.
```html
// какой-то калькулятор
[$calculator(category:product)$]
 
<script>
    // Метод, который будет вызываться по завершении загрузки калькулятора
    // calc - это калькулятор, который исполнил метод, вы можете получать данные о нем прямо отсюда
    function onCompleteLoadPxpCalc(calc) {
        // ваш код
    }        
</script>
```
### О модификации
* Прежде чем писать скрипт, который будет использовать возможности калькулятора, убедитесь, что:
    1. Данного функционала нет в платформе.
    1. Данный функционал не будет реализован в ближайшее время.
* Также стоит помнить два момента:
    1. Структура и методика работы калькулятора на платформе может обновляться, и нет никакой гарантии, что ваши скрипты будут работать так же, как и раньше.
    1. Если ваш скрипт ломает внутренную логику, то изменять калькулятор для решения этой проблемы не будут.
* По любым вопросам вы всегда можете написать на почту a.malyshkov@pixlpark.com

## Интеграция на сайт

* Самый банальный пример итогового скрипта для интеграции
```html
<div id="container"></div>
<script src="http://demo.pixlpark.ru/api/calc/externalCalc"></script>
<script>
    var container = document.getElementById("container");
    var params = { materialType: "photos" };
    var integrated = new PxpCalcManager(container, params);
</script>
```
* Калькулятор можно интегрировать на внешний сайт. Для этого необходимо сделать следующее:

### Шаг 1
* Cоздать на странице контейнер, в котором позже будет находиться калькулятор.
```html
<div id="integratedCalculator"></div>
```
* В данном случае это простой контейнер `div` с Id `integratedCalculator`. В будущем в нем будет разметка калькулятора.

### Шаг 2
* Дальше через тег `<script>` получим необходимый скрипт для иницилизации калькулятора. Для этого нужно от сайта на платформе Pixlpark сделать следующий вид запроса через API:
```html
<script src="http://demo.pixlpark.ru/api/calc/externalCalc"></script>
```
В `src` скрипта мы имеем:
    1. Домен на платформе [Pixlpark](http://demo.pixlpark.ru), однако у вас должен быть один из тех, что вы указали в разделе настройки доменов.
    1. Путь `/api/calc/externalCalc`, который посылает запрос на сервер для получения скрипта для иницилизации калькулятора.
* У данного API-запроса также могут быть параметры:

<details>
<summary>cssLink</summary>

| cssLink | |
|---|---|
| **описание** | Загружает на страницу css файл по указанной ссылке |
| **по-умолчанию** | common.css |
| **необходимость** | Необязательный параметр |
| **пример использования** | `<script src="http://demo.pixlpark.ru/api/calc/externalCalc?cssLink=/content/css/cssCalc"></script>` |

</details>

<details>
<summary>photolabId</summary>

| photolabId | |
|---|---|
| **описание** | Загружает калькулятор от конкретного сайта по указанному Id |
| **по-умолчанию** | Берется от указанного домена |
| **необходимость** | Необязательный параметр |
| **пример использования** | `<script src="http://demo.pixlpark.ru/api/calc/externalCalc?photolabId=3264"></script>` |

</details>

### Шаг 3
* После того как скрипт загружен, необходимо иницилизировать калькулятор. Чтобы это сделать, необходимо вызвать функцию **PxpCalcManager**. Рассмотрим параметры, которые входят в эту функцию:

* **PxpCalcManager**  
Модель, содержащая в себе методы для иницилизации калькулятора на странице  
**Параметры конструктора*

<details>
<summary>element</summary>

| | HTMLElement |
|---|---|
| **описание** | Контейнер, в который будет заружен калькулятор |

</details>

<details>
<summary>params</summary>

| | ParamsModel |
|---|---|
| **описание** | Набор параметров для настройки иницилизации калькулятора |

</details>

* **ParamsModel**  
Набор параметров для настройки иницилизации калькулятора  
**Поля*

<details>
<summary>materialType</summary>

| **Тип переменной** | `string` или `number` |
|---|---|
| **описание** | Id или UrlName категории (можно найти в настройках категории) |
| **Необходимость** | Обязательный параметр |

</details>

<details>
<summary>origin</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Оригинальный домен, на который будет переходить пользователь для оформления заказа |
| **по-умолчанию** | Домен от которого загружается скрипт для иницилизации (если брать пример выше - то http://demo.pixlpark.ru) |
| **Необходимость** | Необязательный параметр |

</details>

<details>
<summary>apiUrl</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Домен для API запросов (загрузка данных по категориям, товарам, расчет цен и т.п.) |
| **по-умолчанию** | Параметр origin |
| **Необходимость** | Необязательный параметр |

</details>

<details>
<summary>material</summary>

| **Тип переменной** | `string` или `number` |
|---|---|
| **описание** | Id или UrlName товара (можно найти в настройках товара) |
| **по-умолчанию** | null |
| **Необходимость** | Необязательный параметр |

</details>

<details>
<summary>config</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Имя конфигурации, задается в настройках калькулятора |
| **по-умолчанию** | default |
| **Необходимость** | Необязательный параметр |

</details>

<details>
<summary>languageId</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Id языка сайта |
| **по-умолчанию** | Id главного языка сайта из параметра origin |
| **Необходимость** | Необязательный параметр |

</details>

<details>
<summary>isMobile</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает мобильная версия калькулятора или нет |
| **по-умолчанию** | false |
| **Необходимость** | Необязательный параметр |

</details>

<details>
<summary>additionalQueryParams</summary>

| **Тип переменной** | Словарь `{ string: string }` |
|---|---|
| **описание** | Собственные параметры, которые уйдут в строку запроса при переходе из калькулятора |
| **по-умолчанию** | null |
| **Необходимость** | Необязательный параметр |
| **примечание** | Данный параметр нужен для того, чтобы если вы нажимаете на кнопку заказать на внешнем калькуляторе, ссылка, ведущая на следующую страницу, содержала эти параметры как часть запроса |

</details>

* Пример иницилизации калькулятора, у которого:
    1. `materialType` имеет UrlName 'photos'
    1. выбран товар с Id 123456
    1. выбран язык с Id 789456
    1. `additionalQueryParams` содержит два параметра
```html
<script>
   // контейнер для калькулятора
   var container = document.getElementById("integratedCalculator"); 
 
   // параметры для иницилизации
   var params = { 
       materialType: 'photos',
       material: 123456,
       languageId: 789456,
       additionalQueryParams: {
          'id_calc_tmp': '45',
          'isExternal': 'true'
       }
   };
 
   // иницилизация
   var integratedCalc = new PxpCalcManager(container, params);                                    
</script>
```

### Шаг 4
* Код интеграции отдельно для 1С
```html
<div id="integratedCalculator"></div>
<script src="http://demo.pixlpark.ru/api/poly1c/calculator/external"></script>
<script>
    var integrated = {
	    materialTypeId: 982756, 
    };
    Poly1CCalcManager("integratedCalculator", integrated);
</script>
```

## Категории и товары

* Получить данный модуль можно через вызов в калькуляторе materialSelector
```html
pxpCalculators[0].materialSelector
```
##### MaterialSelectorController
* Модель модуля по работе с категориями, товарами и атрибутами
* **Основные свойства**

<details>
<summary>materialTypes</summary>

| **Тип переменной** | массив `MaterialType` |
|---|---|
| **описание** | Все доступные категории для вызова из калькулятора |
| **пример вызова** | `pxpCalculators[0].materialSelector.materialTypes()` |

</details>

<details>
<summary>materialType</summary>

| **Тип переменной** | `MaterialType` или `null` |
|---|---|
| **описание** | Выбранная категория |
| **пример вызова** | `pxpCalculators[0].materialSelector.materialType()` |

</details>

<details>
<summary>materialTypeId</summary>

| **Тип переменной** | `number` или `null` |
|---|---|
| **описание** | Id выбранной категории |
| **пример вызова** | `pxpCalculators[0].materialSelector.materialTypeId()` |

</details>

<details>
<summary>materials</summary>

| **Тип переменной** | массив `Material` |
|---|---|
| **описание** | Все доступные товары категории для вызова из калькулятора |
| **пример вызова** | `pxpCalculators[0].materialSelector.materials()` |

</details>

<details>
<summary>material</summary>

| **Тип переменной** | `Material` или `null` |
|---|---|
| **описание** | Модель выбранного в калькуляторе товара категории |
| **пример вызова** | `` |

</details>

<details>
<summary>materialId</summary>

| **Тип переменной** | `number` или `null` |
|---|---|
| **описание** | Id выбранного в калькуляторе товара категории |
| **пример вызова** | `pxpCalculators[0].materialSelector.materialId()` |

</details>

<details>
<summary>haveAttrs</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает есть ли доступные атрибуты |
| **пример вызова** | `pxpCalculators[0].materialSelector.haveAttrs()` |

</details>

<details>
<summary>attributesTree</summary>

| **Тип переменной** | `MaterialTypeAttributesTree` или `null` |
|---|---|
| **описание** | Возвращает дерево атрибутов |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributesTree()` |

</details>

<details>
<summary>attributes</summary>

| **Тип переменной** | массив `MaterialTypeAttribute` |
|---|---|
| **описание** | Возвращает все доступные атрибуты для вызова из калькулятора |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributes()` |

</details>

---

##### MaterialType
* Модель категории. Содержит в себе данные по атрибутам, входящих в нее
* **Основные свойства**

<details>
<summary>id</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Id категории |
| **пример вызова** | `pxpCalculators[0].materialSelector.materialTypes()[0].id` |

</details>

<details>
<summary>title</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Название категории |
| **пример вызова** | `pxpCalculators[0].materialSelector.materialTypes()[0].title` |

</details>

<details>
<summary>name</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Возвращает название из категории для калькулятора, однако если оно пустое, то берется название из редактора |
| **пример вызова** | `pxpCalculators[0].materialSelector.materialTypes()[0].name` |

</details>

<details>
<summary>description</summary>

| **Тип переменной** | `string` или `null` |
|---|---|
| **описание** | Если у категории есть описание, то это оно. Если у категории пустое описание и она доступна для выбора в модальном окне, то берется шаблон текста из ресурсного файла по типу редактора |
| **пример вызова** | `pxpCalculators[0].materialSelector.materialTypes()[0].description` |

</details>

<details>
<summary>calcHelper</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Подсказка для калькулятора (задается в настройках категории) |
| **пример вызова** | `pxpCalculators[0].materialSelector.materialTypes()[0].calcHelper` |

</details>

<details>
<summary>urlName</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Имя категории для ссылки |
| **пример вызова** | `pxpCalculators[0].materialSelector.materialTypes()[0].urlName` |

</details>

<details>
<summary>attributes</summary>

| **Тип переменной** | массив `MaterialTypeAttribute` |
|---|---|
| **описание** | Возвращает все атрибуты категории |
| **пример вызова** | `pxpCalculators[0].materialSelector.materialTypes()[0].attributes` |

</details>

<details>
<summary>hiddenAttributes</summary>

| **Тип переменной** | массив `string` |
|---|---|
| **описание** | Возвращает Id скрытых атрибутов категории (список можно менять на странице настройки калькулятора) |
| **пример вызова** | `pxpCalculators[0].materialSelector.materialTypes()[0].hiddenAttributes` |

</details>

<details>
<summary>isSelected</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает выбрана категория или нет |
| **пример вызова** | `pxpCalculators[0].materialSelector.materialTypes()[0].isSelected()` |

</details>

* **Основные методы**

<details>
<summary>select</summary>

| **Тип переменной** | `void` |
|---|---|
| **описание** | При вызове этого метода категория становится выбранной в калькуляторе и происходит общее обновление состояния калькулятора |
| **пример вызова** | выбор второй категории в массиве категорий `pxpCalculators[0].materialSelector.materialTypes()[1].select()` |

</details>

---

##### Material
* Модель товара
* **Основные свойства**

<details>
<summary>id</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Id товара |
| **пример вызова** | `pxpCalculators[0].materialSelector.materials()[0].id` |

</details>

<details>
<summary>title</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Название товара |
| **пример вызова** | `pxpCalculators[0].materialSelector.materials()[0].title` |

</details>

<details>
<summary>description</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Описание товара для калькулятора |
| **пример вызова** | `pxpCalculators[0].materialSelector.materials()[0].description` |

</details>

<details>
<summary>urlName</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Имя товара для ссылки |
| **пример вызова** | `pxpCalculators[0].materialSelector.materials()[0].urlName` |

</details>

<details>
<summary>attributes</summary>

| **Тип переменной** | Словарь `{ string: string }` |
|---|---|
| **описание** | Словарь, где ключ - уникальный Id атрибута, а значение - название атрибута |
| **пример вызова** | `pxpCalculators[0].materialSelector.materials()[0].attributes` |

</details>

<details>
<summary>isSelected</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает выбран товар или нет |
| **пример вызова** | `pxpCalculators[0].materialSelector.materials()[0].isSelected()` |

</details>

* **Основные методы**

<details>
<summary>select</summary>

| **Тип переменной** | `void` |
|---|---|
| **описание** | При вызове этого метода товар становится выбранным в калькуляторе и происходит обновление состояния калькулятора |
| **пример вызова** | выбор второго товара в массиве товаров `pxpCalculators[0].materialSelector.materials()[1].select()` |

</details>

---

!> Любое некорректное общение с атрибутами может повлечь неправильную работу калькулятора. Будьте очень осторожны, внося скриптами какие-либо изменения в работу данных моделей.
* Стоит отметить, что для большинства задач вам будет достаточно использования дерева атрибутов `MaterialTypeAttributesTree`.

##### MaterialTypeAttributesTree
* Модель дерева атрибутов. Отвечает за всю логику выбора атрибутов, хранит в себе данные о текущих выбранных вершинах дерева и позволяет менять их выбор.
* **Основные свойства**

<details>
<summary>selectedAttributesValues</summary>

| **Тип переменной** | массив `MaterialTypeAttributeValue` |
|---|---|
| **описание** | Выбранные значения атрибутов |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributesTree().selectedAttributesValues()` |
| **подсказка** | Так же стоит помнить, что `selectedAttributesValues` - наблюдаемое свойство, и на него можно сделать `subscribe` для учета изменения значений атрибутов. Подробнее тут: [Explicitly subscribing to observables](https://knockoutjs.com/documentation/observables) |

</details>

* **Основные методы**

<details>
<summary>getRoot</summary>

| **Тип переменной** | `MaterialTypeAttributesTreeLeaf` или `null` |
|---|---|
| **описание** | Получить корень дерева атрибутов |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributesTree().getRoot()` |

</details>

##### MaterialTypeAttributesTreeLeaf
* Модель вершины дерева атрибутов. Содержит в себе прямую ссылку на предыдущую вершину дерева, товар, который привязан к этой вершине и методы для получения более подробных данных о вершине.
* **Основные свойства**

<details>
<summary>index</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Номер вершины на вершине-родителе (порядковый номер отображения) |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributesTree().selectedAttributesValues()[0].index` |

</details>

<details>
<summary>leafName</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Отображаемое имя веришны (имя значения атрибута) |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributesTree().selectedAttributesValues()[0].leafName` |

</details>

<details>
<summary>attributeValue</summary>

| **Тип переменной** | `MaterialTypeAttributeValue` |
|---|---|
| **описание** | Значение атрибута, которое прикреплено к данной вершине |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributesTree().selectedAttributesValues()[0].attributeValue` |

</details>

<details>
<summary>material</summary>

| **Тип переменной** | `Material` или `null` |
|---|---|
| **описание** | Товар, который прикрелен к данной вершине |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributesTree().selectedAttributesValues()[0].material` |

</details>

<details>
<summary>branches</summary>

| **Тип переменной** | Словарь `{ string: MaterialTypeAttributesTreeLeaf }` или `null` |
|---|---|
| **описание** | Словарь, где ключ - имя вершины, а ключ - вершина |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributesTree().selectedAttributesValues()[0].branches` |

</details>

<details>
<summary>selectedLeaf</summary>

| **Тип переменной** | `MaterialTypeAttributesTreeLeaf` или `null` |
|---|---|
| **описание** | Выбранная вершина на текущем уровне дерева |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributesTree().selectedAttributesValues()[0].selectedLeaf()` |

</details>

<details>
<summary>selectedLeafIndex</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Индекс выбранной вершины на текущем уровне дерева |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributesTree().selectedAttributesValues()[0].selectedLeafIndex()` |

</details>

* **Основные методы**

<details>
<summary>getBranchesLeafs</summary>

| **Тип переменной** | массив `MaterialTypeAttributesTreeLeaf` |
|---|---|
| **описание** | Возвращает все вершины, которые можно выбрать от этой вершины |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributesTree().selectedAttributesValues()[0].getBranchesLeafs()` |

</details>

<details>
<summary>select</summary>

| **Тип переменной** | `void` |
|---|---|
| **описание** | Выбрать эту вершину. При выборе вершине автоматически выбирается товар, который к ней привязан и вершины, которые идут далее по дереву от выбранной |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributesTree().selectedAttributesValues()[0].select()` |

</details>

<details>
<summary>selectLeaf</summary>

| **Тип переменной** | `void` |
|---|---|
| **описание** | Выбрать вершину на текущем уровне дерева по имени |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributesTree().selectedAttributesValues()[0].selectLeaf("leaf2")` |

</details>

##### MaterialTypeAttribute
* Модель атрибута категории. Содержит в себе список значений атрибута.
* **Основные свойства**

<details>
<summary>id</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Id атрибута |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributes()[0].id` |

</details>

<details>
<summary>title</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Название атрибута |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributes()[0].title` |

</details>

<details>
<summary>cssClass</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Класс для атрибута |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributes()[0].cssClass` |

</details>

<details>
<summary>isHidden</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает скрыт ли атрибут |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributes()[0].isHidden` |

</details>

<details>
<summary>values</summary>

| **Тип переменной** | массив `MaterialTypeAttributeValue` |
|---|---|
| **описание** | Все значения атрибута |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributes()[0].values` |

</details>

<details>
<summary>jsFunction</summary>

| **Тип переменной** | `string` или `null` |
|---|---|
| **описание** | Название функции или ее текст. При выборе атрибута - исполняется |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributes()[0].jsFunction()` |

</details>

##### MaterialTypeAttributeValue
* Модель значения атрибута категории.
* **Основные свойства**

<details>
<summary>attribute</summary>

| **Тип переменной** | `MaterialTypeAttribute` |
|---|---|
| **описание** | Атрибут, в котором находится данное значение (проще говоря атрибут-родитель) |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributes()[0].values[0].attribute` |

</details>

<details>
<summary>title</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Название значения атрибута |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributes()[0].values[0].title` |

</details>

<details>
<summary>description</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Описание значения атрибута |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributes()[0].values[0].description` |

</details>

<details>
<summary>calcHelper</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Описания значения атрибута для калькулятора |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributes()[0].values[0].calcHelper` |

</details>

<details>
<summary>jsFunction</summary>

| **Тип переменной** | `string` или `null` |
|---|---|
| **описание** | Название функции или ее текст. При выборе значения атрибута - исполняется |
| **пример вызова** | `pxpCalculators[0].materialSelector.attributes()[0].values[0].jsFunction()` |

</details>

## Размеры редактора
* Получить данный модуль можно через вызов в калькуляторе `editorSettingsController`.
```html
pxpCalculators[0].editorSettingsController
```

##### EditorSettingsController
* Модель модуля редакторов товара. Он хранит в себе данные о редакторе для выбранного товара, его параметры и выбранные размеры. На данный момент модуль поддерживает только редакторы интерьера, дизайна и проверки макетов.
* **Основные свойства**

<details>
<summary>isAvailable</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает доступен ли модуль |
| **пример вызова** | `pxpCalculators[0].editorSettingsController.isAvailable()` |

</details>

<details>
<summary>editorState</summary>

| **Тип переменной** | `CalcEditorState` или `null` |
|---|---|
| **описание** | Текущее состояние настроек для редактора |
| **пример вызова** | `pxpCalculators[0].editorSettingsController.editorState()` |

</details>

<details>
<summary>isEditEditorSizesAvailable</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает доступен ли выбор произвольных размеров настроек для редактора |
| **пример вызова** | `pxpCalculators[0].editorSettingsController.isEditEditorSizesAvailable()` |

</details>

---

* Для каждого редактора есть своя модель настроек. Соответственно, когда вы через модуль получаете `editorState`, сделайте проверку на то, какой редактор настроек у этого товара. Сделать это можно через проверку свойства `editorType` в `editorState`.
```html
// Например, вам нужно получить состояние настроек для редактора только если это редактор проверки макетов
var editorState = pxpCalculators[0].editorSettingsController.editorState();
 
// проверим, что editorState не null и что оно подходит под наши требования
if (editorState != null && editorState.editorType === 7) {
    // ваш код
}
```

##### CalcCanvasEditorState
* Модель настроек для редактора интерьеров.
* **Основные свойства**

<details>
<summary>editorType</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Индекс редактора |
| **значение** | 9 |
| **пример вызова** | `pxpCalculators[0].editorSettingsController.editorState().editorType` |

</details>

<details>
<summary>canvasEditorInfo</summary>

| **Тип переменной** | `EditorSizeInfo` или `null` |
|---|---|
| **описание** | Текущее состояние настроек размеров для редактора интерьеров |
| **пример вызова** | `pxpCalculators[0].editorSettingsController.editorState().canvasEditorInfo` |

</details>

##### CalcGiftEditorState
* Модель настроек для редактора сувениров.
* **Основные свойства**

<details>
<summary>editorType</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Индекс редактора |
| **значение** | 8 |
| **пример вызова** | `pxpCalculators[0].editorSettingsController.editorState().editorType` |

</details>

<details>
<summary>giftEditorInfo</summary>

| **Тип переменной** | `EditorSizeInfo` или `null` |
|---|---|
| **описание** | Текущее состояние настроек размеров для редактора сувениров |
| **пример вызова** | `pxpCalculators[0].editorSettingsController.editorState().giftEditorInfo` |

</details>

##### CalcMockupEditorState
* Модель настроек для редактора проверки макетов.
* **Основные свойства**

<details>
<summary>editorType</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Индекс редактора |
| **значение** | 7 |
| **пример вызова** | `pxpCalculators[0].editorSettingsController.editorState().editorType` |

</details>

<details>
<summary>coverInfo</summary>

| **Тип переменной** | `EditorSizeInfo` или `null` |
|---|---|
| **описание** | Текущее состояние настроек размеров обложек для редактора проверки макетов |
| **пример вызова** | `pxpCalculators[0].editorSettingsController.editorState().coverInfo` |

</details>

<details>
<summary>pageInfo</summary>

| **Тип переменной** | `EditorSizeInfo` или `null` |
|---|---|
| **описание** | Текущее состояние настроек размеров разворотов для редактора проверки макетов |
| **пример вызова** | `pxpCalculators[0].editorSettingsController.editorState().pageInfo` |

</details>

<details>
<summary>flyleafInfo</summary>

| **Тип переменной** | `EditorSizeInfo` или `null` |
|---|---|
| **описание** | Текущее состояние настроек размеров форзацев для редактора проверки макетов |
| **пример вызова** | `pxpCalculators[0].editorSettingsController.editorState().flyleafInfo` |

</details>

---

* В примерах получения данных для `EditorSizeInfo` я буду использовать укороченную запись, но для понятности предположим, что переменная `eSizeInfo`, откуда достаются данные, это свойство `coverInfo` для настроек редактора проверки макетов:
```html
var eSizeInfo = pxpCalculators[0].editorSettingsController.editorState().coverInfo;
```

##### EditorSizeInfo
* Модель настроек размеров. Содержит в себе размеры для редакторов, которые могут быть использованы в дальнейшем оформлении заказов. Так же тут могут быть установлены собственные размеры, если у товара настроены произвольные размеры.
* **Основные свойства**

<details>
<summary>editorSizes</summary>

| **Тип переменной** | массив `ISizeModel` |
|---|---|
| **описание** | Итоговый массив размеров. Размер массива напрямую зависит от количества страниц |
| **пример вызова** | `eSizeInfo.editorSizes` |
| **пример результата** | `[ { Width: 297, Height: 100 } ]` |

</details>

<details>
<summary>title</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Название |
| **пример вызова** | `eSizeInfo.title` |

</details>

<details>
<summary>isVisible</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает отображаются ли данные настройки в калькуляторе |
| **пример вызова** | `eSizeInfo.isVisible` |

</details>

<details>
<summary>isArbitrarySizeAvailable</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает доступны ли произвольные размеры для данных настроек |
| **пример вызова** | `eSizeInfo.isArbitrarySizeAvailable` |

</details>

<details>
<summary>minEditorWidth</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Минимальная ширина редактора |
| **пример вызова** | `eSizeInfo.minEditorWidth` |

</details>

<details>
<summary>maxEditorWidth</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Максимальная ширина редактора |
| **пример вызова** | `eSizeInfo.maxEditorWidth` |

</details>

<details>
<summary>defaultEditorWidth</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Ширина редактора по умолчанию |
| **пример вызова** | `eSizeInfo.defaultEditorWidth()` |

</details>

<details>
<summary>inputEditorWidth</summary>

| **Тип переменной** | `number` или `string` |
|---|---|
| **описание** | Свойство для указания ширины редактора |
| **пример вызова** | устанавливаем ширину 150 `eSizeInfo.inputEditorWidth(150)` |
| **примечание** | Указывая данные самостоятельно не забудьте после этого провалидировать их методом `validateInputData`, иначе `selectedEditorWidth` не обновится! |

</details>

<details>
<summary>selectedEditorWidth</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Итоговая выбранная ширина редактора |
| **пример вызова** | `eSizeInfo.selectedEditorWidth()` |

</details>

<details>
<summary>minEditorHeight</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Минимальная высота редактора |
| **пример вызова** | `eSizeInfo.minEditorHeight` |

</details>

<details>
<summary>maxEditorHeight</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Максимальная высота редактора |
| **пример вызова** | `eSizeInfo.maxEditorWidth` |

</details>

<details>
<summary>defaultEditorHeight</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Высота редактора по умолчанию |
| **пример вызова** | `eSizeInfo.defaultEditorHeight()` |

</details>

<details>
<summary>inputEditorHeight</summary>

| **Тип переменной** | `number` или `string` |
|---|---|
| **описание** | Свойство для указания высоты редактора |
| **пример вызова** | устанавливаем высоту 150 `eSizeInfo.inputEditorHeight(150)` |
| **примечание** | Указывая данные самостоятельно не забудьте после этого провалидировать их методом `validateInputData`, иначе `selectedEditorHeight` не обновится! |
</details>

<details>
<summary>selectedEditorHeight</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Выбранная высота редактора |
| **пример вызова** | `eSizeInfo.selectedEditorHeight()` |

</details>

<details>
<summary>measureTitle</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Название размерности |
| **пример вызова** | `eSizeInfo.measureTitle()` |

</details>

<details>
<summary>isPagesCountVisible</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Возвращает доступен ли выбор количества страниц для данных настроек |
| **пример вызова** | `eSizeInfo.title` |

</details>

<details>
<summary>minPagesCount</summary>

| **Тип переменной** | `number` или `null` |
|---|---|
| **описание** | Минимальное количество страниц |
| **пример вызова** | `eSizeInfo.minPagesCount` |

</details>

<details>
<summary>maxPagesCount</summary>

| **Тип переменной** | `number` или `null` |
|---|---|
| **описание** | Максимальное количество страниц |
| **пример вызова** | `eSizeInfo.maxPagesCount` |

</details>

<details>
<summary>inputPagesCount</summary>

| **Тип переменной** | `number или string` |
|---|---|
| **описание** | Свойство для указания количества страниц |
| **пример вызова** | устанавливаем количество страниц 30 `eSizeInfo.inputPagesCount(30)` |
| **примечание** | Указывая данные самостоятельно не забудьте после этого провалидировать их методом `validatePagesInputData`, иначе `selectedPagesCount` не обновится! |
</details>

<details>
<summary>selectedPagesCount</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Выбранное количество страниц |
| **пример вызова** | `eSizeInfo.selectedPagesCount()` |

</details>

<details>
<summary>pagesMeasureTitle</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Название количества страниц |
| **пример вызова** | `eSizeInfo.pagesMeasureTitle()` |

</details>

* **Основные методы**

<details>
<summary>validateInputData</summary>

| **Тип переменной** | `void` |
|---|---|
| **описание** | Обновление и валидирование данных из `inputEditorWidth` и `inputEditorHeight` |
| **пример вызова** | `eSizeInfo.validateInputData()` |

</details>

<details>
<summary>validatePagesInputData</summary>

| **Тип переменной** | `void` |
|---|---|
| **описание** | Обновление и валидирование данных из `inputPagesCount` |
| **пример вызова** | `eSizeInfo.validatePagesInputData()` |

</details>

## Опции и позиции

## Переменные

## Тиражи

## Ценовая панель
