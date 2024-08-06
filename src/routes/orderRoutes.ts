import { Router } from 'express';
import { addProductToCart, removeProductFromCart, updateProductQuantityInCart } from '../controllers/cartController';

const router = Router();

router.post('/', addProductToCart);
router.delete('/:id', removeProductFromCart);
router.put('/:id', updateProductQuantityInCart);

export default router;
