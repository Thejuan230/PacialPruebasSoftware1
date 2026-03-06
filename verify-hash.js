import bcrypt from 'bcrypt';

async function verifyHash() {
  const hash = '$2a$12$75H/g2iFjQBA4Yr1Pg1R.eVXLobPnjRYmNSZ/f78sISf0wryCZMaS';
  
  // Lista de contraseñas comunes para probar
  const commonPasswords = [
    'admin123',
    'password',
    '123456',
    'admin',
    'root',
    'test',
    'golem',
    'elgolem',
    'admin2024',
    'password123'
  ];
  
  console.log('🔍 Verificando hash contra contraseñas comunes...');
  
  for (const password of commonPasswords) {
    try {
      const match = await bcrypt.compare(password, hash);
      if (match) {
        console.log('✅ ¡CONTRASEÑA ENCONTRADA!');
        console.log('🔑 Contraseña:', password);
        console.log('🔐 Hash:', hash);
        return;
      }
    } catch (error) {
      console.log('❌ Error verificando:', password);
    }
  }
  
  console.log('❌ No se encontró la contraseña en la lista común');
  console.log('💡 El hash es válido pero la contraseña no está en la lista');
}

verifyHash();

