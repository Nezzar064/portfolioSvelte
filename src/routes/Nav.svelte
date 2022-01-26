<script>
    import { scrollTo } from "svelte-scrolling";
</script>
<header class="sticky top-0 z-50">
    <nav class="shadow-lg bg-base-content text-neutral-content rounded-box">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-7">
                    <!-- Primary Navbar items -->
                    <div class="hidden md:flex items-center space-x-1">
                        <a href="" use:scrollTo={"home"} class="py-4 px-2 text-base font-semibold hover:text-green-500 transition duration-300">Home</a>
                        <a href="" use:scrollTo={"about"} class="py-4 px-2 text-base font-semibold hover:text-green-500 transition duration-300">Services</a>
                        <a href="" use:scrollTo={"projects"} class="py-4 px-2 text-base font-semibold hover:text-green-500 transition duration-300">About</a>
                        <a href="" class="py-4 px-2 text-base font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
                    </div>
                </div>
                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button class="outline-none mobile-menu-button">
                        <svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                             x-show="!showMenu"
                             fill="none"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             stroke-width="2"
                             viewBox="0 0 24 24"
                             stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- mobile menu -->
        <div class="hidden mobile-menu">
            <ul class="">
                <li class="active"><a href="" use:scrollTo={"home"} class="py-4 px-2 text-base font-semibold hover:text-green-500 transition duration-300">Home</a></li>
                <li><a href="" use:scrollTo={"about"} class="py-4 px-2 text-base font-semibold hover:text-green-500 transition duration-300">Services</a></li>
                <li><a href="" use:scrollTo={"projects"} class="py-4 px-2 text-base font-semibold hover:text-green-500 transition duration-300">About</a></li>
                <li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
            </ul>
        </div>
        <script>
            const btn = document.querySelector("button.mobile-menu-button");
            const menu = document.querySelector(".mobile-menu");

            btn.addEventListener("click", () => {
                menu.classList.toggle("hidden");
            });
        </script>
    </nav>

</header>


