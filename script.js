
const hamburger = document.getElementsByClassName("hamburger")[0];

const list = document.getElementsByClassName("list")[0];

const container = document.getElementsByClassName("top-container")[0];

const body = document.getElementsByTagName("body")[0];

hamburger.addEventListener("click", function(event){
    hamburger.classList.toggle("hamburger");
    hamburger.classList.toggle("close");

    container.classList.toggle("color");
    list.classList.toggle("show");
    body.classList.toggle("hidden");
    window.scrollTo(0,0);
});

window.onclick = function(event){
    if(event.target.matches(".list")){
        list.classList.add("show");
        container.classList.add("color");
        hamburger.classList.add("close");
        body.classList.toggle("hidden");
    }
}