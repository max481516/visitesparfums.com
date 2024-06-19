import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --color-brown: #57321d;
    --color-yellow: #f9db53;
    --color-pink: #ba4e75;
    --color-orange: #eea04c;
    --color-blue: #a1cad1;
    --color-green: #8eb6a5;
    --color-grey: #d9d9d9;
  }

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

body {
  font-family: "Questrial", sans-serif;
  font-weight: 400;
  font-style: normal;
  background: hsl(20, 25%, 95%);
}
`;

export default GlobalStyles;
