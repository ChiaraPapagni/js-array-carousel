//lista ordinata di 5 immagini
const items = [
    'assets/img/01.jpg',
    'assets/img/02.jpg',
    'assets/img/03.jpg',
    'assets/img/04.jpg',
    'assets/img/05.jpg'
];


//lista ordinata di 5 luoghi
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

//lista di 5 news
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

//seleziono elementi dalla DOM
const image = document.querySelector('.image');
const imageList = document.querySelector('.image-list');
const topBtn = document.getElementById('top');
const downBtn = document.getElementById('down');

let c = 0;

for (let index = 0; index < items.length; index++) {
    //creo nuovo elemento li
    const li = document.createElement('li');
    li.innerHTML = `<img src="${items[index]}" class="img">`;
    imageList.append(li);
}

image.innerHTML = `
        <div class="desc">
            <h3 class="title-list">${title[0]}</h3>
            <p class="text-list">${text[0]}</p>
        </div>
        <img src="${items[0]}">`;

document.getElementsByClassName('img')[0].classList.add('active');


downBtn.addEventListener('click', function () {

    document.getElementsByClassName('img')[c].classList.remove('active');
    if (c < (items.length - 1)) {
        c++;
        document.getElementsByClassName('img')[c].classList.add('active');
    } else {
        c = 0;
        document.getElementsByClassName('img')[c].classList.add('active');
    }

    image.innerHTML = `
        <div class="desc">
            <h3 class="title-list">${title[c]}</h3>
            <p class="text-list">${text[c]}</p>
        </div>
        <img src="${items[c]}">`;

});


topBtn.addEventListener('click', function () {

    document.getElementsByClassName('img')[c].classList.remove('active');
    if (c != 0) {
        c--;
        document.getElementsByClassName('img')[c].classList.add('active');
    } else {
        c = (items.length - 1);
        document.getElementsByClassName('img')[c].classList.add('active');
    }

    image.innerHTML = `
        <div class="desc">
            <h3 class="title-list">${title[c]}</h3>
            <p class="text-list">${text[c]}</p>
        </div>
        <img src="${items[c]}">`;

});