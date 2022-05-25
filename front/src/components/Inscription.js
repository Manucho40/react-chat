// import { useEffect } from 'react';
import axios from 'axios'

const api = "http://localhost:8080/user";

const Inscription = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
      
    // }, []);
    const apiFunc = () => {
        axios
        .get(api)
        .then((res) => console.log(res.data))
    }

    apiFunc()
    
    return ( 
        <>
            <div className="formulaire">
                <h1>Formulaire inscription</h1>
                <form action="" method="post">
                    <div className="group-form">
                        <label htmlFor="">Login</label>
                        <input type="text" />
                    </div>
                    <div className="group-form">
                        <label htmlFor="">Password</label>
                        <input type="text" />
                    </div>
                    <div className="group-form">
                        <label htmlFor="">Confimation de password</label>
                        <input type="text" />
                    </div>
                    <div className="submit-connexion">
                        <button>Valider</button>
                    </div>
                </form>
            </div>

        </>
     );
}
 
export default Inscription;