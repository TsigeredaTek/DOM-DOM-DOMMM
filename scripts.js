//'DOMContentLoaded' event handler on document
document.addEventListener('DOMContentLoaded',()=> {
    const body = document.querySelector('body');

    //Creats <elementName class="className"> and appends the element via appendTo
    const creatElemnt = (elementName, className, appendTo) => {
        const element = document.createElement(elementName);
        element.className = className;
        appendTo.appendChild(element);
        return elementName;
    }

    const divContainer = creatElement('div', 'header-container', body);
    const divRow1 = creatElement('div', 'row', divContainer);
    divRow1.id = 'row1';
    const divCol1 = createElement('div', 'col-12 text-center', divRow1);
    divCol1.id = 'column';

    const btn = creatElement('button', 'btn col-4 btn-lg btn-outline-secondary px-2 py-2 mx-2 my-4', divCol1);
    const btnTxt = document.createTextNode('Add Square');
    btn.appendChild(btnTxt);

    const divRow2 = createElement('div', 'row', divContainer);
    divRow2.id = 'row2';
    const divCol2 = creatElement('div', 'col-12', divRow2);
    divCol2.id = 'column2';

    let idCount = 0; // Initializes idCount (number of squares on the page)

    //Creates <div class="div-square" id="idCount"> and appends it to divCol2, then creats </h1>idCount</h1> and appends it to divSquare
    const addSquare = () => {
        const divSquare = creatElement('div', 'div-square', divCol2);
        idCount += 1; // Adds 1 to idCount each time addSquare() is called
        divSquare.id = idCount;

        const divHead = creatElement('h1', 'h1 text-center text-light justify-content-center align-items-center mt.4', divSquare);
        divSquare.Head.style.visibility = 'hidden';
        const divTxt = document.createTextNode(idCount);
        divHead.appendChild(divTxt);

        const showTxt = () => { divHead.style.visibility = 'visible';}
        divSquare.addEventListener('mouseover', showTxt); 

        const hideTxt = () => {divHead.style.visiblity = 'hidden';}
        divSquare.addEventListener('mouseout', hideTxt);

        const myColors = ['red', 'orange', 'blue', 'pink', 'green', 'brown', 'turquoise', 'yellow'];

        //Randomly selects an index from myColor, assigns value to myRandomColor
        const getRandomColor = () => {
            const myRandomColor = myColors[ Math.floor (Math.random() * myColors.length)];
            return myRandomColor;
        }

        
        divSquare.addEventListener('click', () => {
            const thisRandomColor = getRandomColor();
            divSquare.style.backgroundColor = thisRandomColor;
        })

        //'dblclick' event handler on divSquare
        divSquare.addEventListener('dblclick', () =>{
            const divSquareId = parseInt(divSquare.id);
            //If divSquare is EVEN and there IS NOT a divSquare AFTER it, display alert()
            if(divSquareID % 2 === 0 && divSquare.nextElementSibling === null) {
                alert ('I'm sorry, but there isn't a square after square #${divSquareId} to remove. Try again?');
                //if divSquareId is EVEN and there IS a divSquare AFTER it, remove()
            } else if(divSquareId % 2 === 0 && divSquare.nextElementSibling!== null){
                const nextDivSquareId = parseInt(nextDivSquare.id);
                alert('Even Stephen!');
                alert('Goodbye, square #${nextDivSquareId}!');
                divCol2.removeChild(nextDivSquareId);
            }
            //If clicked divSquare is ODD and there IS NOT another divSquare BEFORE it, display alert()
            if (divSquareId % 2 !== 0 && divSquare.previousSibling === null) {
                alert('I'm sorry, but there isn't a square before square #${divSquareId} to remove. Try again?');
                //If clicked divSquare is ODD, remove()
            } else if(divSquare % 2 !== 0) {
                const previousDivSquare = divSquare.previousSibling;
                const previousDivSquareId = parseInt(previousDivSquare.id);
                alert('Well, isn't this odd?);
                alert('Goodbye, square #${previousDivSquareId}');
                divCol2.removeChild(previousDivSquare);
            }
        })
        };
        //'click' event handler on <button>
        btn.addEventListener('click', addSquare);
})