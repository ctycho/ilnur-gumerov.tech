import Navigation from '@/app/components/navigation/navigation'

import styles from './footer.module.css'


export default function Footer() {
    const date = new Date()
    return (
        <>
            <footer className="border-t border-white dark:border-slate-700 text-black dark:dark:text-zinc-200 px-4 sm:px-8 md:px-10 lg:px-12 mt-20 md:mt-32">
                <div className="max-w-screen-xl m-auto">
                    <div className='py-8'>
                        <div className='block md:flex justify-between items-center'>
                            <Navigation />
                            <div className="text-zinc-600 dark:text-zinc-400  text-center">
                                &#169;{date.getFullYear()} Ilnur Gumerov. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}