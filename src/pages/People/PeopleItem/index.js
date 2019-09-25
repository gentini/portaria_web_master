import React from 'react';
import PropTypes from 'prop-types';

export default function PeopleItem({ people, onDelete, onSelectItem }) {
  return (
    <li className="collection-item">
      <div>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
        <a
          href="#edit-people-modal"
          className={`modal-trigger ${people.name}`}
          onClick={onSelectItem}
        >
          Cod:<span className="red-text">{people.id}</span>
          <span> | </span>
          Nome:<span className="red-text"> {people.name}</span>
          <span> | </span>
          RG:<span className="red-text"> {people.rg}</span>
          <span> | </span>
          CPF:<span className="red-text"> {people.cpf}</span>
          <span> | </span>
          FONE:<span className="red-text"> {people.phone}</span>
          <span> | </span>
          Endereço:<span className="red-text"> {people.address}</span>
          <span> | </span>
          Cidade:<span className="red-text"> {people.city}</span>
          <span> | </span>
          Estado:<span className="red-text"> {people.uf}</span>
          <span> | </span>
          Tipo Pessoa:<span className="red-text"> {people.peopletype}</span>
        </a>
      </div>
    </li>
  );
}

PeopleItem.propTypes = {
  people: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rg: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    uf: PropTypes.string.isRequired,
    peopletype: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onSelectItem: PropTypes.func.isRequired,
};
