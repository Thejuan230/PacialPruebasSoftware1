import bcrypt from 'bcrypt';
import { pool } from './backend/config/db.js';
import dotenv from 'dotenv';

dotenv.config();

async function createCustomAdmin() {
  try {
    console.log('🔧 Creando usuario administrador personalizado...');
    
    // ⚠️ CAMBIA ESTOS DATOS SEGÚN TUS NECESIDADES
    const adminData = {
      name: 'Tu Nombre',
      email: 'tu-email@ejemplo.com',
      password: 'tu-contraseña-segura', // Cambia esta contraseña
      rol: 'admin'
    };
    
    // Verificar si ya existe un admin
    const [existingAdmin] = await pool.query(
      'SELECT * FROM users WHERE rol = "admin" LIMIT 1'
    );
    
    if (existingAdmin.length > 0) {
      console.log('⚠️ Ya existe un usuario administrador en el sistema');
      return;
    }
    
    // Hash de la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(adminData.password, saltRounds);
    
    // Insertar el admin
    const [result] = await pool.query(
      'INSERT INTO users (name, email, password, rol) VALUES (?, ?, ?, ?)',
      [adminData.name, adminData.email, hashedPassword, adminData.rol]
    );
    
    console.log('✅ Usuario administrador creado exitosamente!');
    console.log('📧 Email:', adminData.email);
    console.log('🔑 Contraseña:', adminData.password);
    console.log('🆔 ID:', result.insertId);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    process.exit(0);
  }
}

createCustomAdmin();

