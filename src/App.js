import React, { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import bookContext from "./context/BookContext";

import Home from "./components/Home";
import BookDetails from "./components/BookDetails";
import Library from "./components/Library";

const PreparedBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    rating: 4.7,
    description:
      "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
    publication_year: 1925,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    rating: 4.8,
    description:
      "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
    publication_year: 1960,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    rating: 4.6,
    description:
      "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
    publication_year: 1949,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    rating: 4.9,
    description:
      "A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.",
    publication_year: 1813,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    rating: 4.3,
    description:
      "A story about a young boy’s journey through the challenges of adolescence.",
    publication_year: 1951,
  },
];

class App extends Component {
  state = { books: [], likedBooks: [] };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    const modifiedData = PreparedBooks.map((each) => ({
      ...each,
      isLiked: false,
      cover_image: "book.jpg",
    }));

    this.setState({ books: modifiedData });
  };

  onClickLikeButton = (id) => {
    const { books } = this.state;

    const updatedBooks = books.map((each) => {
      if (each.id === id) {
        return { ...each, isLiked: !each.isLiked };
      }
      return each;
    });

    const filterlikedBooks = updatedBooks.filter(
      (each) => each.isLiked === true
    );

    this.setState({ books: updatedBooks, likedBooks: filterlikedBooks });
  };

  render() {
    return (
      <bookContext.Provider
        value={{
          books: this.state.books,
          likedBooks: this.state.likedBooks,
          onClickLikeButton: this.onClickLikeButton,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/books/:id" Component={BookDetails} />
            <Route path="/library" Component={Library} />
          </Routes>
        </BrowserRouter>
      </bookContext.Provider>
    );
  }
}

export default App;
