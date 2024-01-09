
const wow = new WOW({
  boxClass: 'wow', /* класс, который необходим для работы wow.js */
  animateClass: 'animate__animated', /* класс, который будет автоматически добавляться анимируемым элементам при прокрутке страницы */
  offset: 30, /* по-умолчанию установлено значение 0, то есть как только при прокрутке страницы, элемент достигает низа окна браузера проигрываться анимация, в данном случае анимация начнется на 30px выше от низа окна браузера */
  mobile: true, /* если true, то на мобильных тоже будет анимация, если false, то на мобильных анимация отключается */
  live: true, /* если true, то анимация будет работать даже на динамически добавляемых элементах, если false, то только на тех элементах, которые были на странице при ее загрузке */
})
wow.init();


function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

var button02 = document.querySelector('.a-contact');
var article = document.querySelector('#contacts');
var article03 = document.querySelector('#application-block');

var button03 = document.querySelector('.vacancy-button');
var article02 = document.querySelector('#vacancy');

button02.addEventListener('click', () => {
  scrollTo(article);
})
button03.addEventListener('click', () => {
  scrollTo(article02);
})

window.addEventListener('scroll', e => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

let mainblock = document.querySelector('.main-block');
let mainblockHeight = mainblock.offsetHeight;
let vacancyblock = document.querySelector('.vacancy-block');
let vacancyblockHeight = mainblock.offsetHeight;
let videoblock = document.querySelector('.video__block');
let videoblockHeight = mainblock.offsetHeight;

document.addEventListener('scroll', function(){
  console.log(0.5 + window.scrollY/-mainblockHeight);
  mainblock.style.opacity = 1 + window. scrollY/-mainblockHeight;
  console.log(2 + window.scrollY/-videoblockHeight);
  videoblock.style.opacity = 2 + window. scrollY/-videoblockHeight;
})

const body = document.body;
let listIdImg = ['dut01-img', 'dut02-img', 'dut03-img']
let listIdTxt = ['dut01-txt', 'dut02-txt', 'dut03-txt']
let listIdVd = ['dut01-vd', 'dut02-vd', 'dut03-vd']
let listCondit = ['condition-btn', 'requirement-btn', 'call-btn']
let listCloseId = ['close-popup', 'area-popup']
let listCloseIdvd = ['close-popup-vd', 'area-popup-vd']
var newId = '';

function bodyLock() {
  let pagePosition = window.scrollY;
  body.classList.add('disable-scroll');
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + 'px';
};
function bodyUnLock() {
  let pagePosition = parseInt(body.dataset.position, 10);
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');
  window.scroll({top: pagePosition, left: 0});
  body.removeAttribute('data-position');
};

function pauseClip(media) {
  media.pause();
}

document.addEventListener('click', (e) => {
    const id = e.target.id;
    console.log(id)
    if (listIdImg.includes(id)) {
      newId = id;
      bodyLock();
      document.getElementById(`popup-${id}`).classList.add('open');
    } if (listIdVd.includes(id)) {
      newId = id;
      bodyLock();
      document.getElementById(`popup-${id}`).classList.add('open');
    } if (listIdTxt.includes(id)) {
      newId = id;
      bodyLock();
      document.getElementById(`popup-${id}`).classList.add('open');
    } if (listCondit.includes(id)) {
      newId = id;
      bodyLock();
      document.getElementById(`popup-${id}`).classList.add('open');
    } if (listCloseId.includes(id)) {
      bodyUnLock();
      document.getElementById(`popup-${newId}`).classList.remove('open');
    } else if (listCloseIdvd.includes(id)) {
      bodyUnLock();
      pauseClip(document.getElementById(`video-${newId}`));
      document.getElementById(`popup-${newId}`).classList.remove('open');
    }
  });

let counter = 0
let second = 1000*4

let point = document.querySelectorAll('.point')
let sliderImg = document.querySelectorAll('.slider__img01')
let activ = 'active__img'

point[0].classList.add('active__img')
sliderImg[0].classList.add('active__img')
pagination(point, sliderImg, counter, activ)

function slowSlider () {
  for(let k=0; k<sliderImg.length; k++){
    point[k].classList.remove('active__img');
    sliderImg[k].classList.remove('active__img');
  }
  counter++
  if (counter>=sliderImg.length) {
    counter = 0
  }
  sliderImg[counter].classList.add('active__img');
  point[counter].classList.add('active__img');
}

let TimerImg = setInterval(() => slowSlider(), second)

let blockSlider = document.getElementById('block-slider')
blockSlider.addEventListener('mouseover', () => {
  clearInterval(TimerImg)
})
blockSlider.addEventListener('mouseleave', () => {
  TimerImg = setInterval(() => slowSlider(), second)
})

let counter2 = 0
let second2 = 1000*4

let point2 = document.querySelectorAll('.point2')
let sliderImg2 = document.querySelectorAll('.slider__img02')
let activ2 = 'active__img'

point2[0].classList.add('active__img')
sliderImg2[0].classList.add('active__img')
pagination(point2, sliderImg2, counter2, activ2)

function slowSlider2 () {
  for(let k=0; k<sliderImg2.length; k++){
    point2[k].classList.remove('active__img');
    sliderImg2[k].classList.remove('active__img');
  }
  counter2++
  if (counter2>=sliderImg2.length) {
    counter2 = 0
  }
  sliderImg2[counter2].classList.add('active__img');
  point2[counter2].classList.add('active__img');
}

let TimerImg2 = setInterval(() => slowSlider2(), second2)

let blockSlider2 = document.getElementById('block-slider2')
blockSlider2.addEventListener('mouseover', () => {
  clearInterval(TimerImg2)
})
blockSlider2.addEventListener('mouseleave', () => {
  TimerImg2 = setInterval(() => slowSlider2(), second2)
})

let counter3 = 0
let second3 = 1000*4

let point3 = document.querySelectorAll('.point3')
let sliderImg3 = document.querySelectorAll('.slider__img03')
let activ3 = 'active__img'

point3[0].classList.add('active__img')
sliderImg3[0].classList.add('active__img')
pagination(point3, sliderImg3, counter3, activ3)

function slowSlider3 () {
  for(let k=0; k<sliderImg3.length; k++){
    point3[k].classList.remove('active__img');
    sliderImg3[k].classList.remove('active__img');
  }
  counter3++
  if (counter3>=sliderImg3.length) {
    counter3 = 0
  }
  sliderImg3[counter3].classList.add('active__img');
  point3[counter3].classList.add('active__img');
}

let TimerImg3 = setInterval(() => slowSlider3(), second3)

let blockSlider3 = document.getElementById('block-slider3')
blockSlider3.addEventListener('mouseover', () => {
  clearInterval(TimerImg3)
})
blockSlider3.addEventListener('mouseleave', () => {
  TimerImg3 = setInterval(() => slowSlider3(), second3)
})

let counter4 = 0
let second4 = 1000*4

let po__nt = document.querySelectorAll('.po__nt')
let img__slider = document.querySelectorAll('.img__slider')
let btnLeft = document.getElementById('btn-left')
let btnRight = document.getElementById('btn-right')
let activ4 = 'img__active'

po__nt[0].classList.add('img__active')
img__slider[0].classList.add('img__active')

pagination(po__nt, img__slider, counter4, activ4)
lBtn(img__slider, po__nt, btnLeft, counter4, activ4)
rBtn(img__slider, po__nt, btnRight, counter4, activ4)
sliderSlow(img__slider, po__nt, counter4, activ4)

let counter5 = 0
let second5 = 1000*4

let po__nt2 = document.querySelectorAll('.po__nt2')
let img__slider2 = document.querySelectorAll('.img__slider2')
let btnLeft2 = document.getElementById('btn-left2')
let btnRight2 = document.getElementById('btn-right2')
let activ5 = 'img__active'

po__nt2[0].classList.add('img__active')
img__slider2[0].classList.add('img__active')

pagination(po__nt2, img__slider2, counter5, activ5)
lBtn(img__slider2, po__nt2, btnLeft2, counter5, activ5)
rBtn(img__slider2, po__nt2, btnRight2, counter5, activ5)
sliderSlow(img__slider2, po__nt2, counter5, activ5)

let counter6 = 0
let second6 = 1000*4

let po__nt3 = document.querySelectorAll('.po__nt3')
let img__slider3 = document.querySelectorAll('.img__slider3')
let btnLeft3 = document.getElementById('btn-left3')
let btnRight3 = document.getElementById('btn-right3')
let activ6 = 'img__active'

po__nt3[0].classList.add('img__active')
img__slider3[0].classList.add('img__active')

pagination(po__nt3, img__slider3, counter6, activ6)
lBtn(img__slider3, po__nt3, btnLeft3, counter6, activ6)
rBtn(img__slider3, po__nt3, btnRight3, counter6, activ6)
sliderSlow(img__slider3, po__nt3, counter6, activ6)

function sliderSlow (s, p, c, a) {
  for(let k=0; k<s.length; k++){
    p[k].classList.remove(`${a}`);
    s[k].classList.remove(`${a}`);
  }
  c++
  if (c>=s.length) {
    c = 0
  }
  s[c].classList.add(`${a}`);
  p[c].classList.add(`${a}`);
}
function pagination(p, s, c, a) {
  for(let i=0; i<p.length; i++){
    p[i].addEventListener('click', () => {
      for(let k=0; k<s.length; k++){
        p[k].classList.remove(`${a}`);
        s[k].classList.remove(`${a}`);
      }
      c = i;
      s[c].classList.add(`${a}`);
      p[c].classList.add(`${a}`);
    })
  }
}
function lBtn(s, p, l, c, a) {
  l.addEventListener('click', () => {
    for(let k=0; k<s.length; k++){
      p[k].classList.remove(`${a}`);
      s[k].classList.remove(`${a}`);
    }
    c--
    if (c<0) {
      c = s.length-1
    }
    s[c].classList.add(`${a}`);
    p[c].classList.add(`${a}`);
  })
}
function rBtn(s, p, r, c, a) {
  r.addEventListener('click', () => {
    for(let k=0; k<s.length; k++){
      p[k].classList.remove(`${a}`);
      s[k].classList.remove(`${a}`);
    }
    c++
    if (c>=s.length) {
      c = 0
    }
    s[c].classList.add(`${a}`);
    p[c].classList.add(`${a}`);
  })
}


// Audio
let soundButton = document.querySelector('.soundbutton'), audio = document.querySelector('.audio')
soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}
window.onblur = function() {
	audio.pause()
}

new Accordion('.accordion-container');













// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('f');
//   form.addEventListener ('submit', formSend);
  
//   async function formSend(e) {
//     e.preventDefault();
//     let formData = new FormData(form);
//     let response = await fetch('sendmail.php', {
//       method: 'POST', 
//       body: formData
//     });
//     if (response.ok) {
//       let result = await response.json();
//       alert(result.message);
//       formPreview.innerHTML = '';
//       form.reset();
//     } else {
//       alert('Ошибка');
//     }
//   }
// });
