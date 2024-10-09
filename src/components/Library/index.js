import bookContext from "../../context/BookContext";
import EachBook from "../EachBook";

import "./index.css";

const Library = () => (
  <bookContext.Consumer>
    {(value) => {
      const { likedBooks, onClickLikeButton } = value;
      const onCLicklike = (id) => {
        onClickLikeButton(id);
      };
      return (
        <div className="Library-page">
          <h1 className="savedBooks">Saved Books</h1>
          <div className="container-div-Library">
            <ul className="container-Library">
              {likedBooks.map((each) => (
                <EachBook
                  key={each.id}
                  details={each}
                  onClickLikeButton={onCLicklike}
                />
              ))}
            </ul>
          </div>
        </div>
      );
    }}
  </bookContext.Consumer>
);

export default Library;
