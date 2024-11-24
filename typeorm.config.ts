import { DataSource } from 'typeorm';
import { Cart } from './src/cart/cart.entity';
import { CartItem } from './src/cart/cart-item.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Cart, CartItem],
  synchronize: true, // Not recommended for production
});
