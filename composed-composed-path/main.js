customElements.define('open-shadow',
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement('p');
      pElem.textContent = this.getAttribute('text');

      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(pElem);
    }
  }
);

customElements.define('closed-shadow',
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement('p');
      pElem.textContent = this.getAttribute('text');
      pElem.addEventListener('click', e => {
        console.log(`pElem`);
        console.log(e.currentTarget);
        console.log(e.composedPath());
      });
      

      const shadowRoot = this.attachShadow({mode: 'closed'});
      shadowRoot.appendChild(pElem);
    }
  }
);

document.querySelector('html').addEventListener('click', e => {
  //console.log(e.composed);
  console.log(`html`);
  console.log(e.currentTarget);
  console.log(e.composedPath());
});

// document.addEventListener('click', e => {
//   console.log(e.composed);
//   console.log(e.composedPath());
// });
