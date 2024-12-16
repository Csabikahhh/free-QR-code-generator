# QR Code Generator

This project is a web-based QR Code generator built with React, TypeScript, and Vite. Users can generate, customize, and download QR codes in SVG format.

## Features

- **QR Code Generation**: Generate QR codes for any text or URL.
- **Customization**:
  - Adjust QR code size.
  - Change foreground and background colors.
  - Select error correction levels (L, M, Q, H).
- **SVG Download**: Download the generated QR code as an SVG file.
- **Responsive UI**: Fully responsive design with Tailwind CSS.

## Tech Stack

- **React**: Component-based UI framework.
- **TypeScript**: Strongly typed JavaScript for better development experience.
- **Vite**: Fast and modern build tool.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **qrcode.react**: Library for generating QR codes.
- **Lucide-React**: Icons for a better UI experience.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/qr-code-generator.git
   cd qr-code-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at:
   ```
   http://localhost:5173
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Usage

1. **Enter Text/URL**: Input the desired text or URL to generate the QR code.
2. **Customize**:
   - Choose QR code size using the slider.
   - Select preset styles or customize colors.
   - Set the error correction level.
3. **Download**: Click the **Download SVG** button to save the QR code.

## Project Structure

```plaintext
src/
└── components/
    └── ColorPicker.tsx       # Color picker component
    └── QRCodeDisplay.tsx     # Renders the QR code as an SVG
    └── QRCodeGenerator.tsx   # Main generator UI
    └── SizeSelector.tsx      # QR code size slider
    └── StyleSelector.tsx     # Select preset styles or customize colors

└── types/
    └── qr-code.ts            # Defines types for QR code styles

└── utils/
    └── download.ts           # Handles SVG download functionality

App.tsx                   # Root application component
main.tsx                  # Application entry point
index.css                 # Global styles
vite-env.d.ts             # Environment type declarations
tsconfig.app.json         # App-specific TypeScript configuration
tsconfig.node.json        # Node-specific TypeScript configuration
tsconfig.json             # Main TypeScript configuration
vite.config.ts            # Vite configuration file
index.html                # HTML template
```

## Dependencies

### Main Dependencies
- **React**: ^18.3.1
- **qrcode.react**: ^3.1.0
- **lucide-react**: ^0.344.0

### Development Dependencies
- **Vite**: ^5.4.2
- **TypeScript**: ^5.5.3
- **Tailwind CSS**: ^3.4.1
- **ESLint**: ^9.9.1
- **PostCSS**: ^8.4.35

## Configuration Files

### Vite Configuration
`vite.config.ts` sets up React and optimizes dependencies:
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### TypeScript Configuration
- **`tsconfig.app.json`**: For app-specific settings targeting ES2020.
- **`tsconfig.node.json`**: For Node.js-related settings targeting ES2022.
- **`tsconfig.json`**: Main configuration referencing app and node settings.

## Known Issues

- Ensure `qrcode.react` version >= 3.1.0 is installed. Consider upgrading to version 4.x to use the `QRCodeSVG` component.

## License

This project is licensed under the MIT License.

---

**Contributions** are welcome! Feel free to fork the repository and submit a pull request.

Made with ❤️ by Csaba Ovari.