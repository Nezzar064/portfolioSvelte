<script>
    import { scrollRef } from 'svelte-scrolling'
</script>

<section use:scrollRef={'home'} class="">
    <div class="flex items-center w-full px-4 py-10 bg-cover card ">
        <div class="container px-6 py-36 mx-auto text-center">
            <div class="max-w-lg mx-auto">
                <h1
                        class="title-font text-neutral mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-5xl"
                >
                    Welcome to my Portfolio
                </h1>
                <br>
                <p class="mt-6 text-neutral">
                    Built using Svelte.js and DaisyUI
                </p>

            </div>
        </div>
    </div>
</section>


