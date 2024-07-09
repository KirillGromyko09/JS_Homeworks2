import {path} from "./utils/helpers.js";

class Model {
  apiUrl = null;
  endPoints = null;

  constructor(apiBaseUrl, endPoints) {
    this.apiUrl = apiBaseUrl
    this.endPoints = endPoints
  }

  async getPostById(id) {
    if(!id) throw new Error('ID should be provided');
    let data = await fetch(path(this.apiUrl, this.endPoints.posts, id))
    data = await data.json();
    return data;
  }

  async getCommentsByPostID(id) {
    if(!id) throw new Error('ID should be provided');
    let data = await fetch(path(this.apiUrl, this.endPoints.comments + `?postId=${id}`))
    data = await data.json();
    return data;
  }
}

export default Model;
