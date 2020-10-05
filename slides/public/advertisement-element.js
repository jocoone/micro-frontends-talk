class AppAdvertisement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div>
    <img src="https://source.unsplash.com/random/800x600" alt="random"/>
    </div>`;
  }
}

window.customElements.define('app-advertisement', AppAdvertisement);