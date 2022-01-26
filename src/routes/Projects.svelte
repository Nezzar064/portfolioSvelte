<script>
    import {scrollRef} from "svelte-scrolling";

    const projects = [
        {id: 1, type: 'Programming - Exam', date: '', headline: '', description: '', repository: ''},
        {id: 2, type: 'Programming - Hobby', date: 'Sept 2021', headline: '', description: '', repository: ''},
        {id: 3, type: 'Programming - Exam', date: 'May 2021', headline: '', description: '', repository: ''},
        {id: 4, type: '', headline: '', date: '', description: '', repository: ''},
        {id: 5, type: '', headline: '', date: '', description: '', repository: ''},
        {id: 6, type: '', headline: '', date: '', description: '', repository: ''},
    ];

</script>

<section use:scrollRef={'projects'}
         class="py-4 py-16 text-gray-200 bg-gradient-to-r from-gray-800 to-gray-600"
>
    <div
            class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
        <div
                class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
        >
            <div class="text-center mb-20">
                <h1
                        class=" title-font text-neutral mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-5xl"
                >
                    Projects & Experience
                </h1>
                <br/>
                <p class="text-left leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Here you can view some of my projects which I've highlighted (both hobby and
                    assignments). I have also listed my experience, just to the
                    right of this column.
                    <br/>
                    <br>
                    I have listed some older projects as well, to give an insight in how
                    I've evolved throughout my studies.
                </p>
            </div>
            <div class="p-8 bg-white border rounded shadow-sm">
                <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span class="text-gray-400">Programming</span>
                    <span class="text-gray-400">— 29 Sept 2021</span>
                </p>
                <h1 class="inline-block mb-3 text-2xl font-bold leading-5">
                    Experience:
                </h1>
                <p class="mb-5 text-gray-300">
                    I started out with java, and have continued using it since.
                    <br/>
                    However, most of my java programming now is done in Spring Boot.
                    <br/>
                    <br/>
                    I've recently gone into the world of front-end picking up JavaScript, because I already have
                    good knowledge in HTML and CSS. I've worked with:
                </p>
                <p class="italic mb-5 text-bold text-gray-300">
                    <b>Back-end:</b> Java, Spring Boot <br/>
                    <b>Front-end:</b> HTML, CSS, Thymeleaf, JavaScript, Svelte <br/>
                    <b>Cloud/DevOps:</b> AWS & Azure <br/>
                    <b>Database:</b> MySQL, JPA & Hibernate <br/>
                    <b>UnitTest:</b> JUnit, Mockito

                </p>
            </div>
            <div class="p-8 bg-white border rounded shadow-sm">
                <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span class="text-gray-400">Programming - Hobby</span>
                    <span class="text-gray-400">— 1 Sept 2021</span>
                </p>
                <h1 class="inline-block mb-3 text-2xl font-bold leading-5">
                    OCAFE - Student Administration
                </h1>
                <p class="mb-5 text-gray-300">
                    My latest project, which I started on September 1st. I've
                    developed it with high abstraction, inheritance and scalability in mind,
                    as I plan to expand it over time.
                    <br/>
                    <br/>
                    It's a REST Api built in Spring Boot with JPA for data-handling, JWT
                    for authentication through Spring Security.
                    <br/>
                    Currently I am expanding the back-end, while working a bit on the front-end as well.
                    <br/>
                    Essentially this is my first full-stack app, outside of doing Spring Boot MVC with Thymeleaf.
                </p>
                <div class="flex items-center">
                    <img
                            src="/images/github-white.png"
                            alt="avatar"
                            class="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                    <div>
                        <a
                                href="https://github.com/Nezzar064/OCAFE"
                                aria-label="Repository"
                                title="Github Link"
                                class="px-2 font-semibold text-gray-400">Repository</a
                        >
                        <p class="px-2 text-sm font-medium leading-4 text-gray-500">
                            Github
                        </p>
                    </div>
                </div>
            </div>
            <div class="p-8 bg-white border rounded shadow-sm">
                <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span class="text-gray-400">Programming - Exam</span>
                    <span class="text-gray-400">— 16 May 2021</span>
                </p>
                <h1 class="inline-block mb-3 text-2xl font-bold leading-5">
                    Projectory
                </h1>
                <p class="mb-5 text-gray-300">
                    This project was my 2nd semester exam project, a project
                    management system, built as a MVC app in Spring Boot.
                    Thymeleaf is serving the server-side front-end and JPA is used for managing the database.
                    . We had a month to
                    make this, including a report.
                </p>
                <div class="flex items-center">
                    <img
                            src="/images/github-white.png"
                            alt="avatar"
                            class="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                    <div>
                        <a
                                href="https://github.com/Nezzar064/2ndSemesterExam"
                                aria-label="Repository"
                                title="Github Link"
                                class="px-2 font-semibold text-gray-400">Repository</a
                        >
                        <p class="px-2 text-sm font-medium leading-4 text-gray-500">
                            Github
                        </p>
                    </div>
                </div>
            </div>
            <div class="p-8 bg-white border rounded shadow-sm">
                <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span class="text-gray-400">Programming - Hobby</span>
                    <span class="text-gray-400">— 2 Mar 2021</span>
                </p>
                <h1 class="inline-block mb-3 text-2xl font-bold leading-5">
                    Student Administration
                </h1>
                <p class="mb-5 text-gray-300">
                    The second version of my Student Administration application, though
                    this time implemented in Spring Boot as an MVC app, where
                    Thymeleaf serves the server-side front-end.
                    JPA is used for managing the database.
                </p>
                <div class="flex items-center">
                    <img
                            src="/images/github-white.png"
                            alt="avatar"
                            class="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                    <div>
                        <a
                                href="https://github.com/Nezzar064/StudentAdminSpringBoot"
                                aria-label="Repository"
                                title="Github Link"
                                class="px-2 font-semibold text-gray-400">Repository</a
                        >
                        <p class="px-2 text-sm font-medium leading-4 text-gray-500">
                            Github
                        </p>
                    </div>
                </div>
            </div>
            <div class="p-8 bg-white border rounded shadow-sm">
                <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span class="text-gray-400">Programming - Hobby</span>
                    <span class="text-gray-400">— 15 Dec 2020</span>
                </p>
                <h1 class="inline-block mb-3 text-2xl font-bold leading-5">
                    Console Student Administration
                </h1>
                <p class="mb-5 text-gray-300">
                    My very first hobby project, a console-based student
                    administration, not counting that I previously did a non-database supported version.
                    Started out as a class-assignment that evolved into a hobby project.
                </p>
                <div class="flex items-center">
                    <img
                            src="/images/github-white.png"
                            alt="avatar"
                            class="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                    <div>
                        <a
                                href="https://github.com/Nezzar064/StudentAdminWDB"
                                aria-label="Repository"
                                title="Github Link"
                                class="px-2 font-semibold text-gray-400">Repository</a
                        >
                        <p class="px-2 text-sm font-medium leading-4 text-gray-500">
                            Github
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
