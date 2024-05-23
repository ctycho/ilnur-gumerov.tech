import Image from "next/image";
import styles from './subscribeForm.module.css'
import mail from '@/app/assets/img/mail.svg'



export default function subscribeForm() {

    return (
        <form className='max-w-[400px] border rounded-2xl p-6 border-white dark:border-slate-700 h-max m-auto lg:m-0 bg-white dark:bg-transparent'>
            <h2 className="flex mb-4">
                {/* <Image 
                                            src={mail}
                                            alt="Subscribe" 
                                            width={24}
                                            height={24} /> */}
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 flex-none"><path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path><path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" className="stroke-zinc-400 dark:stroke-zinc-500"></path></svg>
                <span className="font-normal ml-3">Stay up to date</span>
            </h2>
            <div className="text-sm text-zinc-600 mb-4">
                Get notified when I publish something new, and unsubscribe at any time.
            </div>
            <div className="flex gap-x-4">
                <input type="text" placeholder="Email address"
                    className="dark:bg-transparent p-2 flex-1 rounded-md border-zinc-100 dark:border-slate-700 border shadow-zinc-800 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500" />
                <button className="p-2 bg-zinc-800 dark:bg-transparent border dark:border-slate-700 text-zinc-100 rounded-md">Join</button>
            </div>
        </form>
    )
}

