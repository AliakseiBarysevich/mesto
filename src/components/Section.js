// отвечает за отрисовку элементов на странице
export class Section {
    constructor( { renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    // Содержит публичный метод, который отвечает за отрисовку всех элементов.
    //Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.
    createView(cardsArray) {
        cardsArray.forEach((card) => {
                this._renderer(card);
            });
    }

    prependItem(card) {
        this._container.prepend(card);
    }

    // method which appends new cards during initial rendering
    appendItem(card) {
        this._container.append(card);
    }
}