import { CollectionConfig } from 'payload'

export const FooterComponent: CollectionConfig = {
  slug: 'footer-component',
  admin: {
    useAsTitle: 'componentName',
    defaultColumns: ['componentName', 'isActive', 'updatedAt'],
    group: 'Components',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'componentName',
      type: 'text',
      required: true,
      defaultValue: 'Footer',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active',
    },

    // Global Footer Styles
    {
      type: 'collapsible',
      label: 'Global Footer Styles',
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          defaultValue: '#1a1a1a',
          admin: {
            description: 'Hex, RGB, or CSS color value',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'padding',
          type: 'group',
          fields: [
            {
              name: 'top',
              type: 'text',
              defaultValue: '60px',
            },
            {
              name: 'bottom',
              type: 'text',
              defaultValue: '60px',
            },
            {
              name: 'left',
              type: 'text',
              defaultValue: '20px',
            },
            {
              name: 'right',
              type: 'text',
              defaultValue: '20px',
            },
          ],
        },
      ],
    },

    // Logo Section
    {
      type: 'collapsible',
      label: 'Logo & Brand Section',
      fields: [
        {
          name: 'logoSection',
          type: 'group',
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo Image',
            },
            {
              name: 'logoUrl',
              type: 'text',
              label: 'Logo Image URL (fallback)',
              defaultValue: 'https://i.postimg.cc/sX0kRg7R/svgviewer-png-output-4.png',
            },
            {
              name: 'logoLink',
              type: 'text',
              label: 'Logo Link',
              defaultValue: '/',
            },
            {
              name: 'logoAlt',
              type: 'text',
              label: 'Logo Alt Text',
              defaultValue: 'solvance logo',
            },
            {
              name: 'logoMarginLeft',
              type: 'text',
              label: 'Logo Margin Left',
              defaultValue: '-15px',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Section Background Color',
              defaultValue: 'transparent',
            },
            {
              name: 'brandSubtext',
              type: 'textarea',
              label: 'Brand Description',
              defaultValue:
                'Stay updated with the latest in GFRP innovation—join thousands of professionals receiving insights on cutting-edge composites, construction trends, and next-gen material technologies.',
            },
            {
              name: 'subtextColor',
              type: 'text',
              label: 'Subtext Color',
              defaultValue: '#cccccc',
            },
          ],
        },
      ],
    },

    // Newsletter Form Section
    {
      type: 'collapsible',
      label: 'Newsletter Form Section',
      fields: [
        {
          name: 'newsletterForm',
          type: 'group',
          fields: [
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Enable Newsletter Form',
              defaultValue: true,
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Form Section Background Color',
              defaultValue: 'transparent',
            },
            {
              name: 'inputPlaceholder',
              type: 'text',
              label: 'Input Placeholder',
              defaultValue: 'Enter your email',
            },
            {
              name: 'submitButtonText',
              type: 'text',
              label: 'Submit Button Text',
              defaultValue: 'Subscribe',
            },
            {
              name: 'inputBackgroundColor',
              type: 'text',
              label: 'Input Background Color',
              defaultValue: '#ffffff',
            },
            {
              name: 'inputTextColor',
              type: 'text',
              label: 'Input Text Color',
              defaultValue: '#000000',
            },
            {
              name: 'inputBorderColor',
              type: 'text',
              label: 'Input Border Color',
              defaultValue: '#cccccc',
            },
            {
              name: 'buttonBackgroundColor',
              type: 'text',
              label: 'Button Background Color',
              defaultValue: '#0066cc',
            },
            {
              name: 'buttonTextColor',
              type: 'text',
              label: 'Button Text Color',
              defaultValue: '#ffffff',
            },
            {
              name: 'buttonHoverColor',
              type: 'text',
              label: 'Button Hover Color',
              defaultValue: '#0052a3',
            },
            {
              name: 'successMessage',
              type: 'text',
              label: 'Success Message',
              defaultValue: 'Thank you! Your submission has been received!',
            },
            {
              name: 'errorMessage',
              type: 'text',
              label: 'Error Message',
              defaultValue: 'Oops! Something went wrong while submitting the form.',
            },
            {
              name: 'privacyText',
              type: 'text',
              label: 'Privacy Policy Text',
              defaultValue: 'We care about your data in our privacy policy.',
            },
            {
              name: 'privacyTextColor',
              type: 'text',
              label: 'Privacy Text Color',
              defaultValue: '#999999',
            },
          ],
        },
      ],
    },

    // Navigation Sections (Drag & Drop)
    {
      type: 'collapsible',
      label: 'Navigation Sections',
      fields: [
        {
          name: 'navigationSections',
          type: 'array',
          label: 'Navigation Columns',
          admin: {
            description: 'Add and reorder navigation columns. Drag to change order.',
          },
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Section Heading',
              required: true,
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
              defaultValue: '#ffffff',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Column Background Color',
              defaultValue: 'transparent',
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Column Padding',
              defaultValue: '0px',
            },
            {
              name: 'links',
              type: 'array',
              label: 'Navigation Links',
              admin: {
                description: 'Add and reorder links. Drag to change order.',
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Link Label',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Link URL',
                  required: true,
                },
                {
                  name: 'linkColor',
                  type: 'text',
                  label: 'Link Color',
                  defaultValue: '#cccccc',
                },
                {
                  name: 'linkHoverColor',
                  type: 'text',
                  label: 'Link Hover Color',
                  defaultValue: '#ffffff',
                },
                {
                  name: 'openInNewTab',
                  type: 'checkbox',
                  label: 'Open in New Tab',
                  defaultValue: false,
                },
              ],
            },
          ],
          defaultValue: [
            {
              heading: 'Company',
              links: [
                { label: 'Home', url: '/' },
                { label: 'About', url: '/about' },
                { label: 'Resources', url: '/services' },
                { label: 'Machine', url: '/projects' },
                { label: 'Blog', url: '/blog' },
                { label: 'Contact', url: '/contact' },
              ],
            },
          ],
        },
      ],
    },

    // Bottom Section (Copyright & Social)
    {
      type: 'collapsible',
      label: 'Bottom Section',
      fields: [
        {
          name: 'bottomSection',
          type: 'group',
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Bottom Section Background Color',
              defaultValue: 'transparent',
            },
            {
              name: 'borderTop',
              type: 'text',
              label: 'Border Top',
              defaultValue: '1px solid #333333',
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Padding',
              defaultValue: '20px 0',
            },
            {
              name: 'copyrightText',
              type: 'text',
              label: 'Copyright Text',
              defaultValue: 'GFRP INDIA, all rights reserved, 2025',
            },
            {
              name: 'copyrightTextColor',
              type: 'text',
              label: 'Copyright Text Color',
              defaultValue: '#999999',
            },
          ],
        },
      ],
    },

    // Social Media Section
    {
      type: 'collapsible',
      label: 'Social Media Section',
      fields: [
        {
          name: 'socialSection',
          type: 'group',
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Social Media Heading',
              defaultValue: 'Connect with us:',
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
              defaultValue: '#ffffff',
            },
            {
              name: 'socialLinks',
              type: 'array',
              label: 'Social Media Links',
              admin: {
                description: 'Add and reorder social links. Drag to change order.',
              },
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  label: 'Platform',
                  options: [
                    { label: 'WhatsApp', value: 'whatsapp' },
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'Twitter', value: 'twitter' },
                    { label: 'Instagram', value: 'instagram' },
                    { label: 'LinkedIn', value: 'linkedin' },
                    { label: 'YouTube', value: 'youtube' },
                    { label: 'Custom', value: 'custom' },
                  ],
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Social Media URL',
                  required: true,
                },
                {
                  name: 'iconColor',
                  type: 'text',
                  label: 'Icon Color',
                  defaultValue: '#ffffff',
                },
                {
                  name: 'iconHoverColor',
                  type: 'text',
                  label: 'Icon Hover Color',
                  defaultValue: '#0066cc',
                },
                {
                  name: 'customSvg',
                  type: 'textarea',
                  label: 'Custom SVG Path (for custom platform)',
                  admin: {
                    description: 'Only needed if platform is "Custom"',
                    condition: (data, siblingData) => siblingData?.platform === 'custom',
                  },
                },
              ],
              defaultValue: [
                {
                  platform: 'whatsapp',
                  url: 'https://wa.me/+919530013034',
                  iconColor: '#ffffff',
                },
              ],
            },
          ],
        },
      ],
    },

    // Layout Settings
    {
      type: 'collapsible',
      label: 'Layout Settings',
      fields: [
        {
          name: 'layout',
          type: 'group',
          fields: [
            {
              name: 'maxWidth',
              type: 'text',
              label: 'Max Width',
              defaultValue: '1200px',
            },
            {
              name: 'topSectionFlexDirection',
              type: 'select',
              label: 'Top Section Flex Direction',
              options: [
                { label: 'Row', value: 'row' },
                { label: 'Column', value: 'column' },
              ],
              defaultValue: 'row',
            },
            {
              name: 'topSectionGap',
              type: 'text',
              label: 'Top Section Gap',
              defaultValue: '40px',
            },
            {
              name: 'bottomSectionFlexDirection',
              type: 'select',
              label: 'Bottom Section Flex Direction',
              options: [
                { label: 'Row', value: 'row' },
                { label: 'Column', value: 'column' },
              ],
              defaultValue: 'row',
            },
            {
              name: 'bottomSectionJustifyContent',
              type: 'select',
              label: 'Bottom Section Justify Content',
              options: [
                { label: 'Space Between', value: 'space-between' },
                { label: 'Center', value: 'center' },
                { label: 'Flex Start', value: 'flex-start' },
                { label: 'Flex End', value: 'flex-end' },
              ],
              defaultValue: 'space-between',
            },
          ],
        },
      ],
    },

    // Custom CSS
    {
      type: 'collapsible',
      label: 'Custom CSS',
      fields: [
        {
          name: 'customCSS',
          type: 'textarea',
          label: 'Additional Custom CSS',
          admin: {
            description: 'Add any additional custom CSS styles here',
          },
        },
      ],
    },
  ],
}
