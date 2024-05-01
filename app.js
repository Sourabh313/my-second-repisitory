const getcolor=()=>{
    const randomnum= Math.floor(Math.random()*16777215);
    const randomcode="#"+randomnum.toString(16);
    // console.log(randomcode);
    document.body.style.backgroundColor=randomcode;
    document.getElementById("color-code").innerText=randomcode;
}
document.getElementById("btn").addEventListener("click",getcolor)
getcolor();