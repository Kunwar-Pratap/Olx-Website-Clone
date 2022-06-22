let country = document.getElementById('country');
let moving = document.getElementById('move-up');
let text = document.getElementById('country-text');
let list = document.getElementById('country-list');
let engLan = document.getElementById('eng-lan');
let engHin = document.querySelector('.eng-hin');
let language = document.querySelector('.language-box');

country.addEventListener('click', () =>{
    list.classList.toggle('hider');
    moving.classList.toggle('rotate');
});

function myCountry(selectOne){
    text.innerHTML = selectOne;
};

language.addEventListener('click', () =>{
    engHin.classList.toggle('lan-show');
})

function languageFunc(selLan){
    engLan.innerHTML = selLan;
};