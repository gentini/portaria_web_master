import React from 'react';

import Button from '../../components/Button';
import Peoplecontrol from '../Peoplecontrol';
import AddPeoplecontrolModal from '../Peoplecontrol/AddPeoplecontrolModal';
// import PeoplecontrolListModal from '../Peoplecontrol/PeoplecontrolListModal';
import EditPeoplecontrolModal from '../Peoplecontrol/EditPeoplecontrolModal';

import AddDwellerModal from '../Dweller/AddDwellerModal';
import DwellerListModal from '../Dweller/DwellerListModal';
import EditDwellerModal from '../Dweller/EditDwellerModal';

export default function Dashboard() {
  return (
    <>
      <div className="container" />
      <Button />
      <Peoplecontrol />
      <AddPeoplecontrolModal />
      <EditPeoplecontrolModal />

      <AddDwellerModal />
      <DwellerListModal />
      <EditDwellerModal />
    </>
  );
}
