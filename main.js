// Open form register   
const getClickNotify = document.querySelector('.nav-notify')
const getClickRegister = document.querySelector('.nav__list-item.nav__list-item--strong.nav__list-item--split')
const getModalregister = document.querySelector('.modal--register')
const getCLickRegisterinnotify = document.querySelector('.nav-notify-login')
const getClicknavmb = document.querySelector('.head__nav')
    getClickRegister.addEventListener('click', function(){
        getModalregister.style.display = 'flex';
        getClicknavmb.classList.add('close')
        getClicknavmb.classList.add('close2')
    })
    getCLickRegisterinnotify.addEventListener('click', function(){
        getModalregister.style.display = 'flex';
        getClicknavmb.classList.add('close')
        getClicknavmb.classList.add('close2')
    })
// Open form login
const getClickLogin = document.querySelector('.nav__list-item.nav__list-item--strong.nav__list-item--space')
const getModallogin = document.querySelector('.modal--login')
const getClickLoginonnotify = document.querySelector('.nav-notify-logon')
        getClickLogin.addEventListener('click', function(){
        getModallogin.style.display = 'flex';
        getClicknavmb.classList.add('close')
        getClicknavmb.classList.add('close2')
    })
        getClickLoginonnotify.addEventListener('click', function(){
        getModallogin.style.display = 'flex';
        getClicknavmb.classList.add('close')
        getClicknavmb.classList.add('close2')
    })
// Close from
const getModalbody = document.querySelectorAll('.modal__body')
getModalregister.addEventListener('click', function(){
    getModalregister.style.display = 'none'
    getClicknavmb.classList.remove('close')
    getClicknavmb.classList.remove('close2')
})
getModallogin.addEventListener('click', function(){
    getModallogin.style.display = 'none'
    getClicknavmb.classList.remove('close')
    getClicknavmb.classList.remove('close2')
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
        getClicknavmb.classList.remove('close')
        getClicknavmb.classList.remove('close2')
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
// open seach on mobole
// const getclicksearchinmb = document.querySelector('.mobilenav')
// const getDisplaysearchmb = document.querySelector('.headerlower-search')
// getclicksearchinmb.onclick = function (){
//     getDisplaysearchmb.style.display = 'flex'
// }




