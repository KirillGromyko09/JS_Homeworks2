class Controller {
  inputSelector = null;
  inputEl = null;
  constructor(input) {
    this.input = input;
  }
  setEvents(){
    this.inputEl.addEventListener('input', this.handleInput)
  }

  handleInput = ({target}) => {
    console.log(target.value);
}

  set input(val){
    this.inputSelector = val;
    this.inputEl = document.querySelector(val);
  }
}
export default Controller;
