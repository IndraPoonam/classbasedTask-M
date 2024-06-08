
// import React from 'react';
// import { Box, Typography } from '@mui/material';

// interface CartProps {
//   cartItems: any[];
// }

// const Cart: React.FC<CartProps> = ({ cartItems }) => {
//   return (
//     <Box>
//       <Typography variant="h6">Cart Items</Typography>
//       {cartItems.length > 0 ? (
//         cartItems.map((item, index) => (
//           <Box key={index} mb={2}>
//             <Typography>{item.name} - {item.quantity} x Rs.{item.price}</Typography>
//           </Box>
//         ))
//       ) : (
//         <Typography>No items in cart</Typography>
//       )}
//     </Box>
//   );
// }

// export default Cart;


// import React from 'react';
// import { Box, Typography } from '@mui/material';

// interface CartProps {
//   cartItems: any[];
// }

// const Cart: React.FC<CartProps> = ({ cartItems }) => {
//   return (
//     <Box>
//       <Typography variant="h6">Cart Items</Typography>
//       {cartItems.length > 0 ? (
//         cartItems.map((item, index) => (
//           <Box key={index} mb={2}>
//             <Typography>{item.name} - {item.quantity} x Rs.{item.price}</Typography>
//           </Box>
//         ))
//       ) : (
//         <Typography>No items in cart</Typography>
//       )}
//     </Box>
//   );
// }

// export default Cart;




// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';

// interface CartProps {
//   cartItems: any[];
//   onRemoveItem: (index: number) => void;
// }

// const Cart: React.FC<CartProps> = ({ cartItems, onRemoveItem }) => {
//   const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

//   const handleRemoveItem = (index: number) => {
//     onRemoveItem(index);
//   };

//   return (
//     <Box>
//       <Typography variant="h6">Cart Items</Typography>
//       {cartItems.length > 0 ? (
//         <>
//           {cartItems.map((item, index) => (
//             <Box key={index} mb={2}>
//               <Typography>{item.name} - {item.quantity} x Rs.{item.price}</Typography>
//               <Button variant="contained" color="secondary" onClick={() => handleRemoveItem(index)}>Remove</Button>
//             </Box>
//           ))}
//           <Typography variant="h6">Total Price: Rs.{totalPrice}</Typography>
//         </>
//       ) : (
//         <Typography>No items in cart</Typography>
//       )}
//     </Box>
//   );
// }

// export default Cart;




// Cart.tsx
import React, { Component } from 'react';
import { Box, Typography } from '@mui/material';

interface CartProps {
  cart: {
     name: string;
     price: number; 
     quantity: number }[];
}

class Cart extends Component<CartProps> {
  render() {
    const { cart } = this.props;

    return (
      <Box>
        <Typography variant="h4">Cart</Typography>
        {cart.map((product, index) => (
          <div key={index}>
            <Typography>{product.name}</Typography>
            <Typography>Quantity: {product.quantity}</Typography>
            <Typography>Price: Rs.{product.price * product.quantity}</Typography>
          </div>
        ))}
      </Box>
    );
  }
}

export default Cart;
