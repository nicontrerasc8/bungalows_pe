import Head from 'next/head';
import React from 'react';

const MetaTags = ({title = 'Bungalows 🇵🇪 | Página web', description = 'Bungalows en la playa y en la selva del Perú.'}) => {
  return <Head>
       <title>{title}</title>
       <meta name="description" content={description}></meta>
  </Head>;
};

export default MetaTags;
