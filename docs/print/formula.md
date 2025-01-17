# Карточка формулы
## Описание
* __Промежуточная формула__ - это формула, которую можно использовать в других формулах или самих промежуточных формулах. 
* Промежуточные формулы используются в опциях с алгоритмом расчета позиции "__Цена позиции динамическая__" для задания стоимости позиции.
* Использование промежуточных формул позволяет создавать конструкции, которые можно использовать в нескольких местах одновременно без дублирования. Так, например, если есть три опции, то в каждой можно использовать промежуточную формулу. И все изменения в ней автоматически применяются ко всем трем опциям.
* Итоговое значение промежуточной формулы может принимать значение числа или логической переменной (истина или ложь). Первый можно использовать везде, второй - только в формулах правил отображения опций.
* В промежуточных формулах можно использовать различные данные, однако, если в формуле есть данные опции, которая не используется в товаре, то ее итоговое значение будет по умолчанию (для чисел - 0, для логических значений - ложь).
* В редакторе формулы другие промежуточные формулы можно использовать из блока "__подформулы__".

## Основная информация
* __Уникальное имя__ - имя, по которому можно обращаться к промежуточной формуле из других формул.
* __Название__ - название промежуточной формулы.
* __Категория__ - название категории промежуточной формулы, которое используется лишь для фильтрации формул на странице списка.
* __Описание__ - описание промежуточной формулы.
* __Текст формулы__ - содержимое промежуточной формулы.
