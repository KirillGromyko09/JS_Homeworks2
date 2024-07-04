class View {


  createPost({title,body,id}){
    return `<div class="card-body" data-post-id="${id}">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${body}</p>
                    <button data-load-comments class="btn btn-success">Load Comments...</button>
                </div>`
  }
}
export default View;
