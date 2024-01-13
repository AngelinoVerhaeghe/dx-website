<script setup lang="ts">
const route = useRoute()

const navigation = [
    {name: 'Home', to: '/', current: route.name === 'index'},
    {name: 'Think', to: '/think', current: route.name === 'think'},
    {name: 'Build', to: '/build', current: route.name === 'build'},
    {name: 'Maintain', to: '/maintain', current: route.name === 'maintain'},
    {name: 'Cases', to: '/cases', current: route.name === 'cases'},
    {name: 'Contact', to: '/contact', current: route.name === 'contact'},
]

</script>

<template>
    <div class="antialiased scroll-smooth font-poppins">
        <div class="absolute top-0 left-0 w-full bg-sky-500 h-20">
            <header class="bg-white mx-auto max-w-7xl mt-14">
                <nav class="flex justify-between items-center h-[100px] lg:px-16">
                    <div>
                        <img class="w-44 h-16" src="/img/logo_dxsolutions_black.svg" alt="DX-Solutions Logo">
                    </div>
                    <ul class="flex space-x-11 text-xl">
                        <li v-for="item in navigation" :key="item.name">
                            <a
                                :href="item.to"
                                :class="[item.current ? 'text-dx-blue-light' : 'text-dx-blue-darkest hover:text-dx-blue-light', 'group duration-150']"
                                :aria-current="item.current ? 'page' : undefined"
                            >
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <NuxtPage />
            </main>
        </div>
    </div>
</template>
