import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';

import { updateDwellersRequest } from '../../../store/modules/dweller/actions';

// const modalStyle = {
//   width: '75%',
//   height: '75%',
// };
// Inserir na <div id="edit-people-modal" className="modal" style={modalStyle}>

export default function EditPeopleModal() {
  const [name, setName] = useState('');
  const [family, setFamily] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const current = useSelector(state => state.dweller.current);
  const dispatch = useDispatch();

  useEffect(() => {
    if (current) {
      setName(current.name);
      setFamily(current.family);
      setPhone(current.phone);
      setAddress(current.address);
      setNote(current.note);
    }
  }, [current]);

  function handleClearInputs() {
    setName('');
    setFamily('');
    setPhone('');
    setAddress('');
    setNote('');
  }

  function handleSubmit() {
    if (name === '' || family === '' || phone === '' || address === '') {
      M.toast({ html: 'Preecha os dados corretamente' });
    } else {
      dispatch(updateDwellersRequest(name, family, phone, address, note));

      M.toast({ html: 'Morador atualizado com sucesso' });
      handleClearInputs();
    }
  }

  return (
    <div id="edit-dweller-modal" className="modal">
      <div className="modal-content">
        <h4>Editar Morador</h4>
        <div className="row">
          <label htmlFor="name">Nome</label>
          <div className="input-field">
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <label htmlFor="rg">Família</label>
          <div className="input-field">
            <input
              type="text"
              name="family"
              value={family}
              onChange={e => setFamily(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <label htmlFor="phone">Fone</label>
          <div className="input-field">
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <label htmlFor="address">Endereço</label>
          <div className="input-field">
            <input
              type="text"
              name="address"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <label htmlFor="city">Observação</label>
          <div className="input-field">
            <input
              type="text"
              name="note"
              value={note}
              onChange={e => setNote(e.target.value)}
            />
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
