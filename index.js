const  btns = document.getElementsByClassName("btn");
let btn
for(btn of btns){
  btn.onclick = (event) => console.log(event.currentTarget.value)
}
