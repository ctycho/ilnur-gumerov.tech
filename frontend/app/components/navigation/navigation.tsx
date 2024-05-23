'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <>
            <nav className='mb-4 flex justify-center md:block md:m-0'>
                <ul className='flex gap-10'>
                    <li className='group'>
                        <Link href='/about' className={`${pathname == '/about' ? 'text-teal-500' : ''} text-lg`}>
                            <span>about</span>
                            <div className='h-px bg-teal-500 w-0 transition-[width] group-hover:w-full'></div>
                        </Link>
                    </li>
                    <li className='group'>
                        <Link href='/blog' className={`${pathname == '/blog' ? 'text-teal-500' : ''} text-lg`}>
                            <span>blog</span>
                            <div className='h-px bg-teal-500 w-0 transition-[width] group-hover:w-full'></div>
                        </Link>
                    </li>
                    <li className='group'>
                        <Link href='/projects' className={`${pathname == '/projects' ? 'text-teal-500' : ''} text-lg`}>
                            <span>projects</span>
                            <div className='h-px bg-teal-500 w-0 transition-[width] group-hover:w-full'></div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}




