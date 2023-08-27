const btn = document.querySelector(".btn");
const body = document.querySelector(".content_body");
const learnMore = document.querySelector(".learnMore");

const contentLearn = document.querySelector(".content_learn");

const cardFront = document.querySelector(".content_learn_card");
const cardBack = document.querySelector(".content_learn_card_back");

const Menu = document.querySelector(".Menu");

const MenuBtn = document.querySelector(".MenuBtn");
const downMenu = document.querySelector(".downMenu");
const displayList = document.querySelectorAll(".listNone");
const MenuList = document.querySelectorAll(".listNone li");

//card inner

const cardWrapper = document.querySelector(".content_learn_card_Wrapper");
const backList = document.querySelector(".content_learn_card_back_inner");
const footer = document.querySelector(".content_body_card_footer");

btn.addEventListener("click", () => {
  console.log("ok");
  body.classList.add("hide");
  contentLearn.classList.remove("hide");
  MenuBtn.classList.remove("hide");
});

learnMore.addEventListener("click", () => {
  cardFront.style.transform = "rotateX(180deg)";
  cardBack.style.transform = "rotateX(0deg)";
});

Menu.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    Menu.classList.add("hide");
  }
});

MenuBtn.addEventListener("click", () => {
  Menu.classList.remove("hide");
});
downMenu.addEventListener("click", () => {
  Menu.classList.add("hide");
});

for (let i = 0; i < MenuList.length; i++) {
  MenuList[i].addEventListener("click", () => {
    Menu.classList.add("hide");
    changeCard(i);
    console.log(i);
  });
}

for (let i = 0; i < displayList.length; i++) {
  displayList[i].addEventListener("click", () => {
    displayList[i].classList.toggle("group");
  });
}
const color = [
  {
    background: "pink",
    color: "palevioletred",
  },
  {
    background: "lightgreen",
    color: "green",
  },
  {
    background: "lightsalmon",
    color: "orangered",
  },
  {
    background: "lightgray",
    color: "gray",
  },
  {
    background: "lightcyan",
    color: "skyblue",
  },
  {
    background: "burlywood",
    color: "brown",
  },
  {
    background: "lightgoldenrodyellow",
    color: "goldenrod",
  },
  {
    background: "lightskyblue",
    color: "steelblue",
  },
];
const backgroundImg = [
  "./background-card.jpg",
  "./background-card2.jpg",
  "./background-card5.jpg",
  "./background-card3.jpg",
  "./background-card4.jpg",
  "./background-card6.jpg",
  "./background-card7.jpg",
  "./background-card8.jpg",
];
const soundArr = [];
function createCard(
  title,
  letter,
  des,
  img,
  word,
  mean,
  cardColor,
  backgroundImgArr,
  soundUrl
) {
  cardFront.style.opacity = "0";
  setTimeout(() => {
    cardWrapper.style.color = `${cardColor["color"]}`;
    cardWrapper.addEventListener("click", () => playSound(soundArr.length - 1));
    cardWrapper.innerHTML = `<div class="content_learn_card_title">
            <h2>${title}<i class='bx bxs-volume-full' ></i></h2>
            <p>${des}</p>
        </div>
        <div class="content_learn_card_Wrapper_img" style = "background-color:${cardColor["background"]}">
            <h3>${letter}</h3>
        </div>`;

    let backCard = "";

    for (let i = 0; i < img.length; i++) {
      soundArr.push(new Audio(`${soundUrl[i]}`));

      backCard += `<div class="content_learn_card_back_inner_imgWrapper" onclick = "playSound(${i})" style = "background-color: ${cardColor["background"]}">
                <img src=${img[i]}>
                <p>${word[i]}<i class='bx bxs-volume-full' ></i></p>
                <p>${mean[i]}</p>
            </div>`;
    }

    backCard += `<div class="btnBack" >
            <button onclick = "backbtn()" style = "background-color:${cardColor["background"]}" ><i class='bx bx-chevron-left'></i>Back</button>
        </div>`;

    backList.innerHTML = backCard;
    cardBack.style.backgroundColor = `${cardColor["background"]}`;
    footer.style.backgroundColor = `${cardColor["background"]}`;
    footer.style.border = `2px solid ${cardColor["color"]}`;
    learnMore.style.color = `${cardColor["color"]}`;
    cardWrapper.style.border = `2px solid ${cardColor["color"]}`;
    cardWrapper.style.backgroundImage = `url(${backgroundImgArr})`;

    soundArr.push(new Audio(`${soundUrl[soundArr.length]}`));
    cardFront.style.opacity = "1";
  }, 400);
}

createCard(
  "Vần a",
  "a",
  "Âm /a/ thường được biểu hiện bằng chữ a và phụ âm sau đó",
  [
    "./images/card1/bat.jpg",
    "./images/card1/apple.jpg",
    "./images/card1/cat.jpg",
    "./images/card1/flag.png",
    "./images/card1/hammer.png",
    "./images/card1/map.png",
  ],
  ["bat", "apple", "cat", "flag", "hammer", "map"],
  ["con dơi", "quả táo", "mèo", "cờ", "búa", "bản đồ"],
  color[0],
  backgroundImg[0],
  [
    "./sound/card1/bat.mp3",
    "./sound/card1/apple.mp3",
    "./sound/card1/cat.mp3",
    "./sound/card1/flag.mp3",
    "./sound/card1/hammer.mp3",
    "./sound/card1/map.mp3",
    "./sound/card1/a.mp3",
  ]
);

let currentIndex = 0;
function changeCard(index) {
  currentIndex = index;
  switch (currentIndex) {
    case 0:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần a",
        "a",
        "Âm /a/ thường được biểu hiện bằng chữ a và phụ âm sau đó",
        [
          "./images/card1/bat.jpg",
          "./images/card1/apple.jpg",
          "./images/card1/cat.jpg",
          "./images/card1/flag.png",
          "./images/card1/hammer.png",
          "./images/card1/map.png",
        ],
        ["bat", "apple", "cat", "flag", "hammer", "map"],
        ["con dơi", "quả táo", "mèo", "cờ", "búa", "bản đồ"],
        color[0],
        backgroundImg[0],
        [
          "./sound/card1/bat.mp3",
          "./sound/card1/apple.mp3",
          "./sound/card1/cat.mp3",
          "./sound/card1/flag.mp3",
          "./sound/card1/hammer.mp3",
          "./sound/card1/map.mp3",
          "./sound/card1/a.mp3",
        ]
      );

      break;
    case 1:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ab",
        "ab",
        "Chú ý âm /b/ ở cuối",
        [
          "./images/card2/cab.jpg",
          "./images/card2/crab.jpg",
          "./images/card2/grab.png",
          "./images/card2/scab.jpg",
          "./images/card2/slab.jpg",
          "./images/card2/stab.png",
        ],
        ["cab", "crab", "grab", "scab", "slab", "stab"],
        ["Taxi", "con cua", "cầm nắm", "vảy", "phiến", "đâm"],

        color[1],
        backgroundImg[1],
        [
          "./sound/card2/cab.mp3",
          "./sound/card2/crab.mp3",
          "./sound/card2/grab.mp3",
          "./sound/card2/scab.mp3",
          "./sound/card2/slab.mp3",
          "./sound/card2/stab.mp3",
          "./sound/card2/ab.mp3",
        ]
      );

      break;

    case 2:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ack",
        "ack",
        "Khi ck ở cuối chữ được phát âm là /k/",
        [
          "./images/card3/snack.jpg",
          "./images/card3/sack.jpg",
          "./images/card3/back.png",
          "./images/card3/crack.png",
          "./images/card3/tack.png",
          "./images/card3/track.jpg",
        ],
        ["snack", "sack", "back", "crack", "tack", "track"],
        ["bim bim", "bao", "đằng sau", "gãy", "ghim", "đường đua"],

        color[2],
        backgroundImg[2],
        [
          "./sound/card3/snack.mp3",
          "./sound/card3/sack.mp3",
          "./sound/card3/back.mp3",
          "./sound/card3/crack.mp3",
          "./sound/card3/tack.mp3",
          "./sound/card3/track.mp3",
          "./sound/card3/ack.mp3",
        ]
      );

      break;

    case 3:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ad",
        "ad",
        "Chú ý âm /d/ ở cuối",
        [
          "./images/card4/bad.png",
          "./images/card4/dad.webp",
          "./images/card4/glad.avif",
          "./images/card4/mad.png",
          "./images/card4/notepad.jpg",
          "./images/card4/sad.webp",
        ],
        ["bad", "dad", "glad", "mad", "notepad", "sad"],
        ["Tệ", "Bố", "Vui", "Tức", "Sổ", "Buồn"],

        color[3],
        backgroundImg[3],
        [
          "./sound/card4/bad.mp3",
          "./sound/card4/dad.mp3",
          "./sound/card4/glad.mp3",
          "./sound/card4/mad.mp3",
          "./sound/card4/notepad.mp3",
          "./sound/card4/sad.mp3",
          "./sound/card4/ad.mp3",
        ]
      );

      break;

    case 4:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ag",
        "ag",
        "Chú ý âm /g/ ở cuối",
        [
          "./images/card5/stag.webp",
          "./images/card5/gag.jpg",
          "./images/card5/wag.jpg",
          "./images/card5/tag.jpg",
          "./images/card5/hag.jpg",
          "./images/card5/rag.webp",
        ],
        ["stag", "gag", "wag", "tag", "hag", "rag"],
        ["nai", "bịt miệng", "hài hước", "nhãn", "phù thủy", "khăn tay"],

        color[4],
        backgroundImg[4],
        [
          "./sound/card5/stag.mp3",
          "./sound/card5/gag.mp3",
          "./sound/card5/wag.mp3",
          "./sound/card5/tag.mp3",
          "./sound/card5/hag.mp3",
          "./sound/card5/rag.mp3",
          "./sound/card5/ag.mp3",
        ]
      );

      break;

    case 5:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần am",
        "am",
        "Chú ý âm /m/ ở cuối",
        [
          "./images/card6/clam.webp",
          "./images/card6/ham.jpg",
          "./images/card6/dam.jpg",
          "./images/card6/jam.jpg",
          "./images/card6/ram.jpg",
          "./images/card6/spam.jpg",
        ],
        ["clam", "ham", "dam", "jam", "ram", "spam"],
        ["sò", "giăm bông", "con đập", "mứt", "cừu", "thư rác"],

        color[5],
        backgroundImg[5],
        [
          "./sound/card6/clam.mp3",
          "./sound/card6/ham.mp3",
          "./sound/card6/dam.mp3",
          "./sound/card6/jam.mp3",
          "./sound/card6/ram.mp3",
          "./sound/card6/spam.mp3",
          "./sound/card6/am.mp3",
        ]
      );

      break;

    case 6:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần an",
        "an",
        "chú ý âm /n/ ở cuối",
        [
          "./images/card7/can.png",
          "./images/card7/man.webp",
          "./images/card7/van.png",
          "./images/card7/pan.png",
          "./images/card7/ran.avif",
          "./images/card7/snowman.avif",
        ],
        ["can", "man", "van", "pan", "ran", "snowman"],
        ["lon", "người đàn ông", "xe van", "chảo", "chạy", "người tuyết"],

        color[6],
        backgroundImg[6],
        [
          "./sound/card7/can.mp3",
          "./sound/card7/man.mp3",
          "./sound/card7/van.mp3",
          "./sound/card7/pan.mp3",
          "./sound/card7/ran.mp3",
          "./sound/card7/snowman.mp3",
          "./sound/card7/an.mp3",
        ]
      );

      break;

    case 7:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ap",
        "ap",
        "Chú ý âm /p/ ở cuối",
        [
          "./images/card8/cap.png",
          "./images/card8/clap.jpg",
          "./images/card8/slap.jpg",
          "./images/card8/strap.jpg",
          "./images/card8/trap.jpg",
          "./images/card8/wrap.avif",
        ],
        ["cap", "clap", "slap", "strap", "trap", "wrap"],
        ["Nón", "vỗ tay", "đập tay", "thắt lưng", "bẫy", "cuốn"],

        color[7],
        backgroundImg[7],
        [
          "./sound/card8/cap.mp3",
          "./sound/card8/clap.mp3",
          "./sound/card8/slap.mp3",
          "./sound/card8/strap.mp3",
          "./sound/card8/trap.mp3",
          "./sound/card8/wrap.mp3",
          "./sound/card8/ap.mp3",
        ]
      );

      break;

    case 8:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ass",
        "ass",
        "Chú ý âm /s/ ở cuối. Âm /s/ được biển hiện bằng s hoặc ss",
        [
          "./images/card9/brass.png",
          "./images/card9/class.jpg",
          "./images/card9/glass.avif",
          "./images/card9/grass.jpg",
          "./images/card9/lass.jpg",
          "./images/card9/pass.jpg",
        ],
        ["brass", "class", "glass", "grass", "lass", "pass"],
        ["kèn đồng", "lớp học", "cốc", "cỏ", "cô gái", "chuyền"],

        color[0],
        backgroundImg[0],
        [
          "./sound/card9/brass.mp3",
          "./sound/card9/class.mp3",
          "./sound/card9/glass.mp3",
          "./sound/card9/grass.mp3",
          "./sound/card9/lass.mp3",
          "./sound/card9/pass.mp3",
          "./sound/card9/ass.mp3",
        ]
      );

      break;

    case 9:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần at",
        "at",
        "Chú ý âm /t/ ở cuối",
        [
          "./images/card10/doormat.jpg",
          "./images/card10/fat.jpg",
          "./images/card10/hat.avif",
          "./images/card10/mat.jpg",
          "./images/card10/rat.jpg",
          "./images/card10/sat.avif",
        ],
        ["doormat", "fat", "hat", "mat", "rat", "sat"],
        ["thảm cửa", "mập mạp", "mũ", "thảm", "chuột", "ngồi"],

        color[1],
        backgroundImg[1],
        [
          "./sound/card10/doormat.mp3",
          "./sound/card10/fat.mp3",
          "./sound/card10/hat.mp3",
          "./sound/card10/mat.mp3",
          "./sound/card10/rat.mp3",
          "./sound/card10/sat.mp3",
          "./sound/card10/at.mp3",
        ]
      );

      break;

    case 10:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ax",
        "ax",
        "Chú ý âm x ở cuối được phát âm là /ks/",
        [
          "./images/card11/ax.jpg",
          "./images/card11/fax.png",
          "./images/card11/flax.webp",
          "./images/card11/relax.gif",
          "./images/card11/tax.jpg",
          "./images/card11/wax.jpg",
        ],
        ["ax", "fax", "flax", "relax", "tax", "wax"],
        ["rìu", "máy fax", "cây gai", "thư giãn", "thuế", "sáp"],

        color[2],
        backgroundImg[2],
        [
          "./sound/card11/ax.mp3",
          "./sound/card11/fax.mp3",
          "./sound/card11/flax.mp3",
          "./sound/card11/relax.mp3",
          "./sound/card11/tax.mp3",
          "./sound/card11/wax.mp3",
          "./sound/card11/ax.mp3",
        ]
      );

      break;

    case 11:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần e",
        "e",
        "Âm /e/ được biểu hiện bằng chữ e và phụ âm theo sau",
        [
          "./images/card12/jet.jpg",
          "./images/card12/bed.jpg",
          "./images/card12/hen.jpg",
          "./images/card12/web.jpg",
          "./images/card12/egg.jpg",
          "./images/card12/keg.jpg",
        ],
        ["jet", "bed", "hen", "web", "egg", "keg"],
        ["máy bay", "giường", "gà mái", "mạng nhện", "trứng", "thùng"],

        color[3],
        backgroundImg[3],
        [
          "./sound/card12/jet.mp3",
          "./sound/card12/bed.mp3",
          "./sound/card12/hen.mp3",
          "./sound/card12/web.mp3",
          "./sound/card12/egg.mp3",
          "./sound/card12/keg.mp3",
          "./sound/card12/e.mp3",
        ]
      );

      break;

    case 12:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần eck",
        "eck",
        "Chú ý âm cuối ck phát âm là /k/",
        [
          "./images/card13/neck.jpg",
          "./images/card13/speck.jpg",
          "./images/card13/wreck.jpg",
          "./images/card13/check.jpg",
          "./images/card13/turtleneck.jpg",
          "./images/card13/peck.jpg",
        ],
        ["neck", "speck", "wreck", "check", "turtleneck", "peck"],
        ["cổ", "đốm", "xác tàu đắm", "tích", "áo cao cổ", "mổ"],

        color[4],
        backgroundImg[4],
        [
          "./sound/card13/neck.mp3",
          "./sound/card13/speck.mp3",
          "./sound/card13/wreck.mp3",
          "./sound/card13/check.mp3",
          "./sound/card13/turtleneck.mp3",
          "./sound/card13/peck.mp3",
          "./sound/card13/eck.mp3",
        ]
      );

      break;

    case 13:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ed",
        "ed",
        "Chú ý âm /d/ ở cuối",
        [
          "./images/card14/led.jpg",
          "./images/card14/shred.png",
          "./images/card14/wed.webp",
          "./images/card14/teddy.gif",
          "./images/card14/pedal.jpg",
          "./images/card14/sled.jpg",
        ],
        ["led", "shred", "wed", "teddy", "pedal", "sled"],
        [
          "đèn led",
          "cắt nhỏ",
          "đám cưới",
          "gấu bông",
          "phanh xe",
          "xe trượt tuyết",
        ],

        color[5],
        backgroundImg[5],
        [
          "./sound/card14/led.mp3",
          "./sound/card14/shred.mp3",
          "./sound/card14/wed.mp3",
          "./sound/card14/teddy.mp3",
          "./sound/card14/pedal.mp3",
          "./sound/card14/sled.mp3",
          "./sound/card14/ed.mp3",
        ]
      );

      break;

    case 14:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần eg",
        "eg",
        "Chú ý âm /g/ ở cuối",
        [
          "./images/card15/beg.jpg",
          "./images/card15/egg.jpg",
          "./images/card15/eggplant.jpg",
          "./images/card15/leg.jpg",
          "./images/card15/nutmeg.jpg",
          "./images/card15/peg.jpg",
        ],
        ["beg", "egg", "eggplant", "leg", "nutmeg", "peg"],
        ["xin", "trứng", "cà tím", "chân", "hạt nhục đầu khấu", "cọc"],

        color[6],
        backgroundImg[6],
        [
          "./sound/card15/beg.mp3",
          "./sound/card15/egg.mp3",
          "./sound/card15/eggplant.mp3",
          "./sound/card15/leg.mp3",
          "./sound/card15/nutmeg.mp3",
          "./sound/card15/peg.mp3",
          "./sound/card15/eg.mp3",
        ]
      );

      break;

    case 15:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ell",
        "ell",
        "Chú ý âm /L/ ở cuối được phát âm như (ồ) rất nhẹ",
        [
          "./images/card16/yell.webp",
          "./images/card16/bell.jpg",
          "./images/card16/tell.png",
          "./images/card16/fell.avif",
          "./images/card16/well.jpg",
          "./images/card16/smell.webp",
        ],
        ["yell", "bell", "tell", "fell", "well", "smell"],
        ["hét", "chuông", "kể", "rơi", "tốt", "ngửi"],

        color[7],
        backgroundImg[7],
        [
          "./sound/card16/yell.mp3",
          "./sound/card16/bell.mp3",
          "./sound/card16/tell.mp3",
          "./sound/card16/fell.mp3",
          "./sound/card16/well.mp3",
          "./sound/card16/smell.mp3",
          "./sound/card16/ell.mp3",
        ]
      );

      break;

    case 16:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần em",
        "em",
        "Chú ý âm /m/ ở cuối",
        [
          "./images/card17/stem.png",
          "./images/card17/gem.jpg",
          "./images/card17/temple.avif",
          "./images/card17/semicolon.jpg",
          "./images/card17/hem.png",
          "./images/card17/them.png",
        ],
        ["stem", "gem", "temple", "semicolon", "hem", "them"],
        ["thân cây", "đá quý", "ngôi đền", "dáu chấm phẩy", "viền", "họ"],

        color[0],
        backgroundImg[0],
        [
          "./sound/card17/stem.mp3",
          "./sound/card17/gem.mp3",
          "./sound/card17/temple.mp3",
          "./sound/card17/semicolon.mp3",
          "./sound/card17/hem.mp3",
          "./sound/card17/them.mp3",
          "./sound/card17/em.mp3",
        ]
      );

      break;

    case 17:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần en",
        "en",
        "Chú ý âm /n/ ở cuối",
        [
          "./images/card18/pen.jpg",
          "./images/card18/ten.jpg",
          "./images/card18/yen.png",
          "./images/card18/when.webp",
          "./images/card18/den.jpg",
        ],
        ["pen", "ten", "YEN", "when", "den"],
        ["bút", "số mười", "đồng YEN", "khi nào", "hang"],

        color[1],
        backgroundImg[1],
        [
          "./sound/card18/pen.mp3",
          "./sound/card18/ten.mp3",
          "./sound/card18/yen.mp3",
          "./sound/card18/when.mp3",
          "./sound/card18/den.mp3",
          "./sound/card18/en.mp3",
        ]
      );

      break;

    case 18:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ep",
        "ep",
        "Chú ý âm /p/ ở cuối",
        [
          "./images/card19/pepsi.png",
          "./images/card19/pepper.jpg",
          "./images/card19/heptagon.jpg",
          "./images/card19/footstep.jpg",
          "./images/card19/rep.png",
          "./images/card19/step.jpg",
        ],
        ["pepsi", "pepper", "heptagon", "footstep", "rep", "step"],
        ["pepsi", "ớt", "thất giác", "bước chân", "trả lời", "bước"],

        color[2],
        backgroundImg[2],
        [
          "./sound/card19/pepsi.mp3",
          "./sound/card19/pepper.mp3",
          "./sound/card19/heptagon.mp3",
          "./sound/card19/footstep.mp3",
          "./sound/card19/rep.mp3",
          "./sound/card19/step.mp3",
          "./sound/card19/ep.mp3",
        ]
      );

      break;

    case 19:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ess",
        "ess",
        "Chú ý âm /s/ ở cuối được thể hiện bằng s hoặc ss",
        [
          "./images/card20/bless.png",
          "./images/card20/dress.png",
          "./images/card20/stress.jpg",
          "./images/card20/press.jpg",
          "./images/card20/less.jpg",
          "./images/card20/messenger.jpg",
        ],
        ["bless", "dress", "stress", "press", "less", "messenger"],
        ["ban phước", "váy", "căng thẳng", "ấn", "ít", "cuộc trò truyện"],

        color[3],
        backgroundImg[3],
        [
          "./sound/card20/bless.mp3",
          "./sound/card20/dress.mp3",
          "./sound/card20/stress.mp3",
          "./sound/card20/press.mp3",
          "./sound/card20/less.mp3",
          "./sound/card20/messenger.mp3",
          "./sound/card20/ess.mp3",
        ]
      );

      break;

    case 20:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần et",
        "et",
        "Chú ý âm /t/ ở cuối",
        [
          "./images/card21/set.webp",
          "./images/card21/net.jpg",
          "./images/card21/wet.jpg",
          "./images/card21/bet.jpg",
          "./images/card21/pet.jpg",
        ],
        ["set", "net", "wet", "bet", "pet"],
        ["đặt", "lưới", "ướt", "cược", "thú cưng"],

        color[4],
        backgroundImg[4],
        [
          "./sound/card21/set.mp3",
          "./sound/card21/net.mp3",
          "./sound/card21/wet.mp3",
          "./sound/card21/bet.mp3",
          "./sound/card21/pet.mp3",
          "./sound/card21/et.mp3",
        ]
      );

      break;

    case 21:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ead",
        "ead",
        "ea khi viêt liền với d, ea được phát âm là /e/ đừng quên âm /d/ nhé",
        [
          "./images/card22/head.jpg",
          "./images/card22/thread.jpg",
          "./images/card22/tread.jpg",
          "./images/card22/dead.jpg",
          "./images/card22/spread.jpg",
          "./images/card22/bread.jpg",
        ],
        ["head", "thread", "tread", "dead", "spread", "bread"],
        ["đầu", "cuộn chỉ", "cao su lốp", "chết", "lây lan", "bánh mì"],

        color[5],
        backgroundImg[5],
        [
          "./sound/card22/head.mp3",
          "./sound/card22/thread.mp3",
          "./sound/card22/thread.mp3",
          "./sound/card22/dead.mp3",
          "./sound/card22/spread.mp3",
          "./sound/card22/bread.mp3",
          "./sound/card22/ead.mp3",
        ]
      );

      break;

    case 22:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần er",
        "er",
        "er đôi khi được phát âm là /e/. Phần lớn er được đọc là (ờ)",
        [
          "./images/card23/strawberry.jpg",
          "./images/card23/berry.jpg",
          "./images/card23/ferry.jpg",
          "./images/card23/heron.jpg",
          "./images/card23/cherry.jpg",
        ],
        ["strawberry", "berry", "ferry", "heron", "cherry"],
        ["quả dâu", "quả mọng", "con tàu", "diệc", "quả anh đào"],

        color[6],
        backgroundImg[6],
        [
          "./sound/card23/strawberry.mp3",
          "./sound/card23/berry.mp3",
          "./sound/card23/ferry.mp3",
          "./sound/card23/heron.mp3",
          "./sound/card23/cherry.mp3",
          "./sound/card23/er.mp3",
        ]
      );

      break;

    case 23:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần i",
        "i",
        "Âm /i/ đc biểu hiện bằng chữ i và phụ âm theo sau. Ví dụ if, rib, six",
        [
          "./images/card24/pig.jpg",
          "./images/card24/swim.jpg",
          "./images/card24/six.jpg",
          "./images/card24/sit.avif",
          "./images/card24/wig.webp",
        ],
        ["pig", "swim", "six", "sit", "wig"],
        ["lợn", "bơi", "số sáu", "ngồi", "tóc giả"],

        color[7],
        backgroundImg[7],
        [
          "./sound/card24/pig.mp3",
          "./sound/card24/swim.mp3",
          "./sound/card24/six.mp3",
          "./sound/card24/sit.mp3",
          "./sound/card24/wig.mp3",
          "./sound/card24/i.mp3",
        ]
      );

      break;

    case 24:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ib",
        "ib",
        "Chú ý âm /b/ ở cuối",
        [
          "./images/card25/bib.avif",
          "./images/card25/crib.jpg",
          "./images/card25/rib.jpg",
          "./images/card25/nib.avif",
          "./images/card25/ribbon.png",
        ],
        ["bib", "crib", "rib", "nib", "ribbon"],
        ["yếm", "cũi", "xương sườn", "ngòi bút", "ruy băng"],

        color[0],
        backgroundImg[0],
        [
          "./sound/card25/bib.mp3",
          "./sound/card25/crib.mp3",
          "./sound/card25/rib.mp3",
          "./sound/card25/nib.mp3",
          "./sound/card25/ribbon.mp3",
          "./sound/card25/ib.mp3",
        ]
      );

      break;

    case 25:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ick",
        "ick",
        "Chú ý ck ở cuối phát âm là /k/",
        [
          "./images/card26/stick.webp",
          "./images/card26/kick.jpg",
          "./images/card26/click.jpg",
          "./images/card26/flick.jpg",
          "./images/card26/lick.jpg",
        ],
        ["stick", "kick", "click", "flick", "lick"],
        ["que", "đá", "ấn", "búng", "liếm"],

        color[1],
        backgroundImg[1],
        [
          "./sound/card26/stick.mp3",
          "./sound/card26/kick.mp3",
          "./sound/card26/click.mp3",
          "./sound/card26/flick.mp3",
          "./sound/card26/lick.mp3",
          "./sound/card26/ick.mp3",
        ]
      );

      break;

    case 26:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần id",
        "id",
        "Chú ý âm /d/ ở cuối",
        [
          "./images/card27/kid.png",
          "./images/card27/lid.jpg",
          "./images/card27/grid.png",
          "./images/card27/squid.avif",
          "./images/card27/skid.jpg",
        ],
        ["kid", "lid", "grid", "squid", "skid"],
        ["trẻ", "vung nồi", "vạch kẻ", "mực", "trượt"],

        color[2],
        backgroundImg[2],
        [
          "./sound/card27/kid.mp3",
          "./sound/card27/lid.mp3",
          "./sound/card27/grid.mp3",
          "./sound/card27/squid.mp3",
          "./sound/card27/skid.mp3",
          "./sound/card27/id.mp3",
        ]
      );

      break;

    case 27:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ig",
        "ig",
        "Chú ý âm /g/ ở cuối",
        [
          "./images/card28/dig.jpg",
          "./images/card28/rig.jpg",
          "./images/card28/fig.png",
          "./images/card28/zig.png",
          "./images/card28/brig.jpg",
        ],
        ["dig", "rig", "fig", "zig", "brig"],
        ["đào", "vung nồi", "vạch kẻ", "zic-zac", "trượt"],

        color[3],
        backgroundImg[3],
        [
          "./sound/card28/dig.mp3",
          "./sound/card28/rig.mp3",
          "./sound/card28/fig.mp3",
          "./sound/card28/zig.mp3",
          "./sound/card28/brig.mp3",
          "./sound/card28/ig.mp3",
        ]
      );

      break;

    case 28:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ill",
        "ill",
        "Chú ý ll ở cuối có âm (ồ) rất nhẹ",
        [
          "./images/card29/dill.webp",
          "./images/card29/drill.jpg",
          "./images/card29/fill.jpg",
          "./images/card29/grill.jpg",
          "./images/card29/pill.jpg",
        ],
        ["dill", "drill", "fill", "grill", "pill"],
        ["rau thì là", "máy khoan", "lấp đầy", "nướng", "viên thuốc"],

        color[4],
        backgroundImg[4],
        [
          "./sound/card29/dill.mp3",
          "./sound/card29/drill.mp3",
          "./sound/card29/fill.mp3",
          "./sound/card29/grill.mp3",
          "./sound/card29/pill.mp3",
          "./sound/card29/ill.mp3",
        ]
      );

      break;

    case 29:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần im",
        "im",
        "Chú ý âm /m/ ở cuối",
        [
          "./images/card30/brim.webp",
          "./images/card30/trim.jpg",
          "./images/card30/sim.jpg",
          "./images/card30/rim.jpg",
          "./images/card30/slim.jpg",
        ],
        ["brim", "trim", "sim", "rim", "slim"],
        ["que", "đá", "ấn", "búng", "liếm"],

        color[5],
        backgroundImg[5],
        [
          "./sound/card30/brim.mp3",
          "./sound/card30/trim.mp3",
          "./sound/card30/sim.mp3",
          "./sound/card30/rim.mp3",
          "./sound/card30/slim.mp3",
          "./sound/card30/im.mp3",
        ]
      );

      break;

    case 30:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần in",
        "in",
        "Chú ý âm /n/ ở cuối",
        [
          "./images/card31/tin.webp",
          "./images/card31/fin.jpg",
          "./images/card31/bin.jpg",
          "./images/card31/spin.jpg",
          "./images/card31/win.jpg",
        ],
        ["tin", "fin", "bin", "spin", "win"],
        ["thiếc", "vây", "thùng rác", "xoay", "thắng"],

        color[6],
        backgroundImg[6],
        [
          "./sound/card31/tin.mp3",
          "./sound/card31/fin.mp3",
          "./sound/card31/bin.mp3",
          "./sound/card31/spin.mp3",
          "./sound/card31/win.mp3",
          "./sound/card31/in.mp3",
        ]
      );

      break;

    case 31:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ip",
        "ip",
        "Chú ý âm /p/ ở cuối",
        [
          "./images/card32/lip.webp",
          "./images/card32/snip.jpg",
          "./images/card32/hip.jpg",
          "./images/card32/zip.jpg",
          "./images/card32/ship.jpg",
        ],
        ["lip", "snip", "hip", "zip", "ship"],
        ["môi", "mảnh nhỏ", "hong", "khóa kéo", "thuyền"],

        color[7],
        backgroundImg[7],
        [
          "./sound/card32/lip.mp3",
          "./sound/card32/snip.mp3",
          "./sound/card32/hip.mp3",
          "./sound/card32/zip.mp3",
          "./sound/card32/ship.mp3",
          "./sound/card32/ip.mp3",
        ]
      );

      break;

    case 32:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần it",
        "it",
        "Chú ý âm /t/ ở cuối",
        [
          "./images/card33/slit.webp",
          "./images/card33/split.jpg",
          "./images/card33/hit.jpg",
          "./images/card33/fit.jpg",
          "./images/card33/pit.jpg",
        ],
        ["slit", "split", "hit", "fit", "pit"],
        ["rạch", "tách", "đánh", "phù hợp", "hố"],

        color[0],
        backgroundImg[0],
        [
          "./sound/card33/slit.mp3",
          "./sound/card33/split.mp3",
          "./sound/card33/hit.mp3",
          "./sound/card33/fit.mp3",
          "./sound/card33/pit.mp3",
          "./sound/card33/it.mp3",
        ]
      );

      break;

    case 33:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ix",
        "ix",
        "Chú ý chữ x phát âm là /k/ và /s/",
        [
          "./images/card34/six.webp",
          "./images/card34/helix.jpg",
          "./images/card34/affix.jpg",
          "./images/card34/mix.jpg",
          "./images/card34/fix.jpg",
        ],
        ["six", "helix", "affix", "mix", "fix"],
        ["sáu", "xoắn ốc", "thêm vào", "trộn", "sửa"],

        color[1],
        backgroundImg[1],
        [
          "./sound/card34/six.mp3",
          "./sound/card34/helix.mp3",
          "./sound/card34/affix.mp3",
          "./sound/card34/mix.mp3",
          "./sound/card34/fix.mp3",
          "./sound/card34/ix.mp3",
        ]
      );

      break;

    //34*

    case 34:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần o",
        "o",
        "Âm /o/ được biểu hiện bằng chữ o và phụ âm sau đó",
        [
          "./images/card35/hop.png",
          "./images/card35/hot.jpg",
          "./images/card35/mop.jpg",
          "./images/card35/off.png",
          "./images/card35/pot.jpg",
        ],
        ["hop", "hot", "mop", "off", "pot"],
        ["nhảy lò cò", "nóng", "chổi lau nhà", "tắt", "nồi"],

        color[2],
        backgroundImg[2],
        [
          "./sound/card35/hop.mp3",
          "./sound/card35/hot.mp3",
          "./sound/card35/mop.mp3",
          "./sound/card35/off.mp3",
          "./sound/card35/pot.mp3",
          "./sound/card35/o.mp3",
        ]
      );

      break;
    //36
    case 35:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ob",
        "ob",
        "Chú ý chữ âm /b/ ở cuối",
        [
          "./images/card36/sob.webp",
          "./images/card36/cob.jpg",
          "./images/card36/blob.jpg",
          "./images/card36/rob.jpg",
          "./images/card36/lobster.jpg",
        ],
        ["sob", "cob", "blob", "rob", "lobster"],
        ["nức nở", "lõi ngô", "bãi(vết)", "trộm", "tôm hùm"],

        color[3],
        backgroundImg[3],
        [
          "./sound/card36/sob.mp3",
          "./sound/card36/cob.mp3",
          "./sound/card36/blob.mp3",
          "./sound/card36/rob.mp3",
          "./sound/card36/lobster.mp3",
          "./sound/card36/ob.mp3",
        ]
      );

      break;

    //37
    case 36:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ock",
        "ock",
        "ck ở cuối được phát âm là /k/",
        [
          "./images/card37/sock.png",
          "./images/card37/flock.jpg",
          "./images/card37/clock.avif",
          "./images/card37/rock.jpg",
          "./images/card37/lock.png",
        ],
        ["sock", "flock", "clock", "rock", "lock"],
        ["tất", "đá", "đồng hồ", "đá", "khóa"],

        color[4],
        backgroundImg[4],
        [
          "./sound/card37/sock.mp3",
          "./sound/card37/flock.mp3",
          "./sound/card37/clock.mp3",
          "./sound/card37/rock.mp3",
          "./sound/card37/lock.mp3",
          "./sound/card37/ock.mp3",
        ]
      );

      break;
    //38
    case 37:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần od",
        "od",
        "Chú ý âm /d/ ở cuối",
        [
          "./images/card38/god.png",
          "./images/card38/pod.png",
          "./images/card38/cod.jpg",
          "./images/card38/rod.png",
          "./images/card38/sod.jpg",
        ],
        ["god", "pod", "cod", "rod", "sod"],
        ["chúa", "vỏ", "cá tuyết", "cần câu", "cỏ nhân tạo"],

        color[5],
        backgroundImg[5],
        [
          "./sound/card38/god.mp3",
          "./sound/card38/pod.mp3",
          "./sound/card38/cod.mp3",
          "./sound/card38/rod.mp3",
          "./sound/card38/sod.mp3",
          "./sound/card38/od.mp3",
        ]
      );

      break;

    case 38:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần og",
        "og",
        "Chú ý âm /g/ ở cuối",
        [
          "./images/card39/frog.png",
          "./images/card39/cog.png",
          "./images/card39/jog.jpg",
          "./images/card39/log.png",
          "./images/card39/clog.jpg",
        ],
        ["frog", "cog", "jog", "log", "clog"],
        ["ếch", "răng cưa", "chạy bộ", "khúc gỗ", "tắc"],

        color[6],
        backgroundImg[6],
        [
          "./sound/card39/frog.mp3",
          "./sound/card39/cog.mp3",
          "./sound/card39/jog.mp3",
          "./sound/card39/log.mp3",
          "./sound/card39/clog.mp3",
          "./sound/card39/og.mp3",
        ]
      );

      break;

    case 39:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần op",
        "op",
        "Chú ý âm /p/ ở cuối",
        [
          "./images/card40/stop.webp",
          "./images/card40/drop.jpg",
          "./images/card40/cop.webp",
          "./images/card40/crop.jpg",
          "./images/card40/pop.png",
        ],
        ["stop", "drop", "cop", "crop", "pop"],
        ["dừng", "rơi", "cảnh sát", "cánh đồng", "nổ"],

        color[7],
        backgroundImg[7],
        [
          "./sound/card40/stop.mp3",
          "./sound/card40/drop.mp3",
          "./sound/card40/cop.mp3",
          "./sound/card40/crop.mp3",
          "./sound/card40/pop.mp3",
          "./sound/card40/op.mp3",
        ]
      );

      break;
    //40
    case 40:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ot",
        "ot",
        "Chú ý âm /t/ ở cuối",
        [
          "./images/card41/rot.jpg",
          "./images/card41/tot.jpg",
          "./images/card41/jot.jpg",
          "./images/card41/shot.avif",
          "./images/card41/cot.png",
        ],
        ["rot", "tot", "jot", "shot", "cot"],
        ["thối", "đứa bé", "ghi chú", "tiêm(bắn)", "cũi"],

        color[0],
        backgroundImg[0],
        [
          "./sound/card41/rot.mp3",
          "./sound/card41/tot.mp3",
          "./sound/card41/jot.mp3",
          "./sound/card41/shot.mp3",
          "./sound/card41/cot.mp3",
          "./sound/card41/ot.mp3",
        ]
      );

      break;

    case 41:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần ox",
        "ox",
        "Chũ x gồm âm /k/ và âm /s/ gộp lại",
        [
          "./images/card42/box.avif",
          "./images/card42/toolbox.jpg",
          "./images/card42/fox.avif",
          "./images/card42/sox.png",
          "./images/card42/mailbox.webp",
        ],
        ["box", "toolbox", "fox", "sox", "mailbox"],
        ["hộp", "hộp dụng cụ", "cáo", "tất", "hòm thư"],

        color[1],
        backgroundImg[1],
        [
          "./sound/card42/box.mp3",
          "./sound/card42/toolbox.mp3",
          "./sound/card42/fox.mp3",
          "./sound/card42/sox.mp3",
          "./sound/card42/mailbox.mp3",
          "./sound/card42/ox.mp3",
        ]
      );

      break;

    case 42:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần a",
        "a",
        "Chữ a đi sau âm /w/ được phát âm là /o/. Âm /w/ được biểu tượng bằng chữ W, Qu",
        [
          "./images/card43/walk.avif",
          "./images/card43/waffle.jpg",
          "./images/card43/wash.jpg",
          "./images/card43/watch.png",
          "./images/card43/wallet.avif",
        ],
        ["walk", "waffle", "wash", "watch", "wallet"],
        ["đi bộ", "bánh quế", "giặt", "xem", "ví tiền"],

        color[2],
        backgroundImg[2],
        [
          "./sound/card43/walk.mp3",
          "./sound/card43/waffle.mp3",
          "./sound/card43/wash.mp3",
          "./sound/card43/watch.mp3",
          "./sound/card43/wallet.mp3",
          "./sound/card43/a.mp3",
        ]
      );

      break;

    case 43:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần al",
        "al",
        "al được phát âm là /o/",
        [
          "./images/card44/salt.jpg",
          "./images/card44/almond.jpg",
          "./images/card44/walnut.jpg",
          "./images/card44/palm.avif",
          "./images/card44/halt.jpg",
        ],
        ["salt", "almond", "walnut", "palm", "halt"],
        ["muối", "hạnh nhân", "óc chó", "lòng bàn tay", "tạm dừng"],

        color[3],
        backgroundImg[3],
        [
          "./sound/card44/salt.mp3",
          "./sound/card44/almond.mp3",
          "./sound/card44/walnut.mp3",
          "./sound/card44/palm.mp3",
          "./sound/card44/halt.mp3",
          "./sound/card44/al.mp3",
        ]
      );

      break;

    case 44:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần alk",
        "alk",
        "Chú ý âm /k/ ở cuối",
        [
          "./images/card45/chalk.jpg",
          "./images/card45/balk.png",
          "./images/card45/stalk.jpg",
          "./images/card45/sidewalk.jpg",
          "./images/card45/calk.jpg",
        ],
        ["chalk", "balk", "stalk", "sidewalk", "calk"],
        [
          "phấn",
          "sự cản trở",
          "rình rập",
          "đường đi bộ",
          "liếm",
          "silicon bịt",
        ],

        color[4],
        backgroundImg[4],
        [
          "./sound/card45/chalk.mp3",
          "./sound/card45/balk.mp3",
          "./sound/card45/stalk.mp3",
          "./sound/card45/sidewalk.mp3",
          "./sound/card45/calk.mp3",
          "./sound/card45/alk.mp3",
        ]
      );

      break;

    case 45:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần all",
        "all",
        "Chú ý chữ L ở cuối có âm như (ô) rất nhẹ",
        [
          "./images/card46/small.jpg",
          "./images/card46/tall.jpg",
          "./images/card46/ball.png",
          "./images/card46/stall.jpg",
          "./images/card46/pall.png",
        ],
        ["small", "tall", "ball", "stall", "pall"],
        ["nhỏ", "cao", "bóng", "quầy hàng", "áo khoác giáo hoàng"],

        color[5],
        backgroundImg[5],
        [
          "./sound/card46/small.mp3",
          "./sound/card46/tall.mp3",
          "./sound/card46/ball.mp3",
          "./sound/card46/stall.mp3",
          "./sound/card46/pall.mp3",
          "./sound/card46/all.mp3",
        ]
      );

      break;

    case 46:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần au",
        "au",
        "au được phát âm là /o/",
        [
          "./images/card47/taunt.jpg",
          "./images/card47/daunt.jpg",
          "./images/card47/applause.png",
          "./images/card47/maul.png",
          "./images/card47/autumn.jpg",
        ],
        ["chế nhạo", "daunt", "applause", "maul", "autumn"],
        ["que", "nản", "vỗ tay", "vồ", "mùa thu"],

        color[6],
        backgroundImg[6],
        [
          "./sound/card47/taunt.mp3",
          "./sound/card47/daunt.mp3",
          "./sound/card47/applause.mp3",
          "./sound/card47/maul.mp3",
          "./sound/card47/autumn.mp3",
          "./sound/card47/au.mp3",
        ]
      );

      break;

    case 47:
      backbtn();
      soundArr.splice(0, soundArr.length);
      createCard(
        "Vần aw",
        "aw",
        "aw được phát âm là /o/",
        [
          "./images/card48/jaw.jpg",
          "./images/card48/draw.jpg",
          "./images/card48/straw.jpg",
          "./images/card48/saw.png",
          "./images/card48/hawk.jpg",
        ],
        ["jaw", "draw", "straw", "saw", "hawk"],
        ["hàm", "vẽ", "ống hút", "lưỡi cưa", "chim ưng"],

        color[7],
        backgroundImg[7],
        [
          "./sound/card48/jaw.mp3",
          "./sound/card48/draw.mp3",
          "./sound/card48/straw.mp3",
          "./sound/card48/saw.mp3",
          "./sound/card48/hawk.mp3",
          "./sound/card48/aw.mp3",
        ]
      );

      break;
  }
}

function backbtn() {
  cardFront.style.transform = "rotateX(0deg)";
  cardBack.style.transform = "rotateX(180deg)";
}

function playSound(index) {
  console.log(soundArr);
  soundArr[index].play();
}

function handleOne(index) {
  switch (index) {
    case 1:
      if (currentIndex === 0) {
        currentIndex = 47;
        changeCard(currentIndex);
      } else {
        currentIndex--;
        changeCard(currentIndex);
      }
      break;
    case 2:
      if (currentIndex === 47) {
        currentIndex = 0;
        changeCard(currentIndex);
      } else {
        currentIndex++;
        changeCard(currentIndex);
      }
      break;
  }
}
