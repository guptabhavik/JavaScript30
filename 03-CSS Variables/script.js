const inputs = document.querySelectorAll(".controls input");
const resetBtn = document.querySelector("#reset")

const handleUpdate = function () {
  const suffix = this.dataset.sizing || "";
  console.log(this.name);

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix);
}

const reset = () => {
  document.documentElement.style.setProperty('--spacing', '10px');
  document.documentElement.style.setProperty('--blur', '0px');
  document.documentElement.style.setProperty('--base', '#ffc600');
  document.documentElement.style.setProperty('--brightness', '100%');
  document.documentElement.style.setProperty('--saturate', '100%');
  document.documentElement.style.setProperty('--hue', '0deg');

  //Reset HTML sliders
  document.querySelector('#spacing').value = 10;
  document.querySelector('#blur').value = 0;
  document.querySelector('#base-color').value = '#ffc600';
  document.querySelector('#brightness').value = 0;
  document.querySelector('#saturate').value = 0;
  document.querySelector('#hue').value = 0;
};

inputs.forEach(input => input.addEventListener("input" , handleUpdate))

resetBtn.addEventListener("click", reset);