//-----VARIABLES-----\\
const button = document.querySelector('.button-container');
const id = document.querySelector('.advice-id');
const advice = document.querySelector('.random-advice');

//-----PROGRAMME FUNCTION-----\\
async function getData() {
    const res= await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    console.log(data)
    //-----DYNAMIC DATA FOR THE ID-----\\
    const adviceId = data.slip.id;
    id.textContent = `ADVICE #${adviceId}`;
    //-----DYNAMIC DATA FOR THE ADVICE-----\\
    const adviceMessage = data.slip.advice;
    advice.textContent = `${adviceMessage}`;
    //-----DATA ADDED TO THE DOM-----\\
    document.body.appendChild(div)
}

//-----FUNCTION CALLS-----\\
button.addEventListener('click', getData)

getData()

