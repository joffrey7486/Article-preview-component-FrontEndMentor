const btnShare = document.querySelector('.btn_share')
const share = document.querySelector('.share')

btnShare.addEventListener('click', () => {
    if(btnShare.classList.contains('.inactive')){
        btnShare.classList.add('.active')
        btnShare.classList.remove('.inactive')
        btnShare.style.overflow = "visible"
        share.style.opacity = '1'
        btnShare.style.backgroundColor =  'hsl(217, 19%, 35%)'
        btnShare.style.backgroundImage = 'url(https://raw.githubusercontent.com/joffrey7486/Article-preview-component-FrontEndMentor/b52464c7596a96959318d0b6d0baa086ceaf7a2e/images/icon-share-active.svg)'
    } else {
        btnShare.classList.add('.inactive')
        btnShare.classList.remove('.active')
        btnShare.style.overflow = "hidden"
        share.style.opacity = '0'
        btnShare.style.backgroundColor =  '#edf1fa'
        btnShare.style.backgroundImage = 'url(https://raw.githubusercontent.com/joffrey7486/Article-preview-component-FrontEndMentor/4223a81a4037dc37b82217a2e0ea9a1dcacad581/images/icon-share-inactive.svg)'
    }
})
