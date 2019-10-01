import React from 'react';

import Button from '../../components/Button';
import Peoplecontrol from '../Peoplecontrol';
import AddPeoplecontrolModal from '../Peoplecontrol/AddPeoplecontrolModal';
// import PeoplecontrolListModal from '../Peoplecontrol/PeoplecontrolListModal';
import EditPeoplecontrolModal from '../Peoplecontrol/EditPeoplecontrolModal';

import AddDwellerModal from '../Dweller/AddDwellerModal';
import DwellerListModal from '../Dweller/DwellerListModal';
import EditDwellerModal from '../Dweller/EditDwellerModal';

import AddPeopletypeModal from '../Peopletype/AddPeopletypeModal';
import PeopletypeListModal from '../Peopletype/PeopletypeListModal';

import AddPeopleModal from '../People/AddPeopleModal';
import PeopleListModal from '../People/PeopleListModal';
import EditPeopleModal from '../People/EditPeopleModal';

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

      <AddPeopletypeModal />
      <PeopletypeListModal />

      <AddPeopleModal />
      <PeopleListModal />
      <EditPeopleModal />
    </>
  );
}
