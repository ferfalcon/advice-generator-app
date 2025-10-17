# Advice generator app

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

![Design preview for the Advice generator app coding challenge](preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
  - [Project Structure](#project-structure)
- [Author](#author)

## Overview

### The challenge

The challenge is to build out this advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- [Advice generator app **code repository**](https://github.com/ferfalcon/advice-generator-app)
- [Advice generator app **live site**](https://ferfalcon.github.io/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript modules
- [Astro](https://astro.build/) - Web framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types

### Useful resources

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Project Structure

```text
/
├── public/
│   └── favicon.svg
│   └── icon-dice.svg
│   └── pattern-divider-desktop.svg
│   └── pattern-divider-mobile.svg
├── src
│   ├── components
│   │   └── Advice.astro
│   │   └── Attribution.astro
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │    └── index.astro
│   ├── scripts
│   │    └── app.ts
│   │    └── consts.ts
│   │    └── get_advice.ts
│   │    └── get_new_advice.ts
│   │    └── write_element.ts
│   ├── styles
│   │    └── style.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Author

- LinkedIn - [Fernando Falcon](https://www.linkedin.com/in/fernandofalcon/)
- Website - [ferfalcon.com](http://ferfalcon.com/)
- Frontend Mentor - [@ferfalcon](https://www.frontendmentor.io/profile/ferfalcon/)
