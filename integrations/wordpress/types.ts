/**
 * WordPress Types - WenderMedia Astro Components
 *
 * TypeScript definitions for WordPress REST API responses.
 */

export interface WPAuthor {
  id: number;
  name: string;
  slug: string;
  avatar_urls: Record<string, string>;
  description: string;
  link: string;
}

export interface WPFeaturedMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: Record<string, {
      source_url: string;
      width: number;
      height: number;
    }>;
  };
}

export interface WPPost {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: 'publish' | 'draft' | 'pending' | 'private' | 'future';
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  // Embedded data (when _embed is used)
  _embedded?: {
    author?: WPAuthor[];
    'wp:featuredmedia'?: WPFeaturedMedia[];
    'wp:term'?: Array<WPCategory[] | WPTag[]>;
  };
  // ACF fields (if Advanced Custom Fields is installed)
  acf?: Record<string, unknown>;
  // Yoast SEO data (if Yoast is installed)
  yoast_head_json?: WPYoastSEO;
}

export interface WPPage {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: 'publish' | 'draft' | 'pending' | 'private' | 'future';
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  template: string;
  _embedded?: {
    author?: WPAuthor[];
    'wp:featuredmedia'?: WPFeaturedMedia[];
  };
  acf?: Record<string, unknown>;
  yoast_head_json?: WPYoastSEO;
}

export interface WPCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: 'category';
  parent: number;
}

export interface WPTag {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: 'post_tag';
}

export interface WPMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: 'image' | 'file';
  mime_type: string;
  source_url: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    sizes: Record<string, {
      file: string;
      width: number;
      height: number;
      source_url: string;
      mime_type: string;
    }>;
  };
}

export interface WPMenuItem {
  id: number;
  title: string;
  url: string;
  target: string;
  attr_title: string;
  description: string;
  classes: string[];
  menu_item_parent: string;
  object_id: string;
  object: string;
  type: string;
  type_label: string;
  children?: WPMenuItem[];
}

export interface WPMenu {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  items: WPMenuItem[];
}

export interface WPSiteInfo {
  name: string;
  description: string;
  url: string;
  home: string;
  gmt_offset: number;
  timezone_string: string;
  site_logo: number;
  site_icon: number;
}

export interface WPYoastSEO {
  title: string;
  description: string;
  robots: {
    index: string;
    follow: string;
  };
  canonical: string;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: string;
  og_image?: Array<{
    url: string;
    width: number;
    height: number;
    type: string;
  }>;
  twitter_card: string;
  twitter_title: string;
  twitter_description: string;
  twitter_image?: string;
  schema?: Record<string, unknown>;
}

export interface WPQueryParams {
  page?: number;
  perPage?: number;
  search?: string;
  author?: number | number[];
  categories?: number | number[];
  categoriesExclude?: number | number[];
  tags?: number | number[];
  tagsExclude?: number | number[];
  slug?: string | string[];
  status?: string | string[];
  orderBy?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'title' | 'menu_order';
  order?: 'asc' | 'desc';
  sticky?: boolean;
  before?: string;
  after?: string;
  embed?: boolean;
}

export interface WPPaginatedResponse<T> {
  data: T[];
  total: number;
  totalPages: number;
  page: number;
  perPage: number;
}

export interface WPError {
  code: string;
  message: string;
  data: {
    status: number;
  };
}
