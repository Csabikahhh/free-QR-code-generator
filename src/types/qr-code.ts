export interface QRCodeStyle {
  fgColor: string;
  bgColor: string;
  level: 'L' | 'M' | 'Q' | 'H';
}

export const presetStyles: QRCodeStyle[] = [
  { fgColor: '#000000', bgColor: '#ffffff', level: 'H' },
  { fgColor: '#0088cc', bgColor: '#ffffff', level: 'Q' },
  { fgColor: '#ff4444', bgColor: '#ffffff', level: 'H' },
  { fgColor: '#4CAF50', bgColor: '#ffffff', level: 'Q' },
  { fgColor: '#9C27B0', bgColor: '#ffffff', level: 'H' },
];