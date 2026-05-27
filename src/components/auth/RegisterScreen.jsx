import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";

import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { startRegisterAll } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const [formValues, handleInputChange] = useForm({
    email: "javier@gmail.com",
    nombre: "javis",
    telefono: "1234567",
    password: "sisisi",
    password2: "sisisi",
  });

  const { email, nombre, telefono, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(email, nombre, telefono, password, password2);

    if (isFormValid()) {
      dispatch(startRegisterAll(email, password, nombre));
      console.log("formulario correctamente registrado");
    }
  };

  const isFormValid = () => {
    if (nombre.trim().length === 0) {
      dispatch(setError("el nombre es requerido"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("correo no valido"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("las contraseña no coinciden "));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <div>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          className="auth__input"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="auth__input"
          placeholder="Nombre completo"
          name="nombre"
          value={nombre}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="auth__input"
          placeholder="Telefono"
          name="telefono"
          value={telefono}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="auth__input"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="auth__input"
          placeholder="Repite el Password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Register
        </button>
        <hr />

        <Link to="/auth/login" className="link">
          ve al Login
        </Link>
      </form>
    </div>
  );
};
