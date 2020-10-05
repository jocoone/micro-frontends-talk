class HaxxSchedule extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<iframe src="https://haxx2020.sched.com/"></iframe>';
  }
}

window.customElements.define('haxx-schedule', HaxxSchedule);