import {useTranslations} from "next-intl";
import type {SectionRendererOptions} from "@/components/blocks/index";
import type {BannerComponent} from "@turbonized-strapi/backend"

export default function Banner(props: BannerComponent & SectionRendererOptions) {
    const t = useTranslations('blocks.banner');

    return <section>
        <h2 className="text-center">
            {t('example')}
        </h2>

        <div className="w-full aspect-video grid place-content-center">
            {props.slides.map((slide, index) => (
                <div key={index}>
                    {slide.title}
                </div>
            ))}
        </div>
    </section>
}