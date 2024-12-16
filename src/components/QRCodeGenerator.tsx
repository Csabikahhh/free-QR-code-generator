import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { QRCodeStyle, presetStyles } from '../types/qr-code';
import { downloadSVG } from '../utils/download';
import StyleSelector from './StyleSelector';
import SizeSelector from './SizeSelector';
import QRCodeDisplay from './QRCodeDisplay';

export default function QRCodeGenerator() {
  const [text, setText] = useState('https://csabaovari.hu/');
  const [style, setStyle] = useState<QRCodeStyle>(presetStyles[0]);
  const [size, setSize] = useState(256);

  const handleStyleChange = (partialStyle: Partial<QRCodeStyle>) => {
    setStyle(current => ({
      ...current,
      ...partialStyle
    }));
  };

  const handleDownload = () => {
    downloadSVG('qr-code', 'qrcode.svg');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">QR Code Generator</h1>
          <p className="text-gray-600">Generate and customize your QR code</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="mb-6">
            <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-2">
              Enter text or URL
            </label>
            <input
              type="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter text or URL"
            />
          </div>

          <StyleSelector
            styles={presetStyles}
            selectedStyle={style}
            onStyleSelect={setStyle}
            onCustomStyleChange={handleStyleChange}
          />

          <SizeSelector
            size={size}
            onSizeChange={setSize}
          />

          <div className="flex flex-col items-center gap-6">
            <QRCodeDisplay
              text={text}
              size={size}
              style={style}
            />

            <button
              onClick={handleDownload}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Download className="w-5 h-5 mr-2" />
              Download SVG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}