"use client"

import { QRCodeSVG } from "qrcode.react"

interface QRCodeComponentProps {
  value: string
  size: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function QRCodeComponent({ value, size }: QRCodeComponentProps) {
  return (
    <div className="print:hidden qr-code-section flex flex-col items-center mt-3">
      <div className="bg-white p-3 rounded-lg shadow-md border">
        <QRCodeSVG value="https://portfolio-humaiza.vercel.app/" size={size} />
      </div>
      <p className="text-sm text-gray-600 mt-2">Scan for Live Portfolio & Projects</p>
    </div>

  )
}
