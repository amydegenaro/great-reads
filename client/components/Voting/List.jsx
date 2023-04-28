import React, { useState } from 'react';

const BookList = ({
  bookList,
  setBookList,
  setView,
}) => {
  const [newBook, setNewBook] = useState('');
  const [error, setError] = useState(false);
  const [hasDupe, setHasDupe] = useState(false);

  const handleChange = (evt) => {
    setError(false)
    setHasDupe(false)
    setNewBook(evt.target.value)
  }

  const handleDelete = (book) => {
    const bookSet = new Set(bookList)
    bookSet.delete(book)
    setBookList([...bookSet])
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (!newBook) return setError(true)
    const bookSet = new Set(bookList)
    if (bookSet.has(newBook)) return setHasDupe(true)
    setBookList([...bookList, newBook])
    setNewBook('')
    setError(false)
  }

  return (
    <>
      <p>
        Nominee List
      </p>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        >
        <div>
          {bookList.map(book => (
            <div key={book}>
              <p>{book}</p>
              <button type="button" onClick={() => handleDelete(book)}>Clear</button>
            </div>
          ))}
        </div>
        <input
          error={error || hasDupe}
          // helperText={error && "Title cannot be empty" || hasDupe && "This book has already been added"}
          value={newBook}
          onChange={handleChange}
          placeholder="Book title"
          type="text"
        />
        <button type="submit">
          Add
        </button>
        <button type="button" className="btn btn-sort" onClick={() => setView('vote')}>
          Submit List
        </button>
      </form>
    </>
  )
}

export default BookList;
