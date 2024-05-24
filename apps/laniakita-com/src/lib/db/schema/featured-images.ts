import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export interface FeaturedImages {
  id: string;
  slug: string;
  date: Date;
  title?: string;
  fileLocation: string;
  caption?: string;
  credit?: string;
  creditUrlText?: string;
  creditUrl?: string;
  altText?: string;
  blur?: string;
  height: number;
  width: number;
}

export const featuredImages = sqliteTable('featured_images', {
  id: text('id').primaryKey(),
  slug: text('slug').unique().notNull(),
  date: text('date'),
  title: text('title'),
  fileLocation: text('file_location'),
  caption: text('caption'),
  credit: text('credit'),
  creditUrlText: text('credit_url_text'),
  creditUrl: text('credit_url'),
  altText: text('alt_text'),
  blur: text('blur'),
  height: integer('height'),
  width: integer('width')
});