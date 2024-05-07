// 이미지 바꾸기
const imgBtns = document.querySelectorAll(".imgs button")
const imgTag = document.querySelector(".card img")

imgBtns.forEach(imgBtn => {
    imgBtn.addEventListener("click", function(){

        imgBtns.forEach(imgBtn => {
            imgBtn.classList.remove("clicked")
        })
        imgBtn.classList.toggle("clicked");
    })
})

imgBtns[0].addEventListener("click",function(){
    imgTag.src="./img/love-1.png"
})
imgBtns[1].addEventListener("click",function(){
    imgTag.src="./img/cheer-2.png"
})
imgBtns[2].addEventListener("click",function(){
    imgTag.src="./img/celebrate-3.png"
})
imgBtns[3].addEventListener("click",function(){
    imgTag.src="./img/work-4.png"
})

// 색상 바꾸기
const cardTag = document.querySelector(".card")
const colorInputs = document.querySelectorAll(".colors div")

colorInputs.forEach(colorInput => {

    colorInput.addEventListener("click", function(){
        let bgc = this.style.backgroundColor;
        cardTag.style.backgroundColor = `${bgc}`;

        colorInputs.forEach(colorInput => {
            colorInput.classList.remove("selected")
        })
        colorInput.classList.toggle("selected");
    })
})

//문구 가져오기
const memoInput = document.querySelector(".memo")
const memoTag = document.querySelector(".message")
memoInput.addEventListener("input" , function(){
    memoTag.innerHTML = memoInput.value
})