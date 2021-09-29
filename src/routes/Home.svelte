<script>
    import { scrollRef } from 'svelte-scrolling'
</script>

<section use:scrollRef={'home'} class="bg-gradient-to-r from-gray-800 to-gray-700 bg-blend-normal">
    <div class="container px-6 py-36 mx-auto text-center">
        <div class="max-w-lg mx-auto">
            <h1
                class="title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl"
            >
                Welcome to my Portfolio
            </h1>
            <br>
            <p class="mt-6 text-gray-200">
                Built using Svelte.js and Tailwind CSS
            </p>
            
        </div>
    </div>
</section>
