import React from "react";

const bookContext = React.createContext({
  books: [],
  likedBooks: [],
  onClickLikeButton: () => {},
});

export default bookContext;
