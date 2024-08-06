import { Router } from 'express';
import { getAllUsers, deleteUser, updateUser } from '../controllers/userController';

const router = Router();

router.get('/', getAllUsers);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router;
