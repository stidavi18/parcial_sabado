import Google from "../Img/google.png";
import logo from "../Img/Logo.png";
const Login = () => {

const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
}
    return (
        <div className="contenedor">
            <div className="login">
                <img className="logoUsc" src={logo} />
                <form className="loginForm">
                    <input type="text" className="loginDato" placeholder="Nombre de usuario" disabled/>
                    <input type="password" className="loginDato" placeholder="Contraseña" disabled/>
                    <button type="submit" className="loginAcceder" disabled>Acceder</button>
                </form>
                <div className="googleLogin" onClick={google}>
                        <img src={Google} alt="google" className="logoGoogle" />
                        <p>Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;