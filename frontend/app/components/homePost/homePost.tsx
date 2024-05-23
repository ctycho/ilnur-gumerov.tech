import styles from './homePost.module.css'
import Image from "next/image";
// import cleanHTML from '../cleanHTML/cleanHTML'



export default function homePost(props: any) {
    // console.log(cleanHTML(data.content))
    return (
        <article key={props.data.id} className={`${styles.article} relative isolate flex flex-col lg:flex-row gap-6 mb-6 last:mb-0`}>
            <div>
                {props.data.image ? 
                    ''
                    // <Image
                    //     width={160}
                    //     height={160}
                    //     ref={}/>
                    :
                    <div className={`${styles.image_empty} w-max-6xl lg:w-40 h-60 lg:h-40 rounded-2xl bg-gray-50 dark:bg-slate-700 object-cover ring-inset ring-gray-900/10 ring-1`}>

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
            {/* <div dangerouslySetInnerHTML={{ __html: <cleanHTML data={data.content} }} /> */}
        </article>
    )
}




