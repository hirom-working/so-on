import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'net.hirom.and-so-on',
  appName: 'And So On',
  webDir: 'dist',
  ios: {
    contentInset: 'always',
    allowsLinkPreview: false,
    scrollEnabled: false
  }
};

export default config;
