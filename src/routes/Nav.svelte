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

<style>
    @import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap');
    body {
        font-family: 'Poppins', sans-serif;
    }
    .hover\:w-full:hover {
        width: 100%;
    }
    .group:hover .group-hover\:w-full {
        width: 100%;
    }
    .group:hover .group-hover\:inline-block {
        display: inline-block;
    }
    .group:hover .group-hover\:flex-grow {
        flex-grow: 1;
    }
</style>

<header class="sticky top-0 z-50 lg:mx-72">
        <div class="w-full max-w-md mx-auto flex items-center justify-center px-5 pt-2 ">

            <div class="px-7 bg-base-content shadow-lg rounded-2xl mb-5">
                <div class="flex">
                    <div class="flex-1 group">
                        <a href="#" use:scrollTo={'home'} class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-300 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                        <span class="block px-1 pt-1 pb-2">
                            <i class="far fa-home text-2xl pt-1 mb-1 block"></i>
                            <span class="block text-xs pb-1">Home</span>
                        </span>
                        </a>
                    </div>
                    <div class="flex-1 group">
                        <a href="#" use:scrollTo={'about'} class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-300 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                        <span class="block px-1 pt-1 pb-2">
                            <i class="far fa-user text-2xl pt-1 mb-1 block"></i>
                            <span class="block text-xs pb-1">About</span>
                        </span>
                        </a>
                    </div>
                    <div class="flex-1 group">
                        <a href="#" use:scrollTo={'experience'} class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-300 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                        <span class="block px-1 pt-1 pb-2">
                            <i class="far fa-search text-2xl pt-1 mb-1 block"></i>
                            <span class="block text-xs pb-1">Experience</span>
                        </span>
                        </a>
                    </div>
                    <div class="flex-1 group">
                        <a href="#" use:scrollTo={'projects'} class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-300 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                        <span class="block px-1 pt-1 pb-2">
                            <i class="far fa-file text-2xl pt-1 mb-1 block"></i>
                            <span class="block text-xs pb-1">Projects</span>
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>



