function calculateAge() {
    const today = new Date
    const bdi = document.getElementById('birthDate').value;
    const birthdateParts = bdi.split('-');
    const birthDay = birthdateParts[0];
    const birthMonth = birthdateParts[1] - 1;
    const birthYear = birthdateParts[2];
    const birthDate = new Date(birthYear, birthMonth, birthDay); 

    console.log(bdi);
    console.log(birthdateParts);
    console.log(birthDay);
    console.log(birthMonth);
    console.log(birthYear);


    const isValidDate = (date) => {

        return(
            Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date)
        );
    };

    if(!isValidDate(birthDate)){
        alert("Invalid Date Format : Please enter a valid date in the format dd-mm-yyyy");
        return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMins = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMins / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30);
    const ageInYears = Math.floor(ageInDays / 365);

    const resultConatainer = document.getElementById('resultContainer');
    const result = document.getElementById('result');

    result.innerHTML = `
    <div class="result-item">
    <h3>Age : </h3>
    <p> ${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
    </div>

     <div class="result-item">
    <h3>Months Passed  : </h3>
    <p>${ageInMonths}</p>
    </div>

      <div class="result-item">
    <h3>Weeks Passed  : </h3>
    <p>${ageInWeeks}</p>
    </div>

     <div class="result-item">
    <h3>Days Passed  : </h3>
    <p>${ageInDays}</p>
    </div>

     <div class="result-item">
    <h3>Hours Passed  : </h3>
    <p>${ageInHours}</p>
    </div>

     <div class="result-item">
    <h3>Minutes Passed  : </h3>
    <p>${ageInMins}</p>
    </div>

     <div class="result-item">
    <h3>Seconds Passed  : </h3>
    <p>${ageInSeconds}</p>
    </div>
    `

    resultConatainer.style.display = 'block';
}



const ageCalculatorForm = document.getElementById('ageCalc');
ageCalculatorForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    calculateAge();
});