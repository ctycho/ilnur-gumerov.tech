import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import Project from '@/app/components/project';
import qualySmileLogo from '@/app/assets/img/qualySmileLogo.svg'
import localFont from 'next/font/local'

const helvetica = localFont({ src: '../assets/fonts/Helvetica/helvetica_light.otf' })
const bold = localFont({ src: '../assets/fonts/Helvetica/helvetica_bold.otf' })

export const metadata: Metadata = {
    title: "Projects - Ilnur Gumerov",
    description: "Project's that I completed or currently working on",
};

<link rel="icon" href="/logoW.svg"></link>

const ProjectsPage = () => {
    return (
        <>
            <Header />
            <div className="px-4 sm:px-8 md:px-10 lg:px-12">
                <div className="max-w-screen-xl m-auto">
                    <main className='mb-20 mt-36'>
                        <h1 className='text-2xl md:text-4xl font-semibold max-w-screen-sm mb-4'>Things I've made</h1>
                        <h3 className='max-w-screen-md text-zinc-600 dark:text-zinc-400 mb-16'>I don't have many projects that I've launched so far, but there are plenty of pet projects on my Github.Most are built during evenings and weekends.</h3>
                        <div className={`${helvetica.className}`}>
                            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 sm:gap-y-16 max-w-5xl'>
                                <Project logo={qualySmileLogo} font={bold} />
                            </ul>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProjectsPage

