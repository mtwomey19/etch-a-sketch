
// Create a row container
function createRowContainer() {
    const body = document.querySelector('body');
    const rowContainer = document.createElement('div');
    rowContainer.setAttribute('class', 'row-container');
    body.appendChild(rowContainer);
    return rowContainer;   
}

// Create 4 child divs
function create4ChildDivs(rowContainer) {
    for (let i = 0; i < 4; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('class', 'sq-div');
        rowContainer.appendChild(squareDiv);
    }
}

function test() {
    const rowContainer = createRowContainer();
    create4ChildDivs(rowContainer);
}