//properties

//html tag
document.firstElementChild;
//head tag
document.firstElementChild.firstElementChild;
//body tag
document.firstElementChild.lastElementChild;
//h1 tag
document.firstElementChild.lastElementChild.firstElementChild;


var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Good bye";
heading.style.color = "red";

document.querySelector("input").click(false);

//methods

document.getElementsByTagName("li")[2].style.color = "purple";
document.getElementsByTagName("li").length;
document.getElementsByClassName("btn")[0].style.color = "blue";
document.getElementById("title");
//coger mediante el selector del css
document.querySelector("h1").style.fontSize = "3rem";
document.querySelector("#title");
document.querySelector(".btn").style.backgroundColor = "yellow";
//aqui podemos introducir estilos del css
document.querySelector("button").classList.add("pad");
//introducir caracteristicas del html
document.querySelector("h1").innerHTML = "<em> Good bye</em>"
//cambiar atributos
document.querySelector("a").setAttribute("href", "https://www.bing.com")