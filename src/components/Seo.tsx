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
        href="https://media.discordapp.net/attachments/870311702347018250/884454889240006716/Bugs_Banny-AdemCan.jpg"
      />
      <title>{title}</title>

      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      <meta name="description" content="supratim.vercel.app | Home " />
      <meta name="keywords" content="ademcan, frontend, ademcandev" />
      <meta name="theme-color" content="#41B883" />
      <meta
        property="og:image"
        content="https://media.discordapp.net/attachments/870311702347018250/884454889240006716/Bugs_Banny-AdemCan.jpg"
      />
    </Head>
  );
}
