import React, { useState, useEffect } from "react";

import "./index.css";

import { useParams } from "react-router-dom";

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

const BookDetails = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = () => {
      try {
        const modifiedData = PreparedBooks.map((each) => ({
          ...each,
          isLiked: false,
          cover_image: "/book.jpg",
        }));
        setData(modifiedData); // Update the state with fetched data
      } catch (error) {
        setError(error.message); // Set error if fetch fails
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData(); // Call the fetch function when the component mounts
  }, []);

  const { id } = useParams();
  const bookId = parseInt(id);
  const filteredBook = data.filter((each) => each.id === bookId);
  const reqObj = filteredBook[0];
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="whole-block">
      <div class="book-details-container">
        <div class="book-image">
          <img
            className="cover_imagein-details"
            src={reqObj.cover_image}
            alt="Book Cover"
          />
        </div>
        <div class="book-info">
          <h1 class="book-title">{reqObj.title}</h1>
          <h3 class="book-author">by {reqObj.author}</h3>
          <p class="book-description">{reqObj.description}</p>
          <div class="book-details">
            <p>
              <strong>Genre:</strong> {reqObj.genre[0]}
            </p>
            <p>
              <strong>Published:</strong> {reqObj.publication_year}
            </p>
            <p>
              <strong>ISBN:</strong> 978-0743273565
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
