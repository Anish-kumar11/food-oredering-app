// import React, { useState } from 'react';
// import '../styles/Authentication.css'
// import Login from '../components/Login';
// import Register from '../components/Register';

// const Authentication = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="AuthenticatePage">

//       {isLogin ?
      
//       <Login  setIsLogin = {setIsLogin} />
    
//       :
      
//       <Register setIsLogin = {setIsLogin} />
//       }

//     </div>
//   )
// }

// export default Authentication




import React, { useState } from 'react';
import '../styles/Authentication.css';
import Login from '../components/Login';
import Register from '../components/Register';

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="authenticate-page">
      <div className="auth-container">
        <div className="auth-header">
          <h2>{isLogin ? 'Login' : 'Register'}</h2>
        </div>

        <div className="auth-content">
          {isLogin ? (
            <Login setIsLogin={setIsLogin} />
          ) : (
            <Register setIsLogin={setIsLogin} />
          )}
        </div>

        <div className="auth-footer">
          <button 
            className="toggle-btn" 
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
