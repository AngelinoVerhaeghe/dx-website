<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { usePageStore } from '@/stores/PageStore';
import type { IPage } from "~/types/IPage";

const pageStore = usePageStore();
const pageData = ref<IPage | null>( null );
const loading = ref<boolean>( false );
const error = ref<Error | null>( null );

const fetchPageData = async () => {
    loading.value = true;
    try {
        await pageStore.fetchPageData( 'home-page' );
        pageData.value = pageStore.pageData;
    } catch (err) {
        console.error( 'Error fetching page data:', err );
        error.value = err instanceof Error ? err : new Error( 'An error occurred while fetching page data' );
    } finally {
        loading.value = false;
    }
};

function getTitleColorClass(title: string) {
    switch (title) {
        case 'Think':
            return 'text-dx-blue-darkest';
        case 'Build':
            return 'text-dx-blue-dark';
        case 'Maintain':
            return 'text-dx-blue-light';
        default:
            return '';
    }
}

const parseIcon = (iconJson: string) => {
    const iconData = JSON.parse(iconJson);
    return iconData.component;
};

onMounted( fetchPageData );
</script>

<template>
    <div class="relative bg-gray-800 pb-32">
        <div class="absolute inset-0">
            <img class="h-full w-full object-cover" :src="pageData?.attributes?.PageContent[0]?.headerImage?.data.attributes.url"
                 :alt="pageData?.attributes?.PageContent[0]?.headerImage?.data.attributes.alternativeText"/>
            <div class="absolute inset-0 bg-gray-700 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div class="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div class="max-w-lg">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-10 lg:mt-16">
                    <span :class="getTitleColorClass('Think')" class="text-dx-blue-darkest">Think,</span>
                    <span :class="getTitleColorClass('Build')" class="text-dx-blue-dark"> Build,</span>
                    <span :class="getTitleColorClass('Maintain')" class="text-sky-400"> Maintain</span>
                </h1>
                <p class="mt-6 text-lg leading-8 text-white">{{ pageData?.attributes?.PageContent[0]?.subTitle }}</p>
            </div>
        </div>
    </div>

    <div class="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8 lg:pb-24">
        <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            <div v-for="(content, index) in pageData?.attributes.PageContent" :key="index" class="flex flex-col rounded-2xl bg-white shadow-xl">
                <div v-if="content.feature_1" class="relative flex-1 px-6 pb-8 pt-16 md:px-8">
                    <div :class="content.feature_1.bgColor" class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl p-5 shadow-lg">
                        <div v-html="parseIcon(content.feature_1.icon)" class="h-6 w-6 text-white" aria-hidden="true"></div>
                    </div>
                    <h3 :class="content.feature_1.textColor" class="text-2xl font-medium">{{ content.feature_1.title }}</h3>
                    <p class="mt-4 text-base mb-4">{{ content.feature_1.subTitle }}</p>
                    <ul>
                        <li v-for="item in content.feature_1.links" :key="item.id">
                            <NuxtLink
                                :to="item.url"
                                class="flex items-center pl-3"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                     class="w-4 h-4 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                </svg>
                                {{ item.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="rounded-bl-2xl rounded-br-2xl p-6 md:px-8">
                    <NuxtLink :class="content.feature_1.textColor" :to="content.feature_1.url" class="text-base font-medium">Lees meer<span aria-hidden="true"> &rarr;</span></NuxtLink>
                </div>
            </div>
            <div v-for="(content, index) in pageData?.attributes.PageContent" class="flex flex-col rounded-2xl bg-white shadow-xl">
                <div v-if="content.feature_2" class="relative flex-1 px-6 pb-8 pt-16 md:px-8">
                    <div :class="content.feature_2.bgColor" class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl p-5 shadow-lg">
                        <div v-html="parseIcon(content.feature_2.icon)" class="h-6 w-6 text-white" aria-hidden="true"></div>
                    </div>
                    <h3 :class="content.feature_2.textColor" class="text-2xl font-medium">{{ content.feature_2.title }}</h3>
                    <p class="mt-4 text-base mb-4">{{ content.feature_2.subTitle }}</p>
                    <ul>
                        <li v-for="item in content.feature_2.links" :key="item.id">
                            <NuxtLink
                                :to="item.url"
                                class="flex items-center pl-3"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                     class="w-4 h-4 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                </svg>
                                {{ item.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="rounded-bl-2xl rounded-br-2xl p-6 md:px-8">
                    <NuxtLink :class="content.feature_2.textColor" :to="content.feature_2.url" class="text-base font-medium">Lees meer<span aria-hidden="true"> &rarr;</span></NuxtLink>
                </div>
            </div>
            <div v-for="(content, index) in pageData?.attributes.PageContent" class="flex flex-col rounded-2xl bg-white shadow-xl">
                <div v-if="content.feature_3" class="relative flex-1 px-6 pb-8 pt-16 md:px-8">
                    <div :class="content.feature_3.bgColor" class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl p-5 shadow-lg">
                        <div v-html="parseIcon(content.feature_3.icon)" class="h-6 w-6 text-white" aria-hidden="true"></div>
                    </div>
                    <h3 :class="content.feature_3.textColor" class="text-2xl font-medium">{{ content.feature_3.title }}</h3>
                    <p class="mt-4 text-base mb-4">{{ content.feature_3.subTitle }}</p>
                    <ul>
                        <li v-for="item in content.feature_3.links" :key="item.id">
                            <NuxtLink
                                :to="item.url"
                                class="flex items-center pl-3"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                     class="w-4 h-4 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                </svg>
                                {{ item.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="rounded-bl-2xl rounded-br-2xl p-6 md:px-8">
                    <NuxtLink :class="content.feature_3.textColor" :to="content.feature_3.url" class="text-base font-medium">Lees meer<span aria-hidden="true"> &rarr;</span></NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <CasesSection/>
    <QuoteSection/>
    <BlogSection/>
</template>
