# Создание 3D-моделей для предпросмотра

## Основная информация
* __Трехмерная графика__ — раздел компьютерной графики, посвященный методам создания изображений или видео путем моделирования объемных объектов в трехмерном пространстве.
* __3D-моделирование__ — это процесс создания трехмерной модели объекта. Задача 3D-моделирования — разработать визуальный объемный образ желаемого объекта. Модель при этом может как соответствовать объектам из реального мира (автомобили, здания, ураган, астероид), так и быть полностью абстрактной (проекция четырехмерного фрактала).
* __3D-модель__ (далее — модель) — это файл в формате .obj (в рамках редактора Pixlpark). Все модели имеют одинаковую внутреннюю структуру:
    + Область для размещения текстуры (макет из редактора).
    + Область без наложения текстуры.
* __Универсальный 3D-редактор__ — приложение для создания компьютерной графики (далее — CG), трехмерных моделей и сцен. 
* 3D-редакторы, как правило, содержат все необходимое для CG:
    + инструменты моделирования;
    + инструменты анимации;
    + инструменты визуализации.
* Существует большое количество редакторов для CG:
    + Zbrush;
    + Autodesk 3D max;
    + Autodesk Maya;
    + Blender.
* Мы используем для создания моделей редактор __Blender__ - профессиональное, свободное и открытое программное обеспечение для создания трехмерной компьютерной графики, включающее в себя средства моделирования, анимации, рендеринга и т. д.
* В отличии от других бесплатных 3D-редакторов он быстрый, стабильный и активно развивающийся, что обеспечивает ему популярность среди дизайнеров.

## Создание модели
* Для скорейшего изучения программы Blender мы рекомендуем посмотреть на YouTube-канале уроки [Blender 3D-уроки](https://www.youtube.com/channel/UCLYrT1051M_6XkbEc5Te8PA).
* В частности вот эти видео-уроки:
    + [Чашка кофе в Blender](https://www.youtube.com/watch?v=DQBk1Uk0Gfk&t=182s) — низкая сложность.
    + [Моделирование наковальни в Blender](https://www.youtube.com/watch?v=IFLUjeiMcbQ) — средняя сложность.
    + [Плюшевый мишка в Blender](https://www.youtube.com/watch?v=HAU-tVTkfUc) — высокая сложность.
* Первое, про что нужно помнить при создании модели — ее мы готовим для предпросмотра, и она никак не влияет на конечный макет клиента.
* Например, футболка, надетая на тело, имеет рельеф, и изображение на ней будет накладываться на этот рельеф.
* Однако макет в заказе будет в 2D, т. е. обычное плоское изображение в формате, который вы указали при настройке редактора.
* Чтобы модель правильно работала в редакторе, необходимо дать правильные имена объектам в obj-файле:
    + __faces__ — область наложения текстур (область, куда будет размещаться макет).
    + __body__ — область косметических элементов (область, куда не будет размещаться макет).
* Посмотрите, как это сделано на примере модели футболки.
* __Общий вид__
![](../_media/design/design13.png ':size=70%')

* __Область для наложения текстур (faces)__
![](../_media/design/design14.png ':size=70%')

* __Область косметических элементов (body)__
![](../_media/design/design15.png ':size=70%')

## Размещение модели
* Чтобы модель располагалась по центру, нужно разместить ее в редакторе в центре координатной плоскости.
![](../_media/design/design16.png ':size=70%')

## Текстурирование модели
* __Текстура__ — растровое изображение, накладываемое на поверхность полигональной модели для придания ей цвета, окраски или иллюзии рельефа. Использование текстур можно сравнить с рисунком на поверхности скульптуры.
* Чтобы в редакторе созданный макет спроецировался правильно и превратился в текстуру модели, необходимо подготовить карту наложения текстур модели.
* Для этого необходимо выполнить следующие шаги:
    1. Выбрать в редакторе (Blender) объект.
    1. Переключиться в режим редактирования.
    1. Выделить полигоны (клавиша «C»), на которых будет располагаться текстура (выделенные полигоны подсвечиваются оранжевым).
    1. На панели управления снизу выбрать Mesh &rarr; UV Unwrap &rarr; Unwrap или нажмите два раза клавишу U.

![](../_media/design/design17.png ':size=70%')
* Таким образом полигоны будут развернуты в плоскости, чтобы они размещались правильно и относительно друг друга, и относительно карты наложения.

## Создание карты наложения текстур
* Чтобы наложить текстуру правильно, необходимо создать макет (паттерн), на котором будет рассчитываться расположение изображений. Для этого создайте растровый файл размером 1000 на 1000 рх (это значение понадобится при настройке редактора). Сделать это можно при помощи Adobe Photoshop.
![](../_media/design/design18.png ':size=70%')

* Далее, его надо сохранить в любой растровый формат, понятный Blender (JPEG/PNG).
![](../_media/design/design19.png ':size=70%')

* Затем вернуться в Blender для создания карты наложения:
    + Перейти в меню "Editor Type".
    + Выбрать "UV/Image Editor".

![](../_media/design/design20.png ':size=70%')

* На изображении снизу видно, как выглядит развертка в абстрактной области (1).
* Теперь надо загрузить подготовленный ранее паттерн, на котором будут расположены поверхности (2), нажав кнопку «Open»
![](../_media/design/design21.png ':size=70%')
![](../_media/design/design22.png ':size=60%')

* Загруженный паттерн в настройке развертки будет отображаться как фон (1).
* Теперь необходимо выделить области и отредактировать их положение и размер. Для этого нужно включить параметр выделения "UV selection and display mode: Face" (2).
![](../_media/design/design23.png ':size=70%')

* И выделить последовательно каждую область с помощью инструмента "Кисть" (клавиша "С"), переверните ("R"), измените масштаб ("S") и переместите ("G").
![](../_media/design/design24.png ':size=70%')

* В результате получится следующее:
![](../_media/design/design25.png ':size=70%')

* Далее надо экспортировать паттерн с разверткой в растровый файл. Для этого:
    + В режиме "UV/Image Editor" нужно выбрать на нижней панели вкладку "UVs".
    + Выбрать "Export UV layout".
    + В открывшемся файловом менеджере установить параметры экспорта (оставить размер паттерна неизменным, т. е. 1000×1000 рх).

![](../_media/design/design26.png ':size=70%')
![](../_media/design/design27.png ':size=30%')

* Затем вернуться в редактор растровой графики (Adobe Photoshop). Полученное растровое изображение необходимо привести к виду:
![](../_media/design/design28.png ':size=50%')

* Так как паттерн имеет размер 1000×1000 px, то и масштаб 1×1.
* Размеры рамок в области груди и спины в данном примере заданы в формате А3 (297×420 рх), так как он максимальный для печати на футболках. Размеры отпечатка на рукавах (если предполагается печать и на рукавах) надо задать в (100×60) × 2 = 200×120. Умножение на два здесь необходимо из-за увеличения развертки рукавов относительно груди и спины.
* Если рамки не помещаются в область развертки, нужно уменьшить их пропорционально и разместить в нужной области.
* Далее с помощью инструмента "Линейка" ("Rule Tool") (1) надо замерить отступы от верхнего левого угла каждой отмеченной области (2–3). Эти отступы важны для настройки правильного наложения макета на модель на сайте. Поэтому, чтобы не запутаться и не забыть про эти отступы, можно их отметить непосредственно на изображении (3).
![](../_media/design/design29.png ':size=70%')

* Настройка модели и карты закончена. Далее необходимо экспортировать модель в файл формата obj.
* Для этого надо:
    + Выбрать в редакторе (Blender) вкладку в верхней панели управления "File"».
    + Перейти к пункту "Export".
    + Выбрать вариант экспорта "Wavefront (.obj)".
    + Указать директорию, в которую будет экспортирован файл, и нажать кнопку "Export OBJ".

![](../_media/design/design30.png ':size=70%')
* Далее сохраненную модель необходимо загрузить в панель управления и настроить наложение текстур для разных областей печати.