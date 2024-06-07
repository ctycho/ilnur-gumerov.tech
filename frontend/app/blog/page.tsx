import React from 'react'
import type { Metadata } from "next";
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import Post from '@/app/components/post';
import localFont from 'next/font/local'
import posts from '@/app/data/post'


const helvetica = localFont({ src: '../assets/fonts/Helvetica/helvetica_light.otf' })


export const metadata: Metadata = {
    title: "Blog - Ilnur Gumerov",
    description: "My posts in tech",
};

const BlogPage = () => {
    return (
        <>
            <Header />
            <div className="px-4 sm:px-8 md:px-10 lg:px-12">
                <div className="max-w-screen-xl m-auto">
                    <main className='mb-20 mt-36'>
                        <h1 className='text-2xl md:text-4xl font-semibold max-w-screen-sm mb-4'>Writing on software development and creating web3</h1>
                        <h3 className='max-w-screen-md text-zinc-600 dark:text-zinc-400 mb-10'>All of my long-form thoughts on programming, product development, building in Web3, NFTs, and more.</h3>
                        <div className={helvetica.className}>
                            {posts?.map((item: any) => (
                                <Post created_at={item.created_at} title={item.title} url={item.url} subtitle={item.subtitle} image={item.image} />
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