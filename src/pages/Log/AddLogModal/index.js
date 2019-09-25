import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';

import { addLogRequest } from '../../../store/modules/log/actions';

import TechListOptions from '../../Tech/TechListOptions';

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default function AddLogModal() {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const dispatch = useDispatch();

  function handleClearInputs() {
    setMessage('');
    setTech('');
    setAttention(false);
  }

  function handleSubmit() {
    if (message === '' || tech === '') {
      M.toast({ html: 'Preencha os dados corretamente' });
    } else {
      dispatch(addLogRequest(message, attention, tech));

      M.toast({ html: `Ocorrência adicionada com sucesso` });
      handleClearInputs();
    }
  }

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Ocorrência</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Descrição
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Selecione o técnico
              </option>
              <TechListOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={attention}
                value={attention}
                onChange={() => setAttention(!attention)}
              />
              <span>Urgente</span>
            </label>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={handleSubmit}
          className="modal-close waves-effect green waves-light btn"
        >
          Salvar
        </a>
      </div>
    </div>
  );
}
