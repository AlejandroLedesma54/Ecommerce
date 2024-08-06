import { Request, Response } from 'express';
import { Order } from '../models/order';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user; // Convierte a any para acceder a user
    const userId = user.id;
    const { products, total } = req.body;

    const order = await Order.create({
      userId,
      total,
      // Aquí va la lógica adicional para guardar los productos
    });

    res.status(201).json(order);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};
