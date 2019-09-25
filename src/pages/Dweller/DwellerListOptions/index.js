import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDwellersRequest } from '../../../store/modules/dweller/actions';

export default function TechListOptions() {
  const { dwellers, loading } = useSelector(state => state.dweller);
  const dwellerSize = useMemo(() => dwellers.lenght, [dwellers]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDwellersRequest());
  }, [dispatch]);

  return (
    !loading &&
    dwellerSize !== 0 &&
    dwellers.map(dweller => (
      <option key={dweller.id} value={`${dweller.name} ${dweller.family}`}>
        {dweller.name} {dweller.family}
      </option>
    ))
  );
}
