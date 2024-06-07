'use client'
import Link from "next/link"
import Router from 'next/router'


export default function UlCustom(props: any) {

    return (
        <>
            <ul className="mb-6">
                {props.items.map((item: any) => {
                    return <li className="ml-4 mb-2">&#x2022;&nbsp;&nbsp;{item}</li>
                })}
            </ul>
        </>
    )
}

