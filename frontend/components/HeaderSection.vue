<script setup>
defineProps({
    features: Array,
    title: String,
    titleColor: String,
    description: String
});


</script>

<template>
    <section>
        <div class="relative bg-gray-800 pb-32">
            <div class="absolute inset-0">
                <img class="h-full w-full object-cover" src="/img/think-image.jpg" alt="Header Image"/>
                <div class="absolute inset-0 bg-gray-700 mix-blend-multiply" aria-hidden="true"/>
            </div>
            <div class="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div class="max-w-lg">
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-10 lg:mt-16">
                        <span :class="titleColor">{{ title }}</span>
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-white">{{ description }}</p>
                </div>
            </div>
        </div>
        <div class="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8" aria-labelledby="contact-heading">
            <h2 class="sr-only" id="contact-heading">Contact us</h2>
            <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                <div v-for="feature in features" :key="feature.name" class="flex flex-col rounded-2xl bg-white shadow-xl">
                    <div class="relative flex-1 px-6 pb-8 pt-16 md:px-8">
                        <div :class="feature.bgColor" class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl p-5 shadow-lg">
                            <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true"/>
                        </div>
                        <h3 :class="feature.textColor" class="text-2xl font-medium">{{ feature.name }}</h3>
                        <p class="mt-4 text-base text-gray-900 mb-4">{{ feature.description }}</p>
                    </div>
                    <div class="rounded-bl-2xl rounded-br-2xl p-6 md:px-8">
                        <a :class="feature.textColor" :href="feature.href" class="text-base font-medium">Lees meer<span aria-hidden="true"> &rarr;</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
