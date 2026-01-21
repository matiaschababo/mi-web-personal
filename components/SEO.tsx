import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    name?: string;
    type?: string;
    image?: string;
    url?: string;
}

export const SEO = ({
    title = 'Matias Chababo | Arquitecto de Ecosistemas Digitales',
    description = 'Transformo visiones complejas en realidades digitales escalables. Especialista en Marketing, IA, Web3 y Automatización.',
    name = 'Matias Chababo',
    type = 'website',
    image = '/og-image.jpg', // We should make sure this image exists or use a placeholder
    url = 'https://matiaschababo.com',
}: SEOProps) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel="canonical" href={url} />

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={name} />

            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};
