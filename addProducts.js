// addProducts.js
import mongoose from 'mongoose';
import { mongoDBURL } from './config.js';
import { Shoes } from './models/shoesModel.js';

mongoose
  .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to the database');

    // Add new products
    const newProducts = [
      {
        name: 'Nike',
        description: 'available',
        price: 29.99,
        image: 'product1.jpg',
      },
      {
        name: 'Bata ',
        description: 'local shoes are available',
        price: 9.99,
        image: 'product2.jpg',
      },
      {
        name: 'Addidas',
        description: 'available',
        price: 19.99,
        image: 'product2.jpg',
      },
       
      {
        name: 'lambo  ',
        description: 'vip are available',
        price: 39.99,
        image: 'product2.jpg',
      },
       
      {
        name: 'gucci',
        description: 'Man shoes are available',
        price: 29.99,
        image: 'product2.jpg',
      },
       
      {
        name: 'Liverpool',
        description: 'shoes are available',
        price: 21.99,
        image: 'product2.jpg',
      },
       
      {
        name: 'locdsaa ',
        description: 'available',
        price: 4.99,
        image: 'product2.jpg',
      },
      ];

    const insertedProducts = await Shoes.insertMany(newProducts);
    console.log('New products added:', insertedProducts);

    // Close the database connection
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
