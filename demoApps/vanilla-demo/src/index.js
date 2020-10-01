import App from './components/app';

window.addEventListener('load', () => {
  //const app = new App(document.getElementById('root'));
  //app.render();


});

customElements.define('my-paragraph',
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById('my-paragraph');
      const templateContent = template.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);

const slottedSpan = document.querySelector('my-paragraph span');

console.log(slottedSpan.assignedSlot);
console.log(slottedSpan.slot);
