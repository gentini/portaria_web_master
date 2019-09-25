import React from 'react';

import SearchBar from '../../components/SearchBar';
// import Log from '../Log';
import AddLogModal from '../Log/AddLogModal';
import EditLogModal from '../Log/EditLogModal';
import AddTechModal from '../Tech/AddTechModal';
import TechListModal from '../Tech/TechListModal';
import AddDwellerModal from '../Dweller/AddDwellerModal';
import DwellerListModal from '../Dweller/DwellerListModal';
import AddPeopletypeModal from '../Peopletype/AddPeopletypeModal';
import PeopletypeListModal from '../Peopletype/PeopletypeListModal';
import AddPeopleModal from '../People/AddPeopleModal';
import PeopleListModal from '../People/PeopleListModal';
import EditPeopleModal from '../People/EditPeopleModal';
import Peoplecontrol from '../Peoplecontrol';
import AddPeoplecontrolModal from '../Peoplecontrol/AddPeoplecontrolModal';
// import PeoplecontrolListModal from '../Peoplecontrol/PeoplecontrolListModal';
import EditPeoplecontrolModal from '../Peoplecontrol/EditPeoplecontrolModal';

import Button from '../../components/Button';

export default function Dashboard() {
  return (
    <>
      <SearchBar />
      <div className="container">
        {/* <Log /> */}

        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />

        <AddDwellerModal />
        <DwellerListModal />

        <AddPeopletypeModal />
        <PeopletypeListModal />

        <AddPeopleModal />
        <PeopleListModal />
        <EditPeopleModal />

        <Peoplecontrol />
        <AddPeoplecontrolModal />
        {/* <PeoplecontrolListModal /> */}
        <EditPeoplecontrolModal />

        <Button />
      </div>
    </>
  );
}
