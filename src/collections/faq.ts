import { CollectionConfig } from 'payload'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  admin: {
    useAsTitle: 'componentName',
    defaultColumns: ['componentName', 'componentType', 'isActive'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'componentName',
      type: 'text',
      required: true,
      label: 'Component Name',
    },
    {
      name: 'componentType',
      type: 'select',
      required: true,
      options: [
        { label: 'FAQ Section', value: 'faq-section' },
        { label: 'Hero Section', value: 'hero-section' },
        { label: 'Services Section', value: 'services-section' },
        // Add more component types as needed
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
    // FAQ Section Specific Fields
    {
      name: 'faqSection',
      type: 'group',
      admin: {
        condition: (data) => data.componentType === 'faq-section',
      },
      fields: [
        // Section Styling
        {
          name: 'sectionStyles',
          type: 'group',
          label: 'Section Styles',
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              defaultValue: '#ffffff',
              admin: {
                description: 'Hex color code (e.g., #ffffff)',
              },
            },
            {
              name: 'paddingTop',
              type: 'text',
              label: 'Padding Top',
              defaultValue: '80px',
            },
            {
              name: 'paddingBottom',
              type: 'text',
              label: 'Padding Bottom',
              defaultValue: '80px',
            },
          ],
        },
        // Top Section (Heading Area)
        {
          name: 'topSection',
          type: 'group',
          label: 'Top Section',
          fields: [
            {
              name: 'styles',
              type: 'group',
              label: 'Top Section Styles',
              fields: [
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Background Color',
                  defaultValue: 'transparent',
                },
                {
                  name: 'marginBottom',
                  type: 'text',
                  label: 'Margin Bottom',
                  defaultValue: '40px',
                },
              ],
            },
            {
              name: 'dot',
              type: 'group',
              label: 'Dot Indicator',
              fields: [
                {
                  name: 'show',
                  type: 'checkbox',
                  defaultValue: true,
                  label: 'Show Dot',
                },
                {
                  name: 'color',
                  type: 'text',
                  label: 'Dot Color',
                  defaultValue: '#ff6b35',
                },
                {
                  name: 'size',
                  type: 'text',
                  label: 'Dot Size',
                  defaultValue: '8px',
                },
              ],
            },
            {
              name: 'smallHeading',
              type: 'group',
              label: 'Small Heading (FAQ)',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  label: 'Text',
                  defaultValue: 'FAQ',
                  required: true,
                },
                {
                  name: 'color',
                  type: 'text',
                  label: 'Text Color',
                  defaultValue: '#000000',
                },
                {
                  name: 'fontSize',
                  type: 'text',
                  label: 'Font Size',
                  defaultValue: '14px',
                },
                {
                  name: 'fontWeight',
                  type: 'text',
                  label: 'Font Weight',
                  defaultValue: '600',
                },
                {
                  name: 'textTransform',
                  type: 'select',
                  label: 'Text Transform',
                  defaultValue: 'uppercase',
                  options: [
                    { label: 'None', value: 'none' },
                    { label: 'Uppercase', value: 'uppercase' },
                    { label: 'Lowercase', value: 'lowercase' },
                    { label: 'Capitalize', value: 'capitalize' },
                  ],
                },
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
                  label: 'Text',
                  defaultValue: 'Frequently Asked Questions',
                  required: true,
                },
                {
                  name: 'color',
                  type: 'text',
                  label: 'Text Color',
                  defaultValue: '#000000',
                },
                {
                  name: 'fontSize',
                  type: 'text',
                  label: 'Font Size',
                  defaultValue: '48px',
                },
                {
                  name: 'fontWeight',
                  type: 'text',
                  label: 'Font Weight',
                  defaultValue: '700',
                },
                {
                  name: 'lineHeight',
                  type: 'text',
                  label: 'Line Height',
                  defaultValue: '1.2',
                },
                {
                  name: 'marginTop',
                  type: 'text',
                  label: 'Margin Top',
                  defaultValue: '16px',
                },
              ],
            },
          ],
        },
        // FAQ Items
        {
          name: 'faqItems',
          type: 'array',
          label: 'FAQ Items',
          minRows: 1,
          admin: {
            components: {
              RowLabel: ({ data, index }) => {
                return data?.question || `FAQ Item ${index + 1}`
              },
            },
          },
          fields: [
            {
              name: 'question',
              type: 'text',
              required: true,
              label: 'Question',
            },
            {
              name: 'answer',
              type: 'textarea',
              required: true,
              label: 'Answer',
            },
            {
              name: 'isDefaultOpen',
              type: 'checkbox',
              defaultValue: false,
              label: 'Open by Default',
            },
            {
              name: 'styles',
              type: 'group',
              label: 'Item Styles',
              fields: [
                {
                  name: 'questionColor',
                  type: 'text',
                  label: 'Question Text Color',
                  defaultValue: '#000000',
                },
                {
                  name: 'questionFontSize',
                  type: 'text',
                  label: 'Question Font Size',
                  defaultValue: '18px',
                },
                {
                  name: 'questionFontWeight',
                  type: 'text',
                  label: 'Question Font Weight',
                  defaultValue: '600',
                },
                {
                  name: 'answerColor',
                  type: 'text',
                  label: 'Answer Text Color',
                  defaultValue: '#666666',
                },
                {
                  name: 'answerFontSize',
                  type: 'text',
                  label: 'Answer Font Size',
                  defaultValue: '16px',
                },
                {
                  name: 'answerFontWeight',
                  type: 'text',
                  label: 'Answer Font Weight',
                  defaultValue: '400',
                },
                {
                  name: 'borderColor',
                  type: 'text',
                  label: 'Border Color',
                  defaultValue: '#e0e0e0',
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Background Color',
                  defaultValue: '#ffffff',
                },
                {
                  name: 'hoverBackgroundColor',
                  type: 'text',
                  label: 'Hover Background Color',
                  defaultValue: '#f9f9f9',
                },
              ],
            },
          ],
        },
        // FAQ List Styles
        {
          name: 'faqListStyles',
          type: 'group',
          label: 'FAQ List Styles',
          fields: [
            {
              name: 'itemSpacing',
              type: 'text',
              label: 'Space Between Items',
              defaultValue: '16px',
            },
            {
              name: 'chevronColor',
              type: 'text',
              label: 'Chevron Icon Color',
              defaultValue: '#000000',
            },
            {
              name: 'chevronSize',
              type: 'text',
              label: 'Chevron Icon Size',
              defaultValue: '20px',
            },
          ],
        },
        // CTA Section
        {
          name: 'ctaSection',
          type: 'group',
          label: 'CTA Section',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              defaultValue: true,
              label: 'Show CTA Section',
            },
            {
              name: 'styles',
              type: 'group',
              label: 'CTA Section Styles',
              fields: [
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Background Color',
                  defaultValue: 'transparent',
                },
                {
                  name: 'marginTop',
                  type: 'text',
                  label: 'Margin Top',
                  defaultValue: '40px',
                },
                {
                  name: 'padding',
                  type: 'text',
                  label: 'Padding',
                  defaultValue: '32px',
                },
              ],
            },
            {
              name: 'ctaButton',
              type: 'group',
              label: 'CTA Button',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  label: 'Button Text',
                  defaultValue: 'Contact Us',
                  required: true,
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Button Link',
                  defaultValue: '/contact',
                  required: true,
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
                  name: 'hoverBackgroundColor',
                  type: 'text',
                  label: 'Hover Background Color',
                  defaultValue: '#e55a2b',
                },
                {
                  name: 'fontSize',
                  type: 'text',
                  label: 'Font Size',
                  defaultValue: '16px',
                },
                {
                  name: 'fontWeight',
                  type: 'text',
                  label: 'Font Weight',
                  defaultValue: '600',
                },
                {
                  name: 'padding',
                  type: 'text',
                  label: 'Padding',
                  defaultValue: '12px 24px',
                },
                {
                  name: 'borderRadius',
                  type: 'text',
                  label: 'Border Radius',
                  defaultValue: '8px',
                },
                {
                  name: 'showIcon',
                  type: 'checkbox',
                  defaultValue: true,
                  label: 'Show Arrow Icon',
                },
                {
                  name: 'iconUrl',
                  type: 'text',
                  label: 'Icon URL',
                  defaultValue:
                    'https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg',
                },
              ],
            },
            {
              name: 'ctaText',
              type: 'group',
              label: 'CTA Description Text',
              fields: [
                {
                  name: 'text',
                  type: 'textarea',
                  label: 'Text',
                  defaultValue:
                    "Still have questions? We're here for you! Whether it's about performance, pricing, or project suitability — our team is ready to assist.",
                },
                {
                  name: 'color',
                  type: 'text',
                  label: 'Text Color',
                  defaultValue: '#666666',
                },
                {
                  name: 'fontSize',
                  type: 'text',
                  label: 'Font Size',
                  defaultValue: '14px',
                },
                {
                  name: 'fontWeight',
                  type: 'text',
                  label: 'Font Weight',
                  defaultValue: '400',
                },
                {
                  name: 'lineHeight',
                  type: 'text',
                  label: 'Line Height',
                  defaultValue: '1.6',
                },
                {
                  name: 'marginTop',
                  type: 'text',
                  label: 'Margin Top',
                  defaultValue: '16px',
                },
              ],
            },
          ],
        },
        // Animation Settings
        {
          name: 'animations',
          type: 'group',
          label: 'Animation Settings',
          fields: [
            {
              name: 'enableAnimations',
              type: 'checkbox',
              defaultValue: true,
              label: 'Enable Animations',
            },
            {
              name: 'transitionDuration',
              type: 'text',
              label: 'Transition Duration',
              defaultValue: '0.3s',
              admin: {
                description: 'Duration for open/close animations',
              },
            },
            {
              name: 'transitionEasing',
              type: 'select',
              label: 'Transition Easing',
              defaultValue: 'ease-in-out',
              options: [
                { label: 'Ease', value: 'ease' },
                { label: 'Ease In', value: 'ease-in' },
                { label: 'Ease Out', value: 'ease-out' },
                { label: 'Ease In Out', value: 'ease-in-out' },
                { label: 'Linear', value: 'linear' },
              ],
            },
          ],
        },
        // Layout Settings
        {
          name: 'layout',
          type: 'group',
          label: 'Layout Settings',
          fields: [
            {
              name: 'maxWidth',
              type: 'text',
              label: 'Container Max Width',
              defaultValue: '1200px',
            },
            {
              name: 'faqListMaxWidth',
              type: 'text',
              label: 'FAQ List Max Width',
              defaultValue: '800px',
            },
            {
              name: 'ctaSectionMaxWidth',
              type: 'text',
              label: 'CTA Section Max Width',
              defaultValue: '600px',
            },
          ],
        },
      ],
    },
  ],
}


