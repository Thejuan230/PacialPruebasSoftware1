import bcrypt from 'bcrypt';

async function generateNewHash() {
  try {
    const password = 'admin123'; // Cambia esta contraseña
    const saltRounds = 12; // Mismo nivel de seguridad que tu hash
    
    console.log('🔐 Generando nuevo hash para:', password);
    
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

generateNewHash();

