import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPeoplesRequest } from '../../../store/modules/people/actions';

export default function PeopleListOptions() {
  const { peoples, loading } = useSelector(state => state.people);
  const peoplesSize = useMemo(() => peoples.lenght, [peoples]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeoplesRequest());
  }, [dispatch]);

  return (
    !loading &&
    peoplesSize !== 0 &&
    peoples.map(people => (
      <option key={people.id} value={`${people.name}`}>
        {people.name}
      </option>
    ))
  );
}
