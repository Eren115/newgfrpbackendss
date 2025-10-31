import { CollectionConfig } from 'payload'

// import { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'tag', 'author', 'created_at', 'isActive', 'isFeatured'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeChange: [
      async ({ data, req, operation }) => {
        const baseUrl = process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:3001'

        // Ensure nested objects exist
        data.seo = data.seo || {}
        data.seo.urls = data.seo.urls || {}
        data.seo.open_graph = data.seo.open_graph || {}
        data.seo.twitter = data.seo.twitter || {}
        data.seo.schema = data.seo.schema || {}
        data.seo.schema.publisher = data.seo.schema.publisher || {}
        data.seo.schema.author_schema = data.seo.schema.author_schema || {}

        // 1. Auto-generate slug
        if (!data.slug && data.title) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
        }

        // 2. Auto-fill meta title/description
        if (!data.seo.meta_title && data.title) {
          data.seo.meta_title = data.title.substring(0, 60)
        }
        if (!data.seo.meta_description && data.description) {
          data.seo.meta_description = data.description.substring(0, 160)
        }

        // 3. Auto-fill canonical URL
        if (!data.seo.urls.canonical_url) {
          data.seo.urls.canonical_url = `${baseUrl}/blog/${data.slug}`
        }

        // 4. Auto-fill OG & Twitter images
        if (!data.seo.open_graph.og_image && data.image) {
          data.seo.open_graph.og_image = data.image
        }
        if (!data.seo.twitter.twitter_image && data.image) {
          data.seo.twitter.twitter_image = data.image
        }

        // 5. Auto-fill Open Graph fallbacks
        if (!data.seo.open_graph.og_title) {
          data.seo.open_graph.og_title = data.seo.meta_title || data.title
        }
        if (!data.seo.open_graph.og_description) {
          data.seo.open_graph.og_description = data.seo.meta_description || data.description
        }

        // 6. Auto-fill Twitter fallbacks
        if (!data.seo.twitter.twitter_title) {
          data.seo.twitter.twitter_title = data.seo.meta_title || data.title
        }
        if (!data.seo.twitter.twitter_description) {
          data.seo.twitter.twitter_description = data.seo.meta_description || data.description
        }

        // 7. Auto-fill publisher (if not set)
        if (!data.seo.schema.publisher.name) {
          data.seo.schema.publisher.name = 'Your Company Name'
          data.seo.schema.publisher.url = baseUrl
          // Logo should be set in Globals
        }

        // 8. Auto-fill author schema from author group
        if (data.author?.name) {
          data.seo.schema.author_schema = {
            ...data.seo.schema.author_schema,
            name: data.author.name,
            image: data.author.profile_picture,
            // Add author page URL if you have one
            // url: `${baseUrl}/author/${data.author.name.toLowerCase().replace(/\s+/g, '-')}`
          }
        }

        // 9. Auto-generate Breadcrumb Schema
        data.seo.schema.breadcrumb_schema = [
          { name: 'Home', item: baseUrl },
          { name: 'Blog', item: `${baseUrl}/blog` },
          { name: data.title, item: `${baseUrl}/blog/${data.slug}` },
        ]

        // 10. Auto-calculate word count & reading time
        let wordCount = 0
        if (data.content?.root?.children) {
          const countWords = (node: any) => {
            if (node.type === 'text' && node.text) {
              wordCount += node.text.trim().split(/\s+/).filter(Boolean).length
            }
            if (node.children) node.children.forEach(countWords)
          }
          data.content.root.children.forEach(countWords)
        }

        data.seo.schema.word_count = wordCount
        data.seo.schema.time_required = `PT${Math.ceil(wordCount / 238)}M` // 238 WPM avg

        // 11. Auto-update modified time & last_modified
        const now = new Date().toISOString()
        data.seo.schema.modified_time = now
        data.seo.sitemap = data.seo.sitemap || {}
        data.seo.sitemap.last_modified = now

        return data
      },
    ],
  },
  fields: [
    // === BASIC INFO ===
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },

    // === CONTENT ===
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Auto-generated from title. Edit only if needed.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },

    // === MEDIA ===
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    // === METADATA ===
    {
      name: 'tag',
      type: 'text',
      required: true,
    },
    {
      name: 'min_read',
      type: 'number',
      required: true,
      defaultValue: 5,
    },
    {
      name: 'created_at',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: {
        date: { displayFormat: 'MMM d, yyyy' },
      },
    },

    // === AUTHOR ===
    {
      name: 'author',
      type: 'group',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'profile_picture', type: 'upload', relationTo: 'media', required: true },
        { name: 'bio', type: 'textarea' },
      ],
    },

    // === RELATED BLOGS ===
    {
      name: 'related_blogs',
      type: 'relationship',
      relationTo: 'blogs',
      hasMany: true,
      maxRows: 3,
    },

    // === ULTIMATE SEO CONFIGURATION ===
    {
      name: 'seo',
      type: 'group',
      label: 'SEO & Metadata',
      admin: {
        description: 'Complete SEO optimization for maximum search visibility',
      },
      fields: [
        // 1. PRIMARY META TAGS
        {
          name: 'meta_title',
          type: 'text',
          maxLength: 60,
          admin: {
            description: 'PRIMARY SEO TITLE (50-60 chars optimal)',
            placeholder: 'Auto-fills from blog title',
            components: {
              afterInput: [
                {
                  path: '@/components/CharCounter',
                  clientProps: { max: 60, optimal: { min: 50, max: 60 } },
                },
              ],
            },
          },
        },
        {
          name: 'meta_description',
          type: 'textarea',
          maxLength: 160,
          admin: {
            description: 'PRIMARY META DESCRIPTION (150-160 chars)',
            placeholder: 'Auto-fills from blog description',
            components: {
              afterInput: [
                {
                  path: '@/components/CharCounter',
                  clientProps: { max: 160, optimal: { min: 150, max: 160 } },
                },
              ],
            },
          },
        },

        // 2. KEYWORD OPTIMIZATION
        {
          name: 'keyword_optimization',
          type: 'group',
          label: 'Keyword Strategy',
          fields: [
            { name: 'primary_keyword', type: 'text', required: true },
            {
              name: 'secondary_keywords',
              type: 'array',
              maxRows: 5,
              fields: [{ name: 'keyword', type: 'text', required: true }],
            },
            {
              name: 'long_tail_keywords',
              type: 'array',
              maxRows: 10,
              fields: [{ name: 'keyword', type: 'text', required: true }],
            },
            {
              name: 'keyword_density_target',
              type: 'number',
              defaultValue: 1.5,
              min: 0.5,
              max: 3,
              step: 0.1,
            },
            { name: 'lsi_keywords', type: 'textarea' },
          ],
        },

        // 3. OPEN GRAPH
        {
          name: 'open_graph',
          type: 'group',
          label: 'Open Graph (Facebook/LinkedIn)',
          fields: [
            { name: 'og_title', type: 'text', maxLength: 95 },
            { name: 'og_description', type: 'textarea', maxLength: 200 },
            { name: 'og_image', type: 'upload', relationTo: 'media' },
            { name: 'og_image_alt', type: 'text' },
            {
              name: 'og_type',
              type: 'select',
              defaultValue: 'article',
              options: [
                { label: 'Article', value: 'article' },
                { label: 'Website', value: 'website' },
              ],
            },
            { name: 'og_locale', type: 'text', defaultValue: 'en_US' },
            { name: 'og_site_name', type: 'text' },
            { name: 'article_section', type: 'text' },
            {
              name: 'article_tags',
              type: 'array',
              fields: [{ name: 'tag', type: 'text' }],
            },
          ],
        },

        // 4. TWITTER CARD
        {
          name: 'twitter',
          type: 'group',
          label: 'Twitter Card (X)',
          fields: [
            {
              name: 'twitter_card_type',
              type: 'select',
              defaultValue: 'summary_large_image',
              options: [
                { label: 'Summary Large Image', value: 'summary_large_image' },
                { label: 'Summary', value: 'summary' },
              ],
            },
            { name: 'twitter_title', type: 'text', maxLength: 70 },
            { name: 'twitter_description', type: 'textarea', maxLength: 200 },
            { name: 'twitter_image', type: 'upload', relationTo: 'media' },
            { name: 'twitter_image_alt', type: 'text' },
            { name: 'twitter_site', type: 'text', placeholder: '@yourcompany' },
            { name: 'twitter_creator', type: 'text', placeholder: '@author' },
          ],
        },

        // 5. SCHEMA.ORG
        {
          name: 'schema',
          type: 'group',
          label: 'Schema.org (Rich Results)',
          fields: [
            { name: 'enable_schema', type: 'checkbox', defaultValue: true },
            {
              name: 'article_type',
              type: 'select',
              defaultValue: 'BlogPosting',
              options: [
                { label: 'BlogPosting', value: 'BlogPosting' },
                { label: 'Article', value: 'Article' },
                { label: 'NewsArticle', value: 'NewsArticle' },
              ],
            },
            { name: 'headline', type: 'text', maxLength: 110 },
            { name: 'word_count', type: 'number', admin: { readOnly: true } },
            { name: 'time_required', type: 'text', admin: { readOnly: true } },
            {
              name: 'publisher',
              type: 'group',
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'logo', type: 'upload', relationTo: 'media', required: true },
                { name: 'logo_width', type: 'number' },
                { name: 'logo_height', type: 'number' },
                { name: 'url', type: 'text' },
              ],
            },
            {
              name: 'author_schema',
              type: 'group',
              fields: [
                {
                  name: 'author_type',
                  type: 'select',
                  defaultValue: 'Person',
                  options: [
                    { label: 'Person', value: 'Person' },
                    { label: 'Organization', value: 'Organization' },
                  ],
                },
                { name: 'author_url', type: 'text' },
                { name: 'author_job_title', type: 'text' },
                {
                  name: 'author_social_profiles',
                  type: 'array',
                  fields: [{ name: 'url', type: 'text' }],
                },
              ],
            },
            { name: 'modified_time', type: 'date', admin: { readOnly: true } },
            {
              name: 'image_schema',
              type: 'array',
              maxRows: 5,
              fields: [
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'caption', type: 'text' },
              ],
            },
            {
              name: 'faq_schema',
              type: 'array',
              fields: [
                { name: 'question', type: 'text', required: true },
                { name: 'answer', type: 'textarea', required: true },
              ],
            },
            {
              name: 'breadcrumb_schema',
              type: 'array',
              admin: { readOnly: true },
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'item', type: 'text', required: true },
              ],
            },
          ],
        },

        // 6. ROBOTS & INDEXING
        {
          name: 'robots',
          type: 'group',
          label: 'Robots & Indexing',
          fields: [
            {
              name: 'index',
              type: 'select',
              defaultValue: 'index',
              options: [
                { label: 'Index', value: 'index' },
                { label: 'Noindex', value: 'noindex' },
              ],
            },
            {
              name: 'follow',
              type: 'select',
              defaultValue: 'follow',
              options: [
                { label: 'Follow', value: 'follow' },
                { label: 'Nofollow', value: 'nofollow' },
              ],
            },
          ],
        },

        // 7. CANONICAL & URLS
        {
          name: 'urls',
          type: 'group',
          label: 'Canonical & Alternate URLs',
          fields: [
            { name: 'canonical_url', type: 'text', admin: { readOnly: true } },
            {
              name: 'alternate_languages',
              type: 'array',
              fields: [
                { name: 'language_code', type: 'text' },
                { name: 'url', type: 'text' },
              ],
            },
          ],
        },

        // 8. SITEMAP
        {
          name: 'sitemap',
          type: 'group',
          label: 'Sitemap & Crawling',
          fields: [
            { name: 'include_in_sitemap', type: 'checkbox', defaultValue: true },
            {
              name: 'sitemap_priority',
              type: 'number',
              defaultValue: 0.7,
              min: 0,
              max: 1,
              step: 0.1,
            },
            {
              name: 'change_frequency',
              type: 'select',
              defaultValue: 'weekly',
              options: [
                { label: 'Weekly', value: 'weekly' },
                { label: 'Daily', value: 'daily' },
                { label: 'Monthly', value: 'monthly' },
              ],
            },
            { name: 'last_modified', type: 'date', admin: { readOnly: true } },
          ],
        },

        {
          name: 'link_management',
          type: 'group',
          label: '🔗 Links & Redirects',
          fields: [
            {
              name: 'redirect_type',
              type: 'select',
              options: [
                { label: 'None (No Redirect)', value: 'none' },
                { label: '301 Permanent Redirect', value: '301' },
                { label: '302 Temporary Redirect', value: '302' },
                { label: '307 Temporary Redirect (Preserve Method)', value: '307' },
                { label: '308 Permanent Redirect (Preserve Method)', value: '308' },
              ],
              defaultValue: 'none',
              admin: {
                description: 'Redirect this URL to another page',
              },
            },
            {
              name: 'redirect_url',
              type: 'text',
              admin: {
                condition: (data) => data.seo?.link_management?.redirect_type !== 'none',
                description: 'Destination URL for redirect',
                placeholder: 'https://yoursite.com/new-url',
              },
            },
            {
              name: 'external_links_policy',
              type: 'select',
              defaultValue: 'nofollow',
              options: [
                { label: 'Follow all external links', value: 'follow' },
                { label: 'Nofollow all external links', value: 'nofollow' },
                { label: 'Sponsored (for paid links)', value: 'sponsored' },
                { label: 'UGC (User Generated Content)', value: 'ugc' },
              ],
              admin: {
                description: 'Default policy for external links',
              },
            },
          ],
        },

        // ============================================
        // 10. CONTENT ANALYSIS & READABILITY
        // ============================================
        {
          name: 'content_analysis',
          type: 'group',
          label: '📊 Content Analysis',
          admin: {
            description: 'AI-powered content quality metrics',
          },
          fields: [
            {
              name: 'readability_score',
              type: 'number',
              admin: {
                description: 'Flesch Reading Ease score (60-70 = Standard, 70-80 = Easy)',
                readOnly: true,
              },
            },
            {
              name: 'grade_level',
              type: 'text',
              admin: {
                description: 'Reading grade level (e.g., "8th Grade")',
                readOnly: true,
              },
            },
            {
              name: 'sentence_count',
              type: 'number',
              admin: {
                description: 'Total sentences',
                readOnly: true,
              },
            },
            {
              name: 'paragraph_count',
              type: 'number',
              admin: {
                description: 'Total paragraphs',
                readOnly: true,
              },
            },
            {
              name: 'keyword_density',
              type: 'number',
              admin: {
                description: 'Actual keyword density %',
                readOnly: true,
              },
            },
            {
              name: 'internal_links_count',
              type: 'number',
              admin: {
                description: 'Number of internal links (3-10 recommended)',
                readOnly: true,
              },
            },
            {
              name: 'external_links_count',
              type: 'number',
              admin: {
                description: 'Number of external links (1-5 recommended)',
                readOnly: true,
              },
            },
            {
              name: 'images_count',
              type: 'number',
              admin: {
                description: 'Number of images',
                readOnly: true,
              },
            },
            {
              name: 'images_with_alt_count',
              type: 'number',
              admin: {
                description: 'Images with alt text',
                readOnly: true,
              },
            },
          ],
        },

        // ============================================
        // 11. SEO SCORE & RECOMMENDATIONS
        // ============================================
        {
          name: 'seo_score',
          type: 'group',
          label: '⭐ SEO Score & Health',
          admin: {
            description: 'Overall SEO performance metrics',
          },
          fields: [
            {
              name: 'overall_score',
              type: 'number',
              min: 0,
              max: 100,
              admin: {
                description: '🎯 Overall SEO Score (0-100)',
                readOnly: true,
              },
            },
            {
              name: 'score_breakdown',
              type: 'group',
              fields: [
                {
                  name: 'title_score',
                  type: 'number',
                  admin: { readOnly: true, description: 'Title optimization (0-100)' },
                },
                {
                  name: 'description_score',
                  type: 'number',
                  admin: { readOnly: true, description: 'Description optimization (0-100)' },
                },
                {
                  name: 'keyword_score',
                  type: 'number',
                  admin: { readOnly: true, description: 'Keyword optimization (0-100)' },
                },
                {
                  name: 'content_score',
                  type: 'number',
                  admin: { readOnly: true, description: 'Content quality (0-100)' },
                },
                {
                  name: 'technical_score',
                  type: 'number',
                  admin: { readOnly: true, description: 'Technical SEO (0-100)' },
                },
                {
                  name: 'mobile_score',
                  type: 'number',
                  admin: { readOnly: true, description: 'Mobile optimization (0-100)' },
                },
                {
                  name: 'accessibility_score',
                  type: 'number',
                  admin: { readOnly: true, description: 'Accessibility (0-100)' },
                },
              ],
            },
            {
              name: 'recommendations',
              type: 'array',
              admin: {
                description: '💡 AI-generated SEO recommendations',
                readOnly: true,
              },
              fields: [
                {
                  name: 'priority',
                  type: 'select',
                  options: [
                    { label: '🔴 Critical', value: 'critical' },
                    { label: '🟠 High', value: 'high' },
                    { label: '🟡 Medium', value: 'medium' },
                    { label: '🟢 Low', value: 'low' },
                  ],
                },
                {
                  name: 'category',
                  type: 'text',
                },
                {
                  name: 'message',
                  type: 'textarea',
                },
                {
                  name: 'fix_url',
                  type: 'text',
                },
              ],
            },
            {
              name: 'last_analysis',
              type: 'date',
              admin: {
                description: 'Last SEO analysis date',
                readOnly: true,
              },
            },
          ],
        },

        // ============================================
        // 12. GEOGRAPHIC & LOCAL SEO
        // ============================================
        {
          name: 'geographic',
          type: 'group',
          label: '📍 Geographic & Local SEO',
          fields: [
            {
              name: 'enable_geo_targeting',
              type: 'checkbox',
              defaultValue: false,
              admin: {
                description: 'Enable geographic targeting',
              },
            },
            {
              name: 'geo_region',
              type: 'text',
              admin: {
                condition: (data) => data.seo?.geographic?.enable_geo_targeting,
                description: 'Target region (e.g., US, US-CA, GB)',
              },
            },
            {
              name: 'geo_placename',
              type: 'text',
              admin: {
                condition: (data) => data.seo?.geographic?.enable_geo_targeting,
                description: 'Place name (e.g., "San Francisco, CA")',
              },
            },
            {
              name: 'geo_position',
              type: 'text',
              admin: {
                condition: (data) => data.seo?.geographic?.enable_geo_targeting,
                description: 'Coordinates (latitude;longitude)',
                placeholder: '37.774929;-122.419415',
              },
            },
            {
              name: 'icbm',
              type: 'text',
              admin: {
                condition: (data) => data.seo?.geographic?.enable_geo_targeting,
                description: 'ICBM coordinates (comma-separated)',
                placeholder: '37.774929, -122.419415',
              },
            },
          ],
        },

        // ============================================
        // 13. PERFORMANCE & PAGE SPEED HINTS
        // ============================================
        {
          name: 'performance',
          type: 'group',
          label: '⚡ Performance Optimization',
          fields: [
            {
              name: 'preload_resources',
              type: 'array',
              admin: {
                description: 'Resources to preload for better performance',
              },
              fields: [
                {
                  name: 'href',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'as',
                  type: 'select',
                  options: [
                    { label: 'Font', value: 'font' },
                    { label: 'Image', value: 'image' },
                    { label: 'Script', value: 'script' },
                    { label: 'Style', value: 'style' },
                    { label: 'Video', value: 'video' },
                  ],
                },
                {
                  name: 'type',
                  type: 'text',
                  admin: {
                    description: 'MIME type (e.g., font/woff2)',
                  },
                },
              ],
            },
            {
              name: 'dns_prefetch',
              type: 'array',
              admin: {
                description: 'Domains to DNS prefetch',
              },
              fields: [
                {
                  name: 'domain',
                  type: 'text',
                  admin: {
                    placeholder: 'https://fonts.googleapis.com',
                  },
                },
              ],
            },
            {
              name: 'preconnect',
              type: 'array',
              admin: {
                description: 'Domains to preconnect',
              },
              fields: [
                {
                  name: 'domain',
                  type: 'text',
                  admin: {
                    placeholder: 'https://fonts.gstatic.com',
                  },
                },
              ],
            },
            {
              name: 'critical_css',
              type: 'textarea',
              admin: {
                description: 'Inline critical CSS for above-the-fold content',
              },
            },
          ],
        },

        // ============================================
        // 14. SECURITY & PRIVACY
        // ============================================
        {
          name: 'security',
          type: 'group',
          label: '🔒 Security & Privacy',
          fields: [
            {
              name: 'referrer_policy',
              type: 'select',
              defaultValue: 'strict-origin-when-cross-origin',
              options: [
                { label: 'No Referrer', value: 'no-referrer' },
                { label: 'No Referrer When Downgrade', value: 'no-referrer-when-downgrade' },
                { label: 'Origin', value: 'origin' },
                { label: 'Origin When Cross Origin', value: 'origin-when-cross-origin' },
                { label: 'Same Origin', value: 'same-origin' },
                { label: 'Strict Origin', value: 'strict-origin' },
                {
                  label: 'Strict Origin When Cross Origin (Recommended)',
                  value: 'strict-origin-when-cross-origin',
                },
                { label: 'Unsafe URL', value: 'unsafe-url' },
              ],
              admin: {
                description: 'Controls referrer information sent with requests',
              },
            },
            {
              name: 'content_security_policy',
              type: 'textarea',
              admin: {
                description: 'Content Security Policy directives',
                placeholder: "default-src 'self'; script-src 'self' 'unsafe-inline'",
              },
            },
          ],
        },

        // ============================================
        // 15. CUSTOM META TAGS & ADVANCED
        // ============================================
        {
          name: 'custom_tags',
          type: 'group',
          label: '🔧 Custom Meta Tags',
          fields: [
            {
              name: 'meta_tags',
              type: 'array',
              admin: {
                description: 'Add any custom meta tags',
              },
              fields: [
                {
                  name: 'tag_type',
                  type: 'select',
                  options: [
                    { label: 'Meta (name)', value: 'meta_name' },
                    { label: 'Meta (property)', value: 'meta_property' },
                    { label: 'Meta (http-equiv)', value: 'meta_http_equiv' },
                    { label: 'Link', value: 'link' },
                  ],
                  required: true,
                },
                {
                  name: 'attribute_name',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Attribute name (e.g., "author", "theme-color")',
                  },
                },
                {
                  name: 'attribute_value',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Attribute value',
                  },
                },
              ],
            },
            {
              name: 'custom_head_scripts',
              type: 'textarea',
              admin: {
                description: 'Custom scripts/tags for <head> section',
              },
            },
            {
              name: 'custom_body_scripts',
              type: 'textarea',
              admin: {
                description: 'Custom scripts for end of <body> section',
              },
            },
          ],
        },

        // ============================================
        // 16. SOCIAL MEDIA OPTIMIZATION
        // ============================================
        {
          name: 'social_media',
          type: 'group',
          label: '📱 Social Media Optimization',
          fields: [
            {
              name: 'pinterest',
              type: 'group',
              label: 'Pinterest',
              fields: [
                {
                  name: 'pin_description',
                  type: 'textarea',
                  admin: {
                    description: 'Pinterest-specific description',
                  },
                },
                {
                  name: 'pin_rich_pins',
                  type: 'checkbox',
                  defaultValue: true,
                  admin: {
                    description: 'Enable Pinterest Rich Pins',
                  },
                },
              ],
            },
            {
              name: 'linkedin',
              type: 'group',
              label: 'LinkedIn',
              fields: [
                {
                  name: 'linkedin_author',
                  type: 'text',
                  admin: {
                    description: 'LinkedIn profile URL of author',
                  },
                },
              ],
            },
            {
              name: 'whatsapp',
              type: 'group',
              label: 'WhatsApp',
              fields: [
                {
                  name: 'whatsapp_share_text',
                  type: 'textarea',
                  admin: {
                    description: 'Pre-filled text for WhatsApp sharing',
                  },
                },
              ],
            },
            {
              name: 'telegram',
              type: 'group',
              label: 'Telegram',
              fields: [
                {
                  name: 'telegram_channel',
                  type: 'text',
                  admin: {
                    description: 'Telegram channel username',
                    placeholder: '@yourchannel',
                  },
                },
              ],
            },
          ],
        },

        // ============================================
        // 17. ANALYTICS & TRACKING
        // ============================================
        {
          name: 'analytics',
          type: 'group',
          label: '📈 Analytics & Tracking',
          fields: [
            {
              name: 'google_analytics_page_type',
              type: 'text',
              admin: {
                description: 'Custom page type for GA4',
                placeholder: 'blog_post',
              },
            },
            {
              name: 'google_analytics_category',
              type: 'text',
              admin: {
                description: 'Content category for analytics',
              },
            },
            {
              name: 'custom_dimensions',
              type: 'array',
              admin: {
                description: 'Custom dimensions for analytics',
              },
              fields: [
                {
                  name: 'dimension_name',
                  type: 'text',
                },
                {
                  name: 'dimension_value',
                  type: 'text',
                },
              ],
            },
            {
              name: 'conversion_tracking',
              type: 'group',
              fields: [
                {
                  name: 'enable_conversion',
                  type: 'checkbox',
                  defaultValue: false,
                  admin: {
                    description: 'Track this page as a conversion goal',
                  },
                },
                {
                  name: 'conversion_id',
                  type: 'text',
                  admin: {
                    condition: (data) =>
                      data.seo?.analytics?.conversion_tracking?.enable_conversion,
                    description: 'Conversion ID',
                  },
                },
                {
                  name: 'conversion_label',
                  type: 'text',
                  admin: {
                    condition: (data) =>
                      data.seo?.analytics?.conversion_tracking?.enable_conversion,
                    description: 'Conversion label',
                  },
                },
              ],
            },
          ],
        },

        // ============================================
        // 18. ACCESSIBILITY (A11Y)
        // ============================================
        {
          name: 'accessibility',
          type: 'group',
          label: '♿ Accessibility (A11Y)',
          fields: [
            {
              name: 'lang_attribute',
              type: 'text',
              defaultValue: 'en',
              admin: {
                description: 'Primary language code (e.g., en, es, fr)',
              },
            },
            {
              name: 'skip_to_content',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Include "Skip to Content" link',
              },
            },
            {
              name: 'aria_label',
              type: 'text',
              admin: {
                description: 'ARIA label for page',
              },
            },
            {
              name: 'color_contrast_compliance',
              type: 'select',
              defaultValue: 'AA',
              options: [
                { label: 'WCAG 2.1 Level AA (Recommended)', value: 'AA' },
                { label: 'WCAG 2.1 Level AAA', value: 'AAA' },
              ],
              admin: {
                description: 'Color contrast standard',
              },
            },
          ],
        },

        // ============================================
        // 19. COMPETITIVE ANALYSIS
        // ============================================
        {
          name: 'competitive',
          type: 'group',
          label: '🎯 Competitive Analysis',
          fields: [
            {
              name: 'target_competitors',
              type: 'array',
              admin: {
                description: 'Competitor URLs targeting same keywords',
              },
              fields: [
                {
                  name: 'competitor_url',
                  type: 'text',
                },
                {
                  name: 'notes',
                  type: 'textarea',
                },
              ],
            },
            {
              name: 'target_serp_position',
              type: 'number',
              min: 1,
              max: 100,
              admin: {
                description: 'Target SERP position goal',
              },
            },
            {
              name: 'current_serp_position',
              type: 'number',
              admin: {
                description: 'Current ranking position (auto-tracked)',
                readOnly: true,
              },
            },
          ],
        },

        {
          name: 'freshness',
          type: 'group',
          label: '🔄 Content Freshness',
          fields: [
            {
              name: 'content_status',
              type: 'select',
              defaultValue: 'evergreen',
              options: [
                { label: 'Evergreen (Always relevant)', value: 'evergreen' },
                { label: 'Time-Sensitive (Expires)', value: 'time_sensitive' },
                { label: 'News (Current events)', value: 'news' },
                { label: 'Seasonal (Recurring)', value: 'seasonal' },
              ],
              admin: {
                description: 'Content lifecycle type',
              },
            },
            {
              name: 'review_date',
              type: 'date',
              admin: {
                description: 'Next scheduled content review date',
              },
            },
            {
              name: 'expiry_date',
              type: 'date',
              admin: {
                description: 'Content expiration date (if applicable)',
              },
            },
            {
              name: 'update_frequency_goal',
              type: 'select',
              options: [
                { label: 'Never (Evergreen)', value: 'never' },
                { label: 'Quarterly', value: 'quarterly' },
                { label: 'Bi-annually', value: 'biannually' },
                { label: 'Annually', value: 'annually' },
              ],
              admin: {
                description: 'How often to update this content',
              },
            },
            {
              name: 'version_history',
              type: 'array',
              admin: {
                description: 'Major update history',
                readOnly: true,
              },
              fields: [
                {
                  name: 'version',
                  type: 'text',
                },
                {
                  name: 'update_date',
                  type: 'date',
                },
                {
                  name: 'changes_summary',
                  type: 'textarea',
                },
              ],
            },
          ],
        },

        // ... (rest of your fields: link_management, content_analysis, seo_score, etc.)
        // Keep them exactly as you had — no changes needed
      ],
    },
  ],
}

// export const Blogs: CollectionConfig = {
//   slug: 'blogs',
//   admin: {
//     useAsTitle: 'title',
//     defaultColumns: ['title', 'tag', 'author', 'created_at', 'isActive', 'isFeatured'],
//     group: 'Content',
//   },
//   access: {
//     read: () => true,
//   },
//   fields: [
//     // Basic Info
//     {
//       name: 'isActive',
//       type: 'checkbox',
//       defaultValue: true,
//       admin: {
//         description: 'Toggle to publish/unpublish this blog',
//         position: 'sidebar',
//       },
//     },
//     {
//       name: 'isFeatured',
//       type: 'checkbox',
//       defaultValue: false,
//       admin: {
//         description: 'Mark as featured blog (shows first on homepage)',
//         position: 'sidebar',
//       },
//     },
//     {
//       name: 'order',
//       type: 'number',
//       defaultValue: 0,
//       admin: {
//         description: 'Display order (lower numbers appear first)',
//         position: 'sidebar',
//       },
//     },

//     // Content
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//       admin: {
//         description: 'Blog title',
//       },
//     },
//     {
//       name: 'slug',
//       type: 'text',
//       required: true,
//       unique: true,
//       admin: {
//         description: 'URL slug (e.g., "future-of-composite-materials")',
//       },
//       hooks: {
//         beforeValidate: [
//           ({ value, data }) => {
//             if (!value && data?.title) {
//               return data.title
//                 .toLowerCase()
//                 .replace(/[^a-z0-9]+/g, '-')
//                 .replace(/^-|-$/g, '')
//             }
//             return value
//           },
//         ],
//       },
//     },
//     {
//       name: 'description',
//       type: 'textarea',
//       required: true,
//       admin: {
//         description: 'Short description/excerpt (shown in blog cards)',
//       },
//     },
//     {
//       name: 'content',
//       type: 'richText',
//       required: true,
//       admin: {
//         description: 'Full blog content (HTML supported)',
//       },
//     },

//     // Media
//     {
//       name: 'image',
//       type: 'upload',
//       relationTo: 'media',
//       required: true,
//       admin: {
//         description: 'Featured image for the blog',
//       },
//     },

//     // Metadata
//     {
//       name: 'tag',
//       type: 'text',
//       required: true,
//       admin: {
//         description: 'Blog category/tag (e.g., "Technology", "Sustainability")',
//       },
//     },
//     {
//       name: 'min_read',
//       type: 'number',
//       required: true,
//       defaultValue: 5,
//       admin: {
//         description: 'Estimated reading time in minutes',
//       },
//     },
//     {
//       name: 'created_at',
//       type: 'date',
//       required: true,
//       defaultValue: () => new Date().toISOString(),
//       admin: {
//         description: 'Publication date',
//         date: {
//           displayFormat: 'MMM d, yyyy',
//         },
//       },
//     },

//     // Author
//     {
//       name: 'author',
//       type: 'group',
//       fields: [
//         {
//           name: 'name',
//           type: 'text',
//           required: true,
//           admin: {
//             description: 'Author name',
//           },
//         },
//         {
//           name: 'profile_picture',
//           type: 'upload',
//           relationTo: 'media',
//           required: true,
//           admin: {
//             description: 'Author profile picture',
//           },
//         },
//         {
//           name: 'bio',
//           type: 'textarea',
//           admin: {
//             description: 'Author bio (optional)',
//           },
//         },
//       ],
//     },

//     // Related Blogs
//     {
//       name: 'related_blogs',
//       type: 'relationship',
//       relationTo: 'blogs',
//       hasMany: true,
//       maxRows: 3,
//       admin: {
//         description: 'Select up to 3 related blogs to show on this blog page',
//         },
//       required: false,
//     },

//     // SEO
//     {
//       name: 'seo',
//       type: 'group',
//       fields: [
//         {
//           name: 'meta_title',
//           type: 'text',
//           admin: {
//             description: 'SEO title (defaults to blog title if empty)',
//           },
//         },
//         {
//           name: 'meta_description',
//           type: 'textarea',
//           admin: {
//             description: 'SEO description (defaults to blog description if empty)',
//           },
//         },
//         {
//           name: 'og_image',
//           type: 'upload',
//           relationTo: 'media',
//           admin: {
//             description: 'Social media share image (defaults to blog image if empty)',
//           },
//         },
//       ],
//     },
//   ],
// }

// Blog Section Configuration Collection
export const BlogSection: CollectionConfig = {
  slug: 'blog-section',
  admin: {
    useAsTitle: 'sectionName',
    defaultColumns: ['sectionName', 'isActive'],
    group: 'Components',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'sectionName',
      type: 'text',
      required: true,
      admin: {
        description: 'Internal name to identify this section configuration',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Toggle to show/hide blog section',
      },
    },

    // Styling
    {
      name: 'styling',
      type: 'group',
      fields: [
        {
          name: 'sectionBackgroundColor',
          type: 'text',
          defaultValue: 'transparent',
          admin: {
            description: 'Section background color',
          },
        },
        {
          name: 'sectionPaddingTop',
          type: 'text',
          defaultValue: '100px',
          admin: {
            description: 'Top padding (e.g., 100px, 5rem)',
          },
        },
        {
          name: 'sectionPaddingBottom',
          type: 'text',
          defaultValue: '100px',
          admin: {
            description: 'Bottom padding',
          },
        },
        {
          name: 'dotColor',
          type: 'text',
          defaultValue: '#ff6b35',
          admin: {
            description: 'Color of the heading dots',
          },
        },
        {
          name: 'featuredLabelColor',
          type: 'text',
          defaultValue: '#000000',
          admin: {
            description: 'Color of "FEATURED BLOG" label',
          },
        },
        {
          name: 'recentLabelColor',
          type: 'text',
          defaultValue: '#000000',
          admin: {
            description: 'Color of "RECENT BLOGS" label',
          },
        },
        {
          name: 'blogTitleColor',
          type: 'text',
          defaultValue: '#000000',
          admin: {
            description: 'Color of blog titles',
          },
        },
        {
          name: 'blogDescriptionColor',
          type: 'text',
          defaultValue: '#666666',
          admin: {
            description: 'Color of blog descriptions',
          },
        },
        {
          name: 'tagBackgroundColor',
          type: 'text',
          defaultValue: '#ff6b35',
          admin: {
            description: 'Background color for tags',
          },
        },
        {
          name: 'tagTextColor',
          type: 'text',
          defaultValue: '#ffffff',
          admin: {
            description: 'Text color for tags',
          },
        },
      ],
    },

    // Content Labels
    {
      name: 'labels',
      type: 'group',
      fields: [
        {
          name: 'featuredLabel',
          type: 'text',
          defaultValue: 'FEATURED BLOG',
          required: true,
        },
        {
          name: 'recentLabel',
          type: 'text',
          defaultValue: 'RECENT BLOGS',
          required: true,
        },
        {
          name: 'moreLabel',
          type: 'text',
          defaultValue: 'More Blogs',
          required: true,
        },
        {
          name: 'viewAllText',
          type: 'text',
          defaultValue: 'View all blogs',
          required: true,
        },
        {
          name: 'viewAllLink',
          type: 'text',
          defaultValue: '/blog',
          required: true,
        },
      ],
    },

    // Display Settings
    {
      name: 'displaySettings',
      type: 'group',
      fields: [
        {
          name: 'showFeaturedSection',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show featured blog section',
          },
        },
        {
          name: 'showRecentSection',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show recent blogs section',
          },
        },
        {
          name: 'numberOfRecentBlogs',
          type: 'number',
          defaultValue: 3,
          min: 1,
          max: 12,
          admin: {
            description: 'Number of recent blogs to display',
          },
        },
        {
          name: 'autoSelectFeatured',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Automatically select latest blog marked as "featured"',
          },
        },
        {
          name: 'manualFeaturedBlog',
          type: 'relationship',
          relationTo: 'blogs',
          admin: {
            condition: (data) => !data.displaySettings?.autoSelectFeatured,
            description: 'Manually select featured blog',
            },
          required: false,
        },
      ],
    },

    // Blog Page Hero Styling
    {
      name: 'blogPageHeroStyling',
      type: 'group',
      admin: {
        description: 'Styling for individual blog page hero section',
      },
      fields: [
        {
          name: 'heroBackgroundColor',
          type: 'text',
          defaultValue: 'transparent',
        },
        {
          name: 'tagBackgroundColor',
          type: 'text',
          defaultValue: '#ff6b35',
        },
        {
          name: 'tagTextColor',
          type: 'text',
          defaultValue: '#ffffff',
        },
        {
          name: 'titleColor',
          type: 'text',
          defaultValue: '#000000',
        },
        {
          name: 'descriptionColor',
          type: 'text',
          defaultValue: '#666666',
        },
        {
          name: 'authorNameColor',
          type: 'text',
          defaultValue: '#000000',
        },
        {
          name: 'dateColor',
          type: 'text',
          defaultValue: '#999999',
        },
      ],
    },

    // Advanced
    {
      name: 'advanced',
      type: 'group',
      fields: [
        {
          name: 'customCSS',
          type: 'textarea',
          admin: {
            description: 'Add custom CSS for blog sections',
          },
        },
        {
          name: 'customClassName',
          type: 'text',
          admin: {
            description: 'Add custom CSS class name',
          },
        },
      ],
    },
  ],
}
