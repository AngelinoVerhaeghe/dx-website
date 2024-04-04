<script setup>
const navigation = {
    main: [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '#' },
        { name: 'Webinars', href: '#' },
        { name: 'Events', href: '#' },
        { name: 'Technologie', href: '#' },
    ],
    solutions: [
        { name: 'Think', href: '/think' },
        { name: 'Build', href: '/build' },
        { name: 'Maintain', href: '/maintain' }
    ],
    extra: [
        { name: 'Over Ons', href: '#' },
        { name: 'Jobs', href: '#' },
    ],
    legal: [
        { name: 'Privacy Statement', href: '#' },
        { name: 'Cookieverklaring', href: '#' },
        { name: 'Disclaimer', href: '#' },
        { name: 'Algemene Voorwaarden', href: '#' }
    ],
};

const socials = [
    { name: 'Facebook', href: 'https://www.facebook.com/DXSolutions/', icon: 'ri:facebook-circle-fill' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/dx-solutions/mycompany/', icon: 'ri:linkedin-fill' },
    { name: 'X', href: 'https://twitter.com/DXsolutionsBVBA', icon: 'ri:twitter-x-fill' }
];
</script>
<template>
    <footer class="bg-[#080321]" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="md:grid md:grid-cols-1">
                    <img class="h-20 mb-10" src="/img/logo_dxsolutions_white.png" alt="Company name" />
                    <p class="text-sm leading-6 text-slate-400">DX-Solutions</p>
                    <p class="text-sm leading-6 text-slate-400">Spinnerijstraat 103.8</p>
                    <p class="text-sm leading-6 text-slate-400 mb-10">8500 Kortrijk</p>
                    <a href="mailto:info@dx-solutions.be" class="flex items-center text-sm leading-6 text-slate-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <span class="ml-2">info@dx-solutions.be</span>
                    </a>
                    <a href="tel:056969696" class="flex items-center text-sm leading-6 text-slate-400 hover:text-white mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296a11.421 11.421 0 0 0 4.583 1.364a1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995A15.51 15.51 0 0 1 18.5 21C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.421 11.421 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.45 12.45 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.441 12.441 0 0 1-.75-1.588"/></svg>
                        <span class="ml-2">056 96 96 96</span>
                    </a>
                </div>
                <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <ul role="list" class="space-y-4">
                                <li v-for="item in navigation.main" :key="item.name">
                                    <NuxtLink :href="item.href" class="text-sm leading-6 text-slate-400 hover:text-white">{{ item.name }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <ul role="list" class="space-y-4">
                                <li v-for="item in navigation.solutions" :key="item.name">
                                    <NuxtLink :href="item.href" class="text-sm leading-6 text-slate-400 hover:text-white">{{ item.name }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <ul role="list" class="space-y-4">
                                <li v-for="item in navigation.extra" :key="item.name">
                                    <NuxtLink :href="item.href" class="text-sm leading-6 text-slate-400 hover:text-white">{{ item.name }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <ul role="list" class="space-y-4">
                                <li v-for="item in navigation.legal" :key="item.name">
                                    <NuxtLink :href="item.href" class="text-sm leading-6 text-slate-400 hover:text-white">{{ item.name }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-16 border-t border-white/10 pt-8 sm:mt-12 lg:mt-16 lg:flex lg:items-center lg:justify-between">
                <div>
                    <h3 class="text-sm font-semibold leading-6 text-white">Onze Nieuwsbrief</h3>
                    <p class="mt-2 text-sm leading-6 text-slate-400">Schrijf u in op onze nieuwsbrief om als eerste op de hoogte te blijven.</p>
                </div>
                <form class="mt-6 sm:flex sm:max-w-md lg:mt-0">
                    <label for="email-address" class="sr-only">Email address</label>
                    <input type="email" name="email-address" id="email-address" autocomplete="email" required="" class="w-full min-w-0 appearance-none rounded-md border-0 bg-[#080321] px-3 py-1.5 text-base text-gray-100 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:w-56 sm:text-sm sm:leading-6 lg:w-72" placeholder="Emailadres..." />
                    <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                        <button type="submit" class="flex w-full items-center justify-center rounded-md bg-[#131B4D] px-3 py-2 text-sm font-semibold text-slate-400 shadow-sm hover:bg-[#14102C] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Verzenden</button>
                    </div>
                </form>
            </div>
            <div class="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
                <ul class="flex space-x-6 md:order-2">
                    <li v-for="social in socials" :key="social.name">
                        <NuxtLink :to="social.href" target="_blank" rel="nofollow">
                            <Icon :name="social.icon" class="h-6 w-6 text-white" aria-hidden="true"/>
                        </NuxtLink>
                    </li>
                </ul>
                <p class="mt-8 text-xs leading-5 text-white md:order-1 md:mt-0">&copy; 2024 DX-Solutions, Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>
