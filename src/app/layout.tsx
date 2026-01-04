import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Humaiza Naz - Professional CV",
  description: "Full Stack Developer | Homeopathic Practitioner",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
