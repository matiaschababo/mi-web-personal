import React from 'react';
import { Home, ArrowRight } from 'lucide-react';

export const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-950">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full mix-blend-screen opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen opacity-50"></div>

            <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
                {/* Error Code */}
                <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600 mb-8 font-display tracking-tighter">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                    Segmentación Incorrecta
                </h2>
                <p className="text-zinc-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                    Esta página no está segmentada correctamente dentro de este ecosistema. Regresa al inicio para recalibrar la estrategia.
                </p>

                {/* Action Button */}
                <a
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-950 rounded-full font-medium hover:bg-zinc-200 transition-all hover:gap-4 group shadow-lg shadow-white/10"
                >
                    <Home className="w-5 h-5" />
                    <span>Volver al Inicio</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </a>
            </div>
        </div>
    );
};
