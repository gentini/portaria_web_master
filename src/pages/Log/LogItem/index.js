import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function LogItem({ log, onDelete, onSelectItem }) {
  const dateFormatted = useMemo(
    () =>
      format(parseISO(log.date), "dd 'de' MMMM 'às' HH:mm", { locale: ptBR }),
    [log.date]
  );

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={onSelectItem}
        >
          {log.message}
        </a>

        <br />

        <span className="grey-text">
          <span className="black-text">Cod. #{log.id}</span> última atualização
          feita por <span className="black-text">{log.tech}</span> em{' '}
          {dateFormatted}
        </span>

        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
}

LogItem.propTypes = {
  log: PropTypes.shape({
    date: PropTypes.string.isRequired,
    attention: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    tech: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onSelectItem: PropTypes.func.isRequired,
};
