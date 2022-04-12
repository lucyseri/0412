'use strict';

//autogallery
const gallery = document.querySelector('.gallery');
const galleryUl = gallery.querySelector('ul');
const galleryUlLi = galleryUl.querySelectorAll('li');

const centerBtn = document.querySelector('.center-btn');
const arrow = centerBtn.querySelectorAll('span.arrow');

const items = document.querySelector('.items');
const itemsUl = items.querySelector('ul');
const itemsUlLi = itemsUl.querySelectorAll('li');

const sec2Con=document.querySelector('.sec2>.sec-con');
const sec2ConUl=sec2Con.querySelector('ul');
const sec2ConUlLi=sec2ConUl.querySelectorAll('li');


function autoGo(num){
  const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
  const goto = (-num * gap) + 'px';

  gallery.style.left = goto;
  gallery.style.transition = 'all 0.3s';
}

function autoAdd(num){
  itemsUlLi.forEach((el, idx) => {
    if (idx === num) {
      el.classList.add('on')
    } else {
      el.classList.remove('on')
    }
  });
}

const arrBg = [];

for (let i = 0; i < galleryUlLi.length; i++) {
  arrBg.push(`url(img/g${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background = arrBg[i];
}




let i = -1;

const autoGallery = () => {
  if (i >= galleryUlLi.length - 1) i = -1;
  i++;

  autoGo(i);

  autoAdd(i)


  if (i >= galleryUlLi.length - 1) i = -1;

}

let setIn = setInterval(autoGallery, 2000);


//span.arrow
centerBtn.addEventListener('mouseover', e => {
  const eTarget = e.target;
  const eCTarget = e.currentTarget;
  // console.log(eCTarget);
  // console.log(eTarget);
  const parent=eTarget.parentElement;
  console.log(parent)
  arrow.forEach((el, idx) => {
    if (el === parent) {
      clearInterval(setIn);
    }
  });
});
centerBtn.addEventListener('mouseout', e => {
  const eTarget = e.target;
  const parent=eTarget.parentElement;
  arrow.forEach((el, idx) => {
    if (el === parent) {
      setIn = setInterval(autoGallery, 2000);
    }
  });
});


centerBtn.addEventListener('click', (e) => {
  const eTarget = e.target;
  const parent=eTarget.parentElement;
  arrow.forEach((el, idx) => {
    if (el === parent) {
      if (idx == 0) {
        if (i >= galleryUlLi.length-1) {
          i = -1;
        }
        i++;  

        autoGo(i);

        autoAdd(i);

      } else if (idx == 1) {
        if (i <= 0) {
          i = galleryUlLi.length;
        }
        i--;

        autoGo(i);

        autoAdd(i);

      }
    }

  });
});


//items
itemsUl.addEventListener('mouseover', e => {
  const eTarget = e.target;
  console.log(eTarget)
  itemsUlLi.forEach((el, idx) => {
    if (el === eTarget) {
      clearInterval(setIn);
    }
  });
});
itemsUl.addEventListener('mouseout', e => {
  const eTarget = e.target;
  itemsUlLi.forEach((el, idx) => {
    if (el === eTarget) {
      setIn = setInterval(autoGallery, 2000);
    }
  });
});


itemsUl.addEventListener('click', e => {
  const eTarget = e.target;
  itemsUlLi.forEach((el, idx) => {
    if (el === eTarget) {
      el.classList.add('on');

      i = idx;

      autoGo(i);

    } else {
      el.classList.remove('on');
    }
  })
});






(() => autoGallery())();



const menu=document.querySelector('span.menu');
const arrItems=['ABOUT', 'MENU', 'PLACE', 'CONTACT','INFO']
const headerStr=`
<ul>
  <li>${arrItems[0]}</li>
  <li>${arrItems[1]}</li>
  <li>${arrItems[2]}</li>
  <li>${arrItems[3]}</li>
  <li>${arrItems[4]}</li>
</ul>
`;

menu.addEventListener('mouseover', ()=>{
  menu.innerHTML=headerStr;
  const menuUl=menu.children;
  console.log(menuUl)

  menuUl.position='fixed'
  menuUl.style.top='0'
  menuUl.style.right='0'
  menuUl.style.width='200px'
  menuUl.style.height='auto'
  // console.log(menuUl)
  // const menuUlLi=menuUl.child[0];
  // console.log(menuUlLi)
});
menu.addEventListener('mouseout', ()=>{
  menu.innerHTML="=";
});