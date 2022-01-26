<script>
    import { scrollTop } from "svelte-scrolling";

</script>
<section>
<div class="container items-center mx-auto px-6 ">
    <footer
        class="text-gray-300 transition duration-500 ease-in-out transform bg-white"
    >
        <div class="flex flex-col flex-wrap justify-center p-5 md:flex-row">
            <span class="py-6 inline-flex justify-center w-full mx-auto mt-2 mr-2 sm:ml-auto sm:mt-0">
                <button class="mx-auto bg-grey-500 hover:bg-grey-200 text-white font-bold py-2 px-4 rounded-full" on:click={() => scrollTop()}>Go to top</button>
            </span>
            <span
                class="inline-flex justify-center w-full mx-auto mt-2 mr-2 sm:ml-auto sm:mt-0"
            >
                <a
                    class="text-blue-500 hover:text-black"
                    href="http://www.github.com/nezzar064"
                >
                    <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                    </svg>
                </a>
                <a class="ml-3 text-blue-500 hover:text-black" href="https://www.instagram.com/mathias_sn/">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                        />
                        <path
                            d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                        />
                    </svg>
                </a>
                <a class="ml-3 text-blue-500 hover:text-black" href="https://www.linkedin.com/in/mathias-sondergaard-nielsen-4766a0107">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        
                        <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        />
                    </svg>
                </a>
            </span>
        </div>
        <div class="w-full px-8 mt-4 rounded-b-lg ">
            <div
                class="container inline-flex flex-col flex-wrap items-center px-5 py-6 mx-auto sm:flex-row"
            >
                <p class="mx-auto text-sm text-center text-black sm:text-left ">
                    <span>
                        <a
                        class="text-blue-500 hover:text-black"
                        href="https://github.com/Nezzar064/portfolioSvelte"
                    >Repository for this Portfolio</a>
                    </span>
                    © 2021
                </p>
            </div>
        </div>
    </footer>
</div>
</section>