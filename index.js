











//------image slider-------//
document.querySelector(".heroContainer")
slide = ["home5.webp","home4.webp","home0.7.webp","9353600.webp"]
let i = 0;
let pic = document.querySelector("#pic");
let nxt = document.querySelector("#nxt").addEventListener("click",()=> {
  i++
  if(i>=slide.length) i=0
  pic.src = slide[i]
})
let pre = document.querySelector("#pre").addEventListener('click',()=> {
  i--
  if(i<0)i=slide.length-1
  pic.src = slide[i]
})
