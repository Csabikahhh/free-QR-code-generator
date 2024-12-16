import React from 'react';
import QRCodeReact from 'qrcode.react';
import { QRCodeStyle } from '../types/qr-code';

interface QRCodeDisplayProps {
  text: string;
  size: number;
  style: QRCodeStyle;
}

export default function QRCodeDisplay({ text, size, style }: QRCodeDisplayProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <QRCodeReact
        id="qr-code"
        value={text}
        size={size}
        level={style.level}
        fgColor={style.fgColor}
        bgColor={style.bgColor}
      />
    </div>
  );
}