import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import M from 'materialize-css/dist/js/materialize.min';

import PeoplecontrolItem from './PeoplecontrolItem';
import Preloader from '../../components/Preloader';

import {
  getPeoplecontrolRequest,
  deletePeoplecontrolRequest,
  setCurrentPeoplecontrolRequest,
} from '../../store/modules/peoplecontrol/actions';

export default function Peoplecontrol() {
  const { peoplecontrols, loading } = useSelector(state => state.peoplecontrol);
  const peoplecontrolSize = useMemo(() => peoplecontrols.length, [
    peoplecontrols,
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeoplecontrolRequest());
  }, [dispatch]);

  function handleSelectItem(id) {
    dispatch(setCurrentPeoplecontrolRequest(id));
  }

  function handleDelete(id) {
    dispatch(deletePeoplecontrolRequest(id));

    M.toast({ html: 'Controle de Pessoa excluído com sucesso' });
  }

  return (
    <>
      <ul
        className="collection with-header"
        style={{ paddingBottom: '30px', backgroundColor: '#fff' }}
      >
        <li className="collection-header">
          <h4 className="center">Lista de Controle de Pessoas</h4>

          {!loading && peoplecontrolSize === 0 && (
            <p className="center">Nenhum controle de pessoa listado</p>
          )}
        </li>

        {loading && <Preloader />}

        {!loading &&
          peoplecontrolSize !== 0 &&
          peoplecontrols.map(peoplecontrol => (
            <PeoplecontrolItem
              key={peoplecontrol.id}
              peoplecontrols={peoplecontrol}
              onDelete={() => handleDelete(peoplecontrol.id)}
              onSelectItem={() => handleSelectItem(peoplecontrol.id)}
            />
          ))}
      </ul>
    </>
  );
}
