import { bootstrap, port } from './main';
import { AppDataSource } from 'typeorm.config';
import { Cart } from './cart/cart.entity'; // Your TypeORM entities

let isAppInitialized = false;

export const handler = async (event: any) => {
  try {
    if (!isAppInitialized) {
      await AppDataSource.initialize(); // Initialize TypeORM connection
      await bootstrap(); // Initialize NestJS application
      isAppInitialized = true;
    }

    // Example of using TypeORM for a database operation
    const cartRepository = AppDataSource.getRepository(Cart);
    const carts = await cartRepository.find();

    return {
      statusCode: 200,
      body: JSON.stringify(carts),
    };
  } catch (error) {
    console.error('Error handling request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
