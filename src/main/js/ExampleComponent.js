export default class ScopusExampleComponent extends HTMLElement {
  constructor() {
    super();
    let firstName = window.scopus.platform.user.identification.getIdentity()
      .firstName;
    this.innerHTML = `<div id='ScopusExampleComponent'><p>Hello, ${firstName}!  Welcome to Scopus.</p></div>`;
  }
}
