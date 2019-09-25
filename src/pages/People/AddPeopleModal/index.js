import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';

import { addPeoplesRequest } from '../../../store/modules/people/actions';

import PeopletypeListOptions from '../../Peopletype/PeopletypeListOptions';

export default function AddPeopleModal() {
  const [name, setName] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [peopletype, setPeopletype] = useState('');

  const dispatch = useDispatch();

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
      M.toast({ html: 'Preencha os dados corretamente' });
    } else {
      dispatch(
        addPeoplesRequest(name, rg, cpf, phone, address, city, uf, peopletype)
      );

      M.toast({ html: `${name} adicionado com sucesso` });
      handleClearInputs();
    }
  }

  return (
    <div id="add-people-modal" className="modal">
      <div className="modal-content">
        <h4>Nova Pessoa</h4>
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
              name="rg"
              value={rg}
              onChange={e => setRg(e.target.value)}
            />
            <label htmlFor="rg" className="active">
              RG
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="cpf"
              value={cpf}
              onChange={e => setCpf(e.target.value)}
            />
            <label htmlFor="cpf" className="active">
              CPF
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
              name="city"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <label htmlFor="city" className="active">
              Cidade
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="uf"
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
            <label htmlFor="uf" className="active">
              Estado
            </label>
          </div>
        </div>

        <div className="row">
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
    </div>
  );
}
