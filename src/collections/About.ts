import { CollectionConfig } from 'payload'

// Main Components Collection
export const About: CollectionConfig = {
  slug: 'about',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'isActive', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Component Name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Component Slug',
      admin: {
        description: 'Unique identifier for the component (e.g., story-section)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Sections',
      admin: {
        description: 'Drag and drop to reorder sections',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'sectionId',
          type: 'text',
          required: true,
          label: 'Section ID',
          admin: {
            description: 'Unique identifier for this section',
          },
        },
        {
          name: 'sectionType',
          type: 'select',
          required: true,
          label: 'Section Type',
          options: [
            { label: 'Story Section', value: 'story_section' },
            { label: 'Hero Section', value: 'hero_section' },
            { label: 'Feature Section', value: 'feature_section' },
            { label: 'Custom Section', value: 'custom_section' },
          ],
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          defaultValue: 0,
          label: 'Display Order',
          admin: {
            description: 'Lower numbers appear first',
          },
        },
        {
          name: 'isVisible',
          type: 'checkbox',
          defaultValue: true,
          label: 'Visible',
        },
        // Section Styling
        {
          name: 'styling',
          type: 'group',
          label: 'Section Styling',
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              defaultValue: '#ffffff',
              admin: {
                description: 'Hex, RGB, or color name (e.g., #ffffff, rgb(255,255,255), white)',
              },
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              defaultValue: '#000000',
              admin: {
                description: 'Color for all text in this section',
              },
            },
            {
              name: 'paddingTop',
              type: 'number',
              label: 'Padding Top (px)',
              defaultValue: 100,
            },
            {
              name: 'paddingBottom',
              type: 'number',
              label: 'Padding Bottom (px)',
              defaultValue: 100,
            },
            {
              name: 'paddingLeft',
              type: 'number',
              label: 'Padding Left (px)',
              defaultValue: 0,
            },
            {
              name: 'paddingRight',
              type: 'number',
              label: 'Padding Right (px)',
              defaultValue: 0,
            },
            {
              name: 'customCSS',
              type: 'textarea',
              label: 'Custom CSS Classes',
              admin: {
                description: 'Additional CSS classes to apply',
              },
            },
          ],
        },
        // Story Section Specific Content
        {
          name: 'storyContent',
          type: 'group',
          label: 'Story Section Content',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'story_section',
          },
          fields: [
            // Image Section
            {
              name: 'image',
              type: 'group',
              label: 'Image Configuration',
              fields: [
                {
                  name: 'url',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Image',
                  required: true,
                },
                {
                  name: 'altText',
                  type: 'text',
                  label: 'Alt Text',
                  required: true,
                  defaultValue: 'A group of friends standing and watching the sun set',
                },
                {
                  name: 'sizes',
                  type: 'text',
                  label: 'Responsive Sizes',
                  defaultValue: '(max-width: 581px) 100vw, 581px',
                },
                {
                  name: 'loading',
                  type: 'select',
                  label: 'Loading Strategy',
                  defaultValue: 'lazy',
                  options: [
                    { label: 'Lazy', value: 'lazy' },
                    { label: 'Eager', value: 'eager' },
                  ],
                },
              ],
            },
            // Title Section
            {
              name: 'title',
              type: 'group',
              label: 'Title Configuration',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  label: 'Title Text',
                  required: true,
                  defaultValue: 'Our Story: Building the Future with GFRP',
                },
                {
                  name: 'color',
                  type: 'text',
                  label: 'Title Color',
                  defaultValue: '#000000',
                  admin: {
                    description: 'Override section text color for title',
                  },
                },
                {
                  name: 'fontSize',
                  type: 'number',
                  label: 'Font Size (px)',
                  defaultValue: 36,
                },
                {
                  name: 'fontWeight',
                  type: 'select',
                  label: 'Font Weight',
                  defaultValue: 'bold',
                  options: [
                    { label: 'Normal', value: 'normal' },
                    { label: 'Medium', value: '500' },
                    { label: 'Semi-Bold', value: '600' },
                    { label: 'Bold', value: 'bold' },
                  ],
                },
                {
                  name: 'customClass',
                  type: 'text',
                  label: 'Custom CSS Class',
                  defaultValue: 'story_main-heading cc-heading-h3',
                },
              ],
            },
            // Description Section
            {
              name: 'description',
              type: 'group',
              label: 'Description Configuration',
              fields: [
                {
                  name: 'content',
                  type: 'richText',
                  label: 'Description Content',
                  required: true,
                },
                {
                  name: 'color',
                  type: 'text',
                  label: 'Description Color',
                  defaultValue: '#666666',
                },
                {
                  name: 'fontSize',
                  type: 'number',
                  label: 'Font Size (px)',
                  defaultValue: 16,
                },
                {
                  name: 'lineHeight',
                  type: 'number',
                  label: 'Line Height',
                  defaultValue: 1.6,
                  admin: {
                    step: 0.1,
                  },
                },
                {
                  name: 'customClass',
                  type: 'text',
                  label: 'Custom CSS Class',
                  defaultValue: 'story_subtext cc-title-small',
                },
              ],
            },
            // Layout Configuration
            {
              name: 'layout',
              type: 'group',
              label: 'Layout Configuration',
              fields: [
                {
                  name: 'imagePosition',
                  type: 'select',
                  label: 'Image Position',
                  defaultValue: 'left',
                  options: [
                    { label: 'Left', value: 'left' },
                    { label: 'Right', value: 'right' },
                  ],
                },
                {
                  name: 'containerWidth',
                  type: 'select',
                  label: 'Container Width',
                  defaultValue: 'large',
                  options: [
                    { label: 'Small', value: 'small' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'Large', value: 'large' },
                    { label: 'Full Width', value: 'full' },
                  ],
                },
                {
                  name: 'verticalAlignment',
                  type: 'select',
                  label: 'Vertical Alignment',
                  defaultValue: 'center',
                  options: [
                    { label: 'Top', value: 'flex-start' },
                    { label: 'Center', value: 'center' },
                    { label: 'Bottom', value: 'flex-end' },
                  ],
                },
              ],
            },
          ],
        },
        // Links/CTAs Array
        {
          name: 'links',
          type: 'array',
          label: 'Links/Call to Actions',
          admin: {
            description: 'Drag and drop to reorder links',
          },
          fields: [
            {
              name: 'linkText',
              type: 'text',
              required: true,
              label: 'Link Text',
            },
            {
              name: 'linkUrl',
              type: 'text',
              required: true,
              label: 'Link URL',
            },
            {
              name: 'linkType',
              type: 'select',
              label: 'Link Type',
              defaultValue: 'internal',
              options: [
                { label: 'Internal', value: 'internal' },
                { label: 'External', value: 'external' },
                { label: 'Download', value: 'download' },
              ],
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              defaultValue: false,
              label: 'Open in New Tab',
            },
            {
              name: 'order',
              type: 'number',
              required: true,
              defaultValue: 0,
              label: 'Link Order',
            },
            {
              name: 'styling',
              type: 'group',
              label: 'Link Styling',
              fields: [
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Background Color',
                  defaultValue: '#007bff',
                },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Text Color',
                  defaultValue: '#ffffff',
                },
                {
                  name: 'borderColor',
                  type: 'text',
                  label: 'Border Color',
                  defaultValue: '#007bff',
                },
                {
                  name: 'borderWidth',
                  type: 'number',
                  label: 'Border Width (px)',
                  defaultValue: 0,
                },
                {
                  name: 'borderRadius',
                  type: 'number',
                  label: 'Border Radius (px)',
                  defaultValue: 4,
                },
                {
                  name: 'padding',
                  type: 'text',
                  label: 'Padding',
                  defaultValue: '10px 20px',
                  admin: {
                    description: 'CSS padding value (e.g., 10px 20px)',
                  },
                },
                {
                  name: 'hoverBackgroundColor',
                  type: 'text',
                  label: 'Hover Background Color',
                  defaultValue: '#0056b3',
                },
                {
                  name: 'hoverTextColor',
                  type: 'text',
                  label: 'Hover Text Color',
                  defaultValue: '#ffffff',
                },
                {
                  name: 'customClass',
                  type: 'text',
                  label: 'Custom CSS Class',
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
              name: 'animationType',
              type: 'select',
              label: 'Animation Type',
              defaultValue: 'fade',
              options: [
                { label: 'Fade In', value: 'fade' },
                { label: 'Slide In', value: 'slide' },
                { label: 'Zoom In', value: 'zoom' },
                { label: 'None', value: 'none' },
              ],
              admin: {
                condition: (data, siblingData) => siblingData?.enableAnimations,
              },
            },
            {
              name: 'animationDelay',
              type: 'number',
              label: 'Animation Delay (ms)',
              defaultValue: 0,
              admin: {
                condition: (data, siblingData) => siblingData?.enableAnimations,
              },
            },
          ],
        },
      ],
    },
  ],
  timestamps: true,
}

