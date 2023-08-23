const btn = document.querySelector('.btn')
const body = document.querySelector('.content_body')
const learnMore = document.querySelector('.learnMore')

const contentLearn = document.querySelector('.content_learn')

const cardFront = document.querySelector('.content_learn_card')
const cardBack = document.querySelector('.content_learn_card_back')



const Menu = document.querySelector('.Menu')

const MenuBtn = document.querySelector('.MenuBtn')
const downMenu = document.querySelector('.downMenu')

const MenuList = document.querySelectorAll('.Menu_inner_ul li')

//card inner

const cardWrapper = document.querySelector('.content_learn_card_Wrapper')
const backList = document.querySelector('.content_learn_card_back_inner')
const footer = document.querySelector('.content_body_card_footer')

btn.addEventListener('click', () => {
    console.log('ok')
    body.classList.add('hide')
    contentLearn.classList.remove('hide')
    MenuBtn.classList.remove('hide')
})

learnMore.addEventListener('click', () => {
    cardFront.style.transform = "rotateX(180deg)"
    cardBack.style.transform = "rotateX(0deg)"
    
})


Menu.addEventListener('click', (e) => {
    if(e.target === e.currentTarget){
       
        Menu.classList.add('hide')
    }
})

MenuBtn.addEventListener('click', () => {
    Menu.classList.remove('hide')
})
downMenu.addEventListener('click', () => {
    Menu.classList.add('hide')
})

for (let i = 0; i < MenuList.length; i++) {
    MenuList[i].addEventListener('click', () => {
        Menu.classList.add('hide')
        changeCard(i)
        console.log(i)
    })
}


const color = [
{
    "background":"lightgreen",
    "color":"green"
},{
    "background":"pink",
    "color":"palevioletred"
}
]
const backgroundImg = [
    "./background-card.jpg",
    "./background-card2.jpg"
]
const soundArr = []
function createCard(title ,letter, des, img, word, mean, cardColor, backgroundImgArr, soundUrl){
    cardFront.style.opacity = "0"
    setTimeout(() => {
        cardWrapper.style.color = `${cardColor["color"]}`
        cardWrapper.addEventListener('click',() => playSound(6))
        cardWrapper.innerHTML = 
        `<div class="content_learn_card_title">
            <h2>${title}<i class='bx bxs-volume-full' ></i></h2>
            <p>${des}</p>
        </div>
        <div class="content_learn_card_Wrapper_img" style = "background-color:${cardColor["background"]}">
            <h3>${letter}</h3>
        </div>`
    
    
    
        
        let backCard = "";
    
        for (let i = 0; i < img.length; i++) {
            soundArr.push(new Audio(`${soundUrl[i]}`))
            
            backCard += 
            `<div class="content_learn_card_back_inner_imgWrapper" onclick = "playSound(${i})" style = "background-color: ${cardColor["background"]}">
                <img src=${img[i]}>
                <p>${word[i]}<i class='bx bxs-volume-full' ></i></p>
                <p>${mean[i]}</p>
            </div>`
            
        }
    
        backCard += 
        `<div class="btnBack" >
            <button onclick = "backbtn()" style = "background-color:${cardColor["background"]}" ><i class='bx bx-chevron-left'></i>Back</button>
        </div>`
        
        backList.innerHTML = backCard
        cardBack.style.backgroundColor = `${cardColor["background"]}`
        footer.style.backgroundColor = `${cardColor["background"]}`
        footer.style.border = `2px solid ${cardColor["color"]}`;
        learnMore.style.color = `${cardColor["color"]}`
        cardWrapper.style.border = `2px solid ${cardColor["color"]}`
        cardWrapper.style.backgroundImage = `url(${backgroundImgArr})`
    
        soundArr.push(new Audio(`${soundUrl[6]}`))
        cardFront.style.opacity = "1"
    },400)

}


createCard("Vần a"
, "a"
, "Âm /a/ thường được biểu hiện bằng chữ a và phụ âm sau đó", 
["./images/card1/bat.jpg", "./images/card1/apple.jpg", "./images/card1/cat.jpg", "./images/card1/flag.png", "./images/card1/hammer.png", "./images/card1/map.png"],
["bat","apple","cat","flag","hammer","map"],
["con dơi", "quả táo", "mèo", "cờ", "búa", "bản đồ"],
color[1],
backgroundImg[0],
["./sound/card1/bat.mp3",
"./sound/card1/apple.mp3",
"./sound/card1/cat.mp3",
"./sound/card1/flag.mp3",
"./sound/card1/hammer.mp3",
"./sound/card1/map.mp3",
"./sound/card1/a.mp3"]
)

let currentIndex = 0;
function changeCard(index){
    currentIndex = index
    switch(currentIndex){
        case 0:
            backbtn()
            soundArr.splice(0, soundArr.length)
            createCard("Vần a"
            , "a"
            , "Âm /a/ thường được biểu hiện bằng chữ a và phụ âm sau đó", 
            ["./images/card1/bat.jpg", "./images/card1/apple.jpg", "./images/card1/cat.jpg", "./images/card1/flag.png", "./images/card1/hammer.png", "./images/card1/map.png"],
            ["bat","apple","cat","flag","hammer","map"],
            ["con dơi", "quả táo", "mèo", "cờ", "búa", "bản đồ"],
            color[1],
            backgroundImg[0],
            ["./sound/card1/bat.mp3",
            "./sound/card1/apple.mp3",
            "./sound/card1/cat.mp3",
            "./sound/card1/flag.mp3",
            "./sound/card1/hammer.mp3",
            "./sound/card1/map.mp3",
            "./sound/card1/a.mp3"]
            )
            
            break;           
        case 1:
            backbtn()
            soundArr.splice(0, soundArr.length)
            createCard("Vần ab"
            , "ab"
            , "Chú ý âm /b/ ở cuối", 
            ["./images/card2/cab.jpg", "./images/card2/crab.jpg", "./images/card2/grab.png", "./images/card2/scab.jpg", "./images/card2/slab.jpg", "./images/card2/stab.png"],
            ["cab","crab","grab","scab","slab","stab"],
            ["Taxi", "con cua", "cầm nắm", "vảy", "phiến", "đâm"],


            color[0],
            backgroundImg[1],
            ["./sound/card2/cab.mp3",
            "./sound/card2/crab.mp3",
            "./sound/card2/grab.mp3",
            "./sound/card2/scab.mp3",
            "./sound/card2/slab.mp3",
            "./sound/card2/stab.mp3",
            "./sound/card2/ab.mp3"
        ]

            )

            break;
    }
}

function backbtn(){
    cardFront.style.transform = "rotateX(0deg)"
    cardBack.style.transform = "rotateX(180deg)"
}

function playSound(index){
   console.log(soundArr)
   soundArr[index].play()
}

function handleOne(index){
    switch (index){
        case 1:
            if(currentIndex === 0){
                currentIndex = 1
                changeCard(currentIndex)
            }else{
                currentIndex--
                changeCard(currentIndex)
            }
            break;
        case 2:
            if(currentIndex === 1){
                currentIndex = 0
                changeCard(currentIndex)
            }else{
                currentIndex++
                changeCard(currentIndex)
            }
            break;
    }
}