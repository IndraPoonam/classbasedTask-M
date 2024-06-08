
// //////////////////////////////////////////////////////////////////////////////////

// import React, { Component } from 'react';
// import { Container, Grid,Box,Typography,Button } from '@mui/material';
// import Medicine from './Medicine';


// interface AppState {
//   cart: any[];
// }

// class Product extends Component<{}, AppState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       cart: [],
//     };
//   }

//   handleAddToCart = (product: any) => {
//     this.setState({ cart: [...this.state.cart, product] });
//   };

//   render() {
//     const products = [
//       { name: 'PainAway', price: 299, quantity: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
//       { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
//       { name: 'GlowMagic', price: 349, quantity: 10, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
//       { name: 'PainAway', price: 299, quantity: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
//       { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' }, 
//       { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' }, 
//       { name: 'PainAway', price: 299, quantity: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
//       { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' }, 
//       { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
//     ];

//     return (
//       <Container>
//         <Box sx={{display:'flex',justifyContent:'space-between',height:'10vh',width:"full"}}>
// <Typography sx={{fontSize:'2rem',fontWeight:"bold"}}>All</Typography>
// <Button variant="contained" color="primary" sx={{height:'5vh'}} >Add to Cart</Button>
//         </Box>
//         <Grid container spacing={2}>
//           {products.map((product, index) => (
//             <Grid item key={index} xs={12} sm={6} md={3}>
//               <Medicine
//                 name={product.name}
//                 price={product.price}
//                 quantity={product.quantity}
//                 imageUrl={product.imageUrl}
//                 onAddToCart={this.handleAddToCart}
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     );
//   }
// }

// export default Product;

import React, { Component } from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import Medicine from './Medicine';
import Cart from './Cart'; 

interface AppState {
  cart: { 
    name: string;
     price: number; 
     quantity: number }[]; 
}

class Product extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  handleAddToCart = (product: any) => {
    this.setState({ cart: [...this.state.cart, product] });
  };

  render() {
    const products = [
        { name: 'PainAway', price: 299, quantity: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
              { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
               { name: 'GlowMagic', price: 349, quantity: 10, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
               { name: 'PainAway', price: 299, quantity: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
               { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' }, 
               { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' }, 
               { name: 'PainAway', price: 299, quantity: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
               { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' }, 
               { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },

    ];

    return (
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '10vh', width: 'full' }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 'bold' }}>All</Typography>
          <Button variant="contained" color="primary" sx={{ height: '5vh' }}>Add to Cart</Button>
        </Box>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Medicine
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                imageUrl={product.imageUrl}
                onAddToCart={this.handleAddToCart}
              />
            </Grid>
          ))}
        </Grid>
        {/* Render the Cart component and pass cart state */}
        <Cart cart={this.state.cart} />
      </Container>
    );
  }
}

export default Product;

/////////////////////////////////////////////////////////////////////////
// import React, { Component } from 'react';
// import { Container, Grid, Box, Typography, Button } from '@mui/material';
// import Medicine from './Medicine';
// import Cart from './Cart';

// interface AppState {
//   cart: any[];
// }

// class Product extends Component<{}, AppState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       cart: [],
//     };
//   }

//   handleAddToCart = (product: any) => {
//     const existingProductIndex = this.state.cart.findIndex(item => item.name === product.name);
//     if (existingProductIndex !== -1) {
//       const newCart = [...this.state.cart];
//       newCart[existingProductIndex].quantity += product.quantity;
//       this.setState({ cart: newCart });
//     } else {
//       this.setState({ cart: [...this.state.cart, product] });
//     }
//   };

//   handleRemoveItem = (index: number) => {
//     const newCart = [...this.state.cart];
//     newCart.splice(index, 1);
//     this.setState({ cart: newCart });
//   };

//   render() {
//     const products = [
//         { name: 'PainAway', price: 299, quantity: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
//               { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
//                { name: 'GlowMagic', price: 349, quantity: 10, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
//                { name: 'PainAway', price: 299, quantity: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
//               { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' }, 
//                { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' }, 
//                { name: 'PainAway', price: 299, quantity: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
//                { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' }, 
//                { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
//     ];

//     return (
//       <Container>
//         <Box sx={{display:'flex',justifyContent:'space-between',height:'10vh',width:"full"}}>
//           <Typography sx={{fontSize:'2rem',fontWeight:"bold"}}>All</Typography>
//           <Button variant="contained" color="primary" sx={{height:'5vh'}} >Add to Cart</Button>
//         </Box>
//         <Grid container spacing={2}>
//           {products.map((product, index) => (
//             <Grid item key={index} xs={12} sm={6} md={3}>
//               <Medicine
//                 name={product.name}
//                 price={product.price}
//                 quantity={product.quantity}
//                 imageUrl={product.imageUrl}
//                 onAddToCart={this.handleAddToCart}
//               />
//             </Grid>
//           ))}
//         </Grid>
//         <Cart cartItems={this.state.cart} onRemoveItem={this.handleRemoveItem} /> {/* Pass onRemoveItem function to the Cart component */}
//       </Container>
//     );
//   }
// }

// export default Product;


// import React, { Component } from 'react';
// import { Container, Grid, Box, Typography, Button } from '@mui/material';
// import Medicine from './Medicine';
// import Cart from './Cart';

// interface AppState {
//   cart: any[];
// }

// class Product extends Component<{}, AppState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       cart: [],
//     };
//   }

//   handleAddToCart = (product: any) => {
//     const existingProductIndex = this.state.cart.findIndex(item => item.name === product.name);
//     if (existingProductIndex !== -1) {
//       const newCart = [...this.state.cart];
//       newCart[existingProductIndex].quantity += product.quantity;
//       this.setState({ cart: newCart });
//     } else {
//       this.setState({ cart: [...this.state.cart, product] });
//     }
//   };

//   render() {
//     const products = [
//         { name: 'PainAway', price: 299, quantity: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
//               { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
//                { name: 'GlowMagic', price: 349, quantity: 10, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
//                { name: 'PainAway', price: 299, quantity: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
//               { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' }, 
//                { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' }, 
//                { name: 'PainAway', price: 299, quantity: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
//                { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' }, 
//                { name: 'RelaxoLife', price: 499, quantity: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },

//     ];

//     return (
//       <Container>
//         <Box sx={{display:'flex',justifyContent:'space-between',height:'10vh',width:"full"}}>
//           <Typography sx={{fontSize:'2rem',fontWeight:"bold"}}>All</Typography>
//           <Button variant="contained" color="primary" sx={{height:'5vh'}} >Add to Cart</Button>
//         </Box>
//         <Grid container spacing={2}>
//           {products.map((product, index) => (
//             <Grid item key={index} xs={12} sm={6} md={3}>
//               <Medicine
//                 name={product.name}
//                 price={product.price}
//                 quantity={product.quantity}
//                 imageUrl={product.imageUrl}
//                 onAddToCart={this.handleAddToCart}
//               />
//             </Grid>
//           ))}
//         </Grid>
//         <Cart cartItems={this.state.cart} /> {/* Pass cart items to the Cart component */}
//       </Container>
//     );
//   }
// }

// export default Product;
