import '@/app/ui/hyy-global.css' // 会导入tailwind样式

import { inter } from '@/app/ui/fonts' //注意字体的文件名只能是fonts

import SideNav from '@/app/ui/dashboard/sidenav'

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className=''>
        <div
          className='flex h-screen flex-col md:flex-row md:overflow-hidden dark:bg-gray-900
'
        >
          {/* SideNav 部分 */}
          <div className='w-full flex-none md:w-64 md:fixed md:top-0 md:left-0 md:h-screen bg-gray-100'>
            <SideNav />
          </div>
          {/* 内容部分 */}
          <div
            className='
          flex-grow 
          p-6 
          overflow-y-auto 
          md:ml-64 md:overflow-y-auto md:p-12
          dark:bg-gray-900
        '
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
