# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Screenshot_25-8-2024_135420_127 0 0 1](https://github.com/user-attachments/assets/190b5448-f648-4add-9b67-8485226d9c15)


### Links

- Solution URL: [https://www.frontendmentor.io/solutions/advice-generator-using-an-api-p-4CtixuzO]
- Live Site URL: [https://00awaudby.github.io/advice-generator/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workfloW
- Javascript
- CSS Variables


### What I learned

I learnt and re in forced my learning of interacting with a API  and just got more use the syntax on how to make a request and what to do with the recieved data.

To begin with i couldnt understand why on every execution i was getting multiple advices in the DOM, I soon realised instead of using innerHTML  i had to go with textContent and that fixed the issue i was having.



```js
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

```
### Continued development

I will continue to build on a regular basis focussing most of my efforet on working with api to do more complex things with the data i get back and just see how far i can go with it in general.

### Useful resources

- I referd to my coursework i have done on the brad traversy Javascript course for reference.

## Author

- Website - [Ashley Waudby](https://00awaudby.github.io/Portfolio/)
- Frontend Mentor - [@00awaudby](https://www.frontendmentor.io/profile/00awaudby)
- Github - [00awaudby](https://github.com/00awaudby/Portfolio)






