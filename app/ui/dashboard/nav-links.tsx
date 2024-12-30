'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline'

import Link from 'next/link' // 让切换导航的时候不在刷新整个页面

import { usePathname } from 'next/navigation' // 导入钩子

import clsx from 'clsx' // 可以给导航条加入选中效果

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/home', icon: HomeIcon },
  {
    name: 'Hyy-test1',
    href: '/hyy-test1',
    icon: DocumentDuplicateIcon
  },
  { name: 'Hyy-test2', href: '/hyy-test2', icon: UserGroupIcon }
]

export default function NavLinks () {
  const pathname = usePathname()

  return (
    <>
      {links.map(link => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 dark:bg-gray-500',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
                'hover:bg-gray-700 dark:hover:bg-slate-800': true // 确保在暗黑模式下悬停时背景颜色
              }
            )}
          >
            <LinkIcon className='w-6' />
            <p className='hidden md:block'>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
