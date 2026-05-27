import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "javier@gmail.com",
    password: "123456",
  });
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };
  return (
    <div>
      <h3 className="auth__title">Login</h3>
      <form
        className="animate__animated animate__fadeIn"
        onSubmit={handleLogin}
      >
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
          placeholder="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          Login
        </button>
        <hr />
        <div className="auth__redes">
          <p>Link de conexion con google</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Crear nueva cuenta
        </Link>
      </form>
    </div>
  );
};
