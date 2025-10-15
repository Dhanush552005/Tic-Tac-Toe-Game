let small=document.querySelectorAll(".box");
let reset=document.querySelector("#res");
let turno=true;
 const winp=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
 small.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        console.log("box was clicked");
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }box.style.pointerEvents = "none";
        checkwinner();
    });
 });
 const checkwinner=()=>{
    for(let patter of winp){
        let vala=small[patter[0]].innerText;
        let valb=small[patter[1]].innerText;
        let valc=small[patter[2]].innerText;
        if(vala!=""&&valb!=""&&valc!=""){
            if(vala==valb&&valb==valc){
                console.log("winner");
                d(vala);
            }
        }
            let isDraw = [...small].every(box => box.innerText !== "");
            if (isDraw) {
            d("No one, it's a draw!");
    }}
 };
 const f=()=>
    {
        small.forEach((box)=>{
            box.innerText="";
            box.style.pointerEvents = "auto";
        });turno=true;
        winner.innerText="";
    }
 reset.addEventListener("click",f);
 let winner=document.querySelector("#win");
 const d=(abc)=>{
winner.innerText=`congragulations,the winner is ${abc}`;
small.forEach((box)=>{
    box.style.pointerEvents = "none";
    setTimeout(() => {
        f();
    }, 3000);
})
 };