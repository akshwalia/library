const addbutton = document.getElementById('addbutton');
const InputBox = document.getElementById('popup');
const cut = document.getElementById('cut');
const overlay = document.getElementById('popup');
const formbox = document.getElementById('input');

let nameInput = document.getElementById('name');
let authorInput = document.getElementById('author');
let pagesInput = document.getElementById('pages');
let readInput = document.querySelector('input[name="read"]:checked').value;

const form = document.getElementById('form');

const container = document.querySelector('.container');

let i=0;

const bookshelf=[];

function books(name,author,pages,read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayInputBox() {
    InputBox.style.display='block';
}

function removeInputBox() {
    InputBox.style.display='none';
}

function clearInputBox() {
    nameInput.value='';
    authorInput.value='';
    pagesInput.value='';
    readInput='no';
}

function displayBook(book) {
    const div = document.createElement('div');
    div.classList.add('card');

    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete');
    deleteButton.textContent='×';
    

    const nameDisplay = document.createElement('div');
    nameDisplay.textContent=`Name: ${book.name}`;
    nameDisplay.classList.add('name');

    const authorDisplay = document.createElement('div');
    authorDisplay.textContent=`Author: ${book.author}`;

    const pagesDisplay = document.createElement('div');
    pagesDisplay.textContent=`Pages: ${book.pages}`;



    const switchContainer = document.createElement('div');
    switchContainer.classList.add('switch');
    const switchtext = document.createElement('span');
    switchtext.textContent="Mark as read:";
    const toggle = document.createElement('input');
    const toggleSwitch = document.createElement('label');
    toggle.setAttribute('type','checkbox');
    toggle.setAttribute('id',`switch${i}`);
    toggle.classList.add('checkbox');
    toggleSwitch.setAttribute('for',`switch${i}`);
    toggleSwitch.classList.add('toggle');

    if(book.read=='yes')
        toggle.checked=true;
    switchContainer.appendChild(switchtext);
    switchContainer.appendChild(toggle);
    switchContainer.appendChild(toggleSwitch);
    i++;

    if(book.read=='yes')
        div.classList.add('read');

    //Adds the cards to the display
    div.appendChild(deleteButton);
    div.appendChild(nameDisplay);
    div.appendChild(authorDisplay);
    div.appendChild(pagesDisplay);
    div.appendChild(switchContainer);

    container.appendChild(div);

    removeInputBox();
    clearInputBox();

    console.log(bookshelf);

    //Toggling mark as read 
    toggleSwitch.addEventListener('click', () => {
        if(toggle.checked==false) {
            div.classList.add('read');
        }
        else {
            div.classList.remove('read');
        }
    });

    //Deletes the cards
    deleteButton.addEventListener('click', () => {
        removeBook(div,book);
    });

}

function addBook() {
    const name = nameInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = document.querySelector('input[name="read"]:checked').value;
    console.log(read);

    const newbook = new books(name,author,pages,read);
    bookshelf.push(newbook);

    console.log(bookshelf[0]);

    displayBook(newbook);
} 

function removeBook(div,newbook) {
    let index = bookshelf.indexOf(newbook);     //Index of the book to be removed
    bookshelf.splice(index,1);
    div.remove();
    console.log(bookshelf);
}


addbutton.addEventListener('click',displayInputBox);

cut.addEventListener('click',removeInputBox);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBook();
});

formbox.addEventListener('click', (e) => {
    e.stopPropagation();
})
overlay.addEventListener('click', (e) => {
    removeInputBox();
});


