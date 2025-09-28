# 🚀 Project Setup

## 🔤 Fonts Setup
To link custom fonts in React Native, run:

```bash
npx react-native-asset

```
## 🖼️ SVG, Icons & Babel Module Resolver Setup

This section covers **SVG rendering**, **vector icons**, and **custom path aliases** in React Native.

---

### 📦 Install Packages

```bash
# Vector icons
npm install react-native-vector-icons

# SVG + Transformer
npm install react-native-svg react-native-svg-transformer

# Babel Module Resolver
npm install --save-dev babel-plugin-module-resolver

# build.gradlew link Icon
project.ext.vectoricons = [
     iconFontNames: ['MaterialIcons.ttf', 'EvilIcons.ttf', 'Fontisto.ttf', 'FontAwesome.ttf', 'Foundation.ttf', 'Ionicons.ttf', 'MaterialCommunityIcons.ttf', 'Octicons.ttf', 'SimpleLineIcons.ttf', 'Zocial.ttf'
     ]
    ]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
