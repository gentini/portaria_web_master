import React from 'react';
import PropTypes from 'prop-types';

export default function DwellerItem({ dweller, onDelete, onSelectItem }) {
  return (
    <li className="collection-item">
      <div>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
        <a
          href="#edit-dweller-modal"
          className={`modal-trigger ${dweller.name}`}
          onClick={onSelectItem}
        >
          <span className="grey-text">
            Cod:<span className="red-text">{dweller.id}</span> Nome:
            <span className="red-text"> {dweller.name}</span> Familiares:
            <span className="red-text"> {dweller.family}</span> Fone:
            <span className="red-text"> {dweller.phone}</span> Endereço:
            <span className="red-text"> {dweller.address}</span> Observação:
            <span className="red-text"> {dweller.note}</span>
            <span className="red-text" />{' '}
          </span>
        </a>
      </div>
    </li>
  );
}

DwellerItem.propTypes = {
  dweller: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    family: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onSelectItem: PropTypes.func.isRequired,
};
