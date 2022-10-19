console.log("=================Grade System=========================");

function gradeSystem(score) {
    if (score >=0 && score <=35) {
        console.log("You Are Failed");
        
    }
    if(score >=35 && score<=100)
    {
        console.log("Yor Are Pass");
    }
    if (score > 35 && score < 60) {
        console.log("Grade is C");
        
    }
    if (score >=60 && score < 75) {
        console.log("Grade Is B");
        
    }
    if (score >=75 && score < 90) {
        console.log("Grade is A");
        
    }
    if (score >=90 && score <=100) {
        console.log("Grade is A++");
        
    }
if (score < 0 ){
    console.log("Invalid Mark");
}
if (score > 100) {
    console.log("Invalid Mark");
    
}
   if (score =" ") {
    console.log("Invalid Input");
    
   }
   if (score) {
    console.log("Undefined");
    
   }
    
}
    
gradeSystem(34);
gradeSystem(55);
gradeSystem(-20);
gradeSystem(110);
gradeSystem(97);
gradeSystem(86);
gradeSystem(65);
gradeSystem("Forty Five");
gradeSystem(null);


