import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';

import TechItem from '../TechItem';
import Preloader from '../../../components/Preloader';

import {
  getTechsRequest,
  deleteTechRequest,
} from '../../../store/modules/tech/actions';

export default function TechListModal() {
  const { techs, loading } = useSelector(state => state.tech);
  const techSize = useMemo(() => techs.length, [techs]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechsRequest());
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(deleteTechRequest(id));

    M.toast({ html: 'Técnico excluído com sucesso' });
  }

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Técnicos cadastrados</h4>
        <ul className="collection">
          {loading && <Preloader />}

          {!loading && techSize === 0 && (
            <p className="center">Nenhum técnico cadastrado</p>
          )}

          {!loading &&
            techs.map(tech => (
              <TechItem
                key={tech.id}
                tech={tech}
                onDelete={() => handleDelete(tech.id)}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
