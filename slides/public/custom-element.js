class RandomAdvertisement extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      '<img src="https://source.unsplash.com/random" alt="random advertisement"/>';
  }
}

window.customElements.define('custom-advertisement', RandomAdvertisement);
