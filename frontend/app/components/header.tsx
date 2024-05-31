import Link from "next/link"
import ThemeSwitcher from '@/app/components/themeSwitcher'
import MobMenu from "@/app/components/mobMenu"
import Navigation from '@/app/components/navigation'
import Logo from '@/app/components/logo'

export default function Header() {

    return (
        <>
            <header className='bg-white dark:bg-zinc-900 border dark:border-slate-700 mt-4 rounded-2xl py-4 px-6 fixed top-0 left-4 right-4 z-20 shadow-lg'>
                <div className="flex justify-between items-center">
                    <div>
                        <Logo />
                    </div>
                    <div className='flex items-center gap-4 md:gap-10'>
                        <div className="hidden md:block">
                            <Navigation />
                        </div>
                        <MobMenu />
                        <ThemeSwitcher></ThemeSwitcher>
                    </div>
                </div>
            </header>
        </>
    )
}




