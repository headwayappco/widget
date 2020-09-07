import App from './components/app';

window.addEventListener('load', () => {
  const app = new App(document.getElementById('root'));
  app.render();
});
