// import React from 'react';
// import Link from 'next/link';

// function Header() {
//   return (
//     <header className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
//       <nav className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo / Brand Name */}
//         <div className="text-2xl font-bold tracking-wide">
//           ShopNest
//         </div>

//         {/* Navigation Links */}
//         <div className="flex space-x-6 text-lg">
//           <Link href="/cart" className="hover:text-yellow-300 transition duration-200">Cart 🛒</Link>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;





import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Header() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#2e7d32' }}> {/* Dark Green */}
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">ShopNest</Typography>
        <Link href="/cart" passHref legacyBehavior>
          <Button color="inherit">Cart 🛒</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
