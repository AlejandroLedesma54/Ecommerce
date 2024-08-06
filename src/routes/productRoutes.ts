import { Router } from 'express';
import { createProduct, getAllProducts, updateProduct, deleteProduct, getProductByOrderId } from '../controllers/productController';

const router = Router();

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/order/:orderId', getProductByOrderId);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
