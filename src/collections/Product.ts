// import { CollectionConfig } from 'payload'

// export const ProductSection: CollectionConfig = {
//   slug: 'product-section',
//   admin: {
//     useAsTitle: 'sectionTitle',
//     defaultColumns: ['sectionTitle', 'isActive', 'order'],
//     group: 'Components',
//   },
//   access: {
//     read: () => true, // Allow public read access
//     create: ({ req: { user } }) => !!user, // Only authenticated users can create
//     update: ({ req: { user } }) => !!user, // Only authenticated users can update
//     delete: ({ req: { user } }) => !!user, // Only authenticated users can delete
//   },
//   fields: [
//     {
//       name: 'sectionTitle',
//       type: 'text',
//       required: true,
//       label: 'Section Title (Internal)',
//     },
//     {
//       name: 'isActive',
//       type: 'checkbox',
//       defaultValue: true,
//       label: 'Active',
//     },
//     {
//       name: 'order',
//       type: 'number',
//       defaultValue: 0,
//       label: 'Display Order',
//     },
//     // Section Styling
//     {
//       name: 'sectionStyles',
//       type: 'group',
//       label: 'Section Styles',
//       fields: [
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//           defaultValue: '#ffffff',
//         },
//         {
//           name: 'marginTop',
//           type: 'text',
//           label: 'Margin Top',
//           defaultValue: '100px',
//         },
//         {
//           name: 'paddingTop',
//           type: 'text',
//           label: 'Padding Top',
//           defaultValue: '0',
//         },
//         {
//           name: 'paddingBottom',
//           type: 'text',
//           label: 'Padding Bottom',
//           defaultValue: '0',
//         },
//       ],
//     },
//     // Top Container (Header Section)
//     {
//       name: 'topContainer',
//       type: 'group',
//       label: 'Top Container',
//       fields: [
//         {
//           name: 'styles',
//           type: 'group',
//           label: 'Top Container Styles',
//           fields: [
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Background Color',
//               defaultValue: 'transparent',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Text Color',
//               defaultValue: '#000000',
//             },
//           ],
//         },
//         {
//           name: 'dotIndicator',
//           type: 'group',
//           label: 'Dot Indicator',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               defaultValue: true,
//               label: 'Show Dot',
//             },
//             {
//               name: 'color',
//               type: 'text',
//               label: 'Dot Color',
//               defaultValue: '#ff6b35',
//             },
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Dot Text',
//               defaultValue: 'Machine',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Dot Text Color',
//               defaultValue: '#000000',
//             },
//           ],
//         },
//         {
//           name: 'mainHeading',
//           type: 'group',
//           label: 'Main Heading',
//           fields: [
//             {
//               name: 'text',
//               type: 'text',
//               required: true,
//               label: 'Heading Text',
//               defaultValue: 'Advanced Manufacturing Solutions',
//             },
//             {
//               name: 'color',
//               type: 'text',
//               label: 'Heading Color',
//               defaultValue: '#000000',
//             },
//             {
//               name: 'fontSize',
//               type: 'text',
//               label: 'Font Size',
//               defaultValue: '2.5rem',
//             },
//             {
//               name: 'fontWeight',
//               type: 'text',
//               label: 'Font Weight',
//               defaultValue: '700',
//             },
//           ],
//         },
//       ],
//     },
//     // Products Array
//     {
//       name: 'products',
//       type: 'array',
//       label: 'Products',
//       minRows: 1,
//       labels: {
//         singular: 'Product',
//         plural: 'Products',
//       },
//       admin: {
//         components: {
//           RowLabel: ({ data, index }) => {
//             return data?.title || `Product ${index + 1}`
//           },
//         },
//         initCollapsed: true,
//       },
//       fields: [
//         {
//           name: 'order',
//           type: 'number',
//           label: 'Product Order',
//           defaultValue: 0,
//         },
//         {
//           name: 'isActive',
//           type: 'checkbox',
//           label: 'Active',
//           defaultValue: true,
//         },
//         // Product Styling
//         {
//           name: 'styles',
//           type: 'group',
//           label: 'Product Block Styles',
//           fields: [
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Background Color',
//               defaultValue: 'transparent',
//             },
//             {
//               name: 'borderColor',
//               type: 'text',
//               label: 'Border Color',
//               defaultValue: 'transparent',
//             },
//             {
//               name: 'borderWidth',
//               type: 'text',
//               label: 'Border Width',
//               defaultValue: '0px',
//             },
//             {
//               name: 'borderRadius',
//               type: 'text',
//               label: 'Border Radius',
//               defaultValue: '0px',
//             },
//             {
//               name: 'padding',
//               type: 'text',
//               label: 'Padding',
//               defaultValue: '20px',
//             },
//             {
//               name: 'marginBottom',
//               type: 'text',
//               label: 'Margin Bottom',
//               defaultValue: '40px',
//             },
//           ],
//         },
//         // Left Container Content
//         {
//           name: 'leftContainer',
//           type: 'group',
//           label: 'Left Container',
//           fields: [
//             {
//               name: 'styles',
//               type: 'group',
//               label: 'Left Container Styles',
//               fields: [
//                 {
//                   name: 'backgroundColor',
//                   type: 'text',
//                   label: 'Background Color',
//                   defaultValue: 'transparent',
//                 },
//                 {
//                   name: 'textColor',
//                   type: 'text',
//                   label: 'Text Color',
//                   defaultValue: '#000000',
//                 },
//               ],
//             },
//             {
//               name: 'title',
//               type: 'text',
//               required: true,
//               label: 'Product Title',
//             },
//             {
//               name: 'titleStyles',
//               type: 'group',
//               label: 'Title Styles',
//               fields: [
//                 {
//                   name: 'color',
//                   type: 'text',
//                   label: 'Title Color',
//                   defaultValue: '#000000',
//                 },
//                 {
//                   name: 'fontSize',
//                   type: 'text',
//                   label: 'Font Size',
//                   defaultValue: '2rem',
//                 },
//                 {
//                   name: 'fontWeight',
//                   type: 'text',
//                   label: 'Font Weight',
//                   defaultValue: '700',
//                 },
//               ],
//             },
//             {
//               name: 'description',
//               type: 'richText',
//               required: true,
//               label: 'Product Description',
//             },
//             {
//               name: 'descriptionStyles',
//               type: 'group',
//               label: 'Description Styles',
//               fields: [
//                 {
//                   name: 'color',
//                   type: 'text',
//                   label: 'Description Color',
//                   defaultValue: '#666666',
//                 },
//                 {
//                   name: 'fontSize',
//                   type: 'text',
//                   label: 'Font Size',
//                   defaultValue: '1rem',
//                 },
//                 {
//                   name: 'lineHeight',
//                   type: 'text',
//                   label: 'Line Height',
//                   defaultValue: '1.6',
//                 },
//               ],
//             },
//             {
//               name: 'tag',
//               type: 'group',
//               label: 'Product Tag',
//               fields: [
//                 {
//                   name: 'show',
//                   type: 'checkbox',
//                   label: 'Show Tag',
//                   defaultValue: true,
//                 },
//                 {
//                   name: 'text',
//                   type: 'text',
//                   label: 'Tag Text',
//                 },
//                 {
//                   name: 'icon',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Tag Icon',
//                 },
//                 {
//                   name: 'iconUrl',
//                   type: 'text',
//                   label: 'Tag Icon URL (fallback)',
//                   defaultValue:
//                     'https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb1e9f259878c435a4903e_SolarPanel.webp',
//                 },
//                 {
//                   name: 'styles',
//                   type: 'group',
//                   label: 'Tag Styles',
//                   fields: [
//                     {
//                       name: 'backgroundColor',
//                       type: 'text',
//                       label: 'Background Color',
//                       defaultValue: '#f5f5f5',
//                     },
//                     {
//                       name: 'textColor',
//                       type: 'text',
//                       label: 'Text Color',
//                       defaultValue: '#000000',
//                     },
//                     {
//                       name: 'borderRadius',
//                       type: 'text',
//                       label: 'Border Radius',
//                       defaultValue: '20px',
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//         // Applications Section
//         {
//           name: 'applicationsSection',
//           type: 'group',
//           label: 'Applications Section',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Applications',
//               defaultValue: true,
//             },
//             {
//               name: 'heading',
//               type: 'text',
//               label: 'Section Heading',
//               defaultValue: 'Application',
//             },
//             {
//               name: 'headingStyles',
//               type: 'group',
//               label: 'Heading Styles',
//               fields: [
//                 {
//                   name: 'color',
//                   type: 'text',
//                   label: 'Color',
//                   defaultValue: '#000000',
//                 },
//                 {
//                   name: 'fontSize',
//                   type: 'text',
//                   label: 'Font Size',
//                   defaultValue: '1.2rem',
//                 },
//                 {
//                   name: 'fontWeight',
//                   type: 'text',
//                   label: 'Font Weight',
//                   defaultValue: '600',
//                 },
//               ],
//             },
//             {
//               name: 'styles',
//               type: 'group',
//               label: 'Applications Container Styles',
//               fields: [
//                 {
//                   name: 'backgroundColor',
//                   type: 'text',
//                   label: 'Background Color',
//                   defaultValue: 'transparent',
//                 },
//                 {
//                   name: 'padding',
//                   type: 'text',
//                   label: 'Padding',
//                   defaultValue: '20px 0',
//                 },
//               ],
//             },
//             {
//               name: 'applications',
//               type: 'array',
//               label: 'Applications',
//               labels: {
//                 singular: 'Application',
//                 plural: 'Applications',
//               },
//               admin: {
//                 components: {
//                   RowLabel: ({ data, index }) => {
//                     return data?.title || `Application ${index + 1}`
//                   },
//                 },
//               },
//               fields: [
//                 {
//                   name: 'order',
//                   type: 'number',
//                   label: 'Order',
//                   defaultValue: 0,
//                 },
//                 {
//                   name: 'title',
//                   type: 'text',
//                   required: true,
//                   label: 'Application Title',
//                 },
//                 {
//                   name: 'image',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Application Icon/Image',
//                 },
//                 {
//                   name: 'imageUrl',
//                   type: 'text',
//                   label: 'Image URL (fallback)',
//                 },
//                 {
//                   name: 'styles',
//                   type: 'group',
//                   label: 'Application Item Styles',
//                   fields: [
//                     {
//                       name: 'backgroundColor',
//                       type: 'text',
//                       label: 'Background Color',
//                       defaultValue: 'transparent',
//                     },
//                     {
//                       name: 'textColor',
//                       type: 'text',
//                       label: 'Text Color',
//                       defaultValue: '#000000',
//                     },
//                     {
//                       name: 'borderColor',
//                       type: 'text',
//                       label: 'Border Color',
//                       defaultValue: '#e0e0e0',
//                     },
//                     {
//                       name: 'borderRadius',
//                       type: 'text',
//                       label: 'Border Radius',
//                       defaultValue: '8px',
//                     },
//                     {
//                       name: 'padding',
//                       type: 'text',
//                       label: 'Padding',
//                       defaultValue: '15px',
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//         // CTA Button
//         {
//           name: 'ctaButton',
//           type: 'group',
//           label: 'CTA Button',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show CTA Button',
//               defaultValue: true,
//             },
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Button Text',
//               defaultValue: 'Contact us',
//             },
//             {
//               name: 'link',
//               type: 'text',
//               label: 'Button Link',
//               defaultValue: '/contact',
//             },
//             {
//               name: 'icon',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Button Icon',
//             },
//             {
//               name: 'iconUrl',
//               type: 'text',
//               label: 'Icon URL (fallback)',
//               defaultValue:
//                 'https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg',
//             },
//             {
//               name: 'styles',
//               type: 'group',
//               label: 'Button Styles',
//               fields: [
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
//                   name: 'hoverBackgroundColor',
//                   type: 'text',
//                   label: 'Hover Background Color',
//                   defaultValue: '#e55a2b',
//                 },
//                 {
//                   name: 'hoverTextColor',
//                   type: 'text',
//                   label: 'Hover Text Color',
//                   defaultValue: '#ffffff',
//                 },
//                 {
//                   name: 'borderRadius',
//                   type: 'text',
//                   label: 'Border Radius',
//                   defaultValue: '25px',
//                 },
//                 {
//                   name: 'padding',
//                   type: 'text',
//                   label: 'Padding',
//                   defaultValue: '12px 30px',
//                 },
//                 {
//                   name: 'fontSize',
//                   type: 'text',
//                   label: 'Font Size',
//                   defaultValue: '1rem',
//                 },
//                 {
//                   name: 'fontWeight',
//                   type: 'text',
//                   label: 'Font Weight',
//                   defaultValue: '600',
//                 },
//               ],
//             },
//           ],
//         },
//         // Right Container (Image/Slider)
//         {
//           name: 'rightContainer',
//           type: 'group',
//           label: 'Right Container (Image/Slider)',
//           fields: [
//             {
//               name: 'styles',
//               type: 'group',
//               label: 'Right Container Styles',
//               fields: [
//                 {
//                   name: 'backgroundColor',
//                   type: 'text',
//                   label: 'Background Color',
//                   defaultValue: 'transparent',
//                 },
//                 {
//                   name: 'borderRadius',
//                   type: 'text',
//                   label: 'Border Radius',
//                   defaultValue: '12px',
//                 },
//               ],
//             },
//             {
//               name: 'image',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Main Product Image',
//             },
//             {
//               name: 'imageUrl',
//               type: 'text',
//               label: 'Image URL (fallback)',
//             },
//             {
//               name: 'imageStyles',
//               type: 'group',
//               label: 'Image Styles',
//               fields: [
//                 {
//                   name: 'width',
//                   type: 'text',
//                   label: 'Width',
//                   defaultValue: '560px',
//                 },
//                 {
//                   name: 'height',
//                   type: 'text',
//                   label: 'Height',
//                   defaultValue: '400px',
//                 },
//                 {
//                   name: 'objectFit',
//                   type: 'select',
//                   label: 'Object Fit',
//                   defaultValue: 'cover',
//                   options: [
//                     { label: 'Cover', value: 'cover' },
//                     { label: 'Contain', value: 'contain' },
//                     { label: 'Fill', value: 'fill' },
//                     { label: 'None', value: 'none' },
//                   ],
//                 },
//                 {
//                   name: 'borderRadius',
//                   type: 'text',
//                   label: 'Border Radius',
//                   defaultValue: '12px',
//                 },
//               ],
//             },
//             {
//               name: 'sliderSettings',
//               type: 'group',
//               label: 'Slider Settings',
//               fields: [
//                 {
//                   name: 'autoplay',
//                   type: 'checkbox',
//                   label: 'Autoplay',
//                   defaultValue: false,
//                 },
//                 {
//                   name: 'delay',
//                   type: 'number',
//                   label: 'Delay (ms)',
//                   defaultValue: 4000,
//                 },
//                 {
//                   name: 'duration',
//                   type: 'number',
//                   label: 'Duration (ms)',
//                   defaultValue: 500,
//                 },
//                 {
//                   name: 'infinite',
//                   type: 'checkbox',
//                   label: 'Infinite Loop',
//                   defaultValue: true,
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// }

// // export default ProductSection

import { CollectionConfig } from 'payload'

export const ProductSection: CollectionConfig = {
  slug: 'product-section',
  admin: {
    useAsTitle: 'sectionTitle',
    defaultColumns: ['sectionTitle', 'isActive', 'order'],
    group: 'Components',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },

  /* -------------------------------------------------
   *  AUTO-POPULATION HOOKS (same as Blogs)
   * ------------------------------------------------- */
  hooks: {
    beforeChange: [
      async ({ data, operation }) => {
        const baseUrl = process.env.PAYLOAD_PUBLIC_SITE_URL || 'https://gfrpindia.com'

        // ---- Ensure nested SEO objects exist ----
        data.seo = data.seo || {}
        data.seo.urls = data.seo.urls || {}
        data.seo.open_graph = data.seo.open_graph || {}
        data.seo.twitter = data.seo.twitter || {}
        data.seo.schema = data.seo.schema || {}
        data.seo.schema.publisher = data.seo.schema.publisher || {}
        data.seo.schema.author_schema = data.seo.schema.author_schema || {}

        // 1. Slug from sectionTitle (if missing)
        if (!data.slug && data.sectionTitle) {
          data.slug = data.sectionTitle
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
        }

        // 2. Meta title / description fallback
        if (!data.seo.meta_title && data.sectionTitle) {
          data.seo.meta_title = data.sectionTitle.substring(0, 60)
        }
        if (!data.seo.meta_description && data.products?.[0]?.leftContainer?.description) {
          const raw = data.products[0].leftContainer.description
          const plain = raw?.root?.children
            ?.map((n: any) => n.children?.[0]?.text || '')
            .join(' ')
            .substring(0, 160)
          data.seo.meta_description = plain
        }

        // 3. Canonical URL
        if (!data.seo.urls.canonical_url) {
          data.seo.urls.canonical_url = `${baseUrl}/products/${data.slug}`
        }

        // 4. OG / Twitter image fallback (first product image)
        const firstImg =
          data.products?.[0]?.rightContainer?.image || data.products?.[0]?.rightContainer?.imageUrl
        if (firstImg && !data.seo.open_graph.og_image) {
          data.seo.open_graph.og_image = firstImg
        }
        if (firstImg && !data.seo.twitter.twitter_image) {
          data.seo.twitter.twitter_image = firstImg
        }

        // 5. OG / Twitter title fallback
        if (!data.seo.open_graph.og_title)
          data.seo.open_graph.og_title = data.seo.meta_title || data.sectionTitle
        if (!data.seo.open_graph.og_description)
          data.seo.open_graph.og_description = data.seo.meta_description
        if (!data.seo.twitter.twitter_title)
          data.seo.twitter.twitter_title = data.seo.meta_title || data.sectionTitle
        if (!data.seo.twitter.twitter_description)
          data.seo.twitter.twitter_description = data.seo.meta_description

        // 6. Publisher (site-wide)
        if (!data.seo.schema.publisher.name) {
          data.seo.schema.publisher.name = 'GFRP India'
          data.seo.schema.publisher.url = baseUrl
        }

        // 7. Breadcrumb schema (auto)
        data.seo.schema.breadcrumb_schema = [
          { name: 'Home', item: baseUrl },
          { name: 'Products', item: `${baseUrl}/products` },
          { name: data.sectionTitle, item: `${baseUrl}/products/${data.slug}` },
        ]

        // 8. Word count & reading time (from first product description)
        let wordCount = 0
        const desc = data.products?.[0]?.leftContainer?.description?.root?.children
        if (desc) {
          const count = (node: any) => {
            if (node.type === 'text' && node.text) {
              wordCount += node.text.trim().split(/\s+/).filter(Boolean).length
            }
            if (node.children) node.children.forEach(count)
          }
          desc.forEach(count)
        }
        data.seo.schema.word_count = wordCount
        data.seo.schema.time_required = `PT${Math.ceil(wordCount / 238)}M`

        // 9. Modified / last-modified
        const now = new Date().toISOString()
        data.seo.schema.modified_time = now
        data.seo.sitemap = data.seo.sitemap || {}
        data.seo.sitemap.last_modified = now

        return data
      },
    ],
  },

  fields: [
    /* ------------------- BASIC INFO ------------------- */
    { name: 'sectionTitle', type: 'text', required: true, label: 'Section Title (Internal)' },
    { name: 'isActive', type: 'checkbox', defaultValue: true, label: 'Active' },
    { name: 'order', type: 'number', defaultValue: 0, label: 'Display Order' },

    /* ------------------- SECTION STYLES ------------------- */
    {
      name: 'sectionStyles',
      type: 'group',
      label: 'Section Styles',
      fields: [
        { name: 'backgroundColor', type: 'text', defaultValue: '#ffffff' },
        { name: 'marginTop', type: 'text', defaultValue: '100px' },
        { name: 'paddingTop', type: 'text', defaultValue: '0' },
        { name: 'paddingBottom', type: 'text', defaultValue: '0' },
      ],
    },

    /* ------------------- TOP CONTAINER ------------------- */
    {
      name: 'topContainer',
      type: 'group',
      label: 'Top Container',
      fields: [
        {
          name: 'styles',
          type: 'group',
          label: 'Top Container Styles',
          fields: [
            { name: 'backgroundColor', type: 'text', defaultValue: 'transparent' },
            { name: 'textColor', type: 'text', defaultValue: '#000000' },
          ],
        },
        {
          name: 'dotIndicator',
          type: 'group',
          label: 'Dot Indicator',
          fields: [
            { name: 'show', type: 'checkbox', defaultValue: true },
            { name: 'color', type: 'text', defaultValue: '#ff6b35' },
            { name: 'text', type: 'text', defaultValue: 'Machine' },
            { name: 'textColor', type: 'text', defaultValue: '#000000' },
          ],
        },
        {
          name: 'mainHeading',
          type: 'group',
          label: 'Main Heading',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
              defaultValue: 'Advanced Manufacturing Solutions',
            },
            { name: 'color', type: 'text', defaultValue: '#000000' },
            { name: 'fontSize', type: 'text', defaultValue: '2.5rem' },
            { name: 'fontWeight', type: 'text', defaultValue: '700' },
          ],
        },
      ],
    },

    /* ------------------- PRODUCTS ARRAY ------------------- */
    {
      name: 'products',
      type: 'array',
      label: 'Products',
      minRows: 1,
      admin: {
        components: {
          RowLabel: ({ data, index }) => data?.leftContainer?.title || `Product ${index + 1}`,
        },
        initCollapsed: true,
      },
      fields: [
        { name: 'order', type: 'number', defaultValue: 0 },
        { name: 'isActive', type: 'checkbox', defaultValue: true },

        /* ---- PRODUCT BLOCK STYLES ---- */
        {
          name: 'styles',
          type: 'group',
          label: 'Product Block Styles',
          fields: [
            { name: 'backgroundColor', type: 'text', defaultValue: 'transparent' },
            { name: 'borderColor', type: 'text', defaultValue: 'transparent' },
            { name: 'borderWidth', type: 'text', defaultValue: '0px' },
            { name: 'borderRadius', type: 'text', defaultValue: '0px' },
            { name: 'padding', type: 'text', defaultValue: '20px' },
            { name: 'marginBottom', type: 'text', defaultValue: '40px' },
          ],
        },

        /* ---- LEFT CONTAINER (TEXT) ---- */
        {
          name: 'leftContainer',
          type: 'group',
          label: 'Left Container',
          fields: [
            {
              name: 'styles',
              type: 'group',
              label: 'Left Container Styles',
              fields: [
                { name: 'backgroundColor', type: 'text', defaultValue: 'transparent' },
                { name: 'textColor', type: 'text', defaultValue: '#000000' },
              ],
            },
            { name: 'title', type: 'text', required: true, label: 'Product Title' },
            {
              name: 'titleStyles',
              type: 'group',
              label: 'Title Styles',
              fields: [
                { name: 'color', type: 'text', defaultValue: '#000000' },
                { name: 'fontSize', type: 'text', defaultValue: '2rem' },
                { name: 'fontWeight', type: 'text', defaultValue: '700' },
              ],
            },
            { name: 'description', type: 'richText', required: true, label: 'Product Description' },
            {
              name: 'descriptionStyles',
              type: 'group',
              label: 'Description Styles',
              fields: [
                { name: 'color', type: 'text', defaultValue: '#666666' },
                { name: 'fontSize', type: 'text', defaultValue: '1rem' },
                { name: 'lineHeight', type: 'text', defaultValue: '1.6' },
              ],
            },

            /* ---- PRODUCT TAG ---- */
            {
              name: 'tag',
              type: 'group',
              label: 'Product Tag',
              fields: [
                { name: 'show', type: 'checkbox', defaultValue: true },
                { name: 'text', type: 'text' },
                { name: 'icon', type: 'upload', relationTo: 'media' },
                {
                  name: 'iconUrl',
                  type: 'text',
                  defaultValue:
                    'https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb1e9f259878c435a4903e_SolarPanel.webp',
                },
                {
                  name: 'styles',
                  type: 'group',
                  label: 'Tag Styles',
                  fields: [
                    { name: 'backgroundColor', type: 'text', defaultValue: '#f5f5f5' },
                    { name: 'textColor', type: 'text', defaultValue: '#000000' },
                    { name: 'borderRadius', type: 'text', defaultValue: '20px' },
                  ],
                },
              ],
            },

            /* ---- PRODUCT-SPECIFIC SEO (price, sku, brand, rating) ---- */
            {
              name: 'productSeo',
              type: 'group',
              label: 'Product SEO (Schema.org)',
              fields: [
                { name: 'sku', type: 'text', label: 'SKU' },
                { name: 'brand', type: 'text', label: 'Brand', defaultValue: 'GFRP India' },
                { name: 'price', type: 'number', label: 'Price (INR)' },
                { name: 'currency', type: 'text', defaultValue: 'INR' },
                {
                  name: 'availability',
                  type: 'select',
                  defaultValue: 'https://schema.org/InStock',
                  options: [
                    { label: 'In Stock', value: 'https://schema.org/InStock' },
                    { label: 'Out of Stock', value: 'https://schema.org/OutOfStock' },
                    { label: 'PreOrder', value: 'https://schema.org/PreOrder' },
                  ],
                },
                {
                  name: 'ratingValue',
                  type: 'number',
                  min: 0,
                  max: 5,
                  step: 0.1,
                  label: 'Rating (1-5)',
                },
                { name: 'reviewCount', type: 'number', label: 'Number of Reviews' },
              ],
            },
          ],
        },

        /* ---- APPLICATIONS SECTION ---- */
        {
          name: 'applicationsSection',
          type: 'group',
          label: 'Applications Section',
          fields: [
            { name: 'show', type: 'checkbox', defaultValue: true },
            { name: 'heading', type: 'text', defaultValue: 'Application' },
            {
              name: 'headingStyles',
              type: 'group',
              fields: [
                { name: 'color', type: 'text', defaultValue: '#000000' },
                { name: 'fontSize', type: 'text', defaultValue: '1.2rem' },
                { name: 'fontWeight', type: 'text', defaultValue: '600' },
              ],
            },
            {
              name: 'styles',
              type: 'group',
              fields: [
                { name: 'backgroundColor', type: 'text', defaultValue: 'transparent' },
                { name: 'padding', type: 'text', defaultValue: '20px 0' },
              ],
            },
            {
              name: 'applications',
              type: 'array',
              fields: [
                { name: 'order', type: 'number', defaultValue: 0 },
                { name: 'title', type: 'text', required: true },
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'imageUrl', type: 'text' },
                {
                  name: 'styles',
                  type: 'group',
                  fields: [
                    { name: 'backgroundColor', type: 'text', defaultValue: 'transparent' },
                    { name: 'textColor', type: 'text', defaultValue: '#000000' },
                    { name: 'borderColor', type: 'text', defaultValue: '#e0e0e0' },
                    { name: 'borderRadius', type: 'text', defaultValue: '8px' },
                    { name: 'padding', type: 'text', defaultValue: '15px' },
                  ],
                },
              ],
            },
          ],
        },

        /* ---- CTA BUTTON ---- */
        {
          name: 'ctaButton',
          type: 'group',
          label: 'CTA Button',
          fields: [
            { name: 'show', type: 'checkbox', defaultValue: true },
            { name: 'text', type: 'text', defaultValue: 'Contact us' },
            { name: 'link', type: 'text', defaultValue: '/contact' },
            { name: 'icon', type: 'upload', relationTo: 'media' },
            {
              name: 'iconUrl',
              type: 'text',
              defaultValue:
                'https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg',
            },
            {
              name: 'styles',
              type: 'group',
              fields: [
                { name: 'backgroundColor', type: 'text', defaultValue: '#ff6b35' },
                { name: 'textColor', type: 'text', defaultValue: '#ffffff' },
                { name: 'hoverBackgroundColor', type: 'text', defaultValue: '#e55a2b' },
                { name: 'hoverTextColor', type: 'text', defaultValue: '#ffffff' },
                { name: 'borderRadius', type: 'text', defaultValue: '25px' },
                { name: 'padding', type: 'text', defaultValue: '12px 30px' },
                { name: 'fontSize', type: 'text', defaultValue: '1rem' },
                { name: 'fontWeight', type: 'text', defaultValue: '600' },
              ],
            },
          ],
        },

        /* ---- RIGHT CONTAINER (IMAGE) ---- */
        {
          name: 'rightContainer',
          type: 'group',
          label: 'Right Container (Image/Slider)',
          fields: [
            {
              name: 'styles',
              type: 'group',
              fields: [
                { name: 'backgroundColor', type: 'text', defaultValue: 'transparent' },
                { name: 'borderRadius', type: 'text', defaultValue: '12px' },
              ],
            },
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'imageUrl', type: 'text' },
            {
              name: 'imageStyles',
              type: 'group',
              fields: [
                { name: 'width', type: 'text', defaultValue: '560px' },
                { name: 'height', type: 'text', defaultValue: '400px' },
                {
                  name: 'objectFit',
                  type: 'select',
                  defaultValue: 'cover',
                  options: [
                    { label: 'Cover', value: 'cover' },
                    { label: 'Contain', value: 'contain' },
                  ],
                },
                { name: 'borderRadius', type: 'text', defaultValue: '12px' },
              ],
            },
            {
              name: 'sliderSettings',
              type: 'group',
              fields: [
                { name: 'autoplay', type: 'checkbox', defaultValue: false },
                { name: 'delay', type: 'number', defaultValue: 4000 },
                { name: 'duration', type: 'number', defaultValue: 500 },
                { name: 'infinite', type: 'checkbox', defaultValue: true },
              ],
            },
          ],
        },
      ],
    },

    /* -------------------------------------------------
     *  ULTIMATE SEO CONFIGURATION (copy-paste from Blogs)
     * ------------------------------------------------- */
    {
      name: 'seo',
      type: 'group',
      label: 'SEO & Metadata',
      admin: { description: 'Complete SEO for this product section' },
      fields: [
        /* 1. PRIMARY META TAGS */
        {
          name: 'meta_title',
          type: 'text',
          maxLength: 60,
          admin: {
            description: 'PRIMARY SEO TITLE (50-60 chars)',
            placeholder: 'Auto-fills from section title',
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
            placeholder: 'Auto-fills from first product description',
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
              defaultValue: 'product',
              options: [
                { label: 'Product', value: 'product' },
                { label: 'Website', value: 'website' },
              ],
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
              options: [
                { label: 'Summary Large Image', value: 'summary_large_image' },
                { label: 'Summary', value: 'summary' },
              ],
            },
            { name: 'twitter_title', type: 'text', maxLength: 70 },
            { name: 'twitter_description', type: 'textarea', maxLength: 200 },
            { name: 'twitter_image', type: 'upload', relationTo: 'media' },
            { name: 'twitter_image_alt', type: 'text' },
            { name: 'twitter_site', type: 'text', placeholder: '@gfrpindia' },
            { name: 'twitter_creator', type: 'text' },
          ],
        },

        /* 5. SCHEMA.ORG – Product + FAQ + Breadcrumb */
        {
          name: 'schema',
          type: 'group',
          label: 'Schema.org (Rich Results)',
          fields: [
            { name: 'enable_schema', type: 'checkbox', defaultValue: true },
            {
              name: 'article_type',
              type: 'select',
              defaultValue: 'Product',
              options: [
                { label: 'Product (Recommended)', value: 'Product' },
                { label: 'WebPage', value: 'WebPage' },
              ],
            },
            { name: 'headline', type: 'text', maxLength: 110 },
            { name: 'word_count', type: 'number', admin: { readOnly: true } },
            { name: 'time_required', type: 'text', admin: { readOnly: true } },

            /* Publisher */
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

            /* Author (optional) */
            {
              name: 'author_schema',
              type: 'group',
              fields: [
                {
                  name: 'author_type',
                  type: 'select',
                  defaultValue: 'Organization',
                  options: [
                    { label: 'Organization', value: 'Organization' },
                    { label: 'Person', value: 'Person' },
                  ],
                },
                { name: 'author_url', type: 'text' },
              ],
            },

            /* Modified time */
            { name: 'modified_time', type: 'date', admin: { readOnly: true } },

            /* FAQ */
            {
              name: 'faq_schema',
              type: 'array',
              fields: [
                { name: 'question', type: 'text', required: true },
                { name: 'answer', type: 'textarea', required: true },
              ],
            },

            /* Breadcrumb (auto-filled) */
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

        /* 7. CANONICAL & ALTERNATE */
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
              defaultValue: 0.7,
              min: 0,
              max: 1,
              step: 0.1,
            },
            {
              name: 'change_frequency',
              type: 'select',
              defaultValue: 'monthly',
              options: [
                { label: 'Monthly', value: 'monthly' },
                { label: 'Weekly', value: 'weekly' },
                { label: 'Daily', value: 'daily' },
              ],
            },
            { name: 'last_modified', type: 'date', admin: { readOnly: true } },
          ],
        },

        /* 9. PERFORMANCE */
        {
          name: 'performance',
          type: 'group',
          label: 'Performance Hints',
          fields: [
            {
              name: 'preload_resources',
              type: 'array',
              fields: [
                { name: 'href', type: 'text', required: true },
                {
                  name: 'as',
                  type: 'select',
                  options: [
                    { label: 'Image', value: 'image' },
                    { label: 'Font', value: 'font' },
                    { label: 'Script', value: 'script' },
                  ],
                },
                { name: 'type', type: 'text' },
              ],
            },
          ],
        },

        /* 10. CUSTOM TAGS (optional) */
        {
          name: 'custom_tags',
          type: 'group',
          label: 'Custom Meta Tags',
          fields: [
            {
              name: 'meta_tags',
              type: 'array',
              fields: [
                {
                  name: 'tag_type',
                  type: 'select',
                  options: [
                    { label: 'Meta (name)', value: 'meta_name' },
                    { label: 'Meta (property)', value: 'meta_property' },
                  ],
                  required: true,
                },
                { name: 'attribute_name', type: 'text', required: true },
                { name: 'attribute_value', type: 'text', required: true },
              ],
            },
          ],
        },
      ],
    },
  ],
}