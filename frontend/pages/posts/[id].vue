<script setup lang="ts">
const config = useRuntimeConfig();
const { id } = useRoute().params;

const { data: post, pending, error } = await useFetch( `${ config.public.strapiUrl }/api/articles/${ id }?populate=*` );

console.log('post', post);

const imageUrl = `${ config.public.strapiUrl }`;

function formatDate(apiDate: string): string {
    let date = new Date(apiDate);

    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    let year = date.getFullYear();

    return day + '-' + month + '-' + year;
}

</script>

<template>
    <div class="py-24 sm:py-32 lg:pb-32 lg:pt-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div v-if="pending" class="text-slate-400">Loading...</div>
            <div v-else-if="error" class="text-slate-400">Error: {{ error.message }}</div>
            <div v-else-if="post">
                <article class="prose lg:prose-lg prose-img:rounded-2xl prose-img:shadow prose-img:object-cover prose-img:overflow-hidden prose-li:text-white prose-pre:bg-slate-800 prose-code:text-dx-blue-light prose-a:text-blue-600 hover:prose-a:text-blue-500 my-20">
                    <h1 class="text-white underline decoration-dx-blue-dark">{{ post.data.attributes.title }}</h1>
                    <img :src="imageUrl + post.data.attributes.image.data.attributes.url"
                         :alt="post.data.attributes.image.data.attributes.alternativeText"
                         class="aspect-[16/9] w-full rounded-2xl shadow-xl overflow-hidden bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
                    <div class="space-x-4">
                        <span v-for="category in post.data.attributes.categories.data" :key="category.id"
                           class="inline-flex text-xs rounded-full bg-dx-blue-dark items-center px-2 py-1 text-gray-100"><Icon name="heroicons-solid:arrow-circle-right" class="h-4 w-4 text-white mr-1" aria-hidden="true"/>{{ category.attributes.name }}</span>
                    </div>
                    <div class="mt-8 flex items-center gap-x-4 text-xs">
                        <time class="text-gray-100">{{ formatDate(post.data.attributes.createdAt) }}</time>
                        <span class="text-gray-100">|</span>
                        <p class="font-semibold text-gray-100">{{ post.data.attributes.author.data.attributes.username }}</p>
                    </div>
                    <p v-for="contentItem in post.data.attributes.content" :key="contentItem.type"
                       class="mt-5 text-sm leading-6 text-slate-400">
                        <span v-for="child in contentItem.children" :key="child.type">{{ child.text }}</span>
                    </p>
                </article>
            </div>
        </div>
    </div>
</template>
