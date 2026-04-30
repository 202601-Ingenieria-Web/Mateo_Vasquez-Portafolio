import type { Metadata } from 'next';
import { Sora, Source_Sans_3 } from 'next/font/google';

import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700'],
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Portafolio - Mateo Vasquez',
  description: 'Portafolio de Mateo Vasquez, Ingeniero en Sistemas',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${sora.variable} ${sourceSans.variable}`}>{children}</body>
    </html>
  );
}