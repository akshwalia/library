const addbutton = document.getElementById('addbutton');
const InputBox = document.getElementById('popup');
const cut = document.getElementById('cut');

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

function displayBook() {
    const book=bookshelf[i];

    const div = document.createElement('div');
    div.classList.add('card');

    const deleteBook = document.createElement('span');
    deleteBook.classList.add('delete');
    deleteBook.textContent='×';

    const nameDisplay = document.createElement('div');
    nameDisplay.textContent=`Name: ${book.name}`;
    nameDisplay.classList.add('name');

    const authorDisplay = document.createElement('div');
    authorDisplay.textContent=`Author: ${book.author}`;

    const pagesDisplay = document.createElement('div');
    pagesDisplay.textContent=`Pages: ${book.pages}`;

    const readDisplay = document.createElement('div');
    readDisplay.textContent=`Read: ${book.read}`;

    div.appendChild(deleteBook);
    div.appendChild(nameDisplay);
    div.appendChild(authorDisplay);
    div.appendChild(pagesDisplay);
    div.appendChild(readDisplay);

    container.appendChild(div);

    removeInputBox();
    clearInputBox();
}

function addBook() {
    const name = nameInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = document.querySelector('input[name="read"]:checked').value;
    console.log(read);

    bookshelf.push(new books(name,author,pages,read));

    console.log(bookshelf[0]);

    displayBook();
} 

addbutton.addEventListener('click',displayInputBox);

cut.addEventListener('click',removeInputBox);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBook();
  });

