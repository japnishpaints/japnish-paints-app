import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'store.japnishpaints.app',
  appName: 'Japnish Paints',
  webDir: 'www',
  bundledWebRuntime: false,
  server: { androidScheme: 'https' }
};

export default config;
