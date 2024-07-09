class View {
  postContainerSelector = null;
  postContainerEl = null;

  commentsContainerSelector = null;
  commentsContainerEl = null;

  constructor(postContainerSelector,commentsContainer) {
    this.postContainer = postContainerSelector;
    this.commentsContainer = commentsContainer
  }

  createPost({title, body, id}) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('card');
    wrapper.innerHTML = ` <div class="card-body" data-post-id="${id}">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${body}</p>
                    <button data-load-comments class="btn btn-success">Load Comments...</button>
                </div>`

    return wrapper;
  }

  createComment({name, body, email, id}) {
    const wrapper = document.createElement('div')
    wrapper.classList.add('card');
    wrapper.classList.add('mb-5');
    wrapper.innerHTML = ` <div class="card-body" data-comment-id="${id}">
                    <h5 class="card-title">${name}</h5>
                    <hr>
                    <p class="card-text">${body}</p>
                    <hr>
                    <p class="card-text">${email}</p>
                </div>`

    return wrapper;
  }

  clearComments() {
    this.commentsContainerEl.innerHTML = ''
  }

  showError(error) {
    alert(error);
  }

  disableLoadComment(el) {
    el.setAttribute('disabled', 'disabled')
  }
  async renderPost(post) {
    this.postContainerEl.innerHTML = '';
    this.postContainerEl.append(this.createPost(post))
  }

  async renderComment(data) {
    this.commentsContainerEl.append(this.createComment(data))
  }


  set postContainer(val) {
    this.postContainerSelector = val;
    this.postContainerEl = document.querySelector(val);
  }

  set commentsContainer(val) {
    this.commentsContainerSelector = val;
    this.commentsContainerEl = document.querySelector(val);
  }
}

export default View;
