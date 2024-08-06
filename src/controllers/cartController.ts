import { Request, Response } from 'express';
import { Cart } from '../models/cart';
import { ProductCart } from '../models/productcart';

export const addProductToCart = async (req: Request, res: Response) => {
  try {
    const { cartId, productId, quantity } = req.body;
    const productCart = await ProductCart.create({ cartId, productId, quantity });
    res.status(201).json(productCart);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const removeProductFromCart = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ProductCart.destroy({ where: { id } });
    res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const updateProductQuantityInCart = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const productCart = await ProductCart.findByPk(id);
    if (productCart) {
      productCart.quantity = quantity;
      await productCart.save();
      res.json(productCart);
    } else {
      res.status(404).json({ error: 'Product in cart not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};
