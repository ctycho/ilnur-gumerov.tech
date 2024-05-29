'use client'
import Link from "next/link"
import Router from 'next/router'


export default function Highlight(props: any) {

    return (
        <>
            <span className="pb-1 px-2 text-gray-900 dark:text-slate-200 bg-gray-200 dark:bg-gray-600 border border-gray-300 dark:border-gray-700 rounded text-sm">
                {props.children}
            </span>
        </>
    )
}

