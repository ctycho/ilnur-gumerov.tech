import localFont from 'next/font/local'

const font = localFont({ src: '../assets/fonts/Helvetica/helvetica_bold.otf' })

export default function Bold(props: any) {

    return (
        <>
            <div className={font.className}>
                <div className='font-semibold text-lg mb-6'>
                    {props.children}
                </div>
            </div>
        </>
    )
}