const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <style>
    header {
      position: absolute;
      z-index: 100;
      padding: 1rem;
    }
    a {
      color: black;
      font-weight: 900;
      text-decoration: none;
    }
    
    a:hover {
      color: magenta
    }
  </style>
  <header>
    <nav>
      <a href="/">shaders with p5.js</a>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);
