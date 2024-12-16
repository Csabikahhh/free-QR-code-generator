import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QRCodeStyle } from '../types/qr-code';

interface QRCodeDisplayProps {
    text: string;
    size: number;
    style: QRCodeStyle;
}

export default function QRCodeDisplay({ text, size, style }: Readonly<QRCodeDisplayProps>) {
    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <QRCodeSVG
                id="qr-code" // Ensures your download function targets the correct element
                value={text}
                size={size}
                level={style.level}
                fgColor={style.fgColor}
                bgColor={style.bgColor}
            />
        </div>
    );
}
