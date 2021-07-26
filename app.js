const btnShare = document.querySelector('.btn_share')
const share = document.querySelector('.share')

btnShare.addEventListener('click', () => {
    if(btnShare.classList.contains('.inactive')){
        btnShare.classList.add('.active')
        btnShare.classList.remove('.inactive')
        btnShare.style.overflow = "visible"
        share.style.opacity = '1'
        btnShare.style.backgroundColor =  'hsl(217, 19%, 35%)'
        btnShare.style.backgroundImage = 'url(/images/icon-share-active.svg)'
    } else {
        btnShare.classList.add('.inactive')
        btnShare.classList.remove('.active')
        btnShare.style.overflow = "hidden"
        share.style.opacity = '0'
        btnShare.style.backgroundColor =  '#edf1fa'
        btnShare.style.backgroundImage = 'url(/images/icon-share-inactive.svg)'
    }
})
