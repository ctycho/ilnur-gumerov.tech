import Link from "next/link"
import localFont from '@next/font/local'

const font = localFont({ src: '../assets/fonts/Helvetica/helvetica_bold.otf' })


export default function Tip(props: any) {

    return (
        <>
            <div className=''>
                {props.children}
            </div>
        </>
    )
}

