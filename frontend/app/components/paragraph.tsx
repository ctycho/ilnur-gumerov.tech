import Link from "next/link"

export default function Paragraph(props: any) {

    return (
        <>
            <p className='mb-6 text-lg'>
                {props.children}
            </p>
        </>
    )
}

