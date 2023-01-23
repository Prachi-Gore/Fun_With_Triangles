//if sum of all the angles of triangles are 180 then triangle form otherwise no

const input=document.querySelectorAll(".angle");
const isTriangleBtn=document.querySelector(".is-triangle");
const output=document.querySelector('.output');

//console.log(input);

const isValid=function(angle1,angle2,angle3){
    //Number("") = 0=false 
   // Number("prachi")=NaN =false
   //here we are checking -ve number(<) ,0 number(=) ,empty string(=),non empty string(=)
    if(angle1<=0||angle2<=0||angle3<=0)
       return false;
    else
       return true;
}

function isTriangle(){
const angle1=Number (input[0].value);
const angle2=Number (input[1].value);
const angle3=Number (input[2].value);
    
    if(isValid(angle1,angle2,angle3)){
        const sum=angle1+angle2+angle3;
        if(sum===180)
        output.innerText="Yeah 😀!! The angles form a Triangle";
       else{
        
        output.innerText="It's bad combo 😞!! The angles do not form Triangle";
    }
}else{
    output.innerText ="Please Enter values correctly";
}
}


isTriangleBtn.addEventListener("click",isTriangle);
