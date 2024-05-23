import Link from "next/link"
import { ThemeSwitcher } from '../themeSwitcher/themeSwitcher'
import Navigation from '@/app/components/navigation/navigation'
import Logo from '@/app/components/logo/logo'
import styles from './header.module.css'

export default function Header() {
    // <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/"></Link>

    // const [isOpen, setOpenedModal] = useState(false)

    // const toggleSidebar = () => {
    //     if (!isOpen) {
    //         setOpenedModal(true)
    //     } else {
    //         setOpenedModal(false)
    //     }
    // }

    return (
        <>
            <header className='bg-white dark:bg-zinc-900 border dark:border-slate-700 mt-4 rounded-2xl py-4 px-6 fixed top-0 left-4 right-4 z-20 shadow-lg'>
                <div className={`${styles.header_row}`}>
                    <div className={`${styles.header_col}`}>
                        <Logo />
                    </div>
                    <div className={`${styles.header_col} flex items-center gap-4 md:gap-10`}>
                        <div className="hidden md:block">
                            <Navigation />
                        </div>
                        <div className="md:hidden">Menu</div>
                        <ThemeSwitcher></ThemeSwitcher>
                    </div>
                </div>
            </header>
        </>
    )
}




