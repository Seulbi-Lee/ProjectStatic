document.addEventListener('DOMContentLoaded', ()=>{
  init()

  function init(){
    headerSticky()
    searchOption()
    mobileMenu()
  }

  // mobile menu
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
function modalpopup(){
  let prdItemsIcon = document.querySelectorAll('.product-item-icon')
  let prdItemsPhoto = document.querySelectorAll('.product-item-photo')
  let prdModal = document.querySelector('.modal-product')
  let btnClose = document.querySelector('.btn-close-modal')
  let imgModal = document.querySelector('.modal-detail-img')
  let colorBoxs = document.querySelectorAll('.color-box')
  let btnDownload = document.querySelector('.btn-download')

  for(let i in prdItemsIcon){
    if(!isNaN(i)){
      prdItemsIcon[i].addEventListener('click', ()=>{
        prdModal.style.display = 'block';
        imgModal.src = icons[i].black;
        btnDownload.href = icons[i].black;

        for(let colorBox of colorBoxs){
          colorBox.addEventListener('click', (e)=>{
            if(e.target.innerText === 'black'){
              imgModal.src = icons[i].black
              btnDownload.href = icons[i].black
            }else if(e.target.innerText === 'pink'){
              imgModal.src = icons[i].pink
              btnDownload.href = icons[i].pink
            }else if(e.target.innerText === 'blue'){
              imgModal.src = icons[i].blue
              btnDownload.href = icons[i].blue
            }else if(e.target.innerText === 'green'){
              imgModal.src = icons[i].green
              btnDownload.href = icons[i].green
            }
          })
        }

      })  
    }
  }
  for(let i in prdItemsPhoto){
    if(!isNaN(i)){
      prdItemsPhoto[i].addEventListener('click', ()=>{
        prdModal.style.display = 'block';
        imgModal.src = photos[i].url;
        btnDownload.href = photos[i].url;
      })
    }
  }

  btnClose.addEventListener('click', ()=>{
    prdModal.style.display = 'none'
  })

  document.addEventListener('click', (e)=>{
    if(e.target === prdModal){
      prdModal.style.display = 'none'
    }
  })
}


const icons = [{
  "name": "houseplants",
  "num" : 0,
  "black":"https://thenounproject.com/api/private/icons/5935071/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
  "pink":"https://thenounproject.com/api/private/icons/5935071/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23FF59B9&foregroundOpacity=1&imageFormat=png&rotation=0",
  "blue":"https://thenounproject.com/api/private/icons/5935071/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%233B6BF9&foregroundOpacity=1&imageFormat=png&rotation=0",
  "green":"https://thenounproject.com/api/private/icons/5935071/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23007435&foregroundOpacity=1&imageFormat=png&rotation=0",
},
{
  "name": "houseplants",
  "num" : 1,
  "black":"https://thenounproject.com/api/private/icons/5579024/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
  "pink":"",
  "blue":"",
  "green":"",
},
{
  "name": "houseplants",
  "num" : 2,
  "black":"https://thenounproject.com/api/private/icons/886781/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
  "pink":"",
  "blue":"",
  "green":"",
},
{
  "name": "houseplants",
  "num" : 3,
  "black":"https://thenounproject.com/api/private/icons/5767172/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
  "pink":"",
  "blue":"",
  "green":"",
},
{
  "name": "houseplants",
  "num" : 4,
  "black":"https://thenounproject.com/api/private/icons/5935068/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
  "pink":"",
  "blue":"",
  "green":"",
},
{
  "name": "houseplants",
  "num" : 5,
  "black":"https://thenounproject.com/api/private/icons/5579028/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
  "pink":"",
  "blue":"",
  "green":"",
},
{
  "name": "houseplants",
  "num" : 6,
  "black":"https://thenounproject.com/api/private/icons/5579027/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
  "pink":"",
  "blue":"",
  "green":"",
},
{
  "name": "houseplants",
  "num" : 7,
  "black":"https://thenounproject.com/api/private/icons/5706406/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
  "pink":"",
  "blue":"",
  "green":"",
},
{
  "name": "houseplants",
  "num" : 8,
  "black":"https://thenounproject.com/api/private/icons/5706412/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
  "pink":"",
  "blue":"",
  "green":"",
},
{
  "name": "houseplants",
  "num" : 9,
  "black":"https://thenounproject.com/api/private/icons/2293417/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
  "pink":"",
  "blue":"",
  "green":"",
},  
]

const photos = [{
"name": "houseplants",
"num" : 0,
"url":"https://thumbnails.production.thenounproject.com/9F-SZnvThjdqYvQ71_kWk_WTsxw=/fit-in/1000x1000/photos.production.thenounproject.com/photos/5381D36B-57AD-4EB3-815A-B43D2E12B21C.jpg",
},
{
"name": "houseplants",
"num" : 1,
"url":"https://thumbnails.production.thenounproject.com/WGmtS8J86gc9khlGDH8mQ3Uw_0M=/fit-in/0x450/photos.production.thenounproject.com/photos/374055BD-5B69-4CEE-9758-5282D54836F2.jpg",
},
{
"name": "houseplants",
"num" : 2,
"url":"https://thumbnails.production.thenounproject.com/LS7sfSLGCxH7Tvwv6r1pvflHKSk=/fit-in/0x450/photos.production.thenounproject.com/photos/440B3F8E-6955-456E-9321-9E85F6285CBF.jpg",
},
{
"name": "houseplants",
"num" : 3,
"url":"https://thumbnails.production.thenounproject.com/h2Na9Qvf3kzABUIWA0pGx7W0Kf8=/fit-in/0x450/photos.production.thenounproject.com/photos/985065EF-2D1F-47EC-BB76-EA6FE9287E97.jpg",
},
{
"name": "houseplants",
"num" : 4,
"url":"https://thumbnails.production.thenounproject.com/iQnrgh9pFEJNY4V8GUJHRoXIpSU=/fit-in/0x450/photos.production.thenounproject.com/photos/D3CCB0FC-9D6A-441F-B8AF-5AD2DFA5CEC6.jpg",
},
{
"name": "houseplants",
"num" : 5,
"url":"https://thumbnails.production.thenounproject.com/vJvJhn8_kABJPYA0tfi8QdCaLqM=/fit-in/0x450/photos.production.thenounproject.com/photos/DCB718E2-DE0D-453B-B91B-11CC22CFACDD.jpg",
},
{
"name": "houseplants",
"num" : 6,
"url":"https://thumbnails.production.thenounproject.com/TQnYQAoEb6DzJLYnXIA8c-VTGvM=/fit-in/0x450/photos.production.thenounproject.com/photos/9AE8439C-08DA-4CDE-931E-9BDBDE691D07.jpg",
},
{
"name": "houseplants",
"num" : 7,
"url":"https://thumbnails.production.thenounproject.com/ON5DIuRj6zHlY9SKYbpTkUEnqoM=/fit-in/0x450/photos.production.thenounproject.com/photos/99114C85-2E2E-4CA5-8DE5-432C623EEFFB.jpg",
},
{
"name": "houseplants",
"num" : 8,
"url":"https://thumbnails.production.thenounproject.com/HsQUPNhgKZyVFNR-XVUrBFgPMj0=/fit-in/0x450/photos.production.thenounproject.com/photos/D2533528-AF09-4FEA-9722-D397CC7BBA5B.jpg",
},
{
"name": "houseplants",
"num" : 9,
"url":"https://thumbnails.production.thenounproject.com/zbrW5jaij0RpOHLA9U2RG9Kk-SM=/fit-in/0x450/photos.production.thenounproject.com/photos/FCB4CC05-BDC5-4F25-9930-DB8A4FA9B3D8.jpg",
},  
]