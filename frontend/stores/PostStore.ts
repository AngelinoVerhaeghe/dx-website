import { defineStore } from 'pinia';
import axios from 'axios';
import type { IPost } from "~/types/IPost";

function formatDate(apiDate: string): string {
    let date = new Date(apiDate);

    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    let year = date.getFullYear();

    return day + '-' + month + '-' + year;
}

export const usePostStore = defineStore( {
    id: 'PostStore',
    state: () => ({
        posts: [] as IPost[],
        post: null as IPost | null,
        loading: false,
        error: null as Error | null,
    }),
    actions: {
        async fetchPosts() {
            const config = useRuntimeConfig();
            const API_STRAPI_URL = config.public.strapiUrl;

            this.loading = true;

            try {
                const response = await axios.get<{ data: IPost[] }>( `${API_STRAPI_URL}/api/posts?populate=*` );
                // Update image URLs to point to the backend URL
                this.posts = response.data.data.map( post => ({
                    ...post,
                    attributes: {
                        ...post.attributes,
                        createdAt: formatDate(post.attributes.createdAt),
                        updatedAt: formatDate(post.attributes.updatedAt),
                        publishedAt: formatDate(post.attributes.publishedAt),
                        image: {
                            ...post.attributes.image,
                            url: `${API_STRAPI_URL}${post.attributes.image.data.attributes.url}`
                        }
                    }
                }) );
            } catch (error) {
                console.error( 'Error fetching posts:', error );
            } finally {
                this.loading = false;
            }
        },
        // async loadPostById(id: number) {
        //     this.loading = true;
        //     try {
        //         const response = await axios.get<{ data: IPost }>(`http://localhost:1337/api/posts/${id}`);
        //         this.post = response.data.data;
        //         console.log('Loaded post:', this.post);
        //         console.log('Response:', response);
        //     } catch (error) {
        //         console.error('Error loading post by slug:', error);
        //     } finally {
        //         this.loading = false;
        //     }
        // },
    },
} );
