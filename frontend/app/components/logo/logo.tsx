'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Logo() {
    const pathname = usePathname()
    return (
        <div className={`${pathname == '/' ? 'text-teal-500' : ''} text-lg font-semibold`}>
            <Link href='/'>Ilnur Gumerov</Link>
        </div>
    )
}




