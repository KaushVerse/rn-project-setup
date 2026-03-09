# 📱 React Native Project Setup (VS Code + CLI)

A complete step‑by‑step guide to create and run a React Native project using VS Code.

---

# 🧰 1. Install Prerequisites

## Node.js

Download:
[https://nodejs.org](https://nodejs.org)

Check installation

```bash
node -v
npm -v
```

---

## Install React Native CLI

```bash
npm install -g react-native-cli
```

---

# 🤖 2. Android Development Setup

Install **Android Studio**

Required components

* Android SDK
* Android SDK Platform
* Android Emulator

Environment Variables

```
ANDROID_HOME
```

Add to PATH

```
platform-tools
emulator
```

Check

```bash
adb --version
```

---

# 🧑‍💻 3. Create React Native Project

```bash
npx react-native init MyApp
```

Go to project folder

```bash
cd MyApp
```

---

# 📂 Project Structure

```
MyApp
│
├── android
├── ios
├── node_modules
├── App.js
├── index.js
├── package.json
```

---

# 🧠 Open Project in VS Code

```bash
code .
```

Recommended Extensions

* React Native Tools
* ES7 React Snippets
* Prettier

---

# ▶️ Run React Native App

Start Metro Bundler

```bash
npx react-native start
```

Run Android App

```bash
npx react-native run-android
```

---

# 📱 Start Android Emulator

Open Android Studio

Device Manager → Start Emulator

or

```bash
emulator -list-avds
emulator -avd Pixel_4
```

---

# 🔥 First React Native Example

App.js

```javascript
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello React Native 🚀</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 22
  }
})
```

---

# 🧪 Useful Commands

Install package

```bash
npm install package-name
```

Clear cache

```bash
npx react-native start --reset-cache
```

Clean Android build

```bash
cd android
./gradlew clean
```

---

# 🧰 Common Issues

## Metro already running

```bash
npx react-native start --port=8082
```

## Emulator not detected

```bash
adb devices
```

---

# 🚀 Production Tips

* Use TypeScript
* Use Redux / Zustand
* Use React Navigation
* Use environment variables

---

# 🎯 Result

You now have a fully working React Native development environment using VS Code.
