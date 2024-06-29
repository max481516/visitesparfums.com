import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

//COLOR VARIABLES
@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap');

:root {
    --color-brown: hsl(19, 52%, 22%);
    --color-yellow: hsl(49, 92%, 65%);
    --color-pink: hsl(339, 44%, 51%);
    --color-orange: hsl(29, 81%, 61%);
    --color-blue: hsl(189, 36%, 73%);
    --color-green: hsl(157, 22%, 62%);
    --color-dark-green: hsl(157, 22%, 52%);
    --color-beige: hsl(20, 25%, 90%);
  }



//CSS RESET
  *,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html,
body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  padding: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root,
#__next {
  isolation: isolate;
}

//FORMSPREE RESET
/* reset */
form input,
form select,
form textarea,
form fieldset,
form optgroup,
form label,
.StripeElement {
  font-family: inherit;
  font-size: 100%;
  color: inherit;
  border: none;
  border-radius: 0;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
}
form label,
form legend {
  font-size: 0.825rem;
  margin-bottom: 0.5rem;
}
/* border, padding, margin, width */
form input,
form select,
form textarea,
.StripeElement {
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.75em 1rem;
  margin-bottom: 1.5rem;
}
form input:focus,
form select:focus,
form textarea:focus,
.StripeElement:focus {
  background-color: white;
  outline-style: solid;
  outline-width: thin;
  outline-color: gray;
  outline-offset: -1px;
}
form [type="text"],
form [type="email"],
.StripeElement {
  width: 100%;
}
form [type="button"],
form [type="submit"],
form [type="reset"] {
  width: auto;
  cursor: pointer;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
}
form [type="button"]:focus,
form [type="submit"]:focus,
form [type="reset"]:focus {
  outline: none;
}

form select {
  text-transform: none;
}

//GLOBAL STYLES

body {
  font-family: "Archivo", sans-serif;
  font-weight: 400;
  font-style: normal;
  background: hsl(20, 25%, 95%);
}

a {
  text-decoration: none;
}

a:focus-visible {
  outline: 2px solid var(--color-green);
}
`;

export default GlobalStyles;
