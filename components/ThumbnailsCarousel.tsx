import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { Section } from './Section';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// Hardcoded list of files from public/thumbnails
const THUMBNAILS = [
    '/thumbnails/2.png',
    '/thumbnails/Generated Image December 02, 2025 - 3_38PM.png',
    '/thumbnails/PYR.png',
    '/thumbnails/Thumbnail Delfi.png',
    '/thumbnails/Thumbnails Pato 1 cp.png',
    '/thumbnails/Thumbnails Pato dia 3.png',
    '/thumbnails/Thumbnails Pato dia 4.png',
    '/thumbnails/Thumbnails Pato.png',
    '/thumbnails/baja.png',
    '/thumbnails/de compras final baja.png',
    '/thumbnails/delfi 2 cocina.png',
    '/thumbnails/delfi 2 idolo.png',
    '/thumbnails/delfi 2 miami 1.png',
    '/thumbnails/delfi 2.png',
    '/thumbnails/final bsas.png',
    '/thumbnails/final png.png',
    '/thumbnails/futttura 3.png',
    '/thumbnails/pre cumple baja.png'
];

export const ThumbnailsCarousel: React.FC = () => {
    const { t } = useTranslation();

    // Randomize order on mount
    const shuffledThumbnails = useMemo(() => {
        const array = [...THUMBNAILS];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }, []);

    return (
        <Section id="thumbnails" className="bg-zinc-950/50 py-16 border-t border-zinc-900 overflow-hidden">
            <div className="text-center mb-10">
                <h3 className="text-xl md:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary/80 to-secondary/80">
                    {t('thumbnails.title', { defaultValue: 'Producción Visual & Miniaturas' })}
                </h3>
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-4">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={2}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    speed={800}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false, // Shadows can sometimes look buggy on dark themes if not tuned
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.5,
                            spaceBetween: 20
                        },
                        640: {
                            slidesPerView: 2.5,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        }
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="thumbnails-swiper !pb-12"
                >
                    {shuffledThumbnails.map((src, index) => (
                        <SwiperSlide key={index} className="!w-[300px] md:!w-[400px] aspect-video rounded-xl overflow-hidden border border-zinc-800 shadow-2xl transition-all duration-300">
                            <img
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Custom Styles for Swiper adjustments */}
            <style>{`
                .thumbnails-swiper .swiper-slide {
                    opacity: 0.4;
                    filter: grayscale(80%);
                    transition: all 0.5s ease;
                }
                .thumbnails-swiper .swiper-slide-active {
                    opacity: 1;
                    filter: grayscale(0%);
                    transform: scale(1.1);
                    border-color: rgba(6, 182, 212, 0.5); /* Primary color border */
                    box-shadow: 0 0 30px rgba(6, 182, 212, 0.2);
                    z-index: 10;
                }
            `}</style>
        </Section>
    );
};
