import React from 'react'
import type { Metadata } from "next";
import Header from '@/app/components/header/header'
import Footer from '@/app/components/footer/footer'
import Post from '@/app/components/post/post';
import localFont from '@next/font/local'

const helvetica = localFont({ src: '../assets/fonts/Helvetica/helvetica_light.otf' })


export const metadata: Metadata = {
    title: "Ilnur Gumerov",
    description: "My posts in tech",
};

const BlogPage = () => {
    const items = [
    {
        created_at: '2024-02-12',
        title: 'First content',
        url: 'blog/first-page',
        subtitle: 'In Stack Choices, we take a closer look at some technologies that can help us to build great applications and try to make a good decision on what to use. Let’s take a look at going with plain old JavaScript or the rising star: TypeScript.'
    },
    {
        created_at: '2024-04-01',
        title: 'post about working with next.js pros and cons',
        url: '/first-page',
        subtitle: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
    },
    {
        created_at: '2024-05-22',
        title: 'third content',
        url: '/first-page',
        subtitle: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lore Lorem Lorem Lorem Lorem Lorem Lorem Lore Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
    },
    ]
    return (
        <>
            <Header />
            <div className="px-4 sm:px-8 md:px-10 lg:px-12">
                <div className="max-w-screen-xl m-auto">
                    <main className='mb-20 mt-36'>
                        <h1 className='text-2xl md:text-4xl font-semibold max-w-screen-sm mb-4'>Writing on software development and creating web3</h1>
                        <h3 className='max-w-screen-md text-zinc-600 dark:text-zinc-400 mb-10'>All of my long-form thoughts on programming, product development, building in Web3, NFTs, and more.</h3>
                        <div className={helvetica.className}>
                            {items?.map((item: any) => (
                                <Post created_at={item.created_at} title={item.title} url={item.url} subtitle={item.subtitle} />
                            ))}
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlogPage