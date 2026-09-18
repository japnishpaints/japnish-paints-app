import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'store.japnishpaints.app',
  appName: 'Japnish Paints',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    url: 'https://japnishpaints.store/mobile/index.html',
    androidScheme: 'https',
    cleartext: false
  }
};

export default config;
