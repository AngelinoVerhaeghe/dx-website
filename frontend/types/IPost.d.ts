import type { IImageFormat } from "./IImageFormat";

export interface IPost {
    id: number;
    attributes: {
        title: string;
        content: {
            type: string;
            children: {
                type: string;
                text: string;
            }[];
        }[];
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        slug: string;
        date: string;
        isFeatured: boolean;
        image: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    alternativeText: string | null;
                    caption: string | null;
                    width: number;
                    height: number;
                    formats: {
                        thumbnail: IImageFormat;
                        small: IImageFormat;
                        medium: IImageFormat;
                        large: IImageFormat;
                    };
                    hash: string;
                    ext: string;
                    mime: string;
                    size: number;
                    url: string;
                    previewUrl: string | null;
                    provider: string;
                    provider_metadata: any | null;
                    createdAt: string;
                    updatedAt: string;
                };
            };
        };
        categories: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    slug: string;
                    createdAt: string;
                    updatedAt: string;
                    publishedAt: string;
                }
            }
        },
        author: {
            data: {
                id: number;
                attributes: {
                    username: string;
                    email: string;
                    provider: string;
                    confirmed: boolean;
                    blocked: boolean;
                    createdAt: string;
                    updatedAt: string;
                }
            }
        }
    };
}
