'use strict';

import Model from "./Model.js";
import View from "./View.js"
import Controller from "./Controller.js";


const selectors = {
  form: '#todoForm',
  todosContainer: '#todoItems'
}

View.init(selectors)
Model.init()
Controller.init(selectors)
