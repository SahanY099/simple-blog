import axios from "axios";

const PostListUrl = "/posts/list/";
const PostCreateUrl = "/posts/create/";
const PostDetailView = (id) => `/posts/${id}/details/`;
const PostUpdateUrl = (id) => `/posts/${id}/update/`;
const PostDeleteUrl = (id) => `/posts/${id}/delete/`;

class PostService {
  static async getPosts() {
    const res = await axios.get(PostListUrl);
    return await res.data;
  }

  static async createPost({ title, content, publishDate }) {
    try {
      const res = await axios.post(PostCreateUrl, {
        title,
        content,
        publish_date: publishDate,
      });
      return res;
    } catch (error) {
      return error.response;
    }
  }

  static async updatePost(id, { title, content, publishDate }) {
    try {
      const res = await axios.patch(PostUpdateUrl(id), {
        title,
        content,
        publish_date: publishDate,
      });
      return res;
    } catch (error) {
      return error.response;
    }
  }

  static async getPost(id) {
    try {
      const res = await axios.get(PostDetailView(id));
      return res;
    } catch (error) {
      return error.response;
    }
  }

  static async deletePost(id) {
    try {
      const res = await axios.delete(PostDeleteUrl(id));
      return res;
    } catch (error) {
      return error.response;
    }
  }
}

export default PostService;
