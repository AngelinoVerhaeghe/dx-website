<script setup>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';

const mobileMenuOpen = ref(false);
const isThinkMenu = ref(false);
const isBuildMenu = ref(false);
const isMaintainMenu = ref(false);

const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Think', to: '/think' },
    { name: 'Build', to: '/build' },
    { name: 'Maintain', to: '/maintain' },
    { name: 'Cases', to: '/cases' },
    { name: 'Contact', to: '/contact' },
];

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#' },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#' },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#' },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#' },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#' },
];
</script>

<template>
    <header>
        <nav class="absolute inset-0 mx-auto max-w-7xl flex justify-between items-center z-10 h-[100px] lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <NuxtLink href="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">DX-Solutions</span>
                    <img class="w-44 h-16" src="/img/logo_dxsolutions_white.png" alt="DX-Solutions" />
                </NuxtLink>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6 text-slate-400" aria-hidden="true" />
                </button>
            </div>
            <ul class="hidden lg:flex lg:gap-x-12">
                <li>
                    <NuxtLink to="/" class="leading-6 text-slate-400 hover:text-white duration-150">
                        Home
                    </NuxtLink>
                </li>
                <li class="relative">
                    <NuxtLink
                        to="/think"
                        @mouseenter="isThinkMenu = true"
                        @mouseleave="isThinkMenu = false"
                        class="flex items-center leading-6 text-slate-400 hover:text-white duration-150"
                    >
                        Think
                        <ChevronDownIcon :class="[isThinkMenu ? 'rotate-180 text-white' : '', 'h-5 w-5 flex-none text-gray-400']" aria-hidden="true" />
                    </NuxtLink>
                    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                        <div v-if="isThinkMenu" @mouseleave="isThinkMenu = false" class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div class="p-4">
                                <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div class="flex-auto">
                                        <a :href="item.href" class="block">
                                            {{ item.name }}
                                            <span class="absolute inset-0" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </li>
                <li class="relative">
                    <NuxtLink to="/build" @mouseleave="isBuildMenu = false" @mouseenter="isBuildMenu = true" class="flex items-center leading-6 text-slate-400 hover:text-white duration-150">
                        Build
                        <ChevronDownIcon :class="[isBuildMenu ? 'rotate-180 text-white' : '', 'h-5 w-5 flex-none text-gray-400']" aria-hidden="true" />
                    </NuxtLink>
                    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                        <div v-if="isBuildMenu" @mouseleave="isBuildMenu = false" class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div class="p-4">
                                <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div class="flex-auto">
                                        <a :href="item.href" class="block">
                                            {{ item.name }}
                                            <span class="absolute inset-0" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </li>
                <li class="relative">
                    <NuxtLink to="/maintain" @mouseleave="isMaintainMenu = false" @mouseenter="isMaintainMenu = true" class="flex items-center leading-6 text-slate-400 hover:text-white duration-150">
                        Maintain
                        <ChevronDownIcon :class="[isMaintainMenu ? 'rotate-180 text-white' : '', 'h-5 w-5 flex-none text-gray-400']" aria-hidden="true" />
                    </NuxtLink>
                    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                        <div v-if="isMaintainMenu" @mouseleave="isMaintainMenu = false" class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div class="p-4">
                                <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div class="flex-auto">
                                        <a :href="item.href" class="block">
                                            {{ item.name }}
                                            <span class="absolute inset-0" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </li>
                <li>
                    <NuxtLink to="/cases" class="leading-6 text-slate-400 hover:text-white duration-150">
                        Cases
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact" class="leading-6 text-slate-400 hover:text-white duration-150">
                        Contact
                    </NuxtLink>
                </li>
            </ul>
        </nav>
        <div class="lg:hidden" @close="mobileMenuOpen = false">
            <div class="fixed inset-0 z-10" />
            <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <div class="-mx-3">
                                <div class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Product
                                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                                </div>
                            </div>
                            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                        </div>
                        <div class="py-6">
                            <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.active {
    @apply text-slate-50
}
</style>