# Illusion_Dashboard - Android App Guide

This guide explains how **Illusion_Dashboard** runs as an Android mobile app with 100% feature parity.

---

## Option 1: Instant Native Android Installation (WebAPK) — Recommended

The app is fully configured as a certified Progressive Web App (PWA) that converts directly into a native Android **WebAPK**:

1. Open the app link on your Android device in **Google Chrome** or **Samsung Internet**.
2. Tap the **"Install Android App"** button in the top navigation bar, or tap browser menu `⋮` -> **"Install app"** / **"Add to Home screen"**.
3. Android will automatically register and install the app with:
   - Official launcher icon in your Android App Drawer and Home Screen.
   - Dedicated full-screen standalone window (no browser address bar).
   - High-performance caching and offline status resilience.
   - Seamless Firestore data synchronization with QA teams.

---

## Option 2: Generate a Standalone Android APK (.apk / .aab)

To generate a standalone APK package for sideloading or Google Play Store distribution, you can use either **Google Bubblewrap** or **Capacitor**:

### Method A: Google Bubblewrap (Official TWA CLI)
Google's official tool generates a standard Android Studio Gradle project and signs the APK from any PWA:

```bash
# 1. Install Bubblewrap CLI
npm install -g @bubblewrap/cli

# 2. Initialize the Android project using your deployed PWA URL
bubblewrap init --manifest="https://your-domain.run.app/manifest.webmanifest"

# 3. Build the signed Android APK / AAB
bubblewrap build
```

This outputs `app-release-signed.apk` ready for installation via ADB or Play Store.

### Method B: Capacitor Native Shell

A `capacitor.config.json` file is already included in this repository:

```bash
# 1. Install Capacitor core & CLI
npm install @capacitor/core @capacitor/cli @capacitor/android

# 2. Build the production web bundle
npm run build

# 3. Initialize and add the Android platform
npx cap add android

# 4. Open in Android Studio to run on an emulator or compile APK
npx cap open android
```

---

## Technical Specifications
- **Package ID**: `com.illusiotech.bugtracker`
- **Application Name**: `Illusion_Dashboard`
- **Short Name**: `Illusion QA`
- **Theme Color**: `#4f46e5`
- **Background Color**: `#0f172a`
- **Display Mode**: `standalone`
- **Icons**: Adaptive Maskable 512x512, 192x192, SVG vector brand
