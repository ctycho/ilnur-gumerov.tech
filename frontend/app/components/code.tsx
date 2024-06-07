import Link from "next/link"
import localFont from 'next/font/local'

const font = localFont({ src: '../assets/fonts/Helvetica/helvetica_bold.otf' })


export default function Code(props: any) {

    return (
        <>
            <div className='p-4 leading-6 text-gray-900 dark:text-slate-200 bg-gray-200 dark:bg-gray-600 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm'>
                {props.children}
            </div>
        </>
    )
}
