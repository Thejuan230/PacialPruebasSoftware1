import { pool } from '../config/db.js';

// Obtener todos los productos
export const getAllProducts = async () => {
  const [rows] = await pool.query('SELECT * FROM products');
  return rows;
};

// Obtener producto por ID
export const getProductById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
  return rows[0];
};

// Crear un nuevo producto
export const createProduct = async (productData) => {
  const { producto, descripcion, precio_compra, precio_venta, stock, imagen_url, fecha_compra } = productData;
  const [result] = await pool.query(
    'INSERT INTO products (producto, descripcion, precio_compra, precio_venta, stock, imagen_url, fecha_compra) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [producto, descripcion, precio_compra, precio_venta, stock, imagen_url, fecha_compra]
  );
  return result.insertId;
};

// Actualizar un producto
export const updateProduct = async (id, productData) => {
  const { producto, descripcion, precio_compra, precio_venta, stock, imagen_url, fecha_compra } = productData;
  const [result] = await pool.query(
    'UPDATE products SET producto = ?, descripcion = ?, precio_compra = ?, precio_venta = ?, stock = ?, imagen_url = ?, fecha_compra = ? WHERE id = ?',
    [producto, descripcion, precio_compra, precio_venta, stock, imagen_url, fecha_compra, id]
  );
  return result.affectedRows;
};

// Eliminar un producto
export const deleteProduct = async (id) => {
  const [result] = await pool.query('DELETE FROM products WHERE id = ?', [id]);
  return result.affectedRows;
};