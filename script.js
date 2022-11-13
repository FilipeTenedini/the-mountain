const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

let cart = [];
let letQt = 1;

window.addEventListener('load',() =>{
    c('.banner .banner-content h1').style.opacity = 1;
    c('.banner .banner-content span').style.opacity = 1;
});

window.addEventListener('scroll', () => {
    if (window.scrollY >= 46) {
        c('.expeditions .exp-title').style.opacity = 1;
    }
});


everJson.map((item,index) => {
    letQt = 1;

    let travelItem = c('.models .travel').cloneNode(true);

    travelItem.setAttribute('data-key', index) // 
    let indice = travelItem.getAttribute('data-key');
    

    travelItem.querySelector('.travel-title').innerHTML = item.name;    
    travelItem.querySelector('.travel-desc').innerHTML = item.desc;
    travelItem.querySelectorAll('.travel-date')[0].innerHTML = item.date;
    travelItem.querySelectorAll('.travel-date')[1].innerHTML = item.finally;
    travelItem.querySelector('.travel-price').innerHTML = `R$ ${item.price.toFixed(2)}`;



    // abrindo o MODAL 
    travelItem.querySelector('.button').addEventListener('click', (e) => {
        e.preventDefault();
        c('.modal-img img').src = everJson[indice].img;
        c('.modal-reserve--title').innerHTML = everJson[indice].name;
        c('.description span').innerHTML = everJson[indice].desc;
        cs('.modal-data')[0].innerHTML = everJson[indice].date;
        cs('.modal-data')[1].innerHTML = everJson[indice].finally;

        c('.travel--modal-area').style.opacity = 0;
        c('.travel--modal-area').style.display = 'flex';
        setTimeout(()=>{
            c('.travel--modal-area').style.opacity = 1;
        }, 5);
        
        c('.info-qt').innerHTML = letQt;
    
    });

    
    c('.travels-exps').append(travelItem);
});



c('.info-qt--mais').addEventListener('click', () => {
    letQt++;
    c('.info-qt').innerHTML = letQt;
});
c('.info-qt--menos').addEventListener('click', () => {
    if (letQt > 1) {
        letQt--;
        c('.info-qt').innerHTML = letQt;
    } else {
        closeModal();
    }
});

function closeModal(){
    c('.travel--modal-area').style.opacity = 0;
    setTimeout(()=>{ 
        c('.travel--modal-area').style.display = 'none';
        }, 300);
} 

c('.travel--modal-area').addEventListener('click', () => {
    if ( c('.travel--modal-area').classList.contains('info-qt') ) {
        
    }
});

c('.modal-reserve .button').addEventListener('click', () => {
    closeModal();
});