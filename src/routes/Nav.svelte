<script>
    import { scrollTo } from "svelte-scrolling";
</script>
<header class="sticky top-0 z-50">
<nav class="shadow bg-gradient-to-r from-gray-700 to-gray-800">
    <div
        class="container flex items-center justify-center p-6 mx-auto text-white capitalize"
    >
            <!-- svelte-ignore a11y-missing-attribute -->
        <a
            use:scrollTo={"home"}
            class="text-white hover:text-white mx-1.5 sm:mx-6">Home</a
        >
        <!-- svelte-ignore a11y-missing-attribute -->

        <a
            use:scrollTo={"about"}
            class="hover:text-white hover:border-white mx-1.5 sm:mx-6"
            >About me</a
        >
        <!-- svelte-ignore a11y-missing-attribute -->

        <a
            use:scrollTo={"projects"}
            class="hover:text-white hover:border-blue-500 mx-1.5 sm:mx-6"
            >Projects & Experience</a
        >
    </div>
</nav>
</header>
