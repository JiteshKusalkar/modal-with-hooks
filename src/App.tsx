import React from 'react';

import ModalBase, { ModalContainer } from './components/Modal';
import TriggerModal from './components/TriggerModal';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ModalContainer.Provider>
      <TriggerModal />
      <ModalBase />
    </ModalContainer.Provider>
  );
}

export default App;
