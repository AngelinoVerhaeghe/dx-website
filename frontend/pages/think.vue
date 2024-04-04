<script setup>
import { AdjustmentsVerticalIcon, LightBulbIcon, RocketLaunchIcon } from "@heroicons/vue/24/outline";

const title = ref('Think');
const description = ref('De juiste IT-strategie voor uw bedrijf');
const titleColor = 'text-dx-blue-darkest';
const features = [
    {
        name: 'Digital Transformation',
        bgColor: 'bg-dx-blue-darkest',
        textColor: 'text-dx-blue-darkest',
        description:
            'Een digitale transformatie betekent voor elk bedrijf iets anders. Wij denken met u mee en stellen samen met u een IT-roadmap volgens uw zakelijke noden op, die u helpt uw doelstellingen te bereiken.',
        href: '/think/digital-transformation',
        icon: LightBulbIcon,
    },
    {
        name: 'Vendor Selection',
        bgColor: 'bg-dx-blue-dark',
        textColor: 'text-dx-blue-dark',
        description:
            'Het zoeken en aankopen van de correcte software is een complex proces. Onze experten kunnen er u van A tot Z bij begeleiden.',
        href: '/build',
        icon: RocketLaunchIcon,
    },
    {
        name: 'Data Governance',
        bgColor: 'bg-sky-400',
        textColor: 'text-sky-400',
        description:
            'De juiste beslissingen nemen, doe je met de juiste data. DX-Solutions helpt u te evolueren naar een data first organisatie waarin de processen rond data helder omschreven zijn.',
        href: '/maintain',
        icon: AdjustmentsVerticalIcon,
    }
];
</script>

<template>
    <HeaderSection :features :title :description :titleColor />
    <SplitImageSection />
    <CallToActionSection />
</template>
