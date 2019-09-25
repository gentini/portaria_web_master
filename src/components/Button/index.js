import React from 'react';

export default function Button() {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large green modal-trigger z-depth-3"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating yellow darken-1 modal-trigger z-depth-3"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a
            href="#add-tech-modal"
            className="btn-floating blue modal-trigger z-depth-3"
          >
            <i className="material-icons">person_add</i>
          </a>
        </li>
        <li>
          <a
            href="#add-dweller-modal"
            className="btn-floating red modal-trigger z-depth-3"
          >
            <i className="material-icons">person_add</i>
          </a>
        </li>

        <li>
          <a
            href="#dweller-list-modal"
            className="btn-floating red modal-trigger z-depth-3"
          >
            <i className="material-icons">list</i>
          </a>
        </li>
        <li>
          <a
            href="#add-peopletype-modal"
            className="btn-floating green modal-trigger z-depth-3"
          >
            <i className="material-icons">person_add</i>
          </a>
        </li>

        <li>
          <a
            href="#peopletype-list-modal"
            className="btn-floating green modal-trigger z-depth-3"
            alt="Listar Tipo Pessoa"
          >
            <i className="material-icons">list</i>
          </a>
        </li>
        <li>
          <a
            href="#add-people-modal"
            className="btn-floating blue modal-trigger z-depth-3"
          >
            <i className="material-icons">person_add</i>
          </a>
        </li>

        <li>
          <a
            href="#people-list-modal"
            className="btn-floating blue modal-trigger z-depth-3"
            alt="Listar Tipo Pessoa"
          >
            <i className="material-icons">list</i>
          </a>
        </li>
        <li>
          <a
            href="#add-peoplecontrol-modal"
            className="btn-floating black modal-trigger z-depth-3"
          >
            <i className="material-icons">person_add</i>
          </a>
        </li>
        <li>
          <a
            href="#peoplecontrol-list-modal"
            className="btn-floating black modal-trigger z-depth-3"
          >
            <i className="material-icons">list</i>
          </a>
        </li>
      </ul>
    </div>
  );
}
