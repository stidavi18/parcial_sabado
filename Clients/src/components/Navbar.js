import { Link } from "react-router-dom";
import imgUsc from "../Img/Logo.png"

const Navbar = ({user}) => {

    const logout =() => {
        window.open("http://localhost:5000/auth/logout", "_self");
    };
    return (
        <div className="navbar">
           <Link  to="/" > <img src={imgUsc} className="logoInicio"/></Link>
            <span className="logo">
                <Link className="nombre" to="/">Campus deportivo</Link>
            </span>{
                user ? (

           
            <ul className="list">
                <li className="listItem">
                    <img src={user.photos[0].value} 
                    alt="" 
                    className="avatar" 
                    />
                </li>
                <li className="inicioNombre">{user.displayName}</li>
                <li className="inicioSalir" onClick={logout}>Salir</li>
            </ul>
        ) : (<Link className="iniciar" to="login">Mis actividades</Link>)  
    }
        </div>
    );
};

export default Navbar