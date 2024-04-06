let cursar =document.querySelector("#cursar");
console.log(cursar)

let style1Div =document.querySelector("#style1")
 console.log(style1Div)

  document.addEventListener("mousemove",(e)=>{
     cursar.style.top=`${e.clientY}px`
     cursar.style.left=`${e.clientX}px`
  })

  
  style1Div.addEventListener("mouseenter",e=>{
   cursar.style.backgroundColor="white"
  })
  style1Div.addEventListener("mouseleave",e=>{
   cursar.style.backgroundColor=`black`
  })

 
  let open =document.querySelector("#mobleNav")
  let close =document.querySelector("#close")
  let page=document.querySelector("#mobile-menu-page")

  open.addEventListener("click",()=>{
   page.style.left=`${0}`
  })

  close.addEventListener('click',()=>{
   page.style.left=`${-100}%`
  })