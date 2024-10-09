import type { Metadata } from 'next';
import { allPages } from 'contentlayer/generated';
import { PageCommon } from '@/app/(content)/(info)/page-common';
import { descriptionHelper } from '@/lib/description-helper';

const data = allPages.find((page) => page.url === '/contact');
/* eslint-disable @typescript-eslint/no-unnecessary-condition -- testing */
const description = descriptionHelper(data?.body?.raw, data?.url, true);

export const metadata: Metadata = {
  title: data?.title,
  authors: [{ name: 'Lani Akita' }],
  description,
  openGraph: {
    title: data?.title,
    description,
    images: [
      {
        alt: `${data?.title}`,
        type: 'image/png',
        width: 1200,
        height: 630,
        url: `/opengraph/static/contact`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: data?.title,
    description,
    images: [
      {
        alt: `${data?.title}`,
        type: 'image/png',
        width: 1600,
        height: 900,
        url: `/opengraph/static/contact?twitter=true`,
      },
    ],
  },
};

export default function ContactPage() {
  return <PageCommon slug='contact' />;
}
