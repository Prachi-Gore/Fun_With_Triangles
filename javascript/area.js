const input=document.getElementsByTagName("input");
const output=document.querySelector(".output");
const calculateBtn=document.querySelector(".calculate-area");
console.log(calculateBtn)
calculateBtn.addEventListener("click",()=>{
    console.log("kkk")
    const base=Number(input[0].value);
    const height=Number(input[1].value);
    if(base<=0||height<=0)
    output.innerText="Please Enter valid values";
    else{
        const area=0.5*base*height;
        output.innerText="Area Of The Triangle is "+area+"cm²";
    }
})