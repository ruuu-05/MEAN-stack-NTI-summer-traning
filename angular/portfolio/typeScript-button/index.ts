class Counter {
  cnt: number;

  constructor() {
    this.cnt = 0;
  }

  inc() {
    this.cnt++;
    this.updateUI();
  }

  dec() {
    if (this.cnt >= 1) this.cnt--;
    this.updateUI();
  }

  reset() {
    this.cnt = 0;
    this.updateUI();
  }

  updateUI() {
    const el = document.getElementById("counter");
    if (el) el.innerText = this.cnt.toString();
  }
}

const counter = new Counter();

window.onload = () => {
  counter.updateUI();
  document.getElementById("inc")?.addEventListener("click", () => counter.inc());
  document.getElementById("dec")?.addEventListener("click", () => counter.dec());
  document.getElementById("reset")?.addEventListener("click", () => counter.reset());
};
