// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '@/redux/slices/cartSlice';

// function ProductDetailPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const dispatch = useDispatch();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     if (id) {
//       fetch(`https://fakestoreapi.com/products/${id}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setProduct(data);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error('Error fetching product:', err);
//           setLoading(false);
//         });
//     }
//   }, [id]);

//   const increaseQty = () => setQuantity((prev) => prev + 1);
//   const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   const handleAddToCart = () => {
//     dispatch(addToCart({ ...product, quantity }));
//     router.push('/cart'); // 👈 Redirect to cart page
//   };

//   if (loading) return <p className="text-center mt-10">Loading...</p>;
//   if (!product) return <p className="text-center text-red-600 mt-10">Product not found</p>;

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex flex-col md:flex-row gap-6">
//         <img src={product.image} alt={product.title} className="w-64 h-64 object-contain" />
//         <div>
//           <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
//           <p className="mb-2 text-green-700 text-xl">${product.price}</p>
//           <p className="mb-4 text-gray-600">{product.description}</p>

//           {/* Quantity Controls */}
//           <div className="flex items-center gap-4 mb-4">
//             <button onClick={decreaseQty} className="px-3 py-1 bg-gray-300 text-lg font-bold rounded">-</button>
//             <input type="text" readOnly value={quantity} className="w-12 text-center border border-gray-400 rounded py-1" />
//             <button onClick={increaseQty} className="px-3 py-1 bg-gray-300 text-lg font-bold rounded">+</button>
//           </div>

//           <button
//             onClick={handleAddToCart}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
//           >
//             Add to Cart 🛒
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetailPage;





// ProductDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';
import {
  Box,
  Typography,
  Button,
  TextField,
  CircularProgress,
  Container,
  Grid,
} from '@mui/material';

function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching product:', err);
          setLoading(false);
        });
    }
  }, [id]);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    router.push('/cart');
  };

  if (loading) return <Box textAlign="center" mt={6}><CircularProgress /></Box>;
  if (!product) return <Typography color="error" align="center" mt={6}>Product not found</Typography>;

  return (
    <Container sx={{ py: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box component="img" src={product.image} alt={product.title} sx={{ width: 300, height: 300, objectFit: 'contain' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>{product.title}</Typography>
          <Typography variant="h6" color="green" gutterBottom>${product.price}</Typography>
          <Typography variant="body1" gutterBottom>{product.description}</Typography>
          <Box display="flex" alignItems="center" gap={2} mt={2}>
            <Button onClick={decreaseQty} variant="outlined">-</Button>
            <TextField value={quantity} inputProps={{ readOnly: true, style: { textAlign: 'center' } }} size="small" />
            <Button onClick={increaseQty} variant="outlined">+</Button>
          </Box>
          <Button
            onClick={handleAddToCart}
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Add to Cart 🛒
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetailPage;
