# Создание PSD-шаблонов для календарей

## Основная информация
* Шаблон календаря по своей структуре отличается для шаблона листовой печати только наличием папки `[calendar-grid]`, в которой находятся графические слои с календарными сетками. При этом каждый слой должен именоваться `[2022-1]`, где "2022" – год, "1" – месяц.
* К примеру, в шаблоне (на один месяц) на 4 года, в папке `[calendar-grid]` должны быть 4 слоя: `[2022-1]`, `[2023-1]`, `[2024-1]`, `[2025-1]`. При этом все слои, кроме первого, должны быть скрыты.
![](../_media/design/design04.png ':size=30%')
* Если обложка календаря содержит год, то в качестве названия данного текстового слоя рекомендуем использовать константу `[calendar-title]`. В этом случае предзаданный год будет заменен на выбранный клиентом стартовый год календаря.
* Для того чтобы год на превью календаря менялся автоматически, необходимо использовать папку `[template-preview]`, содержащую слои календарных сеток с именами вида `[2022-0]`, где "2022" – год, "0" – обложка.
![](../_media/design/design05.png ':size=30%')

## Пример шаблона
* Обложка:
![](../_media/design/design06.png ':size=70%')
* Разворот:
![](../_media/design/design07.png ':size=70%')