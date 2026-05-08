import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons'

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

  // eslint-disable-next-line consistent-return
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
            <div
              key={book}
              className="single-result"
            >
              <div className="vote-card">
                <p className="result-title">{book}</p>
                <FontAwesomeIcon icon={faTrashCan} size="lg" onClick={() => handleDelete(book)} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex' }}>
          <input
            value={newBook}
            onChange={handleChange}
            placeholder="Add a book"
            type="text"
            required
          />
          <button type="submit" className="search-button">
            <FontAwesomeIcon icon={faPlus} inverse />
          </button>
        </div>

        {error && <p>Title cannot be empty</p>}
        {hasDupe && <p>This book has already been added</p>}

        <button type="button" className="btn btn-sort" onClick={() => setView('vote')}>
          Submit List
        </button>
      </form>
    </>
  )
}

BookList.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.string).isRequired,
  setBookList: PropTypes.func.isRequired,
  setView: PropTypes.func.isRequired,
};

export default BookList;
