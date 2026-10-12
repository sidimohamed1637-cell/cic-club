import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function printLinksPlugin() {
  return {
    name: 'print-links-plugin',
    configureServer(server) {
      const logBanner = () => {
        const address = server.httpServer?.address();
        const port = typeof address === 'object' && address?.port ? address.port : 3000;
        console.log('\n  ======================================================');
        console.log('  🚀 روابط الوصول للمشروع:');
        console.log(`  🌐 رابط الموقع الرئيسي:         http://localhost:${port}/#/`);
        console.log(`  🔐 رابط صفحة الإدارة (الادمن):  http://localhost:${port}/#/admin`);
        console.log('  ======================================================\n');
      };

      const _printUrls = server.printUrls.bind(server);
      server.printUrls = () => {
        _printUrls();
        logBanner();
      };
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  plugins: [react(), printLinksPlugin()],
  base: './', // Ensures relative assets paths for GitHub Pages
  server: {
    port: 3000,
    open: true
  }
});
