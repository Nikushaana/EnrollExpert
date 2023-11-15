import { createContext } from "react";

const BlogContext = createContext({
  blogData: [],
  setBlogData: () => {}
});

export default BlogContext;