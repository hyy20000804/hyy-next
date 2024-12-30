'use client' // 添加此行以标记为客户端组件

import Link from 'next/link'
import NavLinks from '@/app/ui/dashboard/nav-links'
import LogoImg from '@/app/ui/acme-logo'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function SideNav () {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault() // 阻止默认行为（即表单提交）
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark', !isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark')
  }

  return (
    <div
      className='flex h-full flex-col px-3 py-4 md:px-2 dark:bg-gray-700
'
    >
      <Link
        className='mb-2 flex h-20 w-full items-center justify-start rounded-md bg-blue-600 p-4 md:h-40 md:justify-center'
        href='/'
      >
        <LogoImg />
      </Link>
      <div
        className='flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 
'
      >
        <NavLinks />
        <div
          className='hidden h-auto w-full grow rounded-md bg-gray-50 md:block dark:bg-gray-700
'
        ></div>
        <form>
          <button
            onClick={toggleTheme}
            className='flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 dark:bg-gray-500
'
          >
            {isDarkMode ? (
              <MoonIcon className='w-6 h-6 text-yellow-500' />
            ) : (
              <SunIcon
                className='w-6 h-6 text-gray-700 dark:text-gray-300 
'
              />
            )}
            <div className='hidden md:block'>Switch mode</div>
          </button>
        </form>
      </div>
    </div>
  )
}
