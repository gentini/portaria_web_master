import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';

import { addDwellersRequest } from '../../../store/modules/dweller/actions';

export default function AddDwellerModal() {
  const [name, setName] = useState('');
  const [family, setFamily] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const dispatch = useDispatch();

  function handleClearInputs() {
    setName('');
    setFamily('');
    setPhone('');
    setAddress('');
    setNote('');
  }

  function handleSubmit() {
    if (
      name === '' ||
      family === '' ||
      phone === '' ||
      address === '' ||
      note === ''
    ) {
      M.toast({ html: 'Preencha os dados corretamente' });
    } else {
      dispatch(addDwellersRequest(name, family, phone, address, note));

      M.toast({ html: `${name} adicionado com sucesso` });
      handleClearInputs();
    }
  }

  return (
    <div id="add-dweller-modal" className="modal">
      <div className="modal-content">
        <h4>Novo Morador</h4>
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

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="family"
              value={family}
              onChange={e => setFamily(e.target.value)}
            />
            <label htmlFor="family" className="active">
              Familiares
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <label htmlFor="phone" className="active">
              Fone
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="address"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
            <label htmlFor="address" className="active">
              Endereço
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="note"
              value={note}
              onChange={e => setNote(e.target.value)}
            />
            <label htmlFor="note" className="active">
              Observações
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
