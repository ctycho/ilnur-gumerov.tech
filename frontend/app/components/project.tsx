import Link from "next/link"
import Image from "next/image"



export default function Project(props: any) {
    let link = 'https://' + props.data.link
    return (
        <>
            <li className='group relative'>
                <Link href={link} className='' target="_blank">
                    <div className={`
                    relative z-10 flex h-12 w-12 items-center justify-center 
                    rounded-full mb-4
                    bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 
                    dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0`}>
                        <Image
                        src={props.data.logo}
                        width={32}
                        height={32}
                        alt={''}/>
                    </div>
                    <h2 className={`${props.font.className} mb-2 relative z-10`}>{props.data.name}</h2>
                    <p className='font-sm relative z-10 text-md text-zinc-600 dark:text-zinc-40 mb-4'>{props.data.desc}</p>
                    <div className="relative z-10 flex items-center">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-400 group-hover:fill-teal-500"><path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" ></path></svg>
                        <span className="h-6 -mt-1 text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">{props.data.link}</span>
                    </div>
                    <div className='absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'></div>
                </Link>
            </li>
        </>
    )
}

