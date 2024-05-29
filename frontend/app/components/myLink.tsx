import Link from "next/link"
import localFont from '@next/font/local'

const font = localFont({ src: '../assets/fonts/Helvetica/helvetica_bold.otf' })


export default function Title(props: any) {

    return (
        <>
            <div className={font.className}>
                <h1 className='text-5xl font-bold mb-12'>{props.children}</h1>
            </div>
        </>
    )
}

