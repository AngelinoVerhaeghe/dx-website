<script setup>
import { AdjustmentsVerticalIcon, LightBulbIcon, RocketLaunchIcon } from "@heroicons/vue/24/outline";

const title = ref('Build');
const description = ref('Programmeren met Java, PHP of C#? OK!');
const titleColor = 'text-dx-blue-dark';
const features = [
    {
        name: 'Application Development',
        bgColor: 'bg-dx-blue-darkest',
        textColor: 'text-dx-blue-darkest',
        description:
            'Programmeren is onze core business. Wij ontwikkelen tools op uw maat, of het nu mobiele apps, portalen of low-code toepassingen zijn.',
        href: '/build/application-development',
        icon: LightBulbIcon,
    },
    {
        name: 'Team as a Service',
        bgColor: 'bg-dx-blue-dark',
        textColor: 'text-dx-blue-dark',
        description:
            'Met Team as a Service werken we samen met u aan de beste oplossing om uw bedrijf future proof te maken. Het kernwoord daarbij is samen.',
        href: '/build/team-as-a-service',
        icon: RocketLaunchIcon,
    },
    {
        name: 'Data Solutions',
        bgColor: 'bg-sky-400',
        textColor: 'text-sky-400',
        description:
            'Wij helpen u het maximale uit uw data te halen, door ze eenvoudig te ontsluiten, te ordenen, er inzicht in te krijgen en er artificiële intelligentie op toe te passen.',
        href: '/build/data-solutions',
        icon: AdjustmentsVerticalIcon,
    }
];
</script>

<template>
    <HeaderSection :features :title :description :titleColor />
</template>
