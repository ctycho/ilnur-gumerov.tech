import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";
import Header from '@/app/components/header/header'
import Footer from '@/app/components/footer/footer'
import photo from '@/app/assets/img/photo.jpg'
// import linkedin from '@/app/assets/img/linkedin.svg'
// import github from '@/app/assets/img/github.svg'
// import mail from '@/app/assets/img/mail_black.svg'
// font-family: neue machina, sans-serif;

export const metadata: Metadata = {
    title: "Ilnur Gumerov",
    description: "My professional experience",
};

export default function AboutPage() {

    return (
        <>
            <Header />
            <div className="px-4 sm:px-8 md:px-10 lg:px-12">
                <div className="max-w-screen-xl m-auto">
                    <main className='mb-20 mt-36'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='justify-center mb-10 flex md:hidden'>
                                <Image 
                                    src={photo}
                                    width={300}
                                    height={100}
                                    alt={'its me'}
                                    className='rounded-lg rotate-2'/>
                            </div>
                            <div className='mb-6 mb:m-0'>
                                <h2 className='text-2xl md:text-4xl font-semibold max-w-screen-sm mb-6'>Building cool stuff on the internet.</h2>
                                <div className='text-lg'>I'm passionate about building software with great user experiences. Currently, I'm working on Universal Page - the leading platform for the next generation of NFTs.

                                    I have worked for several companies and have also launched multiple products on my own. While some of them did not gain much success, others managed to gain traction. Two of my projects have been acquired, namely:
                                    1. Serverless SaaS - a Premium SaaS boilerplate and
                                    2. TeamSmart AI - an chrome extension for AI assistants.
                                    Before becoming a software engineer I played basketball at the highest level in The Netherlands at ZZ Leiden and basketball is still a huge passion of mine.

                                    From time to time, I enjoy writing articles and sharing my knowledge. On this site, you can find my blog posts, tutorials, and updates about projects I'm working on. Subscribe to get notified whenever I launch something new. I only send out emails very occasionally.</div>
                            </div>
                            <div className=''>
                                <div className='justify-end mb-16 md:flex hidden'>
                                    <Image 
                                        src={photo}
                                        width={300}
                                        height={100}
                                        alt={'its me'}
                                        className='rounded-lg rotate-6'/>
                                </div>
                                <div className='grid justify-center md:justify-end'>
                                    <ul>
                                        <li className='mb-4'>
                                            <Link href={''} target="_blank" className='group flex items-center gap-4'>
                                                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" xmlns="http://www.w3.org/2000/svg"><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg>
                                                <span className='group-hover:text-teal-500'>Follow on LinkedIn</span>
                                            </Link>
                                        </li>
                                        <li className='mb-4'>
                                            <Link href={''} target="_blank" className='group flex items-center gap-4'>
                                                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg>
                                                <span className='group-hover:text-teal-500'>Follow on GitHub</span>
                                            </Link>
                                        </li>
                                        <li className='mb-4'>
                                            <Link href={''} target="_blank" className='group flex items-center gap-4'>
                                                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"><path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path></svg>
                                                <span className='group-hover:text-teal-500'>Follow on X</span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className='border border-slate-700 mb-4'></div>
                                    <Link href={''} target="_blank" className='group flex items-center gap-4'>
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 hover:fill-teal-500 transition group-hover:fill-teal-500"><path fill-rule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path></svg>
                                        <span className='group-hover:text-teal-500'>ilnur_gumerov_1996@mail.ru</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}
// https://twitter.com/ctycho_dev

// <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg>
// <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg>
// <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"><path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path></svg>
// <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"><path fill-rule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path></svg>