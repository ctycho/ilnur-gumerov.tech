import Image from "next/image";
import Link from "next/link";



export default function homePost(props: any) {
    // console.log(cleanHTML(data.content))
    return (
        <article key={props.data.id} className={`relative isolate mb-6 last:mb-0`}>
            <Link href={props.data.url} className="flex flex-col lg:flex-row gap-6">
                <div>
                    {props.data.image ? 
                        <Image
                            src={props.data.image}
                            width={160}
                            height={160}
                            alt="Post image"
                            className="w-[160px] h-[130px] object-cover rounded-md"
                        />
                        :
                        <div className={`w-max-6xl lg:w-40 h-[130px] lg:h-40 rounded-2xl bg-gray-50 dark:bg-slate-700 object-cover ring-inset ring-gray-900/10 ring-1`}>

                        </div>
                    }
                </div>
                <div>
                    <div className="text-sm mb-4">
                        <time className="text-gray-500 dark:text-gray-400">{props.data.created_at.split('T')[0]}</time>
                    </div>
                    <div className='hover:cursor-pointer'>
                        <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-white dark:hover:text-gray-400 mb-2'>{props.data.title}</h3>
                        <div className='text-sm leading-6 text-gray-600 dark:text-gray-400 line-clamp-2 mt-3'>{props.data.short_description}</div>
                    </div>
                </div>
            </Link>
        </article>
    )
}




