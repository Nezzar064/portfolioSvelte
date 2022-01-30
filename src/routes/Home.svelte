<script>
    import { scrollRef } from 'svelte-scrolling'
</script>

<section use:scrollRef={'home'} class="pt-12">
    <div class="flex items-center w-full py-44 bg-cover card ">
        <div class="container mx-auto pb-12 text-center">
            <div class="max-w-lg mx-auto">
                <h1
                        class="title-font text-neutral mb-4 text-5xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-5xl"
                >
                    Hello,
                    <br>
                    <br>
                </h1>
                <h3 class="title-font text-neutral mb-4 text-3xl font-bold leading-10 tracking-tight sm:text-3xl sm:leading-none md:text-3xl">
                    I am Mathias Søndergaard Nielsen,
                   <br>
                    Backend Developer from Copenhagen, Denmark
                </h3>
                <br>
            </div>
        </div>
    </div>
</section>

