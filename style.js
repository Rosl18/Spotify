const instagramSVG = document.querySelector("#instagram-svg");
const fill1 = document.querySelector("#fill1");

instagramSVG.addEventListener("mouseover", () =>{
    fill1.setAttribute('style', 'fill:#1ed760')
})
instagramSVG.addEventListener("mouseout", () =>{
    fill1.setAttribute('style', 'fill:#dddddd')
})

const twitterSVG = document.querySelector("#twitter-svg");
const fill2 = document.querySelector("#fill2");

twitterSVG.addEventListener("mouseover", () =>{
    fill2.setAttribute('style', 'fill:#1ed760')
})
twitterSVG.addEventListener("mouseout", () =>{
    fill2.setAttribute('style', 'fill:#dddddd')
})

const facebookSVG = document.querySelector("#facebook-svg");
const fill3 = document.querySelector("#fill3");

facebookSVG.addEventListener("mouseover", () =>{
    fill3.setAttribute('style', 'fill:#1ed760')
})
facebookSVG.addEventListener("mouseout", () =>{
    fill3.setAttribute('style', 'fill:#dddddd')
})

const brasil = document.querySelector("#brasil")
const world = document.querySelector("#world")

 world.addEventListener("mouseover", () =>{
    brasil.setAttribute("style","color: #1ed760")
 })
 brasil.addEventListener("mouseover", () =>{
    brasil.setAttribute("style","color: #1ed760")
 })
 world.addEventListener("mouseout", () =>{
    brasil.setAttribute("style","color: #919496")
 })
 brasil.addEventListener("mouseout", () =>{
    brasil.setAttribute("style","color: #919496")
 })

var btn1 = document.querySelector("#input-check")
var btn1CHECK = document.querySelector("#menu-lateral")

function animacao1(){
    btn1.classList.toggle("active");

    if(btn1.classList.contains("active")){
        btn1CHECK.setAttribute("style","margin-left: 0%")
    }else{
        btn1CHECK.setAttribute("style","margin-left:1005%")
    }
}
