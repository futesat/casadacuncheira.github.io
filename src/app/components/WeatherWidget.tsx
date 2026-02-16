import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function WeatherWidget() {
    const { t, language } = useLanguage();

    // Map app languages to Windy supported languages (best effort)
    const windyLang = language === 'gl' ? 'es' : language;

    return (
        <section id="weather" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
                        {t('weather.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
                        {t('weather.description')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-[250px] md:h-[185px] rounded-3xl overflow-hidden shadow-2xl border border-border"
                >
                    <iframe
                        key={windyLang}
                        src={`https://embed.windy.com/embed.html?type=forecast&location=coordinates&detail=true&detailLat=42.822&detailLon=-9.082&metricTemp=default&metricRain=default&metricWind=default&language=${windyLang}`}
                        frameBorder="0"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        title="Windy Weather Forecast"
                    ></iframe>

                    {/* Subtle Overlay to match premium aesthetic */}
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-3xl" />
                </motion.div>
            </div>
        </section>
    );
}
