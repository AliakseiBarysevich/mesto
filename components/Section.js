// отвечает за отрисовку элементов на странице
export class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    createView() {
        // this._renderedItems.forEach(item => {
        //     this._renderer(item);
        // });
   
        if (Array.isArray(this._renderedItems)) {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    } else {
        this._renderer(this._renderedItems);
    }
        // Содержит публичный метод, который отвечает за отрисовку всех элементов. Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.
    }

    // Содержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.
    addItem(card) {
        this._container.prepend(card);
    }

}