export interface IPage {
    id: number;
    attributes: {
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        PageContent: {
            id: number;
            __component: string;
            title: string;
            subTitle: string;
            feature_1: {
                id: number;
                title: string;
                label: string;
                subTitle: string;
                bgColor: string;
                textColor: string;
                url: string;
                icon: string;
                links: {
                    id: number;
                    label: string;
                    target: string;
                    url: string;
                }[];
            };
            feature_2: {
                id: number;
                title: string;
                label: string;
                subTitle: string;
                bgColor: string;
                textColor: string;
                url: string;
                icon: string;
                links: {
                    id: number;
                    label: string;
                    target: string;
                    url: string;
                }[];
            };
            feature_3: {
                id: number;
                title: string;
                label: string;
                subTitle: string;
                bgColor: string;
                textColor: string;
                url: string;
                icon: string;
                links: {
                    id: number;
                    label: string;
                    target: string;
                    url: string;
                }[];
            };
            headerImage: {
                data: {
                    id: number;
                    attributes: {
                        url: string;
                        alternativeText: string;
                    };
                };
            };
        }[];
    };
}
