// import React from 'react';
// import { useSelector } from 'react-redux';

// function ShoppingCart() {
//   const cartItems = useSelector((state) => state.cart.items);

//   // Total price with quantity
//   const totalPrice = cartItems
//     .reduce((total, item) => total + item.price * item.quantity, 0)
//     .toFixed(2);

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-gray-600 text-lg text-center">Your cart is empty!</p>
//       ) : (
//         <div className="space-y-6">
//           {cartItems.map((item, index) => (
//             <div
//               key={index}
//               className="border p-4 rounded shadow-sm text-center space-y-2"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-24 h-24 object-contain mx-auto"
//               />
//               <h2 className="text-lg font-semibold">{item.title}</h2>
//               <p className="text-gray-600">
//                 ${item.price} x {item.quantity} ={" "}
//                 <span className="font-bold">
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </span>
//               </p>
//             </div>
//           ))}

//           <div className="text-right text-xl font-bold mt-6">
//             Total: ${totalPrice}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ShoppingCart;


import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia
} from '@mui/material';

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom align="center">Shopping Cart</Typography>

      {cartItems.length === 0 ? (
        <Typography color="text.secondary" align="center">Your cart is empty!</Typography>
      ) : (
        <Grid container spacing={4}>
          {cartItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="120"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: 'contain', padding: 2 }}
                />
                <CardContent>
                  <Typography variant="subtitle1">{item.title}</Typography>
                  <Typography>
                    ${item.price} x {item.quantity} = <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="h6" align="right">Total: ${totalPrice}</Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default ShoppingCart;