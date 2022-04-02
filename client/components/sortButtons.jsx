import React from 'react';

const SortButtons = (props) => {
  let relevanceClass, yearClass, editionsClass;

  // quick fix to toggle conditional class names using a single state field
  switch (props.sort) {
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
    <div id="sort-buttons">
      <button
        type="button"
        className={relevanceClass}
        name="relevance"
        onClick={props.handleSort}
      >
        Relevance
      </button>
      <button
        type="button"
        className={yearClass}
        name="year"
        onClick={props.handleSort}
      >
        Year Published
      </button>
      <button
        type="button"
        className={editionsClass}
        name="editions"
        onClick={props.handleSort}
      >
        Most Editions
      </button>
    </div>
  );
};

export default SortButtons;
