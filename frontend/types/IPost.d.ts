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
        author: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        slug: string;
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
    };
}
