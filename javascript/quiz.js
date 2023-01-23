const form=document.getElementsByTagName("form")[0];
const submitBtn=document.querySelector(".submit-form");
const output=document.querySelector(".output");
//console.log(form);

const correctAns=["3","equilateral","90"];

submitBtn.addEventListener('click',()=>{
    let score=0;
    let index=0;
   const formObject= new FormData(form);
  
   
  for(let value of formObject.values()){//entries()
    //console.log(value)
    
    if(value===correctAns[index])
    score++;
    index++;
    
  }
  if(index===correctAns.length){
      output.innerText="Your Score is "+score
  }
   else{
   output.innerText="Please Select answer for all questions "
   }

})