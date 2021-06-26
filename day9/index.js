
const box = document.querySelectorAll(".box");
const boo = document.querySelector(".boo")
const ava = document.querySelector(".ava")
var booked = 0
var available = 36
for (let i = 0; i <= box.length; i++) {
    box[i].addEventListener("click", function(){
        if (box[i].classList.contains("boxclicked")) {
            box[i].classList.remove("boxclicked");
            available += 1;
            booked -= 1;



        }
        else {
            box[i].classList.add("boxclicked")
            booked += 1;
            available -= 1;
        }
        ava.innerHTML = available
        boo.innerHTML = booked

    })
}


