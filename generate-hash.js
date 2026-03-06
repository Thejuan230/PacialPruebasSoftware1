import bcrypt from 'bcrypt';

async function generateHash() {
  try {
    const password = 'admin123'; // Cambia esta contraseña
    const saltRounds = 10;
    
    console.log('🔐 Generando hash para la contraseña:', password);
    
    const hash = await bcrypt.hash(password, saltRounds);
    
    console.log('✅ Hash generado:');
    console.log(hash);
    console.log('');
    console.log('📋 SQL para MySQL Workbench:');
    console.log(`INSERT INTO users (name, email, password, rol) VALUES (
  'Administrador',
  'admin@golem.com', 
  '${hash}',
  'admin'
);`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

generateHash();

