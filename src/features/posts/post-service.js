import axios from "axios";

const PostListUrl = "/posts/list/";

class PostService {
  static async getPosts() {
    const res = await axios.get(PostListUrl);
    return await res.data;
  }
}

export default PostService;
