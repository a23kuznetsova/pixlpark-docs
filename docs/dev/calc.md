Вот от сюда все перенести: https://pixlpark.ru/faq/prices/calc

# Установка калькулятора на сайт

## Общая информация
!> В данной документации собрано лишь самое необходимое для адекватного использования калькулятора через скрипты. Использование свойств или методов, которые есть в калькуляторе, но не указаны тут, может кардинально повлиять на его работу. Чаще всего такие свойства или методы помечаются через _ в начале.<br />Используйте их на свой страх и риск.

### О хранении и доступе
* Все калькуляторы на странице хранятся в массиве pxpCalculators. Так, например, если на странице 2 калькулятора, то доступ ко второму будет по индексу 1 (считаем от нуля)
```js
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
```js
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
```js
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
```js
<div id="integratedCalculator"></div>
```
* В данном случае это простой контейнер `div` с Id `integratedCalculator`. В будущем в нем будет разметка калькулятора.

### Шаг 2
* Дальше через тег `<script>` получим необходимый скрипт для иницилизации калькулятора. Для этого нужно от сайта на платформе Pixlpark сделать следующий вид запроса через API:
```js
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
```js
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
```js
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
```js
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
| **пример вызова** | выбор второй категории в массиве категорий <br>`pxpCalculators[0].materialSelector.materialTypes()[1].select()` |

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
| **пример вызова** | выбор второго товара в массиве товаров <br>`pxpCalculators[0].materialSelector.materials()[1].select()` |

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
```js
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
```js
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
```js
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
| **пример вызова** | устанавливаем ширину 150 <br>`eSizeInfo.inputEditorWidth(150)` |
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
| **пример вызова** | устанавливаем высоту 150 <br>`eSizeInfo.inputEditorHeight(150)` |
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
| **пример вызова** | устанавливаем количество страниц 30 <br>`eSizeInfo.inputPagesCount(30)` |
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

* Получить данный модуль можно через вызов в калькуляторе `customWorkSelector`.
```js
pxpCalculators[0].customWorkSelector
```
##### CalcCustomWorkSelectorController
* Модель модуля опций. Хранит в себе всю информацю о состоянии опций, переменных опций, позиций опций, выбранных в позициях произвольных размеров и файлов  
__Основные свойства__

<details>
<summary>works</summary>

| **Тип переменной** | массив `CalcCustomWorkState` |
|---|---|
| **описание** | Массив всех опций |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()` |

</details>

<details>
<summary>availableWorks</summary>

| **Тип переменной** | массив `CalcCustomWorkState` |
|---|---|
| **описание** | Массив всех доступных для выбора опций |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.availableWorks()` |

</details>

<details>
<summary>worksDictionary</summary>

| **Тип переменной** | Словарь `{ number: CalcCustomWorkState }` |
|---|---|
| **описание** | Словарь опций, где ключ - Id опции, а значение - опция |
| **пример вызова** | получаем словарь опций `var wDict = pxpCalculators[0].customWorkSelector.worksDictionary();`<br>получаем опцию с Id 123456 `var work = wDict[123456];` |

</details>

<details>
<summary>itemsDictionary</summary>

| **Тип переменной** | `{ number: CalcCustomWorkItemState }` |
|---|---|
| **описание** | Словарь позиции опции, где ключ - Id позиции опции, а значение - позиции |
| **пример вызова** | получаем словарь всех позиций `var iDict = pxpCalculators[0].customWorkSelector.itemsDictionary();`<br>получаем позицию с Id 123456 `var item = iDict[123456];` |

</details>

<details>
<summary>finalState</summary>

| **Тип переменной** | массив `ICustomWorkOutputState` |
|---|---|
| **описание** | Текущее финальное состояние опций в калькуляторе |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.finalState()` |

* пример итогового состояния
```js
[
    {
        WorkId: 729251,
        Items: [
            {
                ItemId: 2789540,
                Quantity: 1
            }
        ]
    },
    {
        WorkId: 527204,
        Items: [
            {
                ItemId: 1937970,
                Quantity: 10
            }
        ]
    }
]
```

</details>

* __Основные методы__

<details>
<summary>loadState</summary>

| **Тип переменной** | `void` |
|---|---|
| **описание** | Загрузка предзаданного состояния выбора опций |
| **параметры функции** | массив `ICustomWorkOutputState` |
| **пример вызова** |  |
| получаем состояние для загрузки из первого калькулятора | `var stateToLoad = pxpCalculators[0].customWorkSelector.finalState();` |
| загружаем его во второй калькулятор | `pxpCalculators[1].customWorkSelector.loadState(stateToLoad);` |

> Состояние можно предварительно сохранить на странице и через скрипт загружать его в нужный калькулятор, если вам требуется настройка на нужные данные при загрузке старницы.

</details>

##### CalcCustomWorkState
* Модель опции. Хранит в себе информацию про опцию, переменные и ее позиции.  
__Основные свойства__

<details>
<summary>variablesController</summary>

| **Тип переменной** | `CalcVariablesController` или `null` |
|---|---|
| **описание** | Контроллер переменных (подробнее в разделе "Переменные") |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].variablesController` |

</details>

<details>
<summary>workId</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Id опции |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].workId` |

</details>

<details>
<summary>title</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Название опции |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].title` |

</details>

<details>
<summary>description</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Описание опции для калькулятора |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].description` |

</details>

<details>
<summary>isAvailable</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает доступна опция для выбора в калькуляторе или нет |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].isAvailable()` |

</details>

<details>
<summary>isRequired</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает опция обязательна или нет |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].isRequired` |

</details>

<details>
<summary>isCheckbox</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает множественный ли выбор позиций в опции или нет |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].isCheckbox` |

</details>

<details>
<summary>isHidden</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает опция скрыта или нет |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].isHidden()` |

</details>

<details>
<summary>items</summary>

| **Тип переменной** | массив `CalcCustomWorkItemState` |
|---|---|
| **описание** | Все включенные позиции опции |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].items()` |

</details>

<details>
<summary>itemsAvailable</summary>

| **Тип переменной** | массив `CalcCustomWorkItemState` |
|---|---|
| **описание** | Все доступные для выбора в калькуляторе позиции опции |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].itemsAvailable()` |

</details>

<details>
<summary>selectedItems</summary>

| **Тип переменной** | массив `CalcCustomWorkItemState` |
|---|---|
| **описание** | Выбранные позиции опции |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].selectedItems()` |

</details>

<details>
<summary>selectedItemIds</summary>

| **Тип переменной** | массив `number` |
|---|---|
| **описание** | Выбранные Id позиций опции |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].selectedItemIds()` |

</details>

* __Основные методы__

<details>
<summary>validate</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает валидны данные в опции или нет |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].validate()` |

</details>

<details>
<summary>price</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Возвращает текущую цену опции |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].price()` |

</details>

##### CalcCustomWorkItemState
* Модель позиции опции  
__Основные свойства__

<details>
<summary>itemId</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Id позиции опции |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].items()[0].itemId()` |

</details>

<details>
<summary>title</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Название позиции опции |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].items()[0].title` |

</details>

<details>
<summary>description</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Описание позиции опции |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].items()[0].description` |

</details>

<details>
<summary>work</summary>

| **Тип переменной** | `CalcCustomWorkState` |
|---|---|
| **описание** | Опция родитель |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].items()[0].work` |

</details>

<details>
<summary>asInfo</summary>

| **Тип переменной** | `CalcCustomWorkItemArbitrarySizeState` или `null` |
|---|---|
| **описание** | Модель с информацией о произвольных размерах позиции опции |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].items()[0].asInfo` |

</details>

<details>
<summary>totalPrice</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Итоговая цена позиции опции |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].items()[0].totalPrice()` |

</details>

<details>
<summary>price</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Цена позиции опции без дополнительных стоимостей и процентов |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].items()[0].price()` |

</details>

<details>
<summary>additionalPrice</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Дополнительная цена позиции опции |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].items()[0].additionalPrice()` |

</details>

<details>
<summary>isAvailable</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает доступна позиция опции для выбора или нет |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].items()[0].isAvailable()` |

</details>

<details>
<summary>isSelected</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает выбрана позиция опции или нет |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].items()[0].isSelected()` |

</details>

<details>
<summary>quantity</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Количество позиции опции |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].items()[0].quantity()` |

</details>

<details>
<summary>totalPriceString</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Форматированая итоговая цена позиции опции (отдается в HTML) |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].items()[0].quantity()` |
| **пример результата** | `0,00 <span class="postfix currency rub"><span>руб.</span></span>` |

</details>

##### CalcCustomWorkItemArbitrarySizeState
* Модель произвольных размеров позиции опции. Содержит в себе данные по фиксированным размерам, диапазону размеров, расчету по формуле, расчету по тексту и страничному расчету  
__Основные свойства__

<details>
<summary>finalState</summary>

| **Тип переменной** | `IArbitrarySizeOutputData` |
|---|---|
| **описание** | Итоговое состояние произвольных размеров позиции опции |
| **пример вызова** | `pxpCalculators[0].customWorkSelector.works()[0].items()[0].asInfo.finalState()` |

* Пример результата
```js
{
    Width: 2,
    Height: 2
}
```

</details>

---
### О финальных состояниях
* Финальные состояния опций и позиций используются для расчетных данных, продолжения заказа и для метода `loadState` в модуле опций. Ниже указаны модели финальных состояний со всеми возможными полями. Как уже было описано выше, получить финальное состояние опций можно через команду ниже:
```js
var finalCustomWorksState = pxpCalculators[0].customWorkSelector.finalState()
```

##### ICustomWorkOutputState
* Модель финального состояния опции  
__Поля__

<details>
<summary>WorkId</summary>

| **Тип переменной** | `number` или `null` |
|---|---|
| **описание** | Id опции |

</details>

<details>
<summary>Items</summary>

| **Тип переменной** | массив `ICustomWorkItemOutputState` или `null` |
|---|---|
| **описание** | Массив финальных состояний всех выбранных позиций в опции |

</details>

##### ICustomWorkItemOutputState
* Модель финального состояния позиции опции  
__Поля__

<details>
<summary>ItemId</summary>

| **Тип переменной** | `number` или `null` |
|---|---|
| **описание** | Id позиции опции |

</details>

<details>
<summary>Quantity</summary>

| **Тип переменной** | `number` или `null` |
|---|---|
| **описание** | Количество позиции опции |

</details>

<details>
<summary>UserTemplateId</summary>

| **Тип переменной** | `number` или `null` или `undefined` |
|---|---|
| **описание** | Id пользовательского шаблона |

</details>

<details>
<summary>Size</summary>

| **Тип переменной** | `IArbitrarySizeOutputData` или `null` или `undefined` |
|---|---|
| **описание** | Модель финального состояния произвольных размеров позиции опции |

</details>

<details>
<summary>Variables</summary>

| **Тип переменной** | массив `IVariableDTO` или `null` или `undefined` |
|---|---|
| **описание** | Массив финальных состояний переменных (подробнее в разделе "Переменные") |

</details>

<details>
<summary>Files</summary>

| **Тип переменной** | массив `number` или `null` или `undefined` |
|---|---|
| **описание** | Массив Id выбранных файлов |

</details>

##### IArbitrarySizeOutputData
* Модель финального состояния произвольных размеров позиции опции  
__Основные свойства__

<details>
<summary>Width</summary>

| **Тип переменной** | `number` или `undefined` |
|---|---|
| **описание** | Итоговая ширина |

</details>

<details>
<summary>Height</summary>

| **Тип переменной** | `number` или `undefined` |
|---|---|
| **описание** | Итоговая высота |

</details>

<details>
<summary>Text</summary>

| **Тип переменной** | `string` или `undefined` |
|---|---|
| **описание** | Итоговый текст |

</details>

## Переменные

* Принцип работы модуля переменных в том, что он существует отдельно для каждой опции, поскольку в каждой опции может быть свой набор переменных. Получить данный модуль можно через обращение к `variablesController` в нужной для вас опции.
```js
var variablesCtrl = pxpCalculators[0].customWorkSelector.works()[0].variablesController
```
* В примерах далее будет использоваться обращение к модулю через переменную `variablesCtrl` для укорочения записи:

##### CalcVariablesController
* Модель модуля переменных. Хранит в себе информацию о доступных переменных для опции и методы их поиска  
__Основные свойства__

<details>
<summary>availableVariables</summary>

| **Тип переменной** | массив `CalcVariableState` |
|---|---|
| **описание** | Массив всех доступных переменных для опции |
| **пример вызова** | `variablesCtrl.availableVariables()` |

</details>

<details>
<summary>variablesExists</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает есть ли переменные или нет для данной опции |
| **пример вызова** | `variablesCtrl.variablesExists()` |

</details>

* __Основные методы__

<details>
<summary>getVariableByUniqueName</summary>

| **Тип переменной** | `CalcVariableState` или `null` |
|---|---|
| **описание** | Возвращает переменную по ее имени |
| **параметры функции** | Уникальное имя переменной в виде строки |
| **пример вызова** | получить переменную с именем _mass_ `variablesCtrl.getVariableByUniqueName('mass')` |

</details>

---

##### CalcVariableState
* Модель переменной  
__Основные свойства__

<details>
<summary>uniqueName</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Уникальное имя переменной |
| **пример вызова** | `variablesCtrl.availableVariables()[0].uniqueName` |

</details>

<details>
<summary>title</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Название переменной |
| **пример вызова** | `variablesCtrl.availableVariables()[0].title` |

</details>

<details>
<summary>measurement</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Размерность переменой |
| **пример вызова** | `variablesCtrl.availableVariables()[0].measurement` |

</details>

<details>
<summary>inputValue</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Свойство для указания значения в переменную |
| **пример вызова** | присвоение переменной значения 150 `variablesCtrl.availableVariables()[0].inputValue(150)` |

> Указывая данные самостоятельно не забудьте после этого провалидировать их методом `validateInputData`, иначе `selectedValue` не обновится!

</details>

<details>
<summary>selectedValue</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Выбранное значение в переменной |
| **пример вызова** | `variablesCtrl.availableVariables()[0].selectedValue()` |

</details>

<details>
<summary>isVisible</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает отображается переменная или нет |
| **пример вызова** | `variablesCtrl.availableVariables()[0].isVisible()` |

</details>

* __Основные методы__

<details>
<summary>validateInputData</summary>

| **Тип переменной** | `void` |
|---|---|
| **описание** | Обновление и валидирование данных из `inputValue` |
| **пример вызова** | `variablesCtrl.availableVariables()[0].validateInputData()` |

</details>

---

### О финальных состояниях
* Финальное состояния переменной используется в модели `ICustomWorkItemOutputState` (подробнее о ней написано в разделе «Опции и позиции»). Ниже расписаны все возможные поля в модели финального состояния переменной.

##### IVariableDTO
* Модель финального состояния переменной:  
__Поля__

<details>
<summary>UniqueName</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Уникальное имя переменной |

</details>

<details>
<summary>Value</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Выбранное значение в переменной |

</details>

* Пример финального состояния переменной
```js
{
    UniqueName: 'mass',
    Value: 10                                
}
```

## Тиражи

## Ценовая панель

* Получить данный модуль можно через вызов в калькуляторе `totalPriceCalculator`
```js
pxpCalculators[0].totalPriceCalculator
```

##### CalcTotalPriceViewController
* Модель ценовой панели. На ней отображаются итоговые цены, кнопки для заказа товара и предупреждения в случае невалидных данных  
__Основные свойства__

<details>
<summary>totalPrice</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Итоговая цена |
| **пример вызова** | `pxpCalculators[0].totalPriceCalculator.totalPrice()` |

</details>

<details>
<summary>totalPriceWithoutDiscounts</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Итоговая цена без скидки |
| **пример вызова** | `pxpCalculators[0].totalPriceCalculator.totalPriceWithoutDiscounts()` |

</details>

<details>
<summary>totalProductPriceWithoutCustomWorks</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Итоговая цена товара без скидки и опций |
| **пример вызова** | `pxpCalculators[0].totalPriceCalculator.totalProductPriceWithoutCustomWorks()` |

</details>

<details>
<summary>totalProductCustomWorksPrice</summary>

| **Тип переменной** | `number` |
|---|---|
| **описание** | Итоговая стоимость опций без скидки |
| **пример вызова** | `pxpCalculators[0].totalPriceCalculator.totalProductCustomWorksPrice()` |

</details>

<details>
<summary>totalPriceFormatted</summary>

| **Тип переменной** | `string` |
|---|---|
| **описание** | Текстовый вид итоговой цены (отдается в HTML) |
| **пример вызова** | `pxpCalculators[0].totalPriceCalculator.totalPriceFormatted()` |
| **пример результата** | `Итого: <span class="price-total" id="">10,00 <span class="postfix currency rub"><span>руб.</span></span></span>` |

</details>

<details>
<summary>visible</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает отображается ценовая панель или нет |
| **пример вызова** | `pxpCalculators[0].totalPriceCalculator.visible()` |

</details>

<details>
<summary>isTotalPriceLoading</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает цена обновляется или нет |
| **пример вызова** | `pxpCalculators[0].totalPriceCalculator.isTotalPriceLoading()` |

</details>

<details>
<summary>continueOrderClickIsEnabled</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает кнопка "Продолжить заказ" доступна или нет |
| **пример вызова** | `pxpCalculators[0].totalPriceCalculator.continueOrderClickIsEnabled()` |

</details>

<details>
<summary>addToCartEnabled</summary>

| **Тип переменной** | `boolean` |
|---|---|
| **описание** | Возвращает кнопка "Добавить в корзину" доступна или нет |
| **пример вызова** | `pxpCalculators[0].totalPriceCalculator.addToCartEnabled()` |

</details>

* __Основные методы__

<details>
<summary>show</summary>

| **Тип переменной** | `void` |
|---|---|
| **описание** | Показать модуль ценовой панели |
| **пример вызова** | `pxpCalculators[0].totalPriceCalculator.show()` |

</details>

<details>
<summary>hide</summary>

| **Тип переменной** | `void` |
|---|---|
| **описание** | Скрыть модуль ценовой панели |
| **пример вызова** | `pxpCalculators[0].totalPriceCalculator.hide()` |

</details>

<details>
<summary>refreshPrice</summary>

| **Тип переменной** | `void` |
|---|---|
| **описание** | Метод для обновления цены |
| **условие выполнения** | Обновление калькулятора в данный момент не происходит, и не было ошибок с загрузкой состояния |
| **пример вызова** | `pxpCalculators[0].totalPriceCalculator.refreshPrice()` |

</details>

<details>
<summary>continueOrderClick</summary>

| **Тип переменной** | `void` |
|---|---|
| **описание** | Метод для активации события "Продолжение заказа" |
| **пример вызова** | `pxpCalculators[0].totalPriceCalculator.continueOrderClick()` |

</details>

<details>
<summary>addToCartClick</summary>

| **Тип переменной** | `void` |
|---|---|
| **описание** | Метод для активации события "Добавить в корзину" |
| **пример вызова** | `pxpCalculators[0].totalPriceCalculator.addToCartClick()` |

</details>