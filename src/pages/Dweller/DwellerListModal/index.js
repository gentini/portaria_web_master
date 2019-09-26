import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';

import DwellerItem from '../DwellerItem';
// import Preloader from '../../../components/Preloader';

import {
  getDwellersRequest,
  deleteDwellersRequest,
  setCurrentDwellersRequest,
} from '../../../store/modules/dweller/actions';

export default function DwellerListModal() {
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
    <div id="dweller-list-modal" className="modal">
      <div className="modal-content">
        <ul
          className="collection with-header"
          style={{ paddingBottom: '30px', backgroundColor: '#fff' }}
        >
          <li className="collection-header">
            <h4 className="center">Lista de Moradores</h4>

            {loading && dwellerSize === 0 && (
              <p className="center">Nenhum morador listado</p>
            )}
          </li>

          {/* {loading && <Preloader />} */}

          {!loading &&
            dwellers.map(dweller => (
              <DwellerItem
                key={dweller.id}
                dweller={dweller}
                onDelete={() => handleDelete(dweller.id)}
                onSelectItem={() => handleSelectItem(dweller.id)}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
