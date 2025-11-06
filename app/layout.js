import './globals.css'

export const metadata = {
  title: 'Smart Medical Content Creator - مولد المحتوى الطبي',
  description: 'محتوى احترافي لطب الأسنان في دقيقة فقط',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}