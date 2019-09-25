import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import M from 'materialize-css/dist/js/materialize.min';

import LogItem from './LogItem';
import Preloader from '../../components/Preloader';

import {
  getLogsRequest,
  deleteLogRequest,
  setCurrentRequest,
} from '../../store/modules/log/actions';

export default function Log() {
  const { logs, loading } = useSelector(state => state.log);
  const logSize = useMemo(() => logs.length, [logs]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogsRequest());
  }, [dispatch]);

  function handleSelectItem(id) {
    dispatch(setCurrentRequest(id));
  }

  function handleDelete(id) {
    dispatch(deleteLogRequest(id));

    M.toast({ html: 'Ocorrência excluída com sucesso' });
  }

  return (
    <>
      <div className="center-align">
        <i
          className="small material-icons tooltipped"
          data-position="bottom"
          data-tooltip={`Total de ocorrências: ${logSize}`}
          style={{ color: '#fff' }}
        >
          assignment
        </i>
      </div>
      <ul
        className="collection with-header"
        style={{ paddingBottom: '30px', backgroundColor: '#fff' }}
      >
        <li className="collection-header">
          <h4 className="center">Lista de Ocorrências</h4>

          {!loading && logSize === 0 && (
            <p className="center">Nenhuma ocorrência registrada</p>
          )}
        </li>

        {loading && <Preloader />}

        {!loading &&
          logSize !== 0 &&
          logs.map(log => (
            <LogItem
              key={log.id}
              log={log}
              onDelete={() => handleDelete(log.id)}
              onSelectItem={() => handleSelectItem(log.id)}
            />
          ))}
      </ul>
    </>
  );
}
