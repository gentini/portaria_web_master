import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';

import { updatePeoplecontrolRequest } from '../../../store/modules/peoplecontrol/actions';

import PeopleListOptions from '../../People/PeopleListOptions';
import DwellerListOptions from '../../Dweller/DwellerListOptions';

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default function EditPeoplecontrolModal() {
  const [people, setPeople] = useState('');
  const [dweller, setDweller] = useState('');
  const [company, setCompany] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [plate, setPlate] = useState('');
  const [note, setNote] = useState('');
  const [exit, setExit] = useState(false);
  const [date, setDate] = useState();

  const current = useSelector(state => state.peoplecontrol.current);
  const dispatch = useDispatch();

  useEffect(() => {
    if (current) {
      setPeople(current.people);
      setDweller(current.dweller);
      setCompany(current.company);
      setVehicle(current.vehicle);
      setPlate(current.plate);
      setNote(current.note);
      setExit(current.exit);
      setDate(current.date);
    }
  }, [current]);

  function handleClearInputs() {
    setPeople('');
    setDweller('');
    setCompany('');
    setVehicle('');
    setPlate('');
    setNote('');
    setExit(false);
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
        updatePeoplecontrolRequest(
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

      M.toast({ html: 'Controle de Pessoa atualizada com sucesso' });
      handleClearInputs();
    }
  }

  return (
    <div id="edit-peoplecontrol-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Controle de Pessoas</h4>
        <div className="row">
          <label htmlFor="">Pessoa</label>
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
          <label htmlFor="">Moradores</label>
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
          <label htmlFor="cpf">Empresa</label>
          <div className="input-field">
            <input
              type="text"
              name="company"
              value={company}
              onChange={e => setCompany(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <label htmlFor="phone">Veículo</label>
          <div className="input-field">
            <input
              type="text"
              name="vehicle"
              value={vehicle}
              onChange={e => setVehicle(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <label htmlFor="address">Placa</label>
          <div className="input-field">
            <input
              type="text"
              name="plate"
              value={plate}
              onChange={e => setPlate(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <label htmlFor="city">Observações</label>
          <div className="input-field">
            <input
              type="text"
              name="note"
              value={note}
              onChange={e => setNote(e.target.value)}
            />
          </div>
        </div>

        {/* <div className="row">
          <label htmlFor="uf">Data</label>
          <div className="input-field">
            <input
              type="date"
              name="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
        </div> */}

        <div className="row">
          <div className="input-field">
            <label>
              <input
                type="checkbox"
                className="filled-in"
                value={exit}
                defaultChecked={exit}
                onChange={() => setExit(!exit)}
              />
              <span>Saída</span>
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
