import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTechsRequest } from '../../../store/modules/tech/actions';

export default function TechListOptions() {
  const { techs, loading } = useSelector(state => state.tech);
  const techSize = useMemo(() => techs.lenght, [techs]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechsRequest());
  }, [dispatch]);

  return (
    !loading &&
    techSize !== 0 &&
    techs.map(tech => (
      <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
        {tech.firstName} {tech.lastName}
      </option>
    ))
  );
}
