function activelg(anything) {
    document.getElementsByClassName(anything).disabled = true;
}
//clock
setInterval(() => {
    let hour = document.querySelector("#hour");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");
    let ampm = document.querySelector("#ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    // let am = "AM";
    

    if (h < 10) {
        hour.innerHTML = "0" + h + ":";
    } else hour.innerHTML = h + ":";
    if (m < 10) {
        minutes.innerHTML = "0" + m + ":";
    } else
        minutes.innerHTML = m + ":";
    if (s < 10) {
        seconds.innerHTML = "0" + s + "&nbsp";
    } else
        seconds.innerHTML = s + "&nbsp";
    ampm.innerHTML = h> 12 ? "PM" : "AM";

});
// 
document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelectorAll('.header');
    var menu = menu[0];
    //Truy xuất div menu
    var trangthai = "duoi300";
    window.addEventListener("scroll", function () {
        var x = pageYOffset;
        if (x > 300) {
            if (trangthai == "duoi300") {
                trangthai = "tren300";
                menu.classList.add('menu__small');
            document.querySelector('.icon-scroll').classList.add('hide');
            }
        }
        else {
            if (trangthai == "tren300") {
                menu.classList.remove('menu__small');
                trangthai = "duoi300";
                document.querySelector('.icon-scroll').classList.remove('hide');
            }
        }

    })
    const modal = document.querySelector(".modal");
    const handelerModal = ()=>{
    modal.classList.toggle("modal-close");
    }
    const close = document.querySelector(".btn-close");
    close.addEventListener("click",handelerModal)
    const btnTP =document.querySelectorAll(".container__content__item--get");
    btnTP.forEach(element => {
        element.addEventListener("click",handelerModal)
    });
    modal.addEventListener("click",handelerModal)
    const modalCT = document.querySelector(".modal-container");
        modalCT.addEventListener("click",e=>e.stopPropagation());
})  
//counter 
function countUp(number,element,timer){
    let count =0;
    let project=  setInterval(function(){
        count++;
        element.innerHTML = count;
        if(count == number) clearInterval(project);
    },timer)
    count++;
}
function runCountUp(){
    console.log("run");
let countElement =  document.querySelectorAll(".counter-item--content");
countUp(400,countElement[0],8);
countUp(759,countElement[1],4);
countUp(600,countElement[2],5);
}
runCountUp();