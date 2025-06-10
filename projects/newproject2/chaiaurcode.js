const form=document.querySelector('form')
form.addEventListener('submit', function(e) {
    e.preventDefault();
   const height= parseInt(document.querySelector('#height').value);
   const weight= parseInt(document.querySelector('#weight').value);
   const results= document.querySelector('#results');
   const result2= document.querySelector('#results2');
   let bmi;

  if(height===''|| height<0||isNaN(height)){
    results.innerHTML=`Please enter a valid height ${height}`;    
    result2.innerHTML = '';
  }else if(weight===''|| weight<0||isNaN(weight)){
    results.innerHTML=`Please enter a valid weight ${weight}`;
    result2.innerHTML = '';
  }
  else{
    bmi = (weight/((height*height)/10000)).toFixed(2);
    //show the result
    results.innerHTML=`Your BMI is ${bmi}`;
    if(bmi<18.5){
      result2.innerHTML=`You are underweight`; }
    else if(bmi>=18.5 && bmi<24.9){
      result2.innerHTML=`You are normal weight`; }  
    else if(bmi>=25 && bmi<29.9){
      result2.innerHTML=`You are overweight`; }  
    else {
      result2.innerHTML=`You are obese`; 
    }
  }
})