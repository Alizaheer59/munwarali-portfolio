import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url, type = "website", schema }) {
  const siteName = "Mohammed Munwar Ali Zaheer | AI-first digital marketing professional";
  const defaultDesc = "Digital Marketing, SEO, GEO, AEO, AI Automation and Content Strategy Professional helping brands grow through AI-powered marketing systems.";
  const canonical = url || "https://munwarali.in";

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDesc} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description || defaultDesc} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
