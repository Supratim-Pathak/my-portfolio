import React from "react";
import Head from "next/head";
interface Props {
  title: string;
}
export default function Seo({ title }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <p>Hello world!</p>
    </div>
  );
}
