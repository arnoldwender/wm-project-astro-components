# WordPress Headless Integration

Complete toolkit for connecting Astro to WordPress as a headless CMS.

## Installation

```bash
npm install @wendermedia/astro-components
```

## Quick Start

```ts
// src/lib/wordpress.ts
import { createWordPressClient } from '@wendermedia/astro-components/integrations/wordpress';

export const wp = createWordPressClient({
  url: import.meta.env.WORDPRESS_URL || 'https://your-site.com',
});
```

## Fetching Posts

```astro
---
// src/pages/blog/index.astro
import { fetchPosts, getPostFeaturedImage, getPostAuthor } from '@wendermedia/astro-components/integrations/wordpress';
import { wp } from '../../lib/wordpress';
import BaseLayout from '../../layouts/BaseLayout.astro';

const { data: posts, total, totalPages } = await fetchPosts(wp, {
  perPage: 10,
  page: 1,
});
---

<BaseLayout title="Blog">
  <h1>Blog</h1>
  <p>{total} Beiträge gefunden</p>

  <div class="posts-grid">
    {posts.map((post) => {
      const image = getPostFeaturedImage(post);
      const author = getPostAuthor(post);

      return (
        <article class="post-card">
          {image && <img src={image.url} alt={image.alt} />}
          <h2>{post.title.rendered}</h2>
          <Fragment set:html={post.excerpt.rendered} />
          {author && <p>Von {author.name}</p>}
          <a href={`/blog/${post.slug}`}>Weiterlesen</a>
        </article>
      );
    })}
  </div>
</BaseLayout>
```

## Single Post Page

```astro
---
// src/pages/blog/[slug].astro
import { fetchPostBySlug, getPostSEO, getPostCategories } from '@wendermedia/astro-components/integrations/wordpress';
import { wp } from '../../lib/wordpress';
import BaseLayout from '../../layouts/BaseLayout.astro';

const { slug } = Astro.params;
const post = await fetchPostBySlug(wp, slug!);

if (!post) {
  return Astro.redirect('/404');
}

const seo = getPostSEO(post);
const categories = getPostCategories(post);
---

<BaseLayout
  title={seo?.title || post.title.rendered}
  description={seo?.description}
>
  <article>
    <h1>{post.title.rendered}</h1>

    <div class="categories">
      {categories.map((cat) => (
        <a href={`/kategorie/${cat.slug}`}>{cat.name}</a>
      ))}
    </div>

    <div class="content" set:html={post.content.rendered} />
  </article>
</BaseLayout>
```

## Static Site Generation

```astro
---
// src/pages/blog/[slug].astro
import { fetchPosts, fetchPostBySlug } from '@wendermedia/astro-components/integrations/wordpress';
import { wp } from '../../lib/wordpress';

export async function getStaticPaths() {
  const allPosts: WPPost[] = [];
  let page = 1;
  let hasMore = true;

  // Fetch all posts for SSG
  while (hasMore) {
    const { data, totalPages } = await fetchPosts(wp, { page, perPage: 100 });
    allPosts.push(...data);
    hasMore = page < totalPages;
    page++;
  }

  return allPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
---
```

## Navigation Menus

```astro
---
// src/components/Header.astro
import { fetchMenu, transformMenuToNav } from '@wendermedia/astro-components/integrations/wordpress';
import { wp } from '../lib/wordpress';

const menu = await fetchMenu(wp, 'primary');
const navItems = menu ? transformMenuToNav(menu.items, {
  activeUrl: Astro.url.pathname,
  baseUrl: import.meta.env.WORDPRESS_URL,
}) : [];
---

<nav>
  <ul>
    {navItems.map((item) => (
      <li>
        <a
          href={item.href}
          class:list={{ active: item.isActive }}
          target={item.isExternal ? '_blank' : undefined}
          rel={item.isExternal ? 'noopener noreferrer' : undefined}
        >
          {item.label}
        </a>

        {item.children && (
          <ul class="submenu">
            {item.children.map((child) => (
              <li>
                <a href={child.href}>{child.label}</a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
</nav>
```

## Categories & Tags

```astro
---
import { fetchCategories, fetchCategoryBySlug, fetchPostsByCategory } from '@wendermedia/astro-components/integrations/wordpress';
import { wp } from '../lib/wordpress';

// Get all categories
const { data: categories } = await fetchCategories(wp);

// Get posts by category
const category = await fetchCategoryBySlug(wp, 'news');
if (category) {
  const { data: posts } = await fetchPostsByCategory(wp, category.id);
}
---
```

## Environment Variables

```env
# .env
WORDPRESS_URL=https://your-wordpress-site.com
WORDPRESS_USER=api_user
WORDPRESS_APP_PASSWORD=xxxx xxxx xxxx xxxx xxxx xxxx
```

```ts
// src/lib/wordpress.ts
import { createWordPressClient } from '@wendermedia/astro-components/integrations/wordpress';

export const wp = createWordPressClient({
  url: import.meta.env.WORDPRESS_URL,
  // Optional: for protected endpoints
  username: import.meta.env.WORDPRESS_USER,
  password: import.meta.env.WORDPRESS_APP_PASSWORD,
  // Cache for 5 minutes
  cacheDuration: 300,
});
```

## Required WordPress Plugins

For full functionality, install these plugins:

1. **WP REST API Menus** - Exposes navigation menus
2. **Advanced Custom Fields (ACF)** - Custom fields support
3. **Yoast SEO** - SEO meta data in REST API
4. **Application Passwords** - Secure API authentication (built into WP 5.6+)

## Type Safety

All functions are fully typed. Import types as needed:

```ts
import type {
  WPPost,
  WPPage,
  WPCategory,
  WPTag,
  WPMedia,
  WPMenu,
  WPMenuItem,
} from '@wendermedia/astro-components/integrations/wordpress';
```

## ACF Custom Fields

If using Advanced Custom Fields, access custom data via the `acf` property:

```astro
---
const post = await fetchPostBySlug(wp, 'example');

// Access ACF fields
const heroImage = post?.acf?.hero_image as string;
const relatedPosts = post?.acf?.related_posts as number[];
---
```

## Error Handling

```ts
import { checkWordPressConnection } from '@wendermedia/astro-components/integrations/wordpress';

const status = await checkWordPressConnection('https://your-site.com');

if (!status.connected) {
  console.error('WordPress not reachable:', status.error);
}

if (!status.restApiEnabled) {
  console.error('REST API not enabled');
}
```

## Caching

The client includes built-in caching. Configure duration:

```ts
const wp = createWordPressClient({
  url: 'https://your-site.com',
  cacheDuration: 300, // 5 minutes
});
```

Clear cache manually:

```ts
import { clearWordPressCache, clearWordPressCacheEntry } from '@wendermedia/astro-components/integrations/wordpress';

// Clear all cache
clearWordPressCache();

// Clear specific URL
clearWordPressCacheEntry('https://your-site.com/wp-json/wp/v2/posts');
```
