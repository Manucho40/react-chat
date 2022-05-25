import './App.css';
import Header from './components/Header';
import ModalConnexion from './components/modals/ModalConnexion';
import { useState} from 'react';

import ModalInscription from './components/Inscription';

function App() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="App">
      <Header toggleModal={toggleModal}/>
      <ModalInscription />
      <ModalConnexion toggleModal={toggleModal} modal={modal}/>
    </div>
  );
}

export default App;
