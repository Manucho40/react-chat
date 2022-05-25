import '../../assets/css/header.css'
const ModalConnexion = ({toggleModal, modal}) => {
    
    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
      }
    return ( 
        <>
        {modal && (
            <div className="modal">
                <div  className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                
                    <h1>Connectez-Vous</h1>
                    <form action="" className='formulaire'>
                        <div className="group-form">
                            <label htmlFor="Login">Login</label>
                            <input type="text" name='login'/>
                        </div>
                        <div className="group-form">
                            <label htmlFor="Password">Password</label>
                            <input type="text" name='password'/>
                        </div>
                        <div className='submit-connexion'>
                            <button>Connexion</button>
                        </div>
                    </form>
                    <button className="close-modal" onClick={toggleModal}>
                    CLOSE
                    </button>
                    </div>
                    
                
            </div>)}
        </>
     );
}
 
export default ModalConnexion;