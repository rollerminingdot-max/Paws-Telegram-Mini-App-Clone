// app/layout.tsx

/**
 * This project was developed by Nikandr Surkov.
 *
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * GitHub: https://github.com/nikandr-surkov
 */

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
})

const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
})

export const metadata: Metadata = {
    title: 'Paws Game Clone',
    description:
        'Clone of the popular Telegram mini app Paws, developed by Nikandr Surkov.'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}

                {/* Monetag SDK */}
                <Script
                    src="//libtl.com/sdk.js"
                    strategy="afterInteractive"
                    data-zone="10404224"
                    data-sdk="show_10404224"
                />
            </body>
        </html>
    )
}
