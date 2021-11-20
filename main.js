// Open form register   
const getClickNotify = document.querySelector('.nav-notify')
const getClickRegister = document.querySelector('.nav__list-item.nav__list-item--strong.nav__list-item--split')
const getModalregister = document.querySelector('.modal--register')
const getCLickRegisterinnotify = document.querySelector('.nav-notify-login')
    getClickRegister.addEventListener('click', function(){
        getModalregister.style.display = 'flex';

    })
    getCLickRegisterinnotify.addEventListener('click', function(){
        getModalregister.style.display = 'flex';
    })
// Open form login
const getClickLogin = document.querySelector('.nav__list-item.nav__list-item--strong.nav__list-item--space')
const getModallogin = document.querySelector('.modal--login')
const getClickLoginonnotify = document.querySelector('.nav-notify-logon')
        getClickLogin.addEventListener('click', function(){
        getModallogin.style.display = 'flex';
    })
        getClickLoginonnotify.addEventListener('click', function(){
        getModallogin.style.display = 'flex';
    })
// Close from
const getModalbody = document.querySelectorAll('.modal__body')
getModalregister.addEventListener('click', function(){
    getModalregister.style.display = 'none'
})
getModallogin.addEventListener('click', function(){
    getModallogin.style.display = 'none'
})
for(modal of getModalbody){
modal.addEventListener('click', function(event){
    event.stopPropagation()
})
}
// Changes Login and Register
const GetClickCLogingg = document.querySelector('.authen__header--btn.click-change--login')
GetClickCLogingg.addEventListener('click', function(){
    getModalregister.style.display = 'none'
    getModallogin.style.display = 'flex';
})
const GetClickCRegistergg = document.querySelector('.authen__header--btn.click--register')
GetClickCRegistergg.addEventListener('click', function(){
    getModallogin.style.display = 'none'
    getModalregister.style.display = 'flex';
})
const GetclickBack = document.querySelectorAll('.btn.margin-btn')
for(i of GetclickBack){
    i.addEventListener('click', function(){
        getModallogin.style.display = 'none'
        getModalregister.style.display = 'none'
    } )
}
// click Like
var GetClickHearts = document.querySelectorAll('.like')
var GetclickHeartsclose = document.querySelectorAll('.unlike')
GetClickHearts.forEach ((item,index)=> {
    item.onclick = function(){
        this.classList.add('open')
        GetclickHeartsclose[index].classList.remove('close')
    }
})
GetclickHeartsclose.forEach ((item,index)=> {
    item.onclick = function(){
        this.classList.add('close')
        GetClickHearts[index].classList.remove('open')
    }
})



