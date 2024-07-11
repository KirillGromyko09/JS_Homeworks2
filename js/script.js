import Model from './Model.js';
import View from './View.js';
import Controller from './Controller.js';
import { api, endPoints } from './utils/constants.js';

const modelInstance = new Model(api, endPoints);
const viewInstance = new View('[data-post-container]', '[data-comments-container]');

const c = new Controller('[data-input]', '[data-load-comments]', {
  model: modelInstance,
  view: viewInstance,
});
