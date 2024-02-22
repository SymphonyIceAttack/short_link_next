import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextUIProvider from './LayoutProvider/NextUiProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'shortLinkPlatorms',
    description: 'Shorten Your URL',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextUIProvider>{children}</NextUIProvider>
            </body>
        </html>
    )
}
