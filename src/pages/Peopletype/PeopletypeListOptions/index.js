import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPeopletypesRequest } from '../../../store/modules/peopletype/actions';

export default function PeopletypeListOptions() {
  const { peopletypes, loading } = useSelector(state => state.peopletype);
  const peopletypeSize = useMemo(() => peopletypes.lenght, [peopletypes]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeopletypesRequest());
  }, [dispatch]);

  return (
    !loading &&
    peopletypeSize !== 0 &&
    peopletypes.map(peopletype => (
      <option key={peopletype.id} value={`${peopletype.name}`}>
        {peopletype.name}
      </option>
    ))
  );
}
