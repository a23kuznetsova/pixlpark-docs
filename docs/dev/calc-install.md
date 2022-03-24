# Установка калькулятора на сайт

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

## Шаг 1
* Cоздать на странице контейнер, в котором позже будет находиться калькулятор.
```js
<div id="integratedCalculator"></div>
```
* В данном случае это простой контейнер `div` с Id `integratedCalculator`. В будущем в нем будет разметка калькулятора.

## Шаг 2
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
| __описание__ | Загружает на страницу css файл по указанной ссылке |
| __по-умолчанию__ | common.css |
| __необходимость__ | Необязательный параметр |
| __пример использования__ | `<script src="http://demo.pixlpark.ru/api/calc/externalCalc?cssLink=/content/css/cssCalc"></script>` |

</details>

<details>
<summary>photolabId</summary>

| photolabId | |
|---|---|
| __описание__ | Загружает калькулятор от конкретного сайта по указанному Id |
| __по-умолчанию__ | Берется от указанного домена |
| __необходимость__ | Необязательный параметр |
| __пример использования__ | `<script src="http://demo.pixlpark.ru/api/calc/externalCalc?photolabId=3264"></script>` |

</details>

## Шаг 3
* После того как скрипт загружен, необходимо иницилизировать калькулятор. Чтобы это сделать, необходимо вызвать функцию __PxpCalcManager__. Рассмотрим параметры, которые входят в эту функцию:

* __PxpCalcManager__  
Модель, содержащая в себе методы для иницилизации калькулятора на странице  
__Параметры конструктора*

<details>
<summary>element</summary>

| | HTMLElement |
|---|---|
| __описание__ | Контейнер, в который будет заружен калькулятор |

</details>

<details>
<summary>params</summary>

| | ParamsModel |
|---|---|
| __описание__ | Набор параметров для настройки иницилизации калькулятора |

</details>

* __ParamsModel__  
Набор параметров для настройки иницилизации калькулятора  
__Поля*

<details>
<summary>materialType</summary>

| __Тип переменной__ | `string` или `number` |
|---|---|
| __описание__ | Id или UrlName категории (можно найти в настройках категории) |
| __Необходимость__ | Обязательный параметр |

</details>

<details>
<summary>origin</summary>

| __Тип переменной__ | `string` |
|---|---|
| __описание__ | Оригинальный домен, на который будет переходить пользователь для оформления заказа |
| __по-умолчанию__ | Домен от которого загружается скрипт для иницилизации (если брать пример выше - то http://demo.pixlpark.ru) |
| __Необходимость__ | Необязательный параметр |

</details>

<details>
<summary>apiUrl</summary>

| __Тип переменной__ | `string` |
|---|---|
| __описание__ | Домен для API запросов (загрузка данных по категориям, товарам, расчет цен и т.п.) |
| __по-умолчанию__ | Параметр origin |
| __Необходимость__ | Необязательный параметр |

</details>

<details>
<summary>material</summary>

| __Тип переменной__ | `string` или `number` |
|---|---|
| __описание__ | Id или UrlName товара (можно найти в настройках товара) |
| __по-умолчанию__ | null |
| __Необходимость__ | Необязательный параметр |

</details>

<details>
<summary>config</summary>

| __Тип переменной__ | `string` |
|---|---|
| __описание__ | Имя конфигурации, задается в настройках калькулятора |
| __по-умолчанию__ | default |
| __Необходимость__ | Необязательный параметр |

</details>

<details>
<summary>languageId</summary>

| __Тип переменной__ | `number` |
|---|---|
| __описание__ | Id языка сайта |
| __по-умолчанию__ | Id главного языка сайта из параметра origin |
| __Необходимость__ | Необязательный параметр |

</details>

<details>
<summary>isMobile</summary>

| __Тип переменной__ | `boolean` |
|---|---|
| __описание__ | Возвращает мобильная версия калькулятора или нет |
| __по-умолчанию__ | false |
| __Необходимость__ | Необязательный параметр |

</details>

<details>
<summary>additionalQueryParams</summary>

| __Тип переменной__ | Словарь `{ string: string }` |
|---|---|
| __описание__ | Собственные параметры, которые уйдут в строку запроса при переходе из калькулятора |
| __по-умолчанию__ | null |
| __Необходимость__ | Необязательный параметр |
| __примечание__ | Данный параметр нужен для того, чтобы если вы нажимаете на кнопку заказать на внешнем калькуляторе, ссылка, ведущая на следующую страницу, содержала эти параметры как часть запроса |

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

## Шаг 4
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
