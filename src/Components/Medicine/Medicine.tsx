import React, { Component } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

interface ProductProps {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  onAddToCart: (product: any) => void;
}

interface ProductState {
  quantity: number;
  isAdding: boolean;
}

class Medicine extends Component<ProductProps, ProductState> {
  constructor(props: ProductProps) {
    super(props);
    this.state = {
      quantity: 0,
      isAdding: false,
   
    };
  }

  incrementQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 }, () => {
      // console.log(`Quantity increased: ${this.state.quantity}`);
    
    });
  };

  decrementQuantity = () => {
    if (this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 }, () => {
        // console.log(`Quantity decreased: ${this.state.quantity}`);
      });
    }
  };

  
  addToCart = () => {
    const { name, price } = this.props;
    const { quantity } = this.state;
    if (quantity > 0) {
      const product = { name, price, quantity };
      this.props.onAddToCart(product);
    }
    this.setState({ isAdding: true });
    // console.log('Product name:', name);
    // console.log('Product name:', price);
  };
  
  render() {
    const { name, price, imageUrl } = this.props;
    const { quantity, isAdding } = this.state;

    return (
      <Box>
        <Card sx={{ border: '2px solid green' }}>
          <CardMedia
            sx={{ border: '2px solid red' }}
            component="img"
            image={imageUrl}
            alt={name}
          />
          <CardContent>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body2">Rs.{price}</Typography>
            {isAdding ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="contained" color="primary" onClick={this.incrementQuantity}>+</Button>
                <Typography variant="body2" style={{ margin: '0 8px', fontWeight: 'bold' }}>{quantity}</Typography>
                <Button variant="contained" color="secondary" onClick={this.decrementQuantity}>-</Button>
              </div>
            ) : (
              <Button variant="contained" color="primary" onClick={this.addToCart}>Add</Button>
            )}
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default Medicine;


// import React, { Component } from 'react';
// import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

// interface ProductProps {
//   name: string;
//   price: number;
//   quantity: number;
//   imageUrl: string;
//   onAddToCart: (product: any) => void;
// }

// interface ProductState {
//   quantity: number;
//   isAdding: boolean;
// }

// class Medicine extends Component<ProductProps, ProductState> {
//   constructor(props: ProductProps) {
//     super(props);
//     this.state = {
//       quantity: 1, // Start with 1 since it doesn't make sense to add 0 quantity to cart
//       isAdding: false,
//     };
//   }

//   incrementQuantity = () => {
//     this.setState({ quantity: this.state.quantity + 1 });
//   };

//   decrementQuantity = () => {
//     if (this.state.quantity > 1) {
//       this.setState({ quantity: this.state.quantity - 1 });
//     }
//   };

//   addToCart = () => {
//     const { name, price } = this.props;
//     const { quantity } = this.state;
//     if (quantity > 0) {
//       const product = { name, price, quantity };
//       this.props.onAddToCart(product);
//     }
//     this.setState({ isAdding: true });
//   };

//   render() {
//     const { name, price, imageUrl } = this.props;
//     const { quantity, isAdding } = this.state;

//     return (
//       <Box>
//         <Card sx={{ border: '2px solid green' }}>
//           <CardMedia
//             sx={{ border: '2px solid red' }}
//             component="img"
//             image={imageUrl}
//             alt={name}
//           />
//           <CardContent>
//             <Typography variant="h5">{name}</Typography>
//             <Typography variant="body2">Rs.{price}</Typography>
//             {isAdding ? (
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <Button variant="contained" color="primary" onClick={this.incrementQuantity}>+</Button>
//                 <Typography variant="body2" style={{ margin: '0 8px', fontWeight: 'bold' }}>{quantity}</Typography>
//                 <Button variant="contained" color="secondary" onClick={this.decrementQuantity}>-</Button>
//               </div>
//             ) : (
//               <Button variant="contained" color="primary" onClick={this.addToCart}>Add</Button>
//             )}
//           </CardContent>
//         </Card>
//       </Box>
//     );
//   }
// }

// export default Medicine;
