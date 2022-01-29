<script>
    import {scrollRef} from 'svelte-scrolling'
</script>

<section use:scrollRef={'about'} class="py-28">
    <div class="container mx-auto p-8 bg-base-200 rounded-box">
        <div class="flex flex-row flex-wrap -mx-2">
            <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4 px-2">
                <div class="relative h-full card rounded-box card-bordered border-gray-300 shadow-2xl place-items-center">
                    <h2
                            class="mb-4 pt-12 text-center title-font text-4xl font-extrabold leading-10 tracking-tight text-neutral sm:text-5xl sm:leading-none md:text-5xl"
                    >
                        About me
                    </h2>
                    <div class="card-body">
                        <p class="text-base text-neutral md:text-lg sm:px-4">
                            Computer Science student from Denmark on 4th semester. I see myself as a backend developer, as that is where my passion lies. However, I do not mind doing some frontend work if needed/necessary.
                            <br>
                            <br>
                            I aspire to be confident in both front- and backend, as I feel that knowledge of both compliments each other. However, backend work is my main focus.
                            <br>
                            <br>
                            Outside of my studies, I am currently working at Motorola Solutions as Student Software Engineer.
                        </p>

                    </div>


                </div>
            </div>

            <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4 px-2">
                <div class="relative h-full flex-grow grid card rounded-box card-bordered border-gray-300 shadow-2xl place-items-center">
                    <div class="card-body">
                        <img alt="profil" src="/images/suitMe.jpg" class=" rounded"/>

                    </div>


                </div>
            </div>

            <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4 px-2">
                <div class="relative h-full card rounded-box card-bordered border-gray-300 shadow-2xl place-items-center">
                    <h2
                            class="mb-4 pt-12 text-center title-font text-4xl font-extrabold leading-10 tracking-tight text-neutral sm:text-5xl sm:leading-none md:text-5xl"
                    >
                        Hobbies
                    </h2>
                    <div class="card-body">
                        <p class="text-base text-neutral md:text-lg sm:px-4">
                            I do quite a bit programming on the side as a hobby which is something I enjoy a lot. I basically started hobby-programming in 1st semester of my studies.
                            This also includes playing around with virtual machines, Docker, Jenkins and what comes with it.
                            <br>
                            <br>
                            Outside of that, gaming has always been a big hobby for me. Both PC and console gaming.
                            <br>
                            <br>
                            Lastly, I enjoy going to the gym, mainly for strength training. I've probably been going for 7-8 years total with breaks in between, and have had a 'career' on the Danish National Powerlifting Team when I was younger.
                        </p>

                    </div>


                </div>
            </div>
        </div>
    </div>
</section>





