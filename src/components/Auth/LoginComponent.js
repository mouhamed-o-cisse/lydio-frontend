import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import LoadingSpinner from '../UI/LoadingSpinner';
import AuthContext from '../../store/auth-context';
import classes from './LoginComponent.module.css';
import{ AiOutlineEye }from'react-icons/ai'; 

const AuthForm = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

//   const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [authInvalid, setAuthInvalid] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//   };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation http://localhost:2500/users/login

    setIsLoading(true);
    let url;
      url = 'https://lydio-backend-app.herokuapp.com/users/login'    
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        username: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        // console.log(res)
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        navigate('/');
        // alert('Logged in successfully');
        // console.log(data.userData)
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.token, expirationTime.toISOString(), data.user_id, data.username, data.created);
        // history.replace('/');
      })
      .catch((err) => {
        // alert(err.message);
        setIsLoading(false);
        setAuthInvalid(true);
        // console.log(err.message)
        // console.log(err)
      });
  };

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <section className={classes.auth}>
      <h1>Connexion  </h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Nom d'utilisateur</label>
          <input type='text' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Mot de passe</label>
          <input
            type={passwordShown ? "text" : "password"}
            id='password'
            required
            ref={passwordInputRef}
          /> <span onClick={togglePassword}><AiOutlineEye/></span>
          
        </div>
        { authInvalid && <div> <p>Indentifiant(s) incorrect(s)</p> </div> }
        <div className={classes.actions}>
          {!isLoading && (
            <button>Se connecter </button>
          )}
          {/* {isLoading && <LoadingSpinner /> } */}
          {isLoading && <p>Loading...</p> }
          {/* <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button> */}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
