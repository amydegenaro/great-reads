/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
  DragDropContext,
  Droppable,
  Draggable
} from 'react-beautiful-dnd';

const Vote = ({
  bookList,
  voteHistory,
  setVoteHistory,
}) => {
  const [voteOrder, setVoteOrder] = useState([]);
  // const [newVote, setNewVote] = useState({});
  const [voterId, setVoterId] = useState(1);
  // console.log('*** voteOrder', voteOrder)

  useEffect(() => {
    setVoteOrder(bookList);
  }, [bookList]);

  // const onRankChange = (evt) => {
  //   const newRank = { [evt.target.name]: Number(evt.target.value) };
  //   setNewVote({...newVote, ...newRank})
  // }

  const onDragEnd = ({ destination, source }) => {
    // if dropped outside the list
    if (!destination) return;

    // update drag and drop list order
    const result = [...voteOrder];
    const [removed] = result.splice(source.index, 1);
    result.splice(destination.index, 0, removed);
    setVoteOrder(result);
  }

  const handleVote = (evt) => {
    evt.preventDefault()
    const vote = { [voterId]: voteOrder }
    setVoteHistory({ ...voteHistory, ...vote })
    setVoterId(voterId + 1);
    // setNewVote({})
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="bookList">
          {(providedBookList) => (
            <div
              ref={providedBookList.innerRef}
              {...providedBookList.droppableProps}
            >
              {
                voteOrder.map((book, idx) => (
                  <Draggable key={book} draggableId={book} index={idx}>
                    {(providedBook) => (
                      <div
                        ref={providedBook.innerRef}
                        {...providedBook.draggableProps}
                        {...providedBook.dragHandleProps}
                        className="single-result"
                      >
                        <div className="vote-card">
                          <p className="result-title">{`${idx + 1} - ${book}`}</p>
                          <FontAwesomeIcon icon={faBars} size="lg" />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))
              }
              {providedBookList.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button
        className="btn btn-sort"
        onClick={handleVote}
        type="submit"
      >
        Submit Votes
      </button>
    </>
  )
}

Vote.propTypes = {
  bookList: PropTypes.arrayOf({}).isRequired,
  voteHistory: PropTypes.shape({}).isRequired,
  setVoteHistory: PropTypes.func.isRequired,
};

export default Vote;
