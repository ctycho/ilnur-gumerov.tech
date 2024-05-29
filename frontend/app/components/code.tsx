import Link from "next/link"
import localFont from 'next/font/local'

const font = localFont({ src: '../assets/fonts/Helvetica/helvetica_bold.otf' })


export default function Code(props: any) {

    return (
        <>
            <div className='p-4 leading-10 text-gray-900 dark:text-slate-200 bg-gray-200 dark:bg-gray-600 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm'>
                {props.children}
            </div>
        </>
    )
}

{/* <div class="code-block_wrapper__t6FCO code-block_hasFileName__ezlBD code-block_hideLineNumbers__52YKH not-prose"><div class="code-block_header__t3NRd">
        <div class="code-block_fileName__HmSv1"><div aria-hidden="true" class="code-block_iconWrapper__TuHFk">
            <svg class="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" style="color:currentColor;width:16px;height:16px"><path d="M4 17l6-6-6-6"></path><path d="M12 19h8"></path></svg>
        </div>
        <span class="code-block_filenameP__02nok">Terminal</span>
    </div>
    <div class="code-block_actions__yphRf">
        <button aria-label="Copy code" class="code-block_copyButton__uo5Yu" type="button">
            <svg class="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" aria-hidden="true" style="color:currentColor;width:20px;height:20px"><path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path></svg><svg class="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" aria-hidden="true" style="color:currentColor;width:20px;height:20px"><path d="M20 6L9 17l-5-5"></path></svg>
        </button>
    </div>
</div>
<pre class="code-block_pre___OLfy"><code class="code-block_code__isn_V">
<span class="line"><span style="color:var(--shiki-color-text)">npm </span><span style="color:var(--shiki-token-string)">i</span><span style="color:var(--shiki-color-text)"> </span><span style="color:var(--shiki-token-string)">next@canary</span></span></code></pre></div> */}

// .code-block_wrapper__t6FCO {
//     margin: 16px 0;
//     border-radius: 6px;
//     overflow: hidden;
// }

// .code-block_header__t3NRd {
//     padding: 0 12px 0 16px;
//     border-radius: 6px 6px 0 0;
//     border-bottom: 1px solid var(--ds-gray-400);
//     display: flex;
//     height: 48px;
//     align-items: center;
//     background: var(--ds-background-200);
// }

// https://nextjs.org/docs/messages/version-staleness