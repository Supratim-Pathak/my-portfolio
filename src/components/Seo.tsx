import React from "react";
import Head from "next/head";
interface Props {
  title: string;
}
export default function Seo({ title }: Props) {
  return (
    <Head>
      <link
        rel="shortcut icon"
        href="/favicon-16x16.png"
      />

      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      <meta
        name="description"
        content="Supratim's personal portfolio showcasing web development projects, skills in Next.js, Node.js, and more. Explore my work and get in touch."
      />
      <meta
        name="keywords"
        content="Supratim Pathak, web developer, portfolio, Next.js, Node.js, JavaScript, React, Laravel, PHP, full stack developer, projects, API integration, shipment tracking system"
      />
      <meta name="theme-color" content="#41B883" />
      <meta
        property="og:image"
        content="/favicon-16x16.png"
      />
    </Head>
  );
}
