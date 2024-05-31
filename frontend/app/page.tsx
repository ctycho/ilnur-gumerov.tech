import Image from "next/image";
import Link from "next/link";
import styles from '@/app/assets/styles/home.module.css'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import Post from '@/app/components/homePost'
import SubscribeForm from "./components/subscribeForm";


export default async function Home() {
    let posts = {}
    try {
        const res = await fetch('http://localhost:8000/posts')
        posts = await res.json()
    } catch(e) {
        console.log('No posts')
    }

    return (
        <>
            <Header />
                <div className="px-4 sm:px-8 md:px-10 lg:px-12 mt-36">
                    <div className="max-w-screen-xl m-auto">
                        <main className='mb-20'>
                            <div className={`${styles.ceo_info} mb-12`}>
                                <h1 className='text-2xl md:text-4xl font-semibold max-w-screen-sm mb-5'>Ilnur Gumerov</h1>
                                <h3 className={`${styles.about_me} text-lg mb-4`}> {/**w-3/4 md:w-2/4  */}
                                    Welcome to my blog! Software developer with expertise in Python and JavaScript.
                                </h3>
                                <ul className="flex gap-6">
                                    <li>
                                        <Link href='https://www.linkedin.com/in/ilnur-gumerov-12225b1aa/' target="_blank">
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition hover:fill-teal-500" xmlns="http://www.w3.org/2000/svg"><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://github.com/ctycho' target="_blank" className="group">
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://x.com/ctycho_dev' target="_blank">
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition hover:fill-teal-500"><path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path></svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://medium.com/@ilnur_gumerov' target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-none fill-zinc-500 hover:fill-teal-500 transition" viewBox="0 0 50 50">
                                                <path d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"></path>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='mailto:ilnur_gumerov_1996@mail.ru' target="_blank">
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 hover:fill-teal-500 transition"><path fill-rule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path></svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={`${styles.home_body} grid lg:flex gap-2`}>
                                <div className="m-auto mb-10 w-full max-w-md lg:m-0 lg:max-w-full lg:flex-1">
                                    {posts?.map((post: any) => (
                                        <Post data={post.Post} />
                                    ))}
                                </div>
                                <SubscribeForm />
                            </div>
                        </main>
                    </div>
                </div>
            <Footer />
        </>
    );
}
