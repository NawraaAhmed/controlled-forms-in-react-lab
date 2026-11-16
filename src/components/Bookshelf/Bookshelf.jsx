import { useState } from "react";

function BookShelf() {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState([{ title: "", author: "" }]);

  function handleInputChange(event) {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setBooks([...books, newBook]);

    setNewBook({
      title: "",
      author: "",
    });
  }

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          {/* Form will go here */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              value={newBook.title}
              id="title"
              name="title"
              onChange={handleInputChange}
            />

            <label htmlFor="author">Author: </label>
            <input
              type="text"
              value={newBook.author}
              id="author"
              name="author"
              onChange={handleInputChange}
            />

            <button>Add Book</button>
          </form>
        </div>
        <div className="bookCardsDiv">
          {/* Book cards will display here */}
          <h2>All Books</h2>
          {books.map((oneBook) => (
            <div
              className="bookCard"
              key={`${oneBook.title} ${oneBook.author}`}
            >
              <p>
                {oneBook.title}, by: {oneBook.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BookShelf;
