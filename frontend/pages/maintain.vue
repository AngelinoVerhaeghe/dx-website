<script setup>
import { AdjustmentsVerticalIcon, LightBulbIcon, RocketLaunchIcon } from "@heroicons/vue/24/outline";

const title = ref('Maintain');
const description = ref('Onderhoud van uw applicatie.');
const titleColor = 'text-sky-400';
const features = [
    {
        name: 'Application Maintenance',
        bgColor: 'bg-dx-blue-darkest',
        textColor: 'text-dx-blue-darkest',
        description:
            'DX-Solutions geeft u de mogelijkheid om zorgeloos naar de toekomst te stappen met uw product door een team te voorzien die uw oplossing tot in de puntjes onderhoudt.',
        href: '/build/application-maintenance',
        icon: LightBulbIcon,
    },
    {
        name: 'Application Support',
        bgColor: 'bg-dx-blue-dark',
        textColor: 'text-dx-blue-dark',
        description:
            'DX-Solutions voorziet een team die uw software kent, op korte termijn change requests uitvoert, gemelde problemen en gebreken oplost en de nodige technische bijstand geeft.',
        href: '/build/application-support',
        icon: RocketLaunchIcon,
    },
    {
        name: 'Ongoing Development',
        bgColor: 'bg-sky-400',
        textColor: 'text-sky-400',
        description:
            'Bij DX-Solutions kunnen we een continue ontwikkeling van uw software garanderen en samen de vraag van uw klanten inlossen.',
        href: '/build/ongoing-development',
        icon: AdjustmentsVerticalIcon,
    }
];
</script>

<template>
    <HeaderSection :features :title :description :titleColor />
</template>
