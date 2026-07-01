/**
 * ServiceSchema Stories - WenderMedia Astro Components
 *
 * Since ServiceSchema emits only a \`<script type="application/ld+json">\` tag with no
 * visible DOM, each story renders a documentation preview showing the JSON-LD object
 * the component would emit for the given args.
 *
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// ---------------------------------------------------------------------------
// Types mirrored from ServiceSchema.astro (kept in sync manually)
// ---------------------------------------------------------------------------

interface ServiceAreaItem {
  type?: 'Place' | 'City' | 'State' | 'Country' | 'AdministrativeArea';
  name: string;
}

interface ServiceProviderAddress {
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
}

interface ServiceProvider {
  name: string;
  url?: string;
  telephone?: string;
  email?: string;
  id?: string;
  address?: ServiceProviderAddress;
}

interface ServiceOffers {
  lowPrice?: number;
  highPrice?: number;
  priceCurrency?: string;
  offerCount?: number;
  availability?: string;
  priceRange?: string;
  valueAddedTaxIncluded?: boolean;
}

interface ServiceProperty {
  name: string;
  value: string;
}

interface ServiceSchemaArgs {
  name: string;
  description: string;
  serviceType?: string;
  areaServed?: ServiceAreaItem | ServiceAreaItem[] | string | string[];
  offers?: ServiceOffers;
  provider?: ServiceProvider;
  image?: string;
  url?: string;
  site?: string;
  additionalProperties?: ServiceProperty[];
}

// ---------------------------------------------------------------------------
// Helper: build the same JSON-LD object the component would emit
// (mirrors the logic in ServiceSchema.astro for story preview purposes)
// ---------------------------------------------------------------------------

function buildServiceSchema(args: ServiceSchemaArgs): Record<string, unknown> | null {
  const { name, description, serviceType, areaServed, offers = {}, provider, image, url, site, additionalProperties } = args;

  if (!name || !description) return null;

  const baseUrl = site ? new URL(site).origin : 'https://example.com';

  function toAbsolute(path: string | undefined): string | undefined {
    if (!path) return undefined;
    if (/^https?:\/\//i.test(path)) return path;
    return `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
  }

  const pageUrl = toAbsolute(url) ?? `${baseUrl}/service/`;
  const imageUrl = toAbsolute(image);

  type PlaceNode = { '@type': string; name: string };
  function toPlaceNode(item: ServiceAreaItem | string): PlaceNode {
    if (typeof item === 'string') return { '@type': 'Place', name: item };
    return { '@type': item.type ?? 'Place', name: item.name };
  }

  let typedAreaServed: PlaceNode | PlaceNode[] | undefined;
  if (areaServed !== undefined) {
    if (Array.isArray(areaServed)) {
      typedAreaServed = (areaServed as Array<ServiceAreaItem | string>).map(toPlaceNode);
    } else {
      typedAreaServed = toPlaceNode(areaServed as ServiceAreaItem | string);
    }
  }

  const currency = offers.priceCurrency ?? 'EUR';
  const availability = offers.availability ?? 'https://schema.org/InStock';
  const vatIncluded = offers.valueAddedTaxIncluded ?? false;

  let offersBlock: Record<string, unknown>;
  if (typeof offers.lowPrice === 'number' && typeof offers.highPrice === 'number') {
    offersBlock = {
      '@type': 'AggregateOffer',
      lowPrice: offers.lowPrice,
      highPrice: offers.highPrice,
      offerCount: offers.offerCount ?? 3,
      priceCurrency: currency,
      availability,
      priceSpecification: { '@type': 'UnitPriceSpecification', priceCurrency: currency, valueAddedTaxIncluded: vatIncluded },
    };
  } else {
    offersBlock = {
      '@type': 'Offer',
      priceCurrency: currency,
      availability,
      validFrom: new Date().toISOString().split('T')[0],
      priceSpecification: { '@type': 'UnitPriceSpecification', priceCurrency: currency, valueAddedTaxIncluded: vatIncluded },
    };
  }

  let providerBlock: Record<string, unknown> | undefined;
  if (provider) {
    const providerUrl = toAbsolute(provider.url);
    providerBlock = {
      '@type': 'LocalBusiness',
      '@id': provider.id ?? (providerUrl ? `${providerUrl}#organization` : undefined),
      name: provider.name,
      url: providerUrl,
      ...(provider.telephone ? { telephone: provider.telephone } : {}),
      ...(provider.email ? { email: provider.email } : {}),
      ...(provider.address
        ? {
            address: {
              '@type': 'PostalAddress',
              streetAddress: provider.address.streetAddress,
              addressLocality: provider.address.addressLocality,
              addressRegion: provider.address.addressRegion,
              postalCode: provider.address.postalCode,
              addressCountry: provider.address.addressCountry,
            },
          }
        : {}),
    };
  }

  type PropertyValueNode = { '@type': 'PropertyValue'; name: string; value: string };
  let additionalPropertyBlock: PropertyValueNode[] | undefined;
  if (additionalProperties && additionalProperties.length > 0) {
    additionalPropertyBlock = additionalProperties.map((p) => ({ '@type': 'PropertyValue' as const, name: p.name, value: p.value }));
  }

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name,
    description,
    ...(serviceType ? { serviceType } : {}),
    ...(providerBlock ? { provider: providerBlock } : {}),
    ...(typedAreaServed !== undefined ? { areaServed: typedAreaServed } : {}),
    offers: offersBlock,
    ...(imageUrl ? { image: { '@type': 'ImageObject', url: imageUrl, width: 1200, height: 630 } } : {}),
    ...(additionalPropertyBlock ? { additionalProperty: additionalPropertyBlock } : {}),
  };

  // Strip undefined
  function clean(obj: unknown): unknown {
    if (Array.isArray(obj)) return obj.map(clean);
    if (obj !== null && typeof obj === 'object') {
      return Object.fromEntries(
        Object.entries(obj as Record<string, unknown>)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, clean(v)])
      );
    }
    return obj;
  }
  return clean(schema) as Record<string, unknown>;
}

// ---------------------------------------------------------------------------
// Render helper — shows the emitted JSON-LD in a styled <pre> block
// ---------------------------------------------------------------------------

function renderPreview(args: ServiceSchemaArgs) {
  const schema = buildServiceSchema(args);

  if (!schema) {
    return html`
      <div style="padding: 2rem; font-family: system-ui, sans-serif;">
        <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; padding: 1.5rem; max-width: 48rem;">
          <p style="color: #dc2626; margin: 0; font-size: 0.875rem;">
            <strong>No output:</strong> <code>name</code> and <code>description</code> are required — component renders nothing when either is empty.
          </p>
        </div>
      </div>
    `;
  }

  const jsonText = JSON.stringify(schema, null, 2);

  return html`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 52rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.25rem;">JSON-LD: Service</h3>
        <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 1rem;">
          Renders a <code>&lt;script type="application/ld+json"&gt;</code> tag. No visible DOM is produced.
        </p>
        <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.375rem; font-size: 0.8125rem; overflow-x: auto; margin: 0; white-space: pre-wrap;">${jsonText}</pre>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta = {
  title: 'SEO/ServiceSchema',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Emits a \`schema.org/Service\` JSON-LD \`<script>\` tag for service pages.

**Features:**
- Typed \`Props\` interface — no free-form objects
- \`AggregateOffer\` when \`lowPrice\` + \`highPrice\` are provided; plain \`Offer\` otherwise
- \`areaServed\` accepts a string, string[], or typed \`ServiceAreaItem[]\`
- \`provider\` renders a \`LocalBusiness\` node with full PostalAddress
- \`additionalProperties\` maps to schema.org \`PropertyValue\` pairs
- All URL props resolved to absolute using the \`site\` prop (defaults to \`Astro.site\`)
- Renders nothing when \`name\` or \`description\` are empty
        `,
      },
    },
  },
  argTypes: {
    name: { control: 'text', description: 'Service name (required)' },
    description: { control: 'text', description: 'Service description (required)' },
    serviceType: { control: 'text', description: 'schema.org serviceType string' },
    url: { control: 'text', description: 'Canonical URL for this service page' },
    site: { control: 'text', description: 'Base URL for resolving relative paths' },
    image: { control: 'text', description: 'Hero/OG image URL (relative or absolute)' },
  },
};

export default meta;
type Story = StoryObj;

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/** Minimal required fields — plain Offer, no provider, no areaServed. */
export const Minimal: Story = {
  args: {
    name: 'Webdesign',
    description: 'Professionelle Websites fuer kleine und mittelstaendische Unternehmen.',
    site: 'https://www.wendermedia.com',
    url: '/webdesign/',
  } satisfies ServiceSchemaArgs,
  render: (args) => renderPreview(args as ServiceSchemaArgs),
};

/** Full example: AggregateOffer, provider with address, areaServed array, image, additionalProperties. */
export const Full: Story = {
  args: {
    name: 'SEO-Beratung Halle',
    description: 'Professionelle Suchmaschinenoptimierung fuer Unternehmen in Halle (Saale) und Umgebung.',
    serviceType: 'SearchEngineOptimizationService',
    url: '/suchmaschinenoptimierung/',
    site: 'https://www.wendermedia.com',
    image: '/images/seo-beratung.webp',
    areaServed: [
      { type: 'City', name: 'Halle (Saale)' },
      { type: 'State', name: 'Sachsen-Anhalt' },
      { type: 'Country', name: 'Deutschland' },
    ],
    provider: {
      name: 'Wender Media',
      url: 'https://www.wendermedia.com',
      telephone: '+49 30 1234567',
      email: 'info@wendermedia.com',
      address: {
        streetAddress: 'Example Street 1',
        addressLocality: 'Halle (Saale)',
        addressRegion: 'Sachsen-Anhalt',
        postalCode: '06110',
        addressCountry: 'DE',
      },
    },
    offers: {
      lowPrice: 499,
      highPrice: 999,
      priceCurrency: 'EUR',
      offerCount: 3,
      valueAddedTaxIncluded: false,
    },
    additionalProperties: [
      { name: 'Beratungstermin', value: 'Kostenlos & unverbindlich' },
      { name: 'Antwortzeit', value: 'Innerhalb 24 Stunden' },
    ],
  } satisfies ServiceSchemaArgs,
  render: (args) => renderPreview(args as ServiceSchemaArgs),
};

/** Single string shorthand for areaServed, no provider block. */
export const SingleArea: Story = {
  args: {
    name: 'Logo-Design',
    description: 'Individuelles Corporate-Identity-Design fuer Ihr Unternehmen.',
    serviceType: 'GraphicDesignService',
    url: '/logo-design/',
    site: 'https://www.wendermedia.com',
    areaServed: 'Deutschland',
    offers: {
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
  } satisfies ServiceSchemaArgs,
  render: (args) => renderPreview(args as ServiceSchemaArgs),
};

/** Empty required fields — component renders nothing. */
export const Empty: Story = {
  args: {
    name: '',
    description: '',
    site: 'https://www.wendermedia.com',
  } satisfies ServiceSchemaArgs,
  render: (args) => renderPreview(args as ServiceSchemaArgs),
};
