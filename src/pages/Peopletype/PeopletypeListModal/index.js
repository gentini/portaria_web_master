import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';

import PeopletypeItem from '../PeopletypeItem';
// import Preloader from '../../../components/Preloader';

import {
  getPeopletypesRequest,
  deletePeopletypesRequest,
} from '../../../store/modules/peopletype/actions';

export default function PeopletypeListModal() {
  const { peopletypes, loading } = useSelector(state => state.peopletype);
  const peopletypeSize = useMemo(() => peopletypes.length, [peopletypes]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeopletypesRequest());
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(deletePeopletypesRequest(id));

    M.toast({ html: 'Tipo Pessoa excluído com sucesso' });
  }

  return (
    <div id="peopletype-list-modal" className="modal">
      <div className="modal-content">
        <ul
          className="collection with-header"
          style={{ paddingBottom: '30px', backgroundColor: '#fff' }}
        >
          <li className="collection-header">
            <h4 className="center">Lista de Tipo Pessoas</h4>

            {loading && peopletypeSize === 0 && (
              <p className="center">Nenhum tipo pessoa listado</p>
            )}
          </li>

          {/* {loading && <Preloader />} */}

          {!loading &&
            peopletypes.map(peopletype => (
              <PeopletypeItem
                key={peopletype.id}
                peopletype={peopletype}
                onDelete={() => handleDelete(peopletype.id)}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
