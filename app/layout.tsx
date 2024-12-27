import '@/app/ui/hyy-global.css' // 会导入tailwind样式

import { inter } from '@/app/ui/fonts' //注意字体的文件名只能是fonts

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
