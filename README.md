# The Bootcamp Page.

## Table of contents

- [The Bootcamp Page]
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)


## Overview

This a Landing Page for Bootcamp using Bootstrap 5 and sass. This website is responsive for most of the device with Animation on Scroll added.

### The challenge

These main challenge for this Landing Page are:
- Create different components necessary as per requirement.

### Screenshot

![image](https://user-images.githubusercontent.com/42742924/169252747-918b64e9-2e3c-40b4-bdfa-277c788b625a.png)


### Links

- Solution URL: [Code](https://github.com/Skyz03/Bootstrap--Bootcamp)
- Live Site URL: [Live](https://skyz03.github.io/Bootstrap--Bootcamp/)

## My process

My Brief Working process for this landing page includes:
1. Design the page in figma
2. Creating the Components as per design in figma.
3. Implemented HTML code and CSS for the page using bootstrap and customizng it.
4. Adding Animations on scroll in the Home Page.
5. Added search feature in the course section.


### Built with

- HTML & CSS/SCSS
- Bootstrap 5
- AOS (Animation of scroll) 

### What I learned

I learned & implemented search query for the page using vanilla JS.

```
function search() {
  const input = document.getElementById("searchComponent");
  const filter = input.value.toUpperCase();

  var cardBody = document.querySelectorAll(".card--container");
  var headTitle = document.getElementsByTagName("h5");

  //   console.log(headTitle);
  for (i = 0; i < headTitle.length; i++) {
    const tag = headTitle[i];
    const value = tag.textContent || tag.innerText;
    // console.log(value);
    if (value.toUpperCase().indexOf(filter) > -1) {
      cardBody[i].style.display = "";
    } else {
      cardBody[i].style.display = "none";
    }
  }
}
```



