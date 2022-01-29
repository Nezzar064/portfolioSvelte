<script>
    import {scrollTo} from "svelte-scrolling";

    // Burger menus
    document.addEventListener('DOMContentLoaded', function () {
        // open
        const burger = document.querySelectorAll('.navbar-burger');
        const menu = document.querySelectorAll('.navbar-menu');

        if (burger.length && menu.length) {
            for (let i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', function () {
                    for (let j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        // close
        const close = document.querySelectorAll('.navbar-close');
        const backdrop = document.querySelectorAll('.navbar-backdrop');

        if (close.length) {
            for (let i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function () {
                    for (let j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        if (backdrop.length) {
            for (let i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', function () {
                    for (let j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }
    });
</script>
<header class="sticky top-0 z-50">
    <nav class="relative h-16 px-4 py-8 flex justify-between items-center bg-base-content rounded-box">
        <div class="lg:hidden">
            <button class="navbar-burger rounded-box flex items-center text-blue-600 p-3">
                <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
                <h1 class="inline-block"> &nbsp;Menu</h1>
            </button>
        </div>
        <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li><a class="text-sm text-gray-200 hover:text-gray-500" use:scrollTo={"home"} href="#">Home</a></li>
            <li class="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill"
                     viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                </svg>
            </li>
            <li><a class="text-sm text-gray-200 hover:text-gray-500" use:scrollTo={"about"} href="#">About Me</a></li>
            <li class="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill"
                     viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                </svg>
            </li>
            <li><a class="text-sm text-gray-200 hover:text-gray-500" use:scrollTo={"experience"} href="#">Experience</a></li>
            <li class="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill"
                     viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                </svg>
            </li>
            <li><a class="text-sm text-gray-200 hover:text-gray-500" use:scrollTo={"projects"} href="#">Projects</a></li>

        </ul>

    </nav>
    <div class="navbar-menu relative z-50 hidden">
        <div class="navbar-backdrop fixed inset-0 bg-base-content opacity-75"></div>
        <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div class="flex items-center mb-8">
                <a class="mr-auto text-3xl font-bold leading-none" href="#">
                </a>
                <button class="navbar-close">
                    <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div>
                <ul>
                    <li class="mb-1">
                        <a class="block p-4 text-sm font-semibold text-gray-200 hover:bg-blue-50 hover:text-blue-600 rounded"
                           href="#" use:scrollTo={"home"}>Home</a>
                    </li>
                    <li class="mb-1">
                        <a class="block p-4 text-sm font-semibold text-gray-200 hover:bg-blue-50 hover:text-blue-600 rounded"
                           href="#" use:scrollTo={"about"} >About Me</a>
                    </li>
                    <li class="mb-1">
                        <a class="block p-4 text-sm font-semibold text-gray-200 hover:bg-blue-50 hover:text-blue-600 rounded"
                           href="#" use:scrollTo={"experience"}>Experience</a>
                    </li>
                    <li class="mb-1">
                        <a class="block p-4 text-sm font-semibold text-gray-200 hover:bg-blue-50 hover:text-blue-600 rounded"
                           href="#" use:scrollTo={"projects"}>Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    </header>



