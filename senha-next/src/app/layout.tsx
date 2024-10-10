import type { Metadata } from 'next';
import './globals.css';
import './page.module.css';

export const metadata: Metadata = {
  title: 'Gerador de Senha',
  description: 'Uma aplicação que gera senhas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}