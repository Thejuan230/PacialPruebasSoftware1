import express from 'express';
import { editUser, getUsers, login, register, removeUser } from '../controllers/authController.js';
import { isAdmin, verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /api/register → Registrar usuario
router.post('/register', register);

// POST /api/login → Iniciar sesión
router.post('/login', login);

//GET /api/users -> listar usuarios (SOLO ADMIN)
router.get('/users', verifyToken, isAdmin, getUsers);

//DELETE /api/users/:id -> eliminar usuario (SOLO ADMIN)
router.delete('/users/:id', verifyToken, isAdmin, removeUser);

//PUT /api/users/:id -> editar usuario (SOLO ADMIN)
router.put('/users/:id', verifyToken, isAdmin, editUser);

export default router;
