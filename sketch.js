
// Create etch-a-sketch container
function createSketchContainer() {
    const body = document.querySelector('body');
    const sketchContainer = document.createElement('div');
    sketchContainer.setAttribute('class', 'sketch-container');
    body.appendChild(sketchContainer);
    return sketchContainer;
}

// Create a row container
function createRowContainer() {
    const rowContainer = document.createElement('div');
    rowContainer.setAttribute('class', 'row-container');
    return rowContainer;   
}

// Create 4 child divs
function append4SquareDivs(rowContainer) {
    for (let i = 0; i < 4; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('class', 'sq-div');
        rowContainer.appendChild(squareDiv);
    }
}

// Place row container in sketch container
function nestRows(sketchContainer, rowContainer) {
    sketchContainer.appendChild(rowContainer);
}

// Create first row
function test0() {
    const rowContainer = createRowContainer();
    create4ChildDivs(rowContainer);
}

// Nest first row into sketch container
function test1() {
    const sketchContainer = createSketchContainer();
    const rowContainer = createRowContainer();
    append4SquareDivs(rowContainer);
    nestRows(sketchContainer, rowContainer);
}

// Nest two rows into sketch container
function test2() {
    const sketchContainer = createSketchContainer();

    for (let i = 0; i < 4; i++) {
        const rowContainer = createRowContainer();
        append4SquareDivs(rowContainer);
        nestRows(sketchContainer, rowContainer);
    }

}



