
window.onload=()=>{




const calculate = document.querySelector(".btn");

const currentDayAge = document.getElementById("current-day-age");
const currentmonthAge = document.querySelector("#current-month-age");
const currentYearAge = document.querySelector("#current-year-age");
const inputBox = document.querySelectorAll("input");
const input = Array.from(inputBox)
const now = new Date();
const day = now.getDate();
const month= now.getMonth()+1;
const year = now.getFullYear();

let theDay;
let theMonth;
let theYear;
let state = 1;
let stateM = 1;
let stateY = 1;

calculate.addEventListener("click", (e)=>{
    
    const birthDay = document.querySelector("#day").value;
    const birthDayBox = document.querySelector("#day");
    const birthMonth = document.querySelector("#month").value;
    const birthMonthBox = document.querySelector("#month");
    const birthYear = document.querySelector("#year").value;
    const birthYearBox = document.querySelector("#year");
    const dayLabel = document.querySelector("#dayLabel");
    let lastMonth = new Date(year,month,0)
    let lastDay = lastMonth.getDate();
    let birthDate = new Date(birthDay,birthMonth,0)
    theDay = day- birthDay;
    theMonth = month - birthMonth;
    theYear = year -birthYear;
    console.log(birthDate.getMonth(),birthDate.getDate())
    currentDayAge.innerHTML = theDay ;
    currentmonthAge.innerHTML = theMonth ;
    currentYearAge.innerHTML = theYear;
    
    if (state==2 || stateM ==2 || stateY==2) {
        birthDayBox.style.borderColor = " lightgray";
        birthMonthBox.style.borderColor = " lightgray";
        birthYearBox.style.borderColor = " lightgray";
        let statements = document.querySelectorAll(".incorrect");
        let statementsP = Array.from(statements).map(
            item => {return item.innerText="";}
        )
        
        state=1;
        stateM=1;
        stateY=1;
        
    }

    if(month < birthMonth){
        currentmonthAge.innerHTML = 12+theMonth;
    } 

    if(theDay < 0 ){
        
        currentDayAge.innerHTML = lastDay+theDay;
        currentmonthAge.innerHTML = theMonth-1;
    }

    
    if (birthDay> birthDate.getDate() ) {  
            if (state == 1) {
                birthDayBox.style.borderColor = "red";
                const p = document.createElement('p');
                p.innerText = 'Must be a valid day';
                p.classList.add("incorrect")
                birthDayBox.after(p);
                birthDayBox.parentElement.style.color = "red";
                
            state=2;
            
            }
        
        
    }
    if (birthMonth > 12 ) {
        if (stateM == 1) {
        birthMonthBox.style.borderColor = "red";
        const p = document.createElement('p');
        p.innerText = 'Must be a valid month';
        p.classList.add("incorrect");
        birthMonthBox.after(p);
        birthMonthBox.parentElement.style.color = "red";
            stateM=2;
        }
    
}
if ( birthYear > year ) {
      if (stateY==1) {
        
      
    birthYearBox.style.borderColor = "red";
    const p = document.createElement('p');
    p.innerText = 'Must be a valid year';
    p.classList.add("incorrect")
    birthYearBox.after(p);
    birthYearBox.parentElement.style.color = "red";
    stateY=2;
      }


}   
   


    

})


}
