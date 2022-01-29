<script>
    import {scrollRef} from "svelte-scrolling";

    const firstRowProjects = [
        {
            id: 1,
            type: 'Programming - Exam',
            date: 'Dec 2021',
            headline: 'Electio',
            description: 'My 3rd semester code exam project. It is a fullstack application with a Java back-end written in Spring Boot and a JavaScript front-end written in SvelteKit.\n' +
                '                Basically it is an application to control an election, which uses the regional elections 2021 in Denmark as an example. I was awarded the grade 12 in the Danish grade system for this.',
            repository: 'https://github.com/Nezzar064/Electio'
        },
        {
            id: 2,
            type: 'Programming - Hobby',
            date: 'Sept 2021',
            headline: 'OCAFE',
            description: 'My latest hobby project, which I started on September 1st 2021. I\'ve\n' +
                '                    developed it with high abstraction, inheritance and scalability in mind,\n' +
                '                    as I plan on expanding it over time.\n' +
                '                    \n' +
                '                    It\'s a REST Api built in Spring Boot with JPA for DBMS, JWT\n' +
                '                    for authentication through Spring Security. Unfortunately I have not had the time to develop the front-end yet.',
            repository: 'https://github.com/Nezzar064/OCAFE'
        },
        {
            id: 3,
            type: 'Programming - Exam',
            date: 'May 2021',
            headline: 'Projectory',
            description: 'This project was my 2nd semester exam project, a project\n' +
                '                    management system, built as a MVC app in Spring Boot.\n' +
                '                    Thymeleaf is serving the server-side front-end and JPA is used for managing the database.\n' +
                '                    . We had a month to\n' +
                '                    make this, including a report. Awarded grade 10 in the Danish grade system.',
            repository: 'https://github.com/Nezzar064/2ndSemesterExam'
        },
    ];

    const secondRowProjects = [
        {
            id: 4,
            type: 'Programming - Hobby',
            date: 'Mar 2021',
            headline: 'Student Administration',
            description: 'The second version of my Student Administration application, though\n' +
                '                    this time implemented in Spring Boot as an MVC app, where\n' +
                '                    Thymeleaf serves the server-side front-end.\n' +
                '                    JPA is used for managing the database.',
            repository: 'https://github.com/Nezzar064/StudentAdminSpringBoot'
        },
        {
            id: 5,
            type: 'Programming - Hobby',
            date: 'Dec 2020',
            headline: 'CLI Student Administration',
            description: ' My very first hobby project, a console-based student\n' +
                '                    administration, not counting that I previously did a non-database supported version.\n' +
                '                    Started out as a class-assignment that evolved into a hobby project.',
            repository: 'https://github.com/Nezzar064/StudentAdminWDB'
        },
    ];


</script>

<section use:scrollRef={'projects'}
         class="py-28 text-neutral"
>
    <div class="container mx-auto rounded-box">
    <div
            class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10"
    >
        <div class="text-center mb-20">
            <h1
                    class=" title-font text-neutral mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-5xl"
            >
                Projects
            </h1>
            <br/>
            <p class="text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Here you can view some of my projects which I've highlighted (both hobby and
                exams).
                I have listed some older projects as well, to give an insight in how
                I've evolved throughout my studies.
                <br/>
            </p>
        </div>
        <div class="bg-base-200 rounded-box">
        <div class="container mx-auto p-8 bg-base-200 rounded-box">
            <div class="flex flex-row flex-wrap -mx-2">
                {#each firstRowProjects as project}
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4 px-2">
                        <div class="relative h-full card rounded-box card-bordered border-gray-300 shadow-md place-items-center">


                                <div class="card-body">
                                    <p class="mb-3 text-xs font-semibold uppercase">
                                        <span class="text-gray-400">{project.type},</span>
                                        <span class="text-gray-400">{project.date}</span>
                                    </p>
                                    <h2 class="card-title">{project.headline}</h2>
                                    <p>
                                        {project.description}
                                    </p>

                                </div>

                            <div class="bottom-0 pt-1 place-items-center">
                                <a
                                        href="https://github.com/Nezzar064/StudentAdminWDB"
                                        aria-label="Repository"
                                        title="Github Link"
                                        class="font-semibold text-neutral">
                                    <img
                                            src="./images/github.svg"
                                            alt="avatar"
                                            class="inline-block w-10 h-10 rounded-full"
                                    />&nbsp;Repository</a
                                >
                            </div>
                            <br>

                        </div>

                    </div>



                {/each}
            </div>
        </div>

        <div class="container mx-auto p-8">
            <div class="flex flex-row flex-wrap -mx-2">
                {#each secondRowProjects as project}
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-4 px-2">
                        <div class="relative h-full card rounded-box card-bordered border-gray-300 shadow-md place-items-center">


                            <div class="card-body">
                                <p class="mb-3 text-xs font-semibold uppercase">
                                    <span class="text-gray-400">{project.type},</span>
                                    <span class="text-gray-400">{project.date}</span>
                                </p>
                                <h2 class="card-title">{project.headline}</h2>
                                <p>
                                    {project.description}
                                </p>

                            </div>

                            <div class="bottom-0 pt-1 place-items-center">
                                <a
                                        href="https://github.com/Nezzar064/StudentAdminWDB"
                                        aria-label="Repository"
                                        title="Github Link"
                                        class="font-semibold text-neutral">
                                    <img
                                            src="./images/github.svg"
                                            alt="avatar"
                                            class="inline-block w-10 h-10 rounded-full"
                                    />&nbsp;Repository</a
                                >
                            </div>
                            <br>

                        </div>

                    </div>



                {/each}
            </div>
        </div>
        </div>
    </div>
    </div>
</section>



