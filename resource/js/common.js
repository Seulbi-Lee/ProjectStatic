document.addEventListener('DOMContentLoaded', ()=>{
  init()

  function init(){
    headerSticky()
    searchOption()
    mobileMenu()
  }

  function mobileMenu(){
    let btnOpen = document.getElementById('btnOpenMobile')
    let mobileMenu = document.getElementById('MobileMenu')

    btnOpen.addEventListener('click', ()=>{
      mobileMenu.classList.add('active')
    })

    document.addEventListener('click', (e)=>{
      if(e.target === mobileMenu){
        mobileMenu.classList.remove('active')
      }
    })
  }

  // search option
  function searchOption(){
    let selected = document.getElementById('searchSelected')
    let optionList = document.querySelector('.select-form')
    let options = document.querySelectorAll('.search-option')
    let inputText = document.querySelector('.search-input-txt')

    selected.addEventListener('click', ()=>{
      if(optionList.clientHeight === 0){
        optionList.style.height = options[0].clientHeight * options.length + 'px';
      }else{
        optionList.style.height = 0;
      }
    })

    for(let option of options){
      option.addEventListener('click', ()=>{
        selected.querySelector('.txt').innerText = option.querySelector('.txt').innerText;
        inputText.placeholder = `Search ${option.querySelector('.txt').innerText}`
        optionList.style.height = 0;
      })
    }
  }

  // header sticky
  function headerSticky(){
    let header = document.querySelector('.header')
    
    document.addEventListener('scroll', ()=>{
      if(window.scrollY > 30){
        header.classList.add('sticky')
      }else{
        header.classList.remove('sticky')
      }
    })
  }

})

// modal
function modalOpen(){
  document.querySelector('.modal-product').style.display = 'block'
}
function modalClose(){
  document.querySelector('.modal-product').style.display = 'none'
}
