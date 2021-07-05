# Установка пакета!


В первую очередь необходимо прописать в командной строке `docsify-cli` для установки пакета
```bash
npm i docsify-cli -g
```
После чего нужно выбрать директорию с проектом, пример :
```bash
cd C:\Projects\PixlParkHub
```
И запустить локальный сервер для предпросмотра изменений
```bash
docsify serve docs
```
После чего страница будет доступна по локальному адресу


## Примеры
 
### Важный контент
!> Внимание это важная информация

!> **Важно** просто текст

### Курсив
?> _КУРСИВ_ просто текст

### Ссылки
[example.com](https://example.com/)

### Изображение
![](https://docsify.js.org/_media/icon.svg ':size=10%')
![](_media/pixlpark_logo.svg ':size=10%')

### Выпадающий список
<details>
<summary>Нажми на меня</summary>

- Abc
- Abc

</details>

### Список


- listitem
- listitem
- listitem

### Блок кода

```html
<p>This is a paragraph</p>
<a href="//docsify.js.org/">Docsify</a>
```