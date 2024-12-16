import React from 'react';

interface SizeSelectorProps {
  size: number;
  onSizeChange: (size: number) => void;
}

export default function SizeSelector({ size, onSizeChange }: SizeSelectorProps) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        QR Code Size
      </label>
      <input
        type="range"
        min="128"
        max="512"
        value={size}
        onChange={(e) => onSizeChange(Number(e.target.value))}
        className="w-full"
      />
      <div className="text-sm text-gray-500 mt-1">{size}px</div>
    </div>
  );
}