<script>
    import {scrollRef} from "svelte-scrolling";

    const languages = [
        {id: 1, title: "Java", image: "/images/experience/java.svg"},
        {id: 2, title: "JavaScript", image: "/images/experience/js.svg"},
        {id: 3, title: "HTML and CSS", image: "/images/experience/html.svg"},
        {id: 4, title: "Python", image: "/images/experience/python.svg"},
    ];

    const frameworks = [
        {id: 1, title: "Spring Boot", image: "/images/experience/spring.svg"},
        {id: 2, title: "Svelte & SvelteKit", image: "/images/experience/svelte.svg"},
        {id: 3, title: "Node.js & Express", image: "/images/experience/node.svg"},
        {id: 4, title: "Basics of React", image: "/images/experience/react.svg"},
        {id: 5, title: "JUnit & Mockito", image: "/images/experience/junit.svg"},
    ];

    const database = [
        {id: 1, title: "MySQL", image: "/images/experience/mysql.svg"},
        {id: 2, title: "JPA & Hibernate", image: "/images/experience/hibernate.svg"},
        {id: 2, title: "PostgreSQL", image: "/images/experience/postgresql.svg"},
    ];

    const tools = [
        {id: 1, title: "Linux", image: "/images/experience/linux.svg"},
        {id: 2, title: "Azure to some extend", image: "/images/experience/azure.svg"},
        {id: 3, title: "AWS to some extend", image: "/images/experience/aws.svg"},
        {id: 4, title: "Docker", image: "/images/experience/docker.svg"},
        {id: 5, title: "Jenkins", image: "/images/experience/jenkins.svg"}
    ];
</script>
<section use:scrollRef={'experience'}
         class="py-28 text-neutral"
>
    <div
            class=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10"
    >
        <div class="text-center mb-20">
            <h1
                    class=" title-font text-neutral mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-5xl"
            >
                Experience
            </h1>
            <br/>
            <p class="text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Here I have listed my experience, divided in programming languages, frameworks and tools (including DBMS).
                <br/>
            </p>
        </div>

        <div class="flex flex-row w-full">
            <div class="grid flex-grow h-full card rounded-box place-items-center">
                <div class="card card-bordered">
                    <figure>
                        <img alt="#" src="/images/language.png">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Programming Languages
                        </h2>
                        <ul>
                            {#each languages as language}
                                <li>
                                    <p class="font-semibold">
                                        <img src={language.image} class="h-10 w-10 inline-block" alt="#"> {language.title}
                                    </p>
                                    <br>
                                </li>
                            {/each}
                        </ul>
                        <h2 class="card-title">Frameworks
                        </h2>
                        <ul>
                            {#each frameworks as framework}
                                <li>
                                    <p class="font-semibold">
                                        <img src={framework.image} alt="#" class="h-10 w-10 inline-block"> {framework.title}
                                    </p>
                                    <br>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="grid flex-grow h-full card  rounded-box place-items-center">
                <div class="card card-bordered">
                    <figure>
                        <img alt="#" src="/images/tools-resize.png" class="w-full ">
                    </figure>
                    <br>
                    <div class="card-body">
                        <h2 class="card-title">Tools</h2>
                        <ul>
                            {#each tools as tool}
                                <li>
                                    <p class="font-semibold">
                                        <img src={tool.image} alt="#" class="h-10 w-10 inline-block"> {tool.title}
                                    </p>
                                    <br>
                                </li>
                            {/each}
                        </ul>
                        <h2 class="card-title">DBMS</h2>

                        <ul>
                            {#each database as database}
                                <li>
                                    <p class="font-semibold">
                                        <img src={database.image} alt="#" class="h-10 w-10 inline-block"> {database.title}
                                    </p>
                                    <br>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

