// // LoginPage.tsx
// import React, { useState } from 'react';
// import './LoginPage.css';

// // Define the prop types using an interface
// interface LoginPageProps {
//   onLogin: (email: string, password: string) => void;
// }

// const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onLogin(email, password);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <div>
//           <h2 className="login-title">Sign in to your account</h2>
//           <p className="login-subtitle">
//             Enter your credentials to access your account
//           </p>
//         </div>
        
//         <form className="login-form" onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input
//               id="email-address"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required
//               className="input-field"
//               placeholder="Email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               id="password"
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               required
//               className="input-field"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

     

//           <div>
//             <button type="submit" className="submit-button">
//               Sign in
//             </button>
//           </div>
//         </form>

//         <div className="signup-section">
//           <p className="signup-text">
//             Don't have an account?{' '}
//             <a href="/signup" className="signup-link">
//               Sign up now
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      // Send a POST request to the backend API using axios
      const response = await axios.post(
        `http://localhost:3030/user/login`,
        null,
        {
          params: {
            email: email,
            password: password,
          },
        }
      );

      const user = response.data;

      // Pass the user's role to the onLogin callback
      onLogin(email, password, user.role);
    } catch (err) {
      console.error('Error during login:', err);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div>
          <h2 className="login-title">Sign in to your account</h2>
          <p className="login-subtitle">
            Enter your credentials to access your account
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="input-field"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <div>
            <button type="submit" className="submit-button">
              Sign in
            </button>
          </div>
        </form>

        <div className="signup-section">
          <p className="signup-text">
            Don't have an account?{' '}
            <a href="/signup" className="signup-link">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;