document.addEventListener('DOMContentLoaded', ()=>{
  init()

  function init(){
    headerSticky()
    searchOption()
    infinitSlide()
  }

  // infinit slide
  function infinitSlide(){
    let slide = document.querySelector('.visual-icon-list')
    let slideItem = document.querySelectorAll('.visual-icon-item')

    for(let item of slideItem){
      console.log(item.innerHTML)
    }
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

    // document.addEventListener('click', function(e){
    //   e.preventDefault = true;
    //   if(optionList.clientHeight !== 0){
    //     console.log(e.target, e.target.classList.contains('.select-option'))
    //   }
    // })
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

//E
})
