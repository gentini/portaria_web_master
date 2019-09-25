import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';

import { addPeopletypesRequest } from '../../../store/modules/peopletype/actions';

export default function AddPeopletypeModal() {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  function handleClearInputs() {
    setName('');
  }

  function handleSubmit() {
    if (name === '') {
      M.toast({ html: 'Preencha os dados corretamente' });
    } else {
      dispatch(addPeopletypesRequest(name));

      M.toast({ html: `${name} adicionado com sucesso` });
      handleClearInputs();
    }
  }

  return (
    <div id="add-peopletype-modal" className="modal">
      <div className="modal-content">
        <h4>Novo Tipo Pessoa</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor="name" className="active">
              Nome
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
