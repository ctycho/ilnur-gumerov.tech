import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next";
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import Paragraph from '@/app/components/paragraph'
import Title from '@/app/components/title'
import Code from '@/app/components/code'
import Back from '@/app/components/back'
import Bold from "@/app/components/bold";
import Highlight from '@/app/components/highlight'
import localFont from 'next/font/local'
import UlCustom from "@/app/components/ulCustom";

const helvetica = localFont({ src: '../../assets/fonts/Helvetica/helvetica_light.otf' })
// const helvetica = localFont({ src: '../../assets/fonts/Helvetica/helvetica_light.otf' })

export default function Blog() {

    return (
        <>
            <Header />
            <div className="px-4 sm:px-8 md:px-10 lg:px-12">
                <div className="max-w-screen-md m-auto">
                    <main className={`${helvetica.className} relative mb-20 mt-36 md:mx-6`}>
                        {/* <Back /> */}
                        <Title>How to Deploy a Next.js Application on a Linux VPS using Nginx, PM2, Git</Title>
                        <Paragraph>Deploying a Next.js application to a Virtual Private Server (VPS) on Linux using Nginx can seem difficult, but it’s quite straightforward with the right steps. This guide will take you through the process from start to finish, ensuring your application is up and running smoothly.</Paragraph>
                        <Bold>Prerequisites</Bold>
                        <Paragraph>Before we begin, make sure you have the following:</Paragraph>
                        
                        <UlCustom items={[
                            'VPS running a Linux distribution',
                            'Root or sudo access to the VPS',
                            'Domain name pointing to your VPS’s IP address (A-record)',
                            'Basic knowledge of the terminal'
                        ]}></UlCustom>
                        <Bold>First, we need to access the VPS via SSH</Bold>
                        <Code>ssh root@your_vps_ip</Code>
                        <Bold>Then ensure that your system is up-to-date</Bold>
                        <Code>
                        sudo apt update<br />
                        sudo apt upgrade -y
                        </Code>
                        <Bold>Install nginx</Bold>
                        <Code>sudo apt-get install nginx</Code>
                        <Bold>Next we will need NPM package manager</Bold>
                        <Code>sudo apt install npm nodejs</Code>
                        <Bold>You can verify installation</Bold>
                        <Code>node -v<br />npm -v</Code>
                        <Paragraph>It looks like we have everything we need. The next step will be cloning our repository.</Paragraph>
                        <Bold>Clone Your Application</Bold>
                        <Code>git clone https://github.com/yourusername/your-nextjs-app.git<br/>cd your-nextjs-app</Code>
                        <Bold>Install Dependencies</Bold>
                        <Code>npm install</Code>
                        <Bold>Build your application for production</Bold>
                        <Code>npm run build</Code>
                        <Paragraph>Doing good so far. Next we will PM2 installed. It is a daemon process manager that will help you manage and keep your application online 24/7</Paragraph>
                        <Code>npm install pm2 -g</Code>
                        <Paragraph>Start your app with PM2 by running the following command</Paragraph>
                        <Code>pm2 start npm --name "your-app-name" -- start </Code>
                        <Paragraph>PM2 will automatically restart your app if there are any crashes. For more detailed information, you can refer to the official documentation.</Paragraph>
                        <Paragraph>Now we need to setup nginx, it may look confusing for the first time, but it’s actually quite simple.</Paragraph>
                        <Bold>Create nginx config for your app</Bold>
                        <Code>sudo nano /etc/nginx/sites-available/your-app-name.com</Code>
                        <Paragraph>Then simply paste this config to newly created file</Paragraph>
                        <Code>
                        {`server {`}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{`listen 80;`}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{`server_name your-domain-name.com www.your-domain-name.com;`}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{`location / {`}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`proxy_pass http://localhost:3000;`}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`proxy_set_header Host $host;`}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`proxy_set_header X-Real-IP $remote_addr;`}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
                        {`}`}
                        </Code>
                        <Paragraph>Don’t forget to replace with your actual domain name.</Paragraph>
                        <Paragraph>Enable the new configuration by creating a symbolic link to <Highlight>sites-enabled:</Highlight></Paragraph>
                        <Code>sudo ln -s /etc/nginx/sites-available/your-app-name.com /etc/nginx/sites-enabled/</Code>
                        <Paragraph>Test the Nginx configuration for syntax errors:</Paragraph>
                        <Code>sudo nginx -t</Code>
                        <Paragraph>Restart nginx server by running the following command</Paragraph>
                        <Code>sudo systemctl restart nginx</Code>
                        <Paragraph>Now you are good to go. If any errors occur, you can check your A record in the domain settings to ensure it’s pointing to this server.</Paragraph>
                        <Bold>Making changes</Bold>
                        <Paragraph>To update changes pushed to Git, you can simply follow the command provided below, and your application will be updated. Navigate to your app path and run the following:</Paragraph>
                        <Code>git pull</Code>
                        <Paragraph>Rebuild your application</Paragraph>
                        <Code>npm run build</Code>
                        <Paragraph>Finally restart your process manager</Paragraph>
                        <Code>pm2 restart your-app-name</Code>
                        <Paragraph>That’s all for today. You have successfully deployed your Next.js application on a Linux VPS using Nginx. Your application should now be accessible via your domain name. To make it more secure, you should create an SSL certificate, but that’s a task for another day. Keep your application and server up to date, and monitor them regularly to ensure everything runs smoothly.
You can also refer to my personal blog, where I write about programming. I used the same steps to deploy that website.</Paragraph>


                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}

