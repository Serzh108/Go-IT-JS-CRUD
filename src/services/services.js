// const baseURL = 'http://localhost:5000/posts';  // для axios не нужен
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

export default {
  refs: {
    List: document.querySelector('#postList'),
    Form: document.querySelector('#formAddPost'),
  },
  // getPosts() {
  //   return fetch(baseURL).then(res => res.json());
  // },

  // async getPosts() {
  //   try {
  //     const res = await fetch(baseURL);
  //     const parseRes = await res.json();
  //     return parseRes;
  //   } catch (err) {
  //     // console.warn(err);
  //     throw err;
  //     // throw new Error("My error message");
  //   }
  // },
  // ===== axis====
  // getPosts() {
  //     return axios.get('/posts').then(res => res.data);
  //   },
  async getPosts() {
    try {
      const res = await axios.get('/posts');
      return res.data;
    } catch (err) {
      // console.warn(err);
      throw err;
      // throw new Error("My error message");
    }
  },
  // ===== /axis====
  // async deletePost(postId) {
  //   const url = `/${postId}`;
  //   const options = {
  //     method: 'DELETE',
  //   };
  //   try {
  //     const res = await fetch(baseURL + url, options);
  //     const parseRes = await res.json();
  //     return parseRes;
  //   } catch (err) {
  //     throw err;
  //   }
  // },
  // deletePost(postId) {
  //   const url = `/${postId}`;
  //   const options = {
  //     method: 'DELETE',
  //   };

  //   return fetch(baseURL + url, options).then(res => res.json());
  // },
  // ===== axis====
  // deletePost(postId) {
  //   const url = `/posts/${postId}`;
  //   return axios.delete(url).then(res => res.data);
  // },

  async deletePost(postId) {
    const url = `/posts/${postId}`;
    try {
      const res = await axios.delete(url);
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  // ===== /axis====
  // async addPost(author, title) {
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify({ author, title }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   try {
  //     const res = await fetch(baseURL, options);
  //     const parseRes = await res.json();
  //     return parseRes;
  //   } catch (err) {
  //     throw err;
  //   }
  // },

  // addPost(author, title) {
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify({ author, title }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   return fetch(baseURL, options).then(res => res.json());
  // },
  // ===== axis====
  // addPost(author, title) {
  //   return axios.post('/posts', { author: author, title: title }).then(res => res.data);
  // },

  async addPost(author, title) {
    try {
      const res = await axios.post('/posts', { author: author, title: title });
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  // ===== /axis====
  // updatePost(postId, update) {
  //   const url = `/${postId}`;
  //   const options = {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(update),
  //   };
  //   return fetch(baseURL + url, options)
  //     .then(res => res.json())
  //     .catch(err => {
  //       throw err;
  //     });
  // },
  // ===== axis====
  // updatePost(postId, update) {
  //     const url = `/posts/${postId}`;
  //     return axios.patch(url, update).then(res => res.data);
  //   },

  async updatePost(postId, update) {
    const url = `/posts/${postId}`;
    try {
      const res = await axios.patch(url, update);
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  // ===== /axis====
};
