import axios from "axios";

const PostListUrl = "/posts/list/";
const PostCreateUrl = "/posts/create/";

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
}

export default PostService;
