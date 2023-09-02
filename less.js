// DOM - DOCUMENT OBJECT MODEL
//  Объектная Модель Документа (DOM) – это программный интерфейс (API) для HTML
//   и XML документов. DOM предоставляет структурированное представление документа
//   и определяет то, как эта структура может быть доступна из программ, которые 
//   могут изменять содержимое, стиль и структуру документа.

// let btn = {
//     id:"btn",
//     textCountent: "button" // текст тоже является объектам.
// }
// console.log(btn);
// console.log(document.body); // наш  HTML является документм

/////////////////////////////////////////////////////////////
               // 1-метод чтобы получить элемент 
// let h1 = document.getElementsByTagName("h1") // получить элемент по названию тега
// console.log(h1);

// let h2 = document.getElementsByClassName("title") // получить элемент по названию класса
// console.log(h2);

// let btn = document.getElementById("btn") // получить элемент по ID
// console.log(btn);
/////////////////////////////////////////////////////////////
               // 2-метод чтобы получить элемент 
// let tag = document.querySelector("h3")
// console.log(tag);  // по тегу 

// let tag2 = document.querySelector(".title")
// console.log(tag2); // по класса

// let tag3 = document.querySelector("#btn")
// console.log(tag3); // по ID
///////////////////////////////////////////////////////////////
// let tag4 = document.querySelectorAll(".text")
// console.log(tag4);
////////////////////////////////////////////////////////////////
let h6 = document.querySelector("h6")
// console.log(h6.textContent); // 1-метод
// console.log(h6.innerText);  // 2-метод
// console.log(h6.innerHTML); // 3-метод
/////////////////////////////////////////////////////////////////
h6.innerHTML = "HELLO WORLD1"
h6.innerText = "HELLO WORLD2"
h6.textContent = "HELLO WORLD3" //  читает сверху вниз, то прочитал последний ответ
///////////////////////////////////////////////////////////////////////////
// h5.innerHTML = '<p>Hello Kairylnisa</p>' // ответ ввыдит: Hello Kairylnisa
// h5.textContent ='<p>Hello Kairylnisa</p>' // ответ ввыдит: <p>Hello Kairylnisa</p>
/////////////////////////////////////////////////////////////////////////////
let h4= document.querySelector("h4")
console.log(h4.className); //  1-метод ответ: day
console.log(h4.classList);  //  2-метод ответ: day
//////////////////////////////////////////////////////////////////////////////////
// h4.className = "red"
// h4.classList = "green"

// h1.classList.add("blue")
// h1.classList.remove("green") // удаляет 
// h1.classList.replace("blue", "red") // поменяет на red т.е меняет по местами
// h1.classList.toggle("yellow") // убирает и добавляет
console.log(h4.classList.contains('haha'));  //  false 
console.log(h4.classList.contains('day'));  //  true  
/////////////////////////////////////////////////////////////////////////////////////
// дадим стил
          // 1-метод
h6.style.color = "red"
h6.style.textAlign = "center"  
h6.style.background = "green"  
h6.style.fontSize = "50px"        
          // 2-метод
h6.style.cssText = "color:red"   
h6.style.cssText = "textAling:center"  
h6.style.cssText = "background:green"  
h6.style.cssText = "fontSize:50px"
          // 3-метод
// надо написать в HTML так: 
// <h6 class="nisa" style="color: blueviolet;">HELLO WORLD</h6>
console.log(h6.hasAttribute("style")); // ответ : TRUE,  так как у нас есть STYLE
console.log(h6.hasAttribute("id")); // ответ : FALSE,  так как у нас нету ID
// ПРОВЕРЯЕТ АТРИБУТА
console.log(h6.attributes);
console.log(h6.getAttribute("class")); // получить атрибут класса
console.log(h6.setAttribute( "text" ,"welcom")); // !!!!ТАМ ПРОБЛЕМА ПОКА ЧТО
/////////////////////////////////////////////////////////////////////
let h1 = document.createElement("h1")
h1.textContent = "added content for h1"
let body = document.body
// body.appendChild(h1)
body.append(h1)   //  то есть APPEND  и  APPENCHILD у нас отображают наш контент в браузере // по порядку
body.prepend(h1) // само начало
h6.after(h1) // h1 после h6
/////////////////////////////////////////////////////////////////////////////////////////////
let title = document.querySelector(".title")
let btn = document.querySelector(".btn")
title.style.textAlign = "center"
///////////////////////////////////////
//  напишим логику 
btn.addEventListener('click', () =>{
            // 1-логика
    // console.log('click'); // это работает нормольно 
            // 2-логика 
   // title.style.color = 'red' // это  тоже работает нормольно 
            // 3-логика  
  title.style.color = `rgb(
${Math.floor(Math.random() * 255)}
${Math.floor(Math.random() * 255)}
${Math.floor(Math.random() * 255)}

  )
  `
})
    
                    
                
 /////////////////////////////////////
let block = document.querySelector('.block')
let input = document.querySelector('input')   
block.style.cssText = `
height:200px;
width:200px;
border:1px solid #000;
transition: 0.4s ease;
`
input.addEventListener('input', ()=>{
block.style.background = input.value
block.style.borderRadius = input.value // VALUE -   значение
})
/////////////////////////////////////////////////