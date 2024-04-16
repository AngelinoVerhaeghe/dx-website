<script setup lang="ts">
import { LightBulbIcon, RocketLaunchIcon, AdjustmentsVerticalIcon } from '@heroicons/vue/24/outline';

const features = [
    {
        name: 'Think',
        bgColor: 'bg-dx-blue-darkest',
        textColor: 'text-dx-blue-darkest',
        description:
            'Wij denken met u mee vanaf de start.',
        href: '/think',
        icon: LightBulbIcon,
        items: [
            {
                name: 'Digital Transformation',
                href: '/think',
            },
            {
                name: 'Vendor Selection',
                href: '/think'
            },
            {
                name: 'Data Governance',
                href: '/think'
            },
        ]
    },
    {
        name: 'Build',
        bgColor: 'bg-dx-blue-dark',
        textColor: 'text-dx-blue-dark',
        description:
            'Samen oplossingen bouwen.',
        href: '/build',
        icon: RocketLaunchIcon,
        items: [
            {
                name: 'Application Development',
                href: '/build'
            },
            {
                name: 'Team as a Service',
                href: '/build'
            },
            {
                name: 'Data Solutions',
                href: '/build'
            },
        ]
    },
    {
        name: 'Maintain',
        bgColor: 'bg-sky-400',
        textColor: 'text-sky-400',
        description:
            'Verbeteren, adviseren en optimaliseren.',
        href: '/maintain',
        icon: AdjustmentsVerticalIcon,
        items: [
            {
                name: 'Application Maintenance',
                href: '/maintain'
            },
            {
                name: 'Application Support',
                href: '/maintain'
            },
            {
                name: 'Ongoing Development',
                href: '/maintain'
            },
        ]
    },
];
</script>

<template>
    <div class="relative bg-gray-800 pb-32">
        <div class="absolute inset-0">
            <img class="h-full w-full object-cover" src="/img/header-image.jpg" alt="Header Image"/>
            <div class="absolute inset-0 bg-gray-700 mix-blend-multiply" aria-hidden="true"/>
        </div>
        <div class="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div class="max-w-lg">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-10 lg:mt-16">
                    <span class="text-dx-blue-darkest">Think, </span>
                    <span class="text-dx-blue-dark">Build, </span>
                    <span class="text-sky-400">Maintain</span>
                </h1>
                <p class="mt-6 text-lg leading-8 text-white">DX-Solutions waarborgt keuzevrijheid, vernieuwt technologie, ontgint en verrijkt data, en
                    gidst bedrijven door IT (r)evoluties naar een geoptimaliseerde waardeketen.
                </p>
            </div>
        </div>
    </div>

    <div class="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8 lg:pb-24" aria-labelledby="contact-heading">
        <h2 class="sr-only" id="contact-heading">Contact us</h2>
        <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            <div v-for="(feature, index) in features" :key="feature.name" class="flex flex-col rounded-2xl bg-white shadow-xl">
                <div class="relative flex-1 px-6 pb-8 pt-16 md:px-8">
                    <div :class="feature.bgColor" class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl p-5 shadow-lg">
                        <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true"/>
                    </div>
                    <h3 :class="feature.textColor" class="text-2xl font-medium">{{ feature.name }}</h3>
                    <p class="mt-4 text-base mb-4">{{ feature.description }}</p>
                    <ul>
                        <li v-for="item in feature.items" :key="item.name">
                            <NuxtLink
                                :to="feature.href"
                                class="flex items-center pl-3"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                     class="w-4 h-4 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                </svg>
                                {{ item.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="rounded-bl-2xl rounded-br-2xl p-6 md:px-8">
                    <a :class="feature.textColor" :href="feature.href" class="text-base font-medium">Lees meer<span aria-hidden="true"> &rarr;</span></a>
                </div>
            </div>
        </div>
    </div>
    <CasesSection />
    <QuoteSection />
    <BlogSection />
</template>
