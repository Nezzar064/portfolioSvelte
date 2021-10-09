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
            class="mb-4 text-center font-sans text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl sm:leading-none"
        >
            About me
        </h2>
        <br>
        <p class="text-base text-gray-200 md:text-lg sm:px-4">
            Computer Science student from Denmark. I would put myself as a backend-developer by nature, as that is where I find the most pleasure programming, especially in Java Spring Boot.
            <br>
            <br>
            However I have recently been getting into the front-end world, other than HTML and CSS which I already know, starting out with JavaScript and Svelte. 
            <br>
            <br>
            Outside of programming I enjoy gaming quite a bit, the outdoors and lifting heavy stuff in the gym, which I have been doing for around 7-8 years now.
        </p>
        <hr class="w-full my-8 border-gray-300" />
    </div>
</div>
</section>
