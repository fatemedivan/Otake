const closeSideBar = document.querySelector('.close-sidebar')
const openSideBar = document.querySelector('.open-sidebar')
const sideBar = document.querySelector('.sidebar')

openSideBar.addEventListener('click',()=>{
    openSideBar.classList.remove('max-md:block')
    closeSideBar.classList.remove('hidden')
    sideBar.classList.remove('max-md:hidden')
})
closeSideBar.addEventListener('click', ()=>{
    closeSideBar.classList.add('hidden')
    openSideBar.classList.add('max-md:block')
    sideBar.classList.add('max-md:hidden')
})

