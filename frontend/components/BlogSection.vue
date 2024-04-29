<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { usePostStore } from '@/stores/PostStore';
import type { IPost } from "~/types/IPost";
const config = useRuntimeConfig();

const postsStore = usePostStore();
const posts = ref<IPost[]>([]);
const loading = ref<boolean>(false);
const error = ref<Error | null>(null);
const imageUrl = `${ config.public.strapiUrl }`;

const fetchPosts = async () => {
    loading.value = true;
    try {
        await postsStore.fetchPosts();
        posts.value = postsStore.posts;
    } catch (err) {
        console.error('Error fetching posts:', err);
        error.value = err instanceof Error ? err : new Error('An error occurred while fetching posts');
    } finally {
        loading.value = false;
    }
};

onMounted(fetchPosts);
</script>

<template>
    <div class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-100 underline decoration-dx-blue-dark sm:text-4xl">Blogs</h2>
                <p class="mt-2 text-lg leading-8 text-slate-400">Ontdek boeiende inzichten en inspiratie in onze nieuwste blogberichten. </p>
            </div>
            <div v-if="loading" class="text-slate-400">Loading...</div>
            <div v-else-if="error">Error: {{ error.message }}</div>
            <div v-else class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="post in posts" :key="post.id" class="flex flex-col items-start">
                    <div class="relative w-full">
                        <img :src="imageUrl + post.attributes.image.data.attributes.url" :alt="post.attributes.image.data.attributes.alternativeText || 'Blog image'"
                             class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
                        <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
                        <p v-for="category in post.attributes.categories.data" :key="category.id"
                           class="absolute top-2 left-2 text-xs z-10 rounded-full bg-[#080321] px-2 py-1 text-gray-100">{{ category.attributes.name }}</p>
                    </div>
                    <div class="max-w-xl">
                        <div class="mt-8 flex items-center gap-x-4 text-xs">
                            <time class="text-gray-100">{{ post.attributes.createdAt }}</time>
                            <span class="text-gray-100">|</span>
                            <p class="font-semibold text-gray-100">{{ post.attributes.author.data.attributes.username }}</p>
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-300">
                                <nuxt-link :to="`/posts/${post.attributes.slug}`">
                                    <span class="absolute inset-0"/>
                                    {{ post.attributes.title }}
                                </nuxt-link>
                            </h3>
                            <p v-for="contentItem in post.attributes.content" :key="contentItem.type"
                               class="mt-5 line-clamp-3 text-sm leading-6 text-slate-400">
                                <span v-for="child in contentItem.children" :key="child.type">{{ child.text }}</span>
                            </p>
                        </div>
                        <div class="mt-8 flex items-center gap-x-6">
                            <nuxt-link :to="`/posts/${post.attributes.slug}`" class="text-sm font-semibold text-gray-100">
                                Lees meer <span aria-hidden="true">&rarr;</span>
                            </nuxt-link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>
