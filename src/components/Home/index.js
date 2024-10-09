import bookContext from "../../context/BookContext";

import { Link } from "react-router-dom";

import EachBook from "../EachBook";

import "./index.css";

const Home = () => (
  <bookContext.Consumer>
    {(value) => {
      const { books, onClickLikeButton } = value;

      const onCLicklike = (id) => {
        onClickLikeButton(id);
      };

      return (
        <div className="Home-Page">
          <div className="header">
            <Link to="/" style={{ color: "yellow" }}>
              <h1 className="logo">Logo</h1>
            </Link>

            <Link to="/library" style={{ color: "yellow" }}>
              <h1>Library</h1>
            </Link>
          </div>
          <div className="container-div">
            <h1 className="books-heading">Books</h1>
            <ul className="container">
              {books.map((each) => (
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

export default Home;
