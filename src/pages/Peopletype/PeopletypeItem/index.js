import React from 'react';
import PropTypes from 'prop-types';

export default function PeopletypeItem({ peopletype, onDelete }) {
  return (
    <li className="collection-item">
      <div>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
        <span className="grey-text">
          Cod:<span className="red-text">{peopletype.id}</span> Nome:
          <span className="red-text"> {peopletype.name}</span>
          <span className="red-text" />{' '}
        </span>
      </div>
    </li>
  );
}

PeopletypeItem.propTypes = {
  peopletype: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
