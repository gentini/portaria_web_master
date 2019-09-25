import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';

import { updateLogRequest } from '../../../store/modules/log/actions';

import TechListOptions from '../../Tech/TechListOptions';

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default function EditLogModal() {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const current = useSelector(state => state.log.current);
  const dispatch = useDispatch();

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  function handleClearInputs() {
    setMessage('');
    setTech('');
    setAttention(false);
  }

  function handleSubmit() {
    if (message === '' || tech === '') {
      M.toast({ html: 'Preecha os dados corretamente' });
    } else {
      dispatch(updateLogRequest(message, attention, tech));

      M.toast({ html: 'Ocorrência atualizada com sucesso' });
      handleClearInputs();
    }
  }

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
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
