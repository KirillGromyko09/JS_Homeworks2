class Controller {
  inputSelector = null;

  inputEl = null;

  loadCommentsSelector = null;

  loadCommentsEl = null;

  currentPost = null;

  #model = null;

  #view = null;

  constructor(inputSelector, loadCommentsSelector, { model, view }) {
    this.input = inputSelector;
    this.loadComments = loadCommentsSelector;
    this.#model = model;
    this.#view = view;

    this.setEvents();
  }

  setEvents() {
    this.inputEl.addEventListener('input', this.handleInput);
  }

  handleInput = async ({ target }) => {
    if (this.loadCommentsEl) {
      this.loadCommentsEl.removeEventListener('click', this.loadCommentHandler);
      this.loadCommentsEl = null;
    }

    try {
      this.currentPost = await this.#model.getPostById(target.value);
      this.#view.clearComments();
      await this.#view.renderPost(this.currentPost);

      this.loadCommentsEl = document.querySelector(this.loadCommentsSelector);
      this.loadCommentsEl.addEventListener('click', this.loadCommentHandler, { once: true });
    } catch (e) {
      this.#view.showError(e);
    }
  };

  loadCommentHandler = async ({ target }) => {
    try {
      const data = await this.#model.getCommentsByPostID(this.currentPost.id);
      for (const comment of data) {
        await this.#view.renderComment(comment);
      }

      this.#view.disableLoadComment(target);
    } catch (e) {
      this.#view.showError(e);
    }
  };

  set input(val) {
    this.inputSelector = val;
    this.inputEl = document.querySelector(val);
  }

  set loadComments(val) {
    this.loadCommentsSelector = val;
  }
}

export default Controller;
