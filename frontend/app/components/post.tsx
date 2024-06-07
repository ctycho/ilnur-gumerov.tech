import Link from "next/link"
import Image from "next/image"
// import picture from '@/app/assets/img/1_qgYBZVCpVaQa9DsThIWmbQ.gif'



export default function Post(props: any) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const date = new Date(props.created_at)
    const displayDate = `${monthNames[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`

    return (
        <>
            <article className={`
                -mx-4 dark:mx-0 md:mx-0 max-w-screen-md 
                bg-white dark:bg-transparent 
                dark:border-b dark:border-white sm:rounded-lg dark:rounded-none
                px-4 py-4 md:px-6 dark:px-0 mb-4 last:mb-0`}>
                <Link href={props.url} className="flex">
                    <div className="flex-1">
                        <time className="text-zinc-600 dark:text-zinc-400 font-normal text-sm">{displayDate}</time>
                        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 hidden sm:block">{props.subtitle}</p>
                    </div>
                    <div className="ml-4 md:ml-20 lg:ml-32 flex items-center">
                        <Image
                        src={props.image}
                        width={112}
                        height={112}
                        alt={''}
                        className="w-24 h-24 object-cover rounded"/>
                    </div>
                </Link>
            </article>
        </>
    )
}



