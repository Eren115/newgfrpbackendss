import { CollectionConfig } from 'payload'

export const Home: CollectionConfig = {
  slug: 'home',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'isActive'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Component Name',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
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
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      label: 'Display Order',
    },
    // Hero Section Fields
    {
      name: 'hero',
      type: 'group',
      admin: {
        condition: (data) => data.type === 'hero',
      },
      fields: [
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Background Image',
        },
        {
          name: 'backgroundImageUrl',
          type: 'text',
          label: 'Background Image URL (Alternative)',
        },
        {
          name: 'backgroundOverlay',
          type: 'text',
          label: 'Background Overlay (CSS)',
          defaultValue: 'linear-gradient(#0000, #000)',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          defaultValue: '#000000',
        },
        {
          name: 'smallTitle',
          type: 'text',
          required: true,
          label: 'Small Title',
        },
        {
          name: 'smallTitleColor',
          type: 'text',
          label: 'Small Title Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Main Title',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
          label: 'Description',
        },
        {
          name: 'descriptionColor',
          type: 'text',
          label: 'Description Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'dotColor',
          type: 'text',
          label: 'Dot Color',
          defaultValue: '#ff6b35',
        },
        {
          name: 'ctaButtons',
          type: 'array',
          label: 'CTA Buttons',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
              label: 'Button Text',
            },
            {
              name: 'link',
              type: 'text',
              required: true,
              label: 'Button Link',
            },
            {
              name: 'variant',
              type: 'select',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
              ],
              defaultValue: 'primary',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              defaultValue: '#ff6b35',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              defaultValue: '#ffffff',
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Button Icon',
            },
            {
              name: 'iconUrl',
              type: 'text',
              label: 'Icon URL (Alternative)',
            },
            {
              name: 'order',
              type: 'number',
              defaultValue: 0,
              label: 'Button Order',
            },
          ],
        },
      ],
    },
    // About Section Fields
    {
      name: 'about',
      type: 'group',
      admin: {
        condition: (data) => data.type === 'about',
      },
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Section Background Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'testimonialTitle',
          type: 'text',
          required: true,
          label: 'Testimonial Title',
        },
        {
          name: 'testimonialTitleColor',
          type: 'text',
          label: 'Testimonial Title Color',
          defaultValue: '#000000',
        },
        {
          name: 'image1',
          type: 'upload',
          relationTo: 'media',
          label: 'First Image',
        },
        {
          name: 'image1Url',
          type: 'text',
          label: 'First Image URL (Alternative)',
        },
        {
          name: 'image2',
          type: 'upload',
          relationTo: 'media',
          label: 'Second Image',
        },
        {
          name: 'image2Url',
          type: 'text',
          label: 'Second Image URL (Alternative)',
        },
        {
          name: 'sectionLabel',
          type: 'text',
          defaultValue: 'ABOUT US',
          label: 'Section Label',
        },
        {
          name: 'sectionLabelColor',
          type: 'text',
          label: 'Section Label Color',
          defaultValue: '#000000',
        },
        {
          name: 'dotColor',
          type: 'text',
          label: 'Dot Color',
          defaultValue: '#ff6b35',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Main Title',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
          defaultValue: '#000000',
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
          label: 'Description',
        },
        {
          name: 'descriptionColor',
          type: 'text',
          label: 'Description Color',
          defaultValue: '#666666',
        },
        {
          name: 'ctaButton',
          type: 'group',
          label: 'CTA Button',
          fields: [
            {
              name: 'text',
              type: 'text',
              defaultValue: 'About Us',
              label: 'Button Text',
            },
            {
              name: 'link',
              type: 'text',
              defaultValue: '/about',
              label: 'Button Link',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              defaultValue: '#ff6b35',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              defaultValue: '#ffffff',
            },
          ],
        },
        {
          name: 'contactLink',
          type: 'group',
          label: 'Contact Link',
          fields: [
            {
              name: 'text',
              type: 'text',
              defaultValue: 'Contact us',
              label: 'Link Text',
            },
            {
              name: 'url',
              type: 'text',
              defaultValue: '/contact',
              label: 'Link URL',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              defaultValue: '#ff6b35',
            },
          ],
        },
        // How to Start Section
        {
          name: 'howToStart',
          type: 'group',
          label: 'How to Start Section',
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              defaultValue: '#f8f9fa',
            },
            {
              name: 'sectionLabel',
              type: 'text',
              defaultValue: 'How to start',
              label: 'Section Label',
            },
            {
              name: 'sectionLabelColor',
              type: 'text',
              label: 'Section Label Color',
              defaultValue: '#000000',
            },
            {
              name: 'dotColor',
              type: 'text',
              label: 'Dot Color',
              defaultValue: '#ff6b35',
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Title',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
              defaultValue: '#000000',
            },
            {
              name: 'description',
              type: 'richText',
              required: true,
              label: 'Description',
            },
            {
              name: 'descriptionColor',
              type: 'text',
              label: 'Description Color',
              defaultValue: '#666666',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Section Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Image URL (Alternative)',
            },
            {
              name: 'steps',
              type: 'array',
              label: 'Steps',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  label: 'Step Title',
                },
                {
                  name: 'titleColor',
                  type: 'text',
                  label: 'Title Color',
                  defaultValue: '#000000',
                },
                {
                  name: 'description',
                  type: 'richText',
                  required: true,
                  label: 'Step Description',
                },
                {
                  name: 'descriptionColor',
                  type: 'text',
                  label: 'Description Color',
                  defaultValue: '#666666',
                },
                {
                  name: 'icon',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Step Icon',
                },
                {
                  name: 'iconUrl',
                  type: 'text',
                  label: 'Icon URL (Alternative)',
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Card Background Color',
                  defaultValue: '#ffffff',
                },
                {
                  name: 'order',
                  type: 'number',
                  defaultValue: 0,
                  label: 'Step Order',
                },
              ],
            },
          ],
        },
      ],
    },
    // Custom CSS
    {
      name: 'customCSS',
      type: 'code',
      label: 'Custom CSS',
      admin: {
        language: 'css',
      },
    },
    // Custom Classes
    {
      name: 'customClasses',
      type: 'text',
      label: 'Custom CSS Classes',
    },
  ],
}
