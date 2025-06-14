// import React from 'react';
// import { useSelector } from 'react-redux';

// function CartPage() {
//   const cart = useSelector((state) => state.cart);
//   // 🔴 Check if cart is undefined
//   if (!cart) {
//     return <p className="text-center text-red-600 mt-10">Cart is empty or not loaded properly.</p>;
//   }

//   // 🔢 Calculate total
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">🛒 Shopping Cart</h1>

//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cart.map((item) => (
//             <div key={item.id} className="flex items-center justify-between border-b py-4">
//               <div>
//                 <p className="font-semibold">{item.title}</p>
//                 <p className="text-gray-600">${item.price} x {item.quantity}</p>
//               </div>
//               <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
//             </div>
//           ))}

//           <div className="mt-6 text-xl font-bold">
//             Total: ${total.toFixed(2)}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CartPage;


import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  Container,
  Divider,
  Grid,
  CardMedia
} from '@mui/material';

function CartPage() {
  const cart = useSelector((state) => state.cart);

  if (!cart) {
    return <Typography align="center" color="error" mt={6}>Cart is empty or not loaded properly.</Typography>;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>🛒 Shopping Cart</Typography>

      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <Box>
          {cart.map((item) => (
            <Box key={item.id} display="flex" justifyContent="space-between" alignItems="center" py={2}>
              <Box>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography color="text.secondary">${item.price} x {item.quantity}</Typography>
              </Box>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{ width: 64, height: 64, objectFit: 'contain' }}
              />
            </Box>
          ))}
          <Divider sx={{ my: 4 }} />
          <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
        </Box>
      )}
    </Container>
  );
}

export default CartPage;
