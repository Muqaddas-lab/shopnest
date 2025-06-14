// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await fetch('https://fakestoreapi.com/products');
//       const data = await res.json();
//       setProducts(data);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <Link href={`/product/${product.id}`} key={product.id}>
//             <div className="border p-4 rounded cursor-pointer hover:shadow">
//               {/* Remove image from here */}
//               <h2 className="text-lg font-semibold line-clamp-1">{product.title}</h2>
//               <p className="text-gray-700">${product.price}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;



// ProductList.jsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>Products</Typography>
      <Grid container spacing={4}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Link href={`/product/${product.id}`} passHref legacyBehavior>
              <Card sx={{ cursor: 'pointer' }}>
                <CardContent>
                  <Typography variant="h6" noWrap>{product.title}</Typography>
                  <Typography color="text.secondary">${product.price}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductList;