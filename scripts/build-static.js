// scripts/build-static.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏗️  Démarrage de la compilation statique complète...');

try {
  // Nettoyer le cache
  console.log('🧹 Nettoyage du cache Next.js...');
  if (fs.existsSync('.next')) {
    fs.rmSync('.next', { recursive: true, force: true });
  }
  
  // Build de l'application
  console.log('⚙️  Compilation de l\'application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Vérifier que le dossier 'out' a été créé (preuve que output: 'export' fonctionne)
  if (fs.existsSync('out')) {
    console.log('✅ Compilation statique réussie ! Dossier "out" créé.');
    
    // Lister les fichiers générés
    const outFiles = fs.readdirSync('out', { recursive: true });
    console.log(`📁 ${outFiles.length} fichiers statiques générés.`);
    
    // Vérifier la présence des pages dynamiques
    const dynamicPages = [
      'services/1.html',
      'services/2.html', 
      'services/3.html',
      'services/4.html',
      'education/1.html',
      'education/2.html',
      // Ajoutez d'autres pages selon vos besoins
    ];
    
    const missingPages = [];
    dynamicPages.forEach(page => {
      if (!fs.existsSync(path.join('out', page))) {
        missingPages.push(page);
      }
    });
    
    if (missingPages.length === 0) {
      console.log('🎉 Toutes les pages dynamiques ont été générées avec succès !');
      console.log('🚀 Votre application est maintenant entièrement statique et rapide !');
    } else {
      console.warn('⚠️  Pages manquantes :', missingPages);
    }
    
  } else {
    console.error('❌ Erreur : le dossier "out" n\'a pas été créé. Vérifiez votre configuration.');
    process.exit(1);
  }
  
} catch (error) {
  console.error('❌ Erreur lors de la compilation :', error.message);
  process.exit(1);
}