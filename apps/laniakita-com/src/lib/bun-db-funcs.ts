/* eslint-disable no-console -- we're not in the browser, so this is fine. */
import { eq, desc } from 'drizzle-orm';
import { maindb } from '@/lib/db/bun-db';
import { type Authors, authors } from '@/lib/db/schema/authors';
import { type Tags, tags } from '@/lib/db/schema/tags';
import { type Posts, posts, postsToTags } from '@/lib/db/schema/posts';
import { type FeaturedImages, featuredImages } from '@/lib/db/schema/featured-images';

export async function insertAuthors(data: Authors) {
  if (!data.id) {
    console.error('no author id! did you forget something?');
    return;
  }
  const authorData = data;

  await maindb
    .insert(authors)
    .values({
      id: authorData.id,
      slug: authorData.slug,
      date: authorData.date.toUTCString(),
      name: authorData.name,
      mastodon: authorData.mastodon,
      localKey: authorData.localKey,
      rawStr: authorData.rawStr,
    })
    .onConflictDoUpdate({
      target: authors.id,
      set: {
        slug: authorData.slug,
        date: authorData.date.toUTCString(),
        name: authorData.name,
        mastodon: authorData.mastodon,
        localKey: authorData.localKey,
        rawStr: authorData.rawStr,
      },
    });
  console.log('inserted', authorData.name, 'into db');
}

export async function insertTags(data: Tags) {
  if (!data.id) {
    console.error('no tag id! did you forget something?');
    return;
  }
  const tagData = data;

  await maindb
    .insert(tags)
    .values({
      id: tagData.id,
      slug: tagData.slug,
      date: tagData.date.toUTCString(),
      title: tagData.title,
      localKey: tagData.localKey,
      rawStr: tagData.rawStr,
    })
    .onConflictDoUpdate({
      target: tags.id,
      set: {
        slug: tagData.slug,
        date: tagData.date.toUTCString(),
        title: tagData.title,
        localKey: tagData.localKey,
        rawStr: tagData.rawStr,
      },
    });

  console.log('inserted', tagData.title, 'into db');
}

export async function insertFeaturedImages(data: FeaturedImages) {
  if (!data.id) {
    console.error('no image id! did you forget something?');
    return;
  }
  const imgData = data;

  await maindb
    .insert(featuredImages)
    .values({
      id: imgData.id,
      slug: imgData.slug,
      date: imgData.date.toUTCString(),
      fileLocation: imgData.fileLocation,
      caption: imgData.caption,
      credit: imgData.credit,
      creditUrlText: imgData.creditUrlText,
      creditUrl: imgData.creditUrl,
      altText: imgData.altText,
      localKey: imgData.localKey,
      blur: imgData.blur,
      height: imgData.height,
      width: imgData.width,
      rawStr: imgData.rawStr,
    })
    .onConflictDoUpdate({
      target: featuredImages.id,
      set: {
        slug: imgData.slug,
        date: imgData.date.toUTCString(),
        fileLocation: imgData.fileLocation,
        caption: imgData.caption,
        credit: imgData.credit,
        creditUrlText: imgData.creditUrlText,
        creditUrl: imgData.creditUrl,
        altText: imgData.altText,
        localKey: imgData.localKey,
        blur: imgData.blur,
        height: imgData.height,
        width: imgData.width,
        rawStr: imgData.rawStr,
      },
    });

  console.log('inserted', imgData.slug, 'into db');
}

export async function insertPosts(data: Posts) {
  if (!data.id) {
    console.error('no post id! Did you forget something?');
    return;
  }
  const postData = data;

  const authorIdRes = await maindb.query.authors.findFirst({
    where: eq(authors.slug, postData.author),
    columns: {
      id: true,
    },
  });

  await Promise.all(
    postData.tags.map(async (tagSlug) => {
      const res = await maindb.query.tags.findFirst({
        where: eq(tags.slug, tagSlug),
        columns: {
          id: true,
        },
      });
      if (!(res && 'id' in res)) return;

      await maindb
        .insert(postsToTags)
        .values({ postId: postData.id, tagId: res.id })
        .onConflictDoUpdate({
          target: [postsToTags.postId, postsToTags.tagId],
          set: { postId: postData.id, tagId: res.id },
        });

      console.log('associated', tagSlug, 'with', postData.slug, 'in db');
    }),
  );

  const featuredImageIdRes = await maindb.query.featuredImages.findFirst({
    where: eq(featuredImages.slug, postData.featuredImage),
    columns: {
      id: true,
    },
  });

  if (!(authorIdRes && 'id' in authorIdRes)) {
    console.error('Could not retrieve author id from slug! Did you forget something?');
    return;
  }

  if (
    typeof postData.featuredImage === 'string' &&
    postData.featuredImage.length >= 1 &&
    !(featuredImageIdRes && 'id' in featuredImageIdRes)
  ) {
    console.error('Could not retrieve image id from slug! Did you forget something?');
    return;
  }

  console.log(authorIdRes.id, 'is author id');
  featuredImageIdRes && featuredImageIdRes.id.length >= 1 && console.log(featuredImageIdRes.id, 'is image id');

  await maindb
    .insert(posts)
    .values({
      id: postData.id,
      authorId: authorIdRes.id,
      slug: postData.slug,
      date: postData.date.toUTCString(),
      headline: postData.headline,
      subheadline: postData.subheadline,
      featuredImageId: featuredImageIdRes?.id,
      altCaption: postData.altCaption,
      localKey: postData.localKey,
      rawStr: postData.rawStr,
    })
    .onConflictDoUpdate({
      target: posts.id,
      set: {
        authorId: authorIdRes.id,
        slug: postData.slug,
        date: postData.date.toUTCString(),
        headline: postData.headline,
        subheadline: postData.subheadline,
        featuredImageId: featuredImageIdRes?.id,
        altCaption: postData.altCaption,
        localKey: postData.localKey,
        rawStr: postData.rawStr,
      },
    });
  console.log('inserted', postData.slug, 'into db');
}


export const queryPostMetasBun = async () => {
  const postRes = await maindb.query.posts.findMany({
    orderBy: [desc(posts.date)],
    columns: {
      authorId: false,
      featuredImageId: false,
      rawStr: false,
    },
    with: {
      author: {
        columns: {
          name: true,
        },
      },
      postToTags: {
        columns: {
          tagId: false,
          postId: false,
        },
        with: {
          tag: {
            columns: {
              slug: true,
              title: true,
              id: true,
            },
          },
        },
      },
      featuredImage: {
        columns: {
          fileLocation: true,
          altText: true,
          blur: true,
          height: true,
          width: true,
        },
      },
    },
  });
  const finalRes = postRes.map((post) => {
    const tagsOne = post.postToTags.map((tagsObj) => {
      const slug = tagsObj.tag.slug;
      const title = tagsObj.tag.title;
      const id = tagsObj.tag.id;

      return { slug, title, id };
    });
    delete (post as unknown as { postToTags: Record<string, unknown> | undefined }).postToTags;
    return { ...post, tags: tagsOne };
  });
  //console.dir(finalRes, { depth: null });
  return finalRes;
};