// src/routes.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';



// Example usage of React.lazy and React.Suspense
import React, { lazy, Suspense } from 'react';

// In your routes.js
<Suspense fallback={<div>Loading...</div>}>
  <Route exact path="/" component={Home} />
</Suspense>


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default AppRoutes;