import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';

import PeopleItem from '../PeopleItem';
// import Preloader from '../../../components/Preloader';

import {
  getPeoplesRequest,
  deletePeoplesRequest,
  setCurrentPeopleRequest,
} from '../../../store/modules/people/actions';

export default function PeopleListModal() {
  const { peoples, loading } = useSelector(state => state.people);
  const peopleSize = useMemo(() => peoples.length, [peoples]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeoplesRequest());
  }, [dispatch]);

  function handleSelectItem(id) {
    dispatch(setCurrentPeopleRequest(id));
  }

  function handleDelete(id) {
    dispatch(deletePeoplesRequest(id));

    M.toast({ html: 'Pessoa excluída com sucesso' });
  }

  return (
    <>
      <div id="people-list-modal" className="modal">
        <div className="modal-content">
          <ul
            className="collection with-header"
            style={{ paddingBottom: '30px', backgroundColor: '#fff' }}
          >
            <li className="collection-header">
              <h4 className="center">Lista de Pessoas</h4>

              {loading && peopleSize === 0 && (
                <p className="center">Nenhuma pessoa listada</p>
              )}
            </li>

            {!loading &&
              peopleSize !== 0 &&
              peoples.map(people => (
                <PeopleItem
                  key={people.id}
                  people={people}
                  onDelete={() => handleDelete(people.id)}
                  onSelectItem={() => handleSelectItem(people.id)}
                />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
