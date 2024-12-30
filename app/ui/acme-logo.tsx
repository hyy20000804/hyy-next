import { GlobeAltIcon } from '@heroicons/react/24/outline'
import Logo from '@/app/assets/logo.png'
import LogoWhite from '@/app/assets/logoWhite.png'

import { lusitana } from '@/app/ui/fonts'
import Image from 'next/image'

export default function LogoImg () {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src={localStorage.getItem('theme') == 'dark' ? Logo : LogoWhite}
        alt='Acme Logo'
        className='h-12 w-12 rotate-[15deg]'
      ></Image>
    </div>
  )
}
