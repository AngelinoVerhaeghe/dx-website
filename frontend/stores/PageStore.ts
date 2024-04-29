import { defineStore } from 'pinia';
import axios from 'axios';
import type { IPage } from "~/types/IPage";
function formatDate( apiDate: string ): string {
    let date = new Date( apiDate );

    let day = String( date.getDate() ).padStart( 2, '0' );
    let month = String( date.getMonth() + 1 ).padStart( 2, '0' ); // January is 0!
    let year = date.getFullYear();

    return day + '-' + month + '-' + year;
}

export const usePageStore = defineStore( {
    id: 'PageStore',
    state: () => ({
        pageData: null as IPage | null,
        loading: false,
        error: null as Error | null,
    }),
    actions: {
        async fetchPageData( content: string ) {
            const config = useRuntimeConfig();
            const API_STRAPI_URL = config.public.strapiUrl;

            this.loading = true;

            try {
                const response = await axios.get<{
                    data: IPage,
                    meta: any
                }>( `${ API_STRAPI_URL }/api/${ content }?populate[PageContent][populate][headerImage][fields][0]=url&populate[PageContent][populate][headerImage][fields][1]=alternativeText&populate[PageContent][populate][feature_1][populate][0]=links&populate[PageContent][populate][feature_2][populate][0]=links&populate[PageContent][populate][feature_3][populate][0]=links` );

                if ( response.data ) {
                    const { data } = response.data;

                    this.pageData = {
                        id: data.id,
                        attributes: {
                            ...data.attributes,
                            createdAt: formatDate( data.attributes.createdAt ),
                            updatedAt: formatDate( data.attributes.updatedAt ),
                            publishedAt: formatDate( data.attributes.publishedAt ),
                            PageContent: data.attributes.PageContent.map( pageContent => ({
                                ...pageContent,
                                feature_1: {
                                    ...pageContent.feature_1,
                                    links: pageContent.feature_1.links.map( link => ({
                                        ...link,
                                        url: `${ API_STRAPI_URL }${ link.url }`
                                    }) )
                                },
                                feature_2: {
                                    ...pageContent.feature_2,
                                    links: pageContent.feature_2.links.map( link => ({
                                        ...link,
                                        url: `${ API_STRAPI_URL }${ link.url }`
                                    }) )
                                },
                                feature_3: {
                                    ...pageContent.feature_3,
                                    links: pageContent.feature_3.links.map( link => ({
                                        ...link,
                                        url: `${ API_STRAPI_URL }${ link.url }`
                                    }) )
                                },
                                headerImage: {
                                    data: {
                                        ...pageContent.headerImage.data,
                                        attributes: {
                                            ...pageContent.headerImage.data.attributes,
                                            url: `${ API_STRAPI_URL }${ pageContent.headerImage.data.attributes.url }`
                                        }
                                    }
                                }
                            }) )
                        }
                    };
                } else {
                    console.error( 'Invalid response format:', response.data );
                }
            } catch (error) {
                console.error( 'Error fetching page data:', error );
            } finally {
                this.loading = false;
            }
        },
    },
} );
