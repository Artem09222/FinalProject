const inpYear = document.querySelector(".input__year");
const randomNum = document.querySelector(".number");
const searchBtn = document.querySelector(".input__icon");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inpYears = +inpYear.value;
  if ((inpYears % 4 == 0 && inpYears % 100 != 0) || inpYears % 400 == 0) {
    randomNum.textContent = inpYears + " рік народження є високосним.";
    randomNum.style.color = 'green'
  } else {
    randomNum.textContent = inpYears + " рік народження не є високосним роком.";
    randomNum.style.color = 'red'
  }
});

// Task 3
const inputs = document.querySelectorAll(".inp__num");
const bigNum = document.querySelector(".big__numb");

let numbers = [];
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    numbers = [];
    inputs.forEach((input) => {
      const num = +input.value;
      if (!isNaN(num)) {
        numbers.push(num);
      }
    });

    if (numbers.length > 0) {
      const maxNum = Math.max(...numbers);
      bigNum.textContent = "Найбільше число, яке ви ввели - " + maxNum;
    }
  });
});

// Task 2
const mathProgress = document.querySelectorAll(".icon");
const mathResult = document.querySelector(".icon2");
const numbCalc = document.querySelectorAll(".numb__calc");
const numbResult = document.querySelector(".numb");

mathProgress.forEach((button) => {
  button.addEventListener("click", () => {
    const num1 = +numbCalc[0].value;
    const num2 = +numbCalc[1].value;
    const operator = button.value;

    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = "Ділення на нуль";
        }
        break;
      default:
        result = "Невідомий оператор";
    }

    numbResult.value = result;
  });
});

mathResult.addEventListener("click", () => {
  const num1 = +numbCalc[0].value;
  const num2 = +numbCalc[1].value;
  const operator = document.querySelector(".icon.selected").value;

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Ділення на нуль";
      }
      break;
    default:
      result = "Невідомий оператор";
  }

  numbResult.value = result;
});

mathProgress.forEach((button) => {
  button.addEventListener("click", () => {
    mathProgress.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// Task 3

const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammar<br>ström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

let buttons = document.querySelectorAll(".the__first__btn");
let divs = document.querySelectorAll(".gray__square");

buttons[0].addEventListener("click", (e) => {
  let arrBornNinetenthCentury = [];

  const bornScientists = scientists.filter((item) => {
    if (item.born >= 1800) {
      arrBornNinetenthCentury.push(`${item.name} ${item.surname}`);
    }
  });

  divs.forEach((element) => {
    element.innerHTML = ''
    element.style.textAlign = 'center'
    if (element.id <= arrBornNinetenthCentury[element.id - 1]) {
    element.innerHTML = arrBornNinetenthCentury[element.id - 1];
    }
  });
});

// second button
buttons[1].addEventListener("click", () => {
  const sortedScientists = scientists.sort((first, second) =>
    first.name.localeCompare(second.name)
  );
  divs.forEach((elements, index) => {
    elements.style.textAlign = 'center'
    elements.innerHTML = `<p class="divs__p">${sortedScientists[index].name} ${sortedScientists[index].surname}</p>`;
  });
});

// third button
buttons[2].addEventListener("click", () => {
  const sortedScientistsByYear = scientists.map((scientist) => {
    const sortByYear = scientist.dead - scientist.born;
    return { ...scientist, sortByYear };
  });

  sortedScientistsByYear.sort((a, b) => a.sortByYear - b.sortByYear);
  
  divs.forEach((elem, index) => {
    elem.style.textAlign = 'center'
    elem.innerHTML = `<p class="divs__p">${sortedScientistsByYear[index].name} ${sortedScientistsByYear[index].surname}</p>`;
  });
});

// fourth button 
buttons[3].addEventListener('click', () => {
  const maxYear = scientists.find((c) => Math.max(c.born))
  
  divs.forEach((year) => {
    year.style.textAlign = 'center'
    year.innerHTML = ''
  })
  divs[0].innerHTML = `<p class="divs__p">${maxYear.name} ${maxYear.surname}</p>`
})

// fifth button 
let secondButtons = document.querySelectorAll(".the__second__btn");

secondButtons[0].addEventListener('click', () => {
  const bornAlbertEinshtein = scientists.find((b) => b === scientists[0]);
  divs.forEach((born) => {
    born.innerHTML = ''
    born.style.textAlign = 'center'
  })
  divs[0].innerHTML = `<p class="divs__p">${bornAlbertEinshtein.born}</p>`
})

// six button
secondButtons[1].addEventListener('click', () => {
  const scientistStartsWithC = scientists.filter(g => g.surname.startsWith('C'))
  divs.forEach((startC, index) => {
    startC.style.textAlign = 'center'
    startC.innerHTML = `<p class="divs__p">${scientistStartsWithC[index].name} ${scientistStartsWithC[index].surname}</p>`
  })
})

// seventh btn
secondButtons[2].addEventListener('click', () => {
  const scientistRemoveA = scientists.filter(remove => !remove.name.startsWith('A'))
  divs.forEach((removeA, index) => {
    removeA.style.textAlign = 'center'
    removeA.innerHTML = `<p class="divs__p">${scientistRemoveA[index].name} ${scientistRemoveA[index].surname}</p>`
  })
})

// eighth btn
secondButtons[3].addEventListener('click', () => {
  const maxWhoBorn = scientists.reduce((maxLived, scientist) => {
    const scientistMaxBorn = scientist.dead - scientist.born;
    const maxLifeScientist = maxLived.dead- maxLived.born;
    return scientistMaxBorn > maxLifeScientist ? scientist : maxLived;
  });
  
  const minWhoBorn = scientists.reduce((minLived, scientist) => {
    const scientistMinBorn = scientist.deathYear - scientist.birthYear;
    const minLifeScientist = minLived.deathYear - minLived.birthYear;
    return scientistMinBorn < minLifeScientist ? scientist : minLived;
  });
  
  divs.forEach((born) => {
    born.innerHTML = ''
    born.style.textAlign = 'center'
  })
  divs[0].innerHTML = `<p class="divs__p">${maxWhoBorn.name} ${maxWhoBorn.surname}</p>`
  divs[1].innerHTML = `<p class="divs__p">${minWhoBorn.name} ${minWhoBorn.surname}</p>`
})

// nineth button 
let nameBtn = document.querySelector('.the__word__btn')
nameBtn.addEventListener('click', () => {
  const scientistsNameSurname = scientists.filter(scientist => {
    const scientistName = scientist.name[0].toLowerCase()
    const scientistSurname = scientist.surname[0].toLowerCase()
    return scientistName === scientistSurname;
  })
  divs.forEach((div, index) => {
    div.innerHTML = ''
    div.style.textAlign = 'center'
    div.innerHTML = `<p class="divs__p">${scientistsNameSurname[index].name} ${scientistsNameSurname[index].surname}</p>`
  })
})

// footer
let inpEmail = document.querySelector('.inp__email')
let btnEmail = document.querySelector('.coding-button')
let formEmail = document.querySelector('.form')

const modalWindowHTML = `
    <div id="modal" class="modal">
        <div class="modal-content">
            <span id="closeModal"></span>
            <p class="modalText"></p>
        </div>
    </div>
`;

document.body.insertAdjacentHTML('beforeend', modalWindowHTML);

const closeModal = document.querySelector('#closeModal');
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modalText');

formEmail.addEventListener('submit', (event) => {
  event.preventDefault();
  modalText.textContent = 'Ви підписалися на цей канал!';
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
})

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
      modal.style.display = 'none';
  }
});

btnEmail.addEventListener('click', () => {
  modalText.textContent = 'Ви підписалися на цей канал!';
  modal.style.display = 'block';
});

document.addEventListener("DOMContentLoaded", () => {
  const modalAuthentication = document.querySelector(".my__modal");
  const closeBtn = document.querySelector(".close__bnt");
  
  modalAuthentication.style.display = "block";

  document.addEventListener('mousedown', (event) => {
      if (!modalAuthentication.contains(event.target)) {
          modalAuthentication.style.display = "none";
      }
  });

  closeBtn.addEventListener('click', () => {
      modalAuthentication.style.display = "none";
  });
});

// let splide = new Splide("#main-slider", {
//   width: 600,
//   height: 300,
//   pagination: false,
//   cover: true,
// });

// let thumbnails = document.getElementsByClassName("thumbnail");
// let current;

// for (let i = 0; i < thumbnails.length; i++) {
//   initThumbnail(thumbnails[i], i);
// }

// function initThumbnail(thumbnail, index) {
//   thumbnail.addEventListener("click", function () {
//     splide.go(index);
//   });
// }

// splide.on("mounted move", function () {
//   var thumbnail = thumbnails[splide.index];

//   if (thumbnail) {
//     if (current) {
//       current.classList.remove("is-active");
//     }

//     thumbnail.classList.add("is-active");
//     current = thumbnail;
//   }
// });

// splide.mount();
// // let serchButton = document.querySelector('.serchButton')
// let subt = document.querySelector('.subtitle')



// const searchForm = document.querySelector(".search-form");
// const searchValue = document.querySelector(".search-value");



// let computerChouse =document.querySelector('.computerChouse')


// searchForm.addEventListener('submit', (e) =>{
//   e.preventDefault()
//    const randomNum = Math.floor(Math.random() * 10); 

//   let playerNum = e.target.playerNumber.value;
//   // if (isNaN(playerNum)  playerNum > 10  1 < playerNum) {
//   //   searchValue.innerHTML = 'Виберіть число від 1 до 10'
//   // }

 

//   if (playerNum > randomNum  randomNum > playerNum) {
//     subt.innerHTML = `Ви програли`
//     subt.style.color = 'red'
//   } else {
//     subt.innerHTML = `Ви вгалали число ${playerNum}`;
//     subt.style.color = 'green'
//   }
// console.log(randomNum);
// })
// let textt = document.querySelector('.youWin')
// let compWin = 0
// let youWin = 0
// const pickOne = document.querySelectorAll('.pick-one')
// let computer = document.querySelector('.computer')
// let you = document.querySelector('.you ')
// const options = [stone, scissors, paper]

// pickOne.forEach((e) =>{
//   e.addEventListener('click', () => {
//     let computerChouse = Math.floor(Math.random() * 3);
// console.log(e.id);
// console.log(options[computerChouse].id);

// if (e.id === 'stone' && options[computerChouse].id === 'scissors'  e.id === 'stone' && options[computerChouse].id === 'paper' || e.id === 'scissors' && options[computerChouse] === 'paper') {
// youWin++ 
// you.innerHTML = youWin
// textt.style.color = 'green'
// textt.innerHTML = 'Ви виграли раунд!'
// }

// else {
//   compWin++
//   computer.innerHTML = compWin
//   textt.style.color='red'
//   textt.innerHTML='Ви програли'
// }
//   })
// })

// const ball = document.querySelector('.ballicon')
// const field = document.querySelector('.filed')


// field.addEventListener('click', e => {
//   let x = e.offsetX;
//   let y = e.offsetY;
//   ball.style.transform = translate(`${x}px, ${y}px`);
// })