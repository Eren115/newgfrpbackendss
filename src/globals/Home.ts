// import { CollectionConfig, GlobalConfig } from 'payload'

// // Global Config for Home Page
// export const HomePage: GlobalConfig = {
//   slug: 'home-page',
//   access: {
//     read: () => true, // ← Add this to make it publicly readable
//   },
//   admin: {
//     group: 'Pages',
//   },
//   fields: [
//     {
//       name: 'sections',
//       type: 'array',
//       label: 'Page Sections',
//       minRows: 1,
//       fields: [
//         {
//           name: 'sectionType',
//           type: 'select',
//           required: true,
//           label: 'Section Type',
//           options: [
//             { label: 'Hero Section', value: 'hero' },
//             { label: 'About Section', value: 'about' },
//           ],
//         },
//         {
//           name: 'isActive',
//           type: 'checkbox',
//           defaultValue: true,
//           label: 'Active',
//         },
//         {
//           name: 'sectionName',
//           type: 'text',
//           label: 'Section Name (for reference)',
//           admin: {
//             description: 'Internal name to identify this section',
//           },
//         },
//         // Hero Section Fields
//         {
//           name: 'hero',
//           type: 'group',
//           label: 'Hero Section Content',
//           admin: {
//             condition: (data, siblingData) => siblingData.sectionType === 'hero',
//           },
//           fields: [
//             {
//               name: 'backgroundImage',
//               type: 'upload',
//               relationTo: 'media',
//               required: false,
//               label: 'Background Image',
//             },
//             {
//               name: 'backgroundImageUrl',
//               type: 'text',
//               label: 'Background Image URL (Alternative)',
//             },
//             {
//               name: 'backgroundOverlay',
//               type: 'text',
//               label: 'Background Overlay (CSS)',
//               defaultValue: 'linear-gradient(#0000, #000)',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Background Color',
//               defaultValue: '#000000',
//             },
//             {
//               name: 'smallTitle',
//               type: 'text',
//               required: true,
//               label: 'Small Title',
//             },
//             {
//               name: 'smallTitleColor',
//               type: 'text',
//               label: 'Small Title Color',
//               defaultValue: '#ffffff',
//             },
//             {
//               name: 'title',
//               type: 'text',
//               required: true,
//               label: 'Main Title',
//             },
//             {
//               name: 'titleColor',
//               type: 'text',
//               label: 'Title Color',
//               defaultValue: '#ffffff',
//             },
//             {
//               name: 'description',
//               type: 'richText',
//               required: true,
//               label: 'Description',
//             },
//             {
//               name: 'descriptionColor',
//               type: 'text',
//               label: 'Description Color',
//               defaultValue: '#ffffff',
//             },
//             {
//               name: 'dotColor',
//               type: 'text',
//               label: 'Dot Color',
//               defaultValue: '#ff6b35',
//             },
//             {
//               name: 'ctaButtons',
//               type: 'array',
//               label: 'CTA Buttons',
//               fields: [
//                 {
//                   name: 'text',
//                   type: 'text',
//                   required: true,
//                   label: 'Button Text',
//                 },
//                 {
//                   name: 'link',
//                   type: 'text',
//                   required: true,
//                   label: 'Button Link',
//                 },
//                 {
//                   name: 'variant',
//                   type: 'select',
//                   options: [
//                     { label: 'Primary', value: 'primary' },
//                     { label: 'Secondary', value: 'secondary' },
//                   ],
//                   defaultValue: 'primary',
//                 },
//                 {
//                   name: 'backgroundColor',
//                   type: 'text',
//                   label: 'Background Color',
//                   defaultValue: '#ff6b35',
//                 },
//                 {
//                   name: 'textColor',
//                   type: 'text',
//                   label: 'Text Color',
//                   defaultValue: '#ffffff',
//                 },
//                 {
//                   name: 'icon',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Button Icon',
//                 },
//                 {
//                   name: 'iconUrl',
//                   type: 'text',
//                   label: 'Icon URL (Alternative)',
//                 },
//               ],
//             },
//             {
//               name: 'customCSS',
//               type: 'textarea',
//               label: 'Custom CSS',
//               admin: {
//                 description: 'Add custom CSS for this section',
//               },
//             },
//             {
//               name: 'customClasses',
//               type: 'text',
//               label: 'Custom CSS Classes',
//             },
//           ],
//         },
//         // About Section Fields
//         {
//           name: 'about',
//           type: 'group',
//           label: 'About Section Content',
//           admin: {
//             condition: (data, siblingData) => siblingData.sectionType === 'about',
//           },
//           fields: [
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Section Background Color',
//               defaultValue: '#ffffff',
//             },
//             {
//               name: 'testimonialTitle',
//               type: 'text',
//               required: true,
//               label: 'Testimonial Title',
//             },
//             {
//               name: 'testimonialTitleColor',
//               type: 'text',
//               label: 'Testimonial Title Color',
//               defaultValue: '#000000',
//             },
//             {
//               name: 'image1',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'First Image',
//             },
//             {
//               name: 'image1Url',
//               type: 'text',
//               label: 'First Image URL (Alternative)',
//             },
//             {
//               name: 'image2',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Second Image',
//             },
//             {
//               name: 'image2Url',
//               type: 'text',
//               label: 'Second Image URL (Alternative)',
//             },
//             {
//               name: 'sectionLabel',
//               type: 'text',
//               defaultValue: 'ABOUT US',
//               label: 'Section Label',
//             },
//             {
//               name: 'sectionLabelColor',
//               type: 'text',
//               label: 'Section Label Color',
//               defaultValue: '#000000',
//             },
//             {
//               name: 'dotColor',
//               type: 'text',
//               label: 'Dot Color',
//               defaultValue: '#ff6b35',
//             },
//             {
//               name: 'title',
//               type: 'text',
//               required: true,
//               label: 'Main Title',
//             },
//             {
//               name: 'titleColor',
//               type: 'text',
//               label: 'Title Color',
//               defaultValue: '#000000',
//             },
//             {
//               name: 'description',
//               type: 'richText',
//               required: true,
//               label: 'Description',
//             },
//             {
//               name: 'descriptionColor',
//               type: 'text',
//               label: 'Description Color',
//               defaultValue: '#666666',
//             },
//             {
//               name: 'ctaButton',
//               type: 'group',
//               label: 'CTA Button',
//               fields: [
//                 {
//                   name: 'text',
//                   type: 'text',
//                   defaultValue: 'About Us',
//                   label: 'Button Text',
//                 },
//                 {
//                   name: 'link',
//                   type: 'text',
//                   defaultValue: '/about',
//                   label: 'Button Link',
//                 },
//                 {
//                   name: 'backgroundColor',
//                   type: 'text',
//                   label: 'Background Color',
//                   defaultValue: '#ff6b35',
//                 },
//                 {
//                   name: 'textColor',
//                   type: 'text',
//                   label: 'Text Color',
//                   defaultValue: '#ffffff',
//                 },
//               ],
//             },
//             {
//               name: 'contactLink',
//               type: 'group',
//               label: 'Contact Link',
//               fields: [
//                 {
//                   name: 'text',
//                   type: 'text',
//                   defaultValue: 'Contact us',
//                   label: 'Link Text',
//                 },
//                 {
//                   name: 'url',
//                   type: 'text',
//                   defaultValue: '/contact',
//                   label: 'Link URL',
//                 },
//                 {
//                   name: 'textColor',
//                   type: 'text',
//                   label: 'Text Color',
//                   defaultValue: '#ff6b35',
//                 },
//               ],
//             },
//             // How to Start Section
//             {
//               name: 'howToStart',
//               type: 'group',
//               label: 'How to Start Section',
//               fields: [
//                 {
//                   name: 'backgroundColor',
//                   type: 'text',
//                   label: 'Background Color',
//                   defaultValue: '#f8f9fa',
//                 },
//                 {
//                   name: 'sectionLabel',
//                   type: 'text',
//                   defaultValue: 'How to start',
//                   label: 'Section Label',
//                 },
//                 {
//                   name: 'sectionLabelColor',
//                   type: 'text',
//                   label: 'Section Label Color',
//                   defaultValue: '#000000',
//                 },
//                 {
//                   name: 'dotColor',
//                   type: 'text',
//                   label: 'Dot Color',
//                   defaultValue: '#ff6b35',
//                 },
//                 {
//                   name: 'title',
//                   type: 'text',
//                   required: true,
//                   label: 'Title',
//                 },
//                 {
//                   name: 'titleColor',
//                   type: 'text',
//                   label: 'Title Color',
//                   defaultValue: '#000000',
//                 },
//                 {
//                   name: 'description',
//                   type: 'richText',
//                   required: true,
//                   label: 'Description',
//                 },
//                 {
//                   name: 'descriptionColor',
//                   type: 'text',
//                   label: 'Description Color',
//                   defaultValue: '#666666',
//                 },
//                 {
//                   name: 'image',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Section Image',
//                 },
//                 {
//                   name: 'imageUrl',
//                   type: 'text',
//                   label: 'Image URL (Alternative)',
//                 },
//                 {
//                   name: 'steps',
//                   type: 'array',
//                   label: 'Steps',
//                   fields: [
//                     {
//                       name: 'title',
//                       type: 'text',
//                       required: true,
//                       label: 'Step Title',
//                     },
//                     {
//                       name: 'titleColor',
//                       type: 'text',
//                       label: 'Title Color',
//                       defaultValue: '#000000',
//                     },
//                     {
//                       name: 'description',
//                       type: 'richText',
//                       required: true,
//                       label: 'Step Description',
//                     },
//                     {
//                       name: 'descriptionColor',
//                       type: 'text',
//                       label: 'Description Color',
//                       defaultValue: '#666666',
//                     },
//                     {
//                       name: 'icon',
//                       type: 'upload',
//                       relationTo: 'media',
//                       label: 'Step Icon',
//                     },
//                     {
//                       name: 'iconUrl',
//                       type: 'text',
//                       label: 'Icon URL (Alternative)',
//                     },
//                     {
//                       name: 'backgroundColor',
//                       type: 'text',
//                       label: 'Card Background Color',
//                       defaultValue: '#ffffff',
//                     },
//                   ],
//                 },
//               ],
//             },
//             {
//               name: 'customCSS',
//               type: 'textarea',
//               label: 'Custom CSS',
//               admin: {
//                 description: 'Add custom CSS for this section',
//               },
//             },
//             {
//               name: 'customClasses',
//               type: 'text',
//               label: 'Custom CSS Classes',
//             },
//           ],
//         },
//       ],
//     },
//     // SEO Fields
//     {
//       name: 'seo',
//       type: 'group',
//       label: 'SEO Settings',
//       fields: [
//         {
//           name: 'title',
//           type: 'text',
//           label: 'Page Title',
//         },
//         {
//           name: 'description',
//           type: 'textarea',
//           label: 'Meta Description',
//         },
//         {
//           name: 'keywords',
//           type: 'text',
//           label: 'Meta Keywords',
//         },
//       ],
//     },
//   ],
// }

import { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Pages',
  },

  /* -------------------------------------------------
   *  AUTO-POPULATION HOOKS (same as Blogs/Product)
   * ------------------------------------------------- */
  hooks: {
    beforeChange: [
      async ({ data, operation }) => {
        const baseUrl = process.env.PAYLOAD_PUBLIC_SITE_URL || 'https://gfrpindia.com'

        // ---- Ensure nested SEO objects exist ----
        data.seo = data.seo || {}
        data.seo.ultimate = data.seo.ultimate || {}
        data.seo.ultimate.urls = data.seo.ultimate.urls || {}
        data.seo.ultimate.open_graph = data.seo.ultimate.open_graph || {}
        data.seo.ultimate.twitter = data.seo.ultimate.twitter || {}
        data.seo.ultimate.schema = data.seo.ultimate.schema || {}
        data.seo.ultimate.schema.organization = data.seo.ultimate.schema.organization || {}

        // 1. Meta title fallback (from first hero title)
        const heroSection = data.sections?.find((s: any) => s.sectionType === 'hero')
        if (!data.seo.ultimate.meta_title && heroSection?.hero?.title) {
          data.seo.ultimate.meta_title = heroSection.hero.title.substring(0, 60)
        }

        // 2. Meta description fallback (from hero description)
        if (!data.seo.ultimate.meta_description && heroSection?.hero?.description) {
          const plain = heroSection.hero.description.root?.children
            ?.map((n: any) => n.children?.[0]?.text || '')
            .join(' ')
            .substring(0, 160)
          data.seo.ultimate.meta_description = plain
        }

        // 3. Canonical URL (home is root)
        if (!data.seo.ultimate.urls.canonical_url) {
          data.seo.ultimate.urls.canonical_url = baseUrl
        }

        // 4. OG / Twitter image fallback (hero background)
        const heroImg = heroSection?.hero?.backgroundImage || heroSection?.hero?.backgroundImageUrl
        if (heroImg && !data.seo.ultimate.open_graph.og_image) {
          data.seo.ultimate.open_graph.og_image = heroImg
        }
        if (heroImg && !data.seo.ultimate.twitter.twitter_image) {
          data.seo.ultimate.twitter.twitter_image = heroImg
        }

        // 5. OG / Twitter title/description fallback
        if (!data.seo.ultimate.open_graph.og_title)
          data.seo.ultimate.open_graph.og_title = data.seo.ultimate.meta_title
        if (!data.seo.ultimate.open_graph.og_description)
          data.seo.ultimate.open_graph.og_description = data.seo.ultimate.meta_description
        if (!data.seo.ultimate.twitter.twitter_title)
          data.seo.ultimate.twitter.twitter_title = data.seo.ultimate.meta_title
        if (!data.seo.ultimate.twitter.twitter_description)
          data.seo.ultimate.twitter.twitter_description = data.seo.ultimate.meta_description

        // 6. Organization schema
        if (!data.seo.ultimate.schema.organization.name) {
          data.seo.ultimate.schema.organization.name = 'GFRP India'
          data.seo.ultimate.schema.organization.url = baseUrl
        }

        // 7. Breadcrumb (Home only)
        data.seo.ultimate.schema.breadcrumb_schema = [{ name: 'Home', item: baseUrl }]

        // 8. Word count & reading time
        let wordCount = 0
        const countText = (rich: any) => {
          if (!rich?.root?.children) return
          rich.root.children.forEach((node: any) => {
            if (node.type === 'text' && node.text) {
              wordCount += node.text.trim().split(/\s+/).filter(Boolean).length
            }
            if (node.children) node.children.forEach(countText)
          })
        }
        data.sections?.forEach((s: any) => {
          if (s.hero?.description) countText(s.hero.description)
          if (s.about?.description) countText(s.about.description)
          if (s.about?.howToStart?.description) countText(s.about.howToStart.description)
          s.about?.howToStart?.steps?.forEach((step: any) => countText(step.description))
        })
        data.seo.ultimate.schema.word_count = wordCount
        data.seo.ultimate.schema.time_required = `PT${Math.ceil(wordCount / 238)}M`

        // 9. Modified time
        const now = new Date().toISOString()
        data.seo.ultimate.schema.modified_time = now
        data.seo.ultimate.sitemap = data.seo.ultimate.sitemap || {}
        data.seo.ultimate.sitemap.last_modified = now

        return data
      },
    ],
  },

  fields: [
    /* ------------------- YOUR EXISTING FIELDS (UNCHANGED) ------------------- */
    {
      name: 'sections',
      type: 'array',
      label: 'Page Sections',
      minRows: 1,
      fields: [
        {
          name: 'sectionType',
          type: 'select',
          required: true,
          label: 'Section Type',
          options: [
            { label: 'Hero Section', value: 'hero' },
            { label: 'About Section', value: 'about' },
          ],
        },
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          label: 'Active',
        },
        {
          name: 'sectionName',
          type: 'text',
          label: 'Section Name (for reference)',
          admin: { description: 'Internal name to identify this section' },
        },
        // Hero Section Fields
        {
          name: 'hero',
          type: 'group',
          label: 'Hero Section Content',
          admin: { condition: (data, siblingData) => siblingData.sectionType === 'hero' },
          fields: [
            { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
            { name: 'backgroundImageUrl', type: 'text' },
            {
              name: 'backgroundOverlay',
              type: 'text',
              defaultValue: 'linear-gradient(#0000, #000)',
            },
            { name: 'backgroundColor', type: 'text', defaultValue: '#000000' },
            { name: 'smallTitle', type: 'text', required: true },
            { name: 'smallTitleColor', type: 'text', defaultValue: '#ffffff' },
            { name: 'title', type: 'text', required: true },
            { name: 'titleColor', type: 'text', defaultValue: '#ffffff' },
            { name: 'description', type: 'richText', required: true },
            { name: 'descriptionColor', type: 'text', defaultValue: '#ffffff' },
            { name: 'dotColor', type: 'text', defaultValue: '#ff6b35' },
            {
              name: 'ctaButtons',
              type: 'array',
              fields: [
                { name: 'text', type: 'text', required: true },
                { name: 'link', type: 'text', required: true },
                {
                  name: 'variant',
                  type: 'select',
                  defaultValue: 'primary',
                  options: [
                    { label: 'Primary', value: 'primary' },
                    { label: 'Secondary', value: 'secondary' },
                  ],
                },
                { name: 'backgroundColor', type: 'text', defaultValue: '#ff6b35' },
                { name: 'textColor', type: 'text', defaultValue: '#ffffff' },
                { name: 'icon', type: 'upload', relationTo: 'media' },
                { name: 'iconUrl', type: 'text' },
              ],
            },
            {
              name: 'customCSS',
              type: 'textarea',
              admin: { description: 'Add custom CSS for this section' },
            },
            { name: 'customClasses', type: 'text' },
          ],
        },
        // About Section Fields
        {
          name: 'about',
          type: 'group',
          label: 'About Section Content',
          admin: { condition: (data, siblingData) => siblingData.sectionType === 'about' },
          fields: [
            { name: 'backgroundColor', type: 'text', defaultValue: '#ffffff' },
            { name: 'testimonialTitle', type: 'text', required: true },
            { name: 'testimonialTitleColor', type: 'text', defaultValue: '#000000' },
            { name: 'image1', type: 'upload', relationTo: 'media' },
            { name: 'image1Url', type: 'text' },
            { name: 'image2', type: 'upload', relationTo: 'media' },
            { name: 'image2Url', type: 'text' },
            { name: 'sectionLabel', type: 'text', defaultValue: 'ABOUT US' },
            { name: 'sectionLabelColor', type: 'text', defaultValue: '#000000' },
            { name: 'dotColor', type: 'text', defaultValue: '#ff6b35' },
            { name: 'title', type: 'text', required: true },
            { name: 'titleColor', type: 'text', defaultValue: '#000000' },
            { name: 'description', type: 'richText', required: true },
            { name: 'descriptionColor', type: 'text', defaultValue: '#666666' },
            {
              name: 'ctaButton',
              type: 'group',
              fields: [
                { name: 'text', type: 'text', defaultValue: 'About Us' },
                { name: 'link', type: 'text', defaultValue: '/about' },
                { name: 'backgroundColor', type: 'text', defaultValue: '#ff6b35' },
                { name: 'textColor', type: 'text', defaultValue: '#ffffff' },
              ],
            },
            {
              name: 'contactLink',
              type: 'group',
              fields: [
                { name: 'text', type: 'text', defaultValue: 'Contact us' },
                { name: 'url', type: 'text', defaultValue: '/contact' },
                { name: 'textColor', type: 'text', defaultValue: '#ff6b35' },
              ],
            },
            {
              name: 'howToStart',
              type: 'group',
              label: 'How to Start Section',
              fields: [
                { name: 'backgroundColor', type: 'text', defaultValue: '#f8f9fa' },
                { name: 'sectionLabel', type: 'text', defaultValue: 'How to start' },
                { name: 'sectionLabelColor', type: 'text', defaultValue: '#000000' },
                { name: 'dotColor', type: 'text', defaultValue: '#ff6b35' },
                { name: 'title', type: 'text', required: true },
                { name: 'titleColor', type: 'text', defaultValue: '#000000' },
                { name: 'description', type: 'richText', required: true },
                { name: 'descriptionColor', type: 'text', defaultValue: '#666666' },
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'imageUrl', type: 'text' },
                {
                  name: 'steps',
                  type: 'array',
                  fields: [
                    { name: 'title', type: 'text', required: true },
                    { name: 'titleColor', type: 'text', defaultValue: '#000000' },
                    { name: 'description', type: 'richText', required: true },
                    { name: 'descriptionColor', type: 'text', defaultValue: '#666666' },
                    { name: 'icon', type: 'upload', relationTo: 'media' },
                    { name: 'iconUrl', type: 'text' },
                    { name: 'backgroundColor', type: 'text', defaultValue: '#ffffff' },
                  ],
                },
              ],
            },
            {
              name: 'customCSS',
              type: 'textarea',
              admin: { description: 'Add custom CSS for this section' },
            },
            { name: 'customClasses', type: 'text' },
          ],
        },
      ],
    },

    /* ------------------- YOUR EXISTING SEO (KEEP IT) ------------------- */
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        { name: 'title', type: 'text', label: 'Page Title' },
        { name: 'description', type: 'textarea', label: 'Meta Description' },
        { name: 'keywords', type: 'text', label: 'Meta Keywords' },
      ],
    },

    /* -------------------------------------------------
     *  ULTIMATE SEO (NEW – DOES NOT TOUCH YOUR OLD SEO)
     * ------------------------------------------------- */
    {
      name: 'ultimate',
      type: 'group',
      label: 'Ultimate SEO (Advanced)',
      admin: { description: 'Complete SEO control – auto-filled from content' },
      fields: [
        /* 1. PRIMARY META TAGS */
        {
          name: 'meta_title',
          type: 'text',
          maxLength: 60,
          admin: {
            description: 'HOME PAGE TITLE (50-60 chars)',
            placeholder: 'Auto-fills from hero title',
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
            description: 'HOME PAGE DESCRIPTION (150-160 chars)',
            placeholder: 'Auto-fills from hero description',
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

        /* 2. KEYWORD OPTIMIZATION */
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

        /* 3. OPEN GRAPH */
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
              defaultValue: 'website',
              options: [{ label: 'Website', value: 'website' }],
            },
            { name: 'og_locale', type: 'text', defaultValue: 'en_IN' },
            { name: 'og_site_name', type: 'text' },
          ],
        },

        /* 4. TWITTER CARD */
        {
          name: 'twitter',
          type: 'group',
          label: 'Twitter Card (X)',
          fields: [
            {
              name: 'twitter_card_type',
              type: 'select',
              defaultValue: 'summary_large_image',
              options: [{ label: 'Summary Large Image', value: 'summary_large_image' }],
            },
            { name: 'twitter_title', type: 'text', maxLength: 70 },
            { name: 'twitter_description', type: 'textarea', maxLength: 200 },
            { name: 'twitter_image', type: 'upload', relationTo: 'media' },
            { name: 'twitter_image_alt', type: 'text' },
            { name: 'twitter_site', type: 'text', placeholder: '@gfrpindia' },
            { name: 'twitter_creator', type: 'text' },
          ],
        },

        /* 5. SCHEMA.ORG */
        {
          name: 'schema',
          type: 'group',
          label: 'Schema.org (Rich Results)',
          fields: [
            { name: 'enable_schema', type: 'checkbox', defaultValue: true },
            {
              name: 'webpage_type',
              type: 'select',
              defaultValue: 'WebPage',
              options: [{ label: 'WebPage', value: 'WebPage' }],
            },
            { name: 'headline', type: 'text', maxLength: 110 },
            { name: 'word_count', type: 'number', admin: { readOnly: true } },
            { name: 'time_required', type: 'text', admin: { readOnly: true } },

            /* Organization */
            {
              name: 'organization',
              type: 'group',
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'url', type: 'text' },
                { name: 'logo', type: 'upload', relationTo: 'media' },
                { name: 'sameAs', type: 'array', fields: [{ name: 'url', type: 'text' }] },
              ],
            },

            /* Site Navigation */
            {
              name: 'site_navigation',
              type: 'array',
              label: 'Main Navigation Links',
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'url', type: 'text', required: true },
              ],
            },

            /* HowTo */
            {
              name: 'howto_schema',
              type: 'group',
              admin: { condition: (data) => data.about?.howToStart?.steps?.length },
              fields: [
                { name: 'name', type: 'text', defaultValue: 'How to Get Started' },
                { name: 'description', type: 'textarea' },
                { name: 'totalTime', type: 'text', defaultValue: 'PT15M' },
                {
                  name: 'step',
                  type: 'array',
                  fields: [
                    { name: 'name', type: 'text', required: true },
                    { name: 'text', type: 'textarea', required: true },
                    { name: 'image', type: 'upload', relationTo: 'media' },
                  ],
                },
              ],
            },

            /* FAQ */
            {
              name: 'faq_schema',
              type: 'array',
              fields: [
                { name: 'question', type: 'text', required: true },
                { name: 'answer', type: 'textarea', required: true },
              ],
            },

            /* Breadcrumb */
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

        /* 6. ROBOTS */
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

        /* 7. CANONICAL */
        {
          name: 'urls',
          type: 'group',
          label: 'Canonical URL',
          fields: [{ name: 'canonical_url', type: 'text', admin: { readOnly: true } }],
        },

        /* 8. SITEMAP */
        {
          name: 'sitemap',
          type: 'group',
          label: 'Sitemap & Crawling',
          fields: [
            { name: 'include_in_sitemap', type: 'checkbox', defaultValue: true },
            {
              name: 'sitemap_priority',
              type: 'number',
              defaultValue: 1.0,
              min: 0,
              max: 1,
              step: 0.1,
            },
            {
              name: 'change_frequency',
              type: 'select',
              defaultValue: 'daily',
              options: [{ label: 'Daily', value: 'daily' }],
            },
            { name: 'last_modified', type: 'date', admin: { readOnly: true } },
          ],
        },
      ],
    },
  ],
}