const btns=document.querySelectorAll(".btn")
const submit=document.querySelector(".submit-btn")
const rating=document.querySelector(".ratings")
const overlay=document.querySelector(".thankyou-overlay")
const close=document.querySelector(".close-btn")
const rateOverlay=document.querySelector(".rating-overlay")



let prev=null
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
       e.target.classList.add('active')
       if(prev !== null) {
        prev.classList.remove('active')
       }
        prev = e.target
        let rate=e.target.dataset.id
        rating.textContent=rate
    })
    
})

submit.addEventListener("click",function(){
    overlay.classList.add("show-overlay")
    rateOverlay.classList.add("hide-rating")
})
close.addEventListener("click",function(){
    overlay.classList.remove("show-overlay")
    rateOverlay.classList.remove("hide-rating")
})