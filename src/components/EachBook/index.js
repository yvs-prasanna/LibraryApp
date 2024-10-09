import { Link } from "react-router-dom";

import { BiSolidLike } from "react-icons/bi";

import "./index.css";

const EachBook = (props) => {
  const { details, onClickLikeButton } = props;
  const { id, title, author, cover_image, isLiked } = details;

  const LikeButtonColor = isLiked ? "liked-button" : "like-button";

  const onClicklikeButton = () => {
    onClickLikeButton(id);
  };

  return (
    <li className="eachBook">
      <Link to={`/books/${id}`}>
        <img className="coverImage" src={cover_image} alt="coverImage" />
      </Link>
      <div className="whole-content">
        <Link to={`/books/${id}`}>
          <div className="content">
            <p className="title">
              <span className="property">Title : </span>
              {title}
            </p>
            <p className="details">
              <span className="property">Author : </span>
              {author}
            </p>
            <Link to={`/books/${id}`}>
              <p>Show Details...</p>
            </Link>
          </div>
        </Link>
        <button className="button" onClick={onClicklikeButton}>
          <BiSolidLike className={LikeButtonColor} />
        </button>
      </div>
    </li>
  );
};

export default EachBook;
