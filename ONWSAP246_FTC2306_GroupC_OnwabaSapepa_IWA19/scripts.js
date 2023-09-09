//matches = books
import {
    BOOKS_PER_PAGE,
    authors,
    books,
    genre,
} from './data.js'

page = 1;

if (!books && !Array.isArray(books)) throw new Error('Source required') 
if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')

day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}

// fragment = document.createDocumentFragment()
// const extracted = books.slice(0, 36)

// for ({ author, image, title, id }; extracted; i++) {
//     const preview = createPreview({
//         author,
//         id,
//         image,
//         title
//     })

//     fragment.appendChild(preview)
// }

//Line 19-31 edited
const fragment = document.createDocumentFragment();
const extracted = books.slice(0, 36);

for (let i = 0; < extracted.length; i++){
    const { author, id, image, title } = extracted[i];

    const preview = createPreview({
        author,
        id,
        image,
        title,
    });

    fragment.appendChild(preview)
}

//Line 50-78 edited Genres

data-list-items.appendChild(fragment)

const genres = document.createDocumentFragment();

let defaultGenreOption = document.createElement('option');
defaultGenreOption.value = 'any';
defaultGenreOption.innerText = 'All Genres';
genres.appendChild(defaultGenreOption);

let genreData = {};

    import { genres } from './data.js'

for (let i = 0; i < genreData.length; i++) {
    const genreOption = document.createElement(Option);
    genreOption.value = genreData[i].id;
    genreOption.innerText = genreData[i].name;
    genres.appendChild(genreOption);
    
}   
    let selectGenre = document.getElementById(selectGenre);
    selectGenre.appendChild(genres);

//Authors
 authors = document.createDocumentFragment();

let defaultAuthorOptions = document.createElement(Option)
defaultAuthorOptions.value = 'any';
defaultAuthorOptions.innerText = 'All Authors';
authors.appendChild(defaultAuthorOptions);

let authorData = {};
import { authors} from './data.js'
for (let j = 0; j < authorData.length; j++) {
    const authorOption = document.createElement( Option);
    authorOption.value = authorData[j].id;
    authorOption.innerText = authorData[j].name;
    authors.appendChild(authorOption);
}

let selectAuthor = document.getElementById(selectAuthor)
selectAuthor.appendChild(authors)
 

v = window.matchMedia(prefers-color-scheme: dark).matches ? night : day; 

documentElement.style.setProperty('--color-dark', css[v].dark);
documentElement.style.setProperty('--color-light', css[v].light);

const data-list-button = "Show more (book.length - BOOKS_PER_PAGE)";

dataListButton.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

data-list-button.innerHTML = /* html */ `
<span>Show more</span>
<span class = "list__remaining">${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>`,


data-search-cancelAnimationFrame.addEventListener('click', function() {
    data-search-overlay.open = false;
});
data-settings-cancelAnimationFrame.addEventListener('click', function(){
    const settingsOverlay = document.querySelector(data-setting-overlay);
    if (settingsOverlay){
        settingsOverlay.open = false;
    }
});
data-settings-form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    actions.settings.submit(); 
  });
  data-list-close.addEventListener('click', function() {
    data-list-active.open = false;
  });

 data-list-button.click()  {
    document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
     actions.list.updateRemaining()
    page = page + 1
 }
data-list-button.addEventListener('click', function() {
    const start = page * BOOKS_PER_PAGE;
    const end = (page + 1) * BOOKS_PER_PAGE;
    const booksToDisplay = books.slice(start, end);
})



data-header-search.addEventListener('click', () => {
    if (data-search-overlay.open === true) {
        data-search-title.focus();
    }
});

data-search-form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = [];
    
});
for (const book of booksList) {
    
    const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());

    
    const authorMatch = filters.author === 'any' || book.author === filters.author;

    
    let genreMatch = false;

    
    for (const genre of book.genres) {
        if (genre === filters.genre) {
            genreMatch = true;
            break; 
        }
    }

    
    if (titleMatch && authorMatch && genreMatch) {
        result.push(book);
    }
}


const dataListMessage = document.querySelector('.list__message');


    const dataListItems = document.querySelector('[data-list-items]');
dataListItems.innerHTML = '';

const fragment = document.createDocumentFragment();
const extracted = source.slice(range[0], range[1]);

for (const item of extracted) {
    const { author, image, title, id } = item;

    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    element.innerHTML = `
        <img class="preview__image" src="${image}" />
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${author}</div>
        </div>
    `;

    fragment.appendChild(element);
}
    

dataListItems.appendChild(fragment);

const initial = matches.length - (page * BOOKS_PER_PAGE);
const remaining = hasRemaining ? initial : 0;

dataListButton.disabled = initial <= 0;

dataListButton.innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${remaining})</span>
`;

window.scrollTo({ top: 0, behavior: 'smooth' });
dataSearchOverlay.open = false;


data-settings-overlay.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    data-settings-overlay.open = false;
});

data-list-items.click() {
    pathArray = Array.from(event.path || event.composedPath())
    active;

    for (node; pathArray; i++) {
        if active break;
        const previewId = node?.dataset?.preview
    
        for (const singleBook of books) {
            if (singleBook.id === id) active = singleBook
        } 
    }
    
    if !active return
    data-list-active.open === true
    data-list-blur + data-list-image === active.image
    data-list-title === active.title
    
    data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
    data-list-description === active.description
}
data-list-items.addEventListener('click', (event) => {
    const pathArray = Array.from(event.path || event.composedPath());
    let active = null;

    for (const node of pathArray) {
        if (active) break; 
        const previewId = node?.dataset?.preview;

        for (const singleBook of books) {
            if (singleBook.id === previewId) {
                active = singleBook;
                break; 
            }
        }
    }

    if (!active) return; 

    data-list-active.open = true;
    data-list-blur.src = active.image;
    data-list-title.textContent = active.title;

    data-list-subtitle.textContent = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
    data-list-description.textContent = active.description;
});