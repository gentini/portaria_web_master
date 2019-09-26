import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';

import { updatePeoplesRequest } from '../../../store/modules/people/actions';

import PeopletypeListOptions from '../../Peopletype/PeopletypeListOptions';

// const modalStyle = {
//   width: '75%',
//   height: '75%',
// };
// Inserir na <div id="edit-people-modal" className="modal" style={modalStyle}>

export default function EditPeopleModal() {
  const [name, setName] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [peopletype, setPeopletype] = useState('');

  const current = useSelector(state => state.people.current);
  const dispatch = useDispatch();

  useEffect(() => {
    if (current) {
      setName(current.name);
      setRg(current.rg);
      setCpf(current.cpf);
      setPhone(current.phone);
      setAddress(current.address);
      setCity(current.city);
      setUf(current.uf);
      setPeopletype(current.peopletype);
    }
  }, [current]);

  function handleClearInputs() {
    setName('');
    setRg('');
    setCpf('');
    setPhone('');
    setAddress('');
    setCity('');
    setUf('');
    setPeopletype('');
  }

  function handleSubmit() {
    if (
      name === '' ||
      rg === '' ||
      cpf === '' ||
      phone === '' ||
      address === '' ||
      city === '' ||
      uf === '' ||
      peopletype === ''
    ) {
      M.toast({ html: 'Preecha os dados corretamente' });
    } else {
      dispatch(
        updatePeoplesRequest(
          name,
          rg,
          cpf,
          phone,
          address,
          city,
          uf,
          peopletype
        )
      );

      M.toast({ html: 'Pessoa atualizada com sucesso' });
      handleClearInputs();
    }
  }

  return (
    <div id="edit-people-modal" className="modal">
      <div className="modal-content">
        <h4>Editar Pessoa</h4>
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
          <label htmlFor="rg">RG</label>
          <div className="input-field">
            <input
              type="text"
              name="rg"
              value={rg}
              onChange={e => setRg(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <label htmlFor="cpf">CPF</label>
          <div className="input-field">
            <input
              type="text"
              name="cpf"
              value={cpf}
              onChange={e => setCpf(e.target.value)}
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
          <label htmlFor="city">Cidade</label>
          <div className="input-field">
            <input
              type="text"
              name="city"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <label htmlFor="uf">Estado</label>
          <div className="input-field">
            <input
              type="text"
              name="uf"
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <label htmlFor="peopletype">Tipo Pessoa</label>
          <div className="input-field">
            <select
              name="peopletype"
              value={peopletype}
              className="browser-default"
              onChange={e => setPeopletype(e.target.value)}
            >
              <option value="" disabled>
                Selecione o Tipo Pessoa
              </option>
              <PeopletypeListOptions />
            </select>
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
