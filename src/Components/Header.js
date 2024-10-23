// Header.js
// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <img src="./img/ry4.ccd6cfc85211eb65501d (1).webp" alt="Company Logo" />
//       </div>
//       <div className="company-info">
//         <h2>RyienSoft Technologies</h2>
//         <p>PROFESSIONAL , PERSONAL SOLUTIONS</p>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Update the path to use the image from the public folder */}
        <img src='/img/ry4.jpg' alt="image"/>
      </div>
      <div className="company-info">
        <h2>RyienSoft Technologies</h2>
        <p>PROFESSIONAL SOLUTIONS</p>
      </div>
    </header>
  );
};

export default Header;
