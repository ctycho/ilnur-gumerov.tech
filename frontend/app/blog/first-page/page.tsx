import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next";
import Header from '@/app/components/header/header'
import Footer from '@/app/components/footer/footer'
import Paragraph from '@/app/components/paragraph'
import Title from '@/app/components/title'
import Code from '@/app/components/code'
import Back from '@/app/components/back'
import Highlight from '@/app/components/highlight'
import localFont from 'next/font/local'

const helvetica = localFont({ src: '../../assets/fonts/Helvetica/helvetica_light.otf' })

export default function Blog() {

    return (
        <>
            <Header />
            <div className="px-4 sm:px-8 md:px-10 lg:px-12">
                <div className="max-w-screen-md m-auto">
                    <main className={`${helvetica.className} relative mb-20 mt-36 md:mx-6`}>
                        {/* <Back /> */}
                        <Title>My first aarticle</Title>
                        {/* <Paragraph>hello <i className="text-orange-300 font-semibold mx-10">under</i></Paragraph> */}
                        <Paragraph>Lorem ipsum dolor sit <Highlight>amet consectetur</Highlight> adipisicing elit. Dolore, distinctio. Vel provident sequi sapiente eum velit dolores labore vero? Magnam dolor vitae quas delectus, magni architecto similique veniam dolores harum.</Paragraph>
                        <Code>FROM ubuntu:latest<br/>RUN apt-get update && apt-get install -y python3 python3-pip<br/>COPY requirements.txt /app/<br/>WORKDIR /app<br/>RUN pip3 install -r requirements.txt<br/>COPY . /app<br/>CMD ["python3", "app.py"]</Code>
                        <Paragraph><Highlight>Lorem ipsum</Highlight> dolor sit amet consectetur adipisicing elit. Dolore, distinctio. Vel provident sequi sapiente eum velit dolores labore vero? Magnam dolor vitae quas delectus, magni architecto similique veniam dolores harum.</Paragraph>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, distinctio. Vel provident sequi sapiente eum velit dolores labore vero? Magnam dolor vitae quas delectus, magni architecto similique veniam dolores harum.</Paragraph>
                        <Code>docker run -p 8080:80 -v /path/on/host:/path/in/container my-image</Code>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, distinctio. Vel provident sequi sapiente eum velit dolores labore vero? Magnam dolor vitae quas delectus, magni architecto similique veniam dolores harum.</Paragraph>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, distinctio. Vel provident sequi sapiente eum velit dolores labore vero? Magnam dolor vitae quas delectus, magni architecto similique veniam dolores harum.</Paragraph>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, distinctio. Vel provident sequi sapiente eum velit dolores labore vero? Magnam dolor vitae quas delectus, magni architecto similique veniam dolores harum.</Paragraph>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, distinctio. Vel provident sequi sapiente eum velit dolores labore vero? Magnam dolor vitae quas delectus, magni architecto similique veniam dolores harum.</Paragraph>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, distinctio. Vel provident sequi sapiente eum velit dolores labore vero? Magnam dolor vitae quas delectus, magni architecto similique veniam dolores harum.</Paragraph>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, distinctio. Vel provident sequi sapiente eum velit dolores labore vero? Magnam dolor vitae quas delectus, magni architecto similique veniam dolores harum.</Paragraph>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, distinctio. Vel provident sequi sapiente eum velit dolores labore vero? Magnam dolor vitae quas delectus, magni architecto similique veniam dolores harum.</Paragraph>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}

