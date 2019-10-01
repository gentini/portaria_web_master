import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import M from 'materialize-css/dist/js/materialize.min';

import DwellerItem from './DwellerItem';
import Preloader from '../../components/Preloader';

import AddDwellerModal from './AddDwellerModal';
// import DwellerListModal from './DwellerListModal';
import EditDwellerModal from './EditDwellerModal';

import {
  getDwellersRequest,
  deleteDwellersRequest,
  setCurrentDwellersRequest,
} from '../../store/modules/dweller/actions';

export default function Dweller() {
  const { dwellers, loading } = useSelector(state => state.dweller);
  const dwellerSize = useMemo(() => dwellers.length, [dwellers]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDwellersRequest());
  }, [dispatch]);

  function handleSelectItem(id) {
    dispatch(setCurrentDwellersRequest(id));
  }

  function handleDelete(id) {
    dispatch(deleteDwellersRequest(id));

    M.toast({ html: 'Morador excluído com sucesso' });
  }

  return (
    <>
      <ul
        className="collection with-header"
        style={{
          paddingBottom: '30px',
          backgroundColor: '#fff',
        }}
      >
        <li
          className="collection-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h4>Lista de Moradores</h4>
          <a
            href="#add-dweller-modal"
            className="btn-floating red modal-trigger"
          >
            <i className="material-icons">person_add</i>
          </a>
        </li>
        {!loading && dwellerSize === 0 && (
          <p className="center">Nenhum morador listado</p>
        )}

        {loading && <Preloader />}

        {!loading &&
          dwellerSize !== 0 &&
          dwellers.map(dweller => (
            <DwellerItem
              key={dweller.id}
              dweller={dweller}
              onDelete={() => handleDelete(dweller.id)}
              onSelectItem={() => handleSelectItem(dweller.id)}
            />
          ))}
      </ul>
      <EditDwellerModal />
      <AddDwellerModal />
    </>
  );
}
