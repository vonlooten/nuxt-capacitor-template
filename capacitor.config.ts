import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'nuxt-capacitor-test',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    iosScheme: 'nuxtmobile',
  },
}

export default config
