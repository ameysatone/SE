import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Signin from './compo/Sign/Signin';
import Signup from './compo/Sign/Signup';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Signin />} /> {/* Route for SignIn component */}
        <Route path="/signup" element={<Signup />} /> {/* Route for SignUp component */}
      </Routes>
    </Router>
  );
}

export default App;
