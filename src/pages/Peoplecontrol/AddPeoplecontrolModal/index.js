import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';

import { addPeoplecontrolRequest } from '../../../store/modules/peoplecontrol/actions';

import PeopleListOptions from '../../People/PeopleListOptions';
import DwellerListOptions from '../../Dweller/DwellerListOptions';

export default function AddPeoplecontrolModal() {
  const [people, setPeople] = useState('');
  const [dweller, setDweller] = useState('');
  const [company, setCompany] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [plate, setPlate] = useState('');
  const [note, setNote] = useState('');
  const [exit, setExit] = useState(false);
  const [date, setDate] = useState('');

  const dispatch = useDispatch();

  function handleClearInputs() {
    setPeople('');
    setDweller('');
    setCompany('');
    setVehicle('');
    setPlate('');
    setNote('');
    setDate('');
  }

  function handleSubmit() {
    if (
      people === '' ||
      dweller === '' ||
      company === '' ||
      vehicle === '' ||
      plate === ''
    ) {
      M.toast({ html: 'Preencha os dados corretamente' });
    } else {
      dispatch(
        addPeoplecontrolRequest(
          people,
          dweller,
          company,
          vehicle,
          plate,
          note,
          exit,
          date
        )
      );

      M.toast({ html: `${people} adicionado com sucesso` });
      handleClearInputs();
    }
  }

  return (
    <div id="add-peoplecontrol-modal" className="modal">
      <div className="modal-content">
        <h4>Novo Controle de Entrada de Pessoa</h4>
        <div className="row">
          <div className="input-field">
            <select
              name="people"
              value={people}
              className="browser-default"
              onChange={e => setPeople(e.target.value)}
            >
              <option value="" disabled>
                Selecione a Pessoa
              </option>
              <PeopleListOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="dweller"
              value={dweller}
              className="browser-default"
              onChange={e => setDweller(e.target.value)}
            >
              <option value="" disabled>
                Selecione o Morador
              </option>
              <DwellerListOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="company"
              value={company}
              onChange={e => setCompany(e.target.value)}
            />
            <label htmlFor="company" className="active">
              Empresa
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="vehicle"
              value={vehicle}
              onChange={e => setVehicle(e.target.value)}
            />
            <label htmlFor="vehicle" className="active">
              Veículo
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="plate"
              value={plate}
              onChange={e => setPlate(e.target.value)}
            />
            <label htmlFor="plate" className="active">
              Placa
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
              Observação
            </label>
          </div>
        </div>

        {/* <div className="row">
          <div className="input-field">
            <input
              type="date"
              name="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
            <label htmlFor="date" className="active">
              Data
            </label>
          </div>
        </div> */}

        <div className="row">
          <div className="input-field">
            <label>
              <input
                type="checkbox"
                className="filled-in"
                defaultChecked={exit}
                value={exit}
                onChange={() => setExit(exit)}
              />
              <span>Saída</span>
            </label>
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
