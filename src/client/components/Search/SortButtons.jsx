import React from 'react';
import PropTypes from 'prop-types';

const SortButtons = ({ handleSort, sort }) => {
  let relevanceClass;
  let yearClass;
  let editionsClass;

  // quick fix to toggle conditional class names using a single state field
  switch (sort) {
    case 'relevance':
      relevanceClass = 'btn btn-active';
      yearClass = 'btn btn-sort';
      editionsClass = 'btn btn-sort';
      break;
    case 'year':
      yearClass = 'btn btn-active';
      editionsClass = 'btn btn-sort';
      relevanceClass = 'btn btn-sort';
      break;
    case 'editions':
      editionsClass = 'btn btn-active';
      relevanceClass = 'btn btn-sort';
      yearClass = 'btn btn-sort';
      break;
    default:
      relevanceClass = 'btn btn-sort';
      yearClass = 'btn btn-sort';
      editionsClass = 'btn btn-sort';
  }
  return (
    <div id="sort-buttons" className="button-group">
      <button
        type="button"
        className={relevanceClass}
        name="relevance"
        onClick={handleSort}
      >
        Relevance
      </button>
      <button
        type="button"
        className={yearClass}
        name="year"
        onClick={handleSort}
      >
        Year Published
      </button>
      <button
        type="button"
        className={editionsClass}
        name="editions"
        onClick={handleSort}
      >
        Most Editions
      </button>
    </div>
  );
};

SortButtons.propTypes = {
  handleSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};

export default SortButtons;
