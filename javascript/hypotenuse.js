const input=document.getElementsByTagName("input")

const output=document.querySelector(".output")
const calculateBtn=document.querySelector(".calculate-hypotenuse")


calculateBtn.addEventListener("click",()=>{
    //check whether input is valid
console.log("hi")
const b=Number(input[0].value)//base
const h=Number(input[1].value)//height
     if(b<=0||h<=0){
         //invalid
         output.innerText="Please Enter valid values";
 
     }else{
         const hypotenuse=Math.sqrt(b*b+h*h).toFixed(2)//return string
        // console.log(typeof ans)
         output.innerText="The length of Hypotenuse is "+hypotenuse+"cm"
     }
 });


