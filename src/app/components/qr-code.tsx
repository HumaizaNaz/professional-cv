"use client"

import { QRCodeSVG } from "qrcode.react"

interface QRCodeComponentProps {
  value: string
  size: number
}

export function QRCodeComponent({ value, size }: QRCodeComponentProps) {
  return (
    <div className="print:hidden flex flex-col items-center">
      <div className="bg-white p-2 rounded-md shadow-sm border border-gray-200">
        <QRCodeSVG value={value} size={size} className="text-emerald-600" />
      </div>
      <p className="text-sm text-gray-600 mt-2">Scan for Portfolio</p>
    </div>
  )
}
