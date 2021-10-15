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
const imageList = document.querySelector('.image-list');
const image = document.querySelector('.image');
const topBtn = document.getElementById('top');
const downBtn = document.getElementById('down');

for (let index = 0; index < items.length; index++) {
    //creo nuovo elemento li
    const li = document.createElement('li');
    li.innerHTML = `<img src="${items[index]}">`;
    imageList.append(li);

    image.innerHTML = `<img src="${items[0]}">`;

    downBtn.addEventListener('click', function () {
        //imageList.className = 'active'; 
        for (let i = 0; i < items.length; i++) {
            image.innerHTML = `<img src="${items[i]}">`;
        }
    });

}