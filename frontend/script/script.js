const viewportComponent = function () {
    return`
        <div>
            <section id="top">
                <button class="first">button 1</button>
                <button class="second">button 2</button>
            </section>
            <section id="bottom">
                <button>Button 3</button>
            </section>
        </div>
    `
}

const loadEvent = function () {
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", viewportComponent());
}

window.addEventListener("load", loadEvent)