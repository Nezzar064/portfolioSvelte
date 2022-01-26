<script>
      import { scrollRef } from 'svelte-scrolling'
</script>

<section use:scrollRef={'about'} class="bg-gradient-to-r from-gray-600 to-gray-800">
<div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16"
>
    <div class="py-16 px-4 max-w-screen-sm sm:text-left sm:mx-auto">
            <img alt="profil" src="/images/me.jpg" class="mx-auto object-cover rounded-full h-20 w-20 "/>
            <br>
            <br>
        <h2
            class="mb-4 text-center title-font text-4xl font-extrabold leading-10 tracking-tight text-gray-300 sm:text-5xl sm:leading-none md:text-5xl"
        >
            About me
        </h2>
        <br>
        <p class="text-base text-gray-200 md:text-lg sm:px-4">
            Computer Science student from Denmark. I see myself as a backend developer, as that is what I get the most pleasure out of. Especially in Spring Boot (Java).
            <br>
            <br>
            However I have recently been getting into the front-end world, other than HTML and CSS which I already know, starting out with JavaScript and Svelte. My goal is to get comfortable with both front-end and back-end, with back-end as the main focus.
            <br>
            <br>
            Outside of programming I enjoy gaming quite a bit, the outdoors and lifting heavy stuff in the gym, the latter I have been doing for around 7-8 years now.
        </p>
        <hr class="w-full my-8 border-gray-300" />
    </div>
</div>
</section>
