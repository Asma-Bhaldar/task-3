var cl = console.log;

const cardHeadArray = [...document.querySelectorAll('.accoPanel .card-header')];
const cardBodyArray = [...document.querySelectorAll('.accoPanel .card-body')];


const onCardHeadClick = (eve) => {
    cardBodyArray.forEach(cb => cb.classList.remove('show'));
    let divTobeShow = eve.target.parentElement.nextElementSibling;
    cl(divTobeShow)
    divTobeShow.classList.add('show')
}





cardHeadArray.forEach(head => {
    head.addEventListener('click', onCardHeadClick)
})