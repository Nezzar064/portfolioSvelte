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

    const databases = [
        {id: 1, title: "MySQL", image: "/images/experience/mysql.svg"},
        {id: 2, title: "JPA & Hibernate", image: "/images/experience/hibernate.svg"},
        {id: 2, title: "PostgreSQL", image: "/images/experience/postgresql.svg"},
    ];

    const tools = [
        {id: 1, title: "Linux", image: "/images/experience/linux.svg"},
        {id: 2, title: "Azure to some extent", image: "/images/experience/azure.svg"},
        {id: 3, title: "AWS to some extent", image: "/images/experience/aws.svg"},
        {id: 4, title: "Docker", image: "/images/experience/docker.svg"},
        {id: 5, title: "Jenkins", image: "/images/experience/jenkins.svg"}
    ];
</script>
<section use:scrollRef={'experience'}
         class="pt-28 text-neutral"
>
    <div
            class=" container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 "
    >
        <div class="text-center mb-20">
            <h1
                    class=" title-font text-neutral mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-5xl"
            >
                Experience
            </h1>
            <br/>
            <p class="text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Here I have listed my experience, divided in programming languages, frameworks, tools and DBMS.
                <br/>
            </p>
        </div>

        <div class="flex  justify-center w-full">
            <div class="flex-grow-0 h-full rounded-box place-items-center">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title font-bold">Programming Languages
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
                        <h2 class="card-title font-bold">Frameworks
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
            <div class="flex-grow-0 h-full rounded-box place-items-center">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title font-bold">Tools
                        </h2>
                        <ul>
                            {#each tools as tool}
                                <li>
                                    <p class="font-semibold">
                                        <img src={tool.image} class="h-10 w-10 inline-block" alt="#"> {tool.title}
                                    </p>
                                    <br>
                                </li>
                            {/each}
                        </ul>
                        <h2 class="card-title font-bold">DBMS
                        </h2>
                        <ul>
                            {#each databases as db}
                                <li>
                                    <p class="font-semibold">
                                        <img src={db.image} alt="#" class="h-10 w-10 inline-block"> {db.title}
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

