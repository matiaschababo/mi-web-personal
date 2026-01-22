import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import { Section } from './Section';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

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
        <Section id="thumbnails" className="bg-zinc-950/50 py-16 border-t border-zinc-900 overflow-hidden relative group/section">
            <div className="text-center mb-10">
                <h3 className="text-xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-200 to-secondary animate-gradient-x">
                    {t('thumbnails.title', { defaultValue: 'Best CTR Thumbnails' })}
                </h3>
            </div>

            <div className="w-full max-w-[1600px] mx-auto px-4 relative">
                {/* Navigation Buttons */}
                <button className="swiper-button-prev-custom absolute left-2 md:left-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 opacity-0 group-hover/section:opacity-100 translate-x-[-20px] group-hover/section:translate-x-0">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button className="swiper-button-next-custom absolute right-2 md:right-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 opacity-0 group-hover/section:opacity-100 translate-x-[20px] group-hover/section:translate-x-0">
                    <ChevronRight className="w-6 h-6" />
                </button>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={2}
                    loop={true}
                    observer={true}
                    observeParents={true}
                    loopedSlides={12} // Increased for fast scrolling stability
                    loopAdditionalSlides={5} // Buffer for fast swipes
                    slideToClickedSlide={true}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    speed={600} // Snappier recovery
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    breakpoints={{
                        640: {
                            spaceBetween: 30
                        },
                        1024: {
                            spaceBetween: 60
                        }
                    }}
                    modules={[EffectCoverflow, Autoplay, Navigation]}
                    className="thumbnails-swiper !pb-20 !pt-10 select-none"
                >
                    {shuffledThumbnails.map((src, index) => (
                        <SwiperSlide key={index} className="!w-[280px] md:!w-[500px] aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 transition-all duration-500 group relative">
                            <img
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            {/* Overlay for inactive slides - darker for better contrast */}
                            <div className="absolute inset-0 bg-black/70 group-[.swiper-slide-active]:bg-transparent transition-colors duration-500" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Custom Styles for Swiper adjustments */}
            <style>{`
                .thumbnails-swiper .swiper-slide {
                    opacity: 0.5;
                    transform: scale(0.9);
                    transition: all 0.5s ease;
                }
                .thumbnails-swiper .swiper-slide-active {
                    opacity: 1;
                    transform: scale(1.15) !important;
                    border-color: #06b6d4; /* Primary color */
                    box-shadow: 0 0 50px rgba(6, 182, 212, 0.4); /* Strong Glow */
                    z-index: 20;
                }
            `}</style>
        </Section>
    );
};
