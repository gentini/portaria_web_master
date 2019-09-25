import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function PeoplecontrolItem({
  peoplecontrols,
  onDelete,
  onSelectItem,
}) {
  const dateFormatted = useMemo(
    () =>
      format(parseISO(peoplecontrols.date), "dd 'de' MMMM 'às' HH:mm", {
        locale: ptBR,
      }),
    [peoplecontrols.date]
  );
  return (
    <li className="collection-item">
      <div>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
        <a
          href="#edit-peoplecontrol-modal"
          className={`modal-trigger ${peoplecontrols.people}`}
          onClick={onSelectItem}
        >
          Cod:<span className="red-text">{peoplecontrols.id}</span>
          <span> | </span>
          Pessoa:<span className="red-text"> {peoplecontrols.people}</span>
          <span> | </span>
          Morador:<span className="red-text"> {peoplecontrols.dweller}</span>
          <span> | </span>
          Empresa:<span className="red-text"> {peoplecontrols.company}</span>
          <span> | </span>
          Veículo:<span className="red-text"> {peoplecontrols.vehicle}</span>
          <span> | </span>
          Placa:<span className="red-text"> {peoplecontrols.plate}</span>
          <span> | </span>
          Observações:<span className="red-text"> {peoplecontrols.note}</span>
          <span> | </span>
          Data:
          <span className="red-text"> {dateFormatted}</span>
          <span> | </span>
          <span className="red-text"> {peoplecontrols.exit}</span>
          <label>
            <input
              type="checkbox"
              className="filled-in"
              defaultChecked={peoplecontrols.exit}
              value={peoplecontrols.exit}
            />
            <span>Saída</span>
          </label>
        </a>
      </div>
    </li>
  );
}

PeoplecontrolItem.propTypes = {
  peoplecontrols: PropTypes.shape({
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    people: PropTypes.string.isRequired,
    dweller: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    vehicle: PropTypes.string.isRequired,
    plate: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
    exit: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onSelectItem: PropTypes.func.isRequired,
};
