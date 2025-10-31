// import { CollectionConfig } from 'payload'

// export const ResourcesSection: CollectionConfig = {
//   slug: 'resources-section',
//   admin: {
//     useAsTitle: 'sectionName',
//     defaultColumns: ['sectionName', 'isActive', 'hasBackgroundImage'],
//     group: 'Components',
//   },
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'sectionName',
//       type: 'text',
//       required: true,
//       admin: {
//         description: 'Internal name to identify this section',
//       },
//     },
//     {
//       name: 'isActive',
//       type: 'checkbox',
//       defaultValue: true,
//       admin: {
//         description: 'Toggle to show/hide this section',
//       },
//     },
//     {
//       name: 'hasBackgroundImage',
//       type: 'checkbox',
//       defaultValue: false,
//       admin: {
//         description: 'Enable background image for this section',
//       },
//     },
//     {
//       name: 'backgroundImage',
//       type: 'upload',
//       relationTo: 'media',
//       admin: {
//         condition: (data) => data.hasBackgroundImage === true,
//         description: 'Background image for the section',
//       },
//     },
//     {
//       name: 'styling',
//       type: 'group',
//       fields: [
//         {
//           name: 'sectionBackgroundColor',
//           type: 'text',
//           defaultValue: 'transparent',
//           admin: {
//             description: 'Section background color (e.g., #ffffff, transparent, rgb(255,255,255))',
//           },
//         },
//         {
//           name: 'sectionPaddingTop',
//           type: 'text',
//           defaultValue: '100px',
//           admin: {
//             description: 'Top padding (e.g., 100px, 5rem)',
//           },
//         },
//         {
//           name: 'sectionPaddingBottom',
//           type: 'text',
//           defaultValue: '100px',
//           admin: {
//             description: 'Bottom padding (e.g., 100px, 5rem)',
//           },
//         },
//         {
//           name: 'dotColor',
//           type: 'text',
//           defaultValue: '#ff6b35',
//           admin: {
//             description: 'Color of the heading dot',
//           },
//         },
//         {
//           name: 'labelColor',
//           type: 'text',
//           defaultValue: '#ffffff',
//           admin: {
//             description: 'Color of "Resources" label',
//           },
//         },
//         {
//           name: 'mainHeadingColor',
//           type: 'text',
//           defaultValue: '#000000',
//           admin: {
//             description: 'Color of the main heading',
//           },
//         },
//         {
//           name: 'descriptionColor',
//           type: 'text',
//           defaultValue: '#000000',
//           admin: {
//             description: 'Color of the description text',
//           },
//         },
//         {
//           name: 'cardBackgroundColor',
//           type: 'text',
//           defaultValue: 'transparent',
//           admin: {
//             description: 'Background color for resource cards',
//           },
//         },
//         {
//           name: 'cardTitleColor',
//           type: 'text',
//           defaultValue: '#000000',
//           admin: {
//             description: 'Color of card titles',
//           },
//         },
//         {
//           name: 'cardDescriptionColor',
//           type: 'text',
//           defaultValue: '#666666',
//           admin: {
//             description: 'Color of card descriptions',
//           },
//         },
//         {
//           name: 'iconColor',
//           type: 'text',
//           defaultValue: '#FF6B35',
//           admin: {
//             description: 'Color of download icons',
//           },
//         },
//       ],
//     },
//     {
//       name: 'content',
//       type: 'group',
//       fields: [
//         {
//           name: 'label',
//           type: 'text',
//           defaultValue: 'Resources',
//           required: true,
//           admin: {
//             description: 'Small label above the main heading',
//           },
//         },
//         {
//           name: 'title',
//           type: 'text',
//           required: true,
//           defaultValue: 'Technical Resources & Documentation',
//           admin: {
//             description: 'Main heading for the section',
//           },
//         },
//         {
//           name: 'description',
//           type: 'richText',
//           required: true,
//           admin: {
//             description: 'Description text for the section',
//           },
//         },
//       ],
//     },
//     {
//       name: 'technicalResources',
//       type: 'array',
//       required: true,
//       minRows: 1,
//       maxRows: 12,
//       admin: {
//         description: 'List of technical resources (drag to reorder)',
//         initCollapsed: true,
//         components: {
//           RowLabel: ({ data, index }) => {
//             return data?.title || `Resource ${index + 1}`
//           },
//         },
//       },
//       fields: [
//         {
//           name: 'order',
//           type: 'number',
//           admin: {
//             description: 'Display order (lower numbers appear first)',
//             readOnly: true,
//           },
//         },
//         {
//           name: 'isActive',
//           type: 'checkbox',
//           defaultValue: true,
//           admin: {
//             description: 'Show/hide this resource',
//           },
//         },
//         {
//           name: 'title',
//           type: 'text',
//           required: true,
//           admin: {
//             description: 'Resource title',
//           },
//         },
//         {
//           name: 'description',
//           type: 'richText',
//           required: true,
//           admin: {
//             description: 'Resource description',
//           },
//         },
//         {
//           name: 'file',
//           type: 'upload',
//           relationTo: 'media',
//           admin: {
//             description: 'Upload the file for download',
//           },
//         },
//         {
//           name: 'externalLink',
//           type: 'text',
//           admin: {
//             description: 'Or provide an external link (overrides file upload)',
//           },
//         },
//         {
//           name: 'openInNewTab',
//           type: 'checkbox',
//           defaultValue: true,
//           admin: {
//             description: 'Open link in new tab',
//           },
//         },
//         {
//           name: 'customStyling',
//           type: 'group',
//           admin: {
//             description: 'Override default styling for this specific card',
//           },
//           fields: [
//             {
//               name: 'useCustomStyling',
//               type: 'checkbox',
//               defaultValue: false,
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.useCustomStyling === true,
//               },
//             },
//             {
//               name: 'titleColor',
//               type: 'text',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.useCustomStyling === true,
//               },
//             },
//             {
//               name: 'descriptionColor',
//               type: 'text',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.useCustomStyling === true,
//               },
//             },
//             {
//               name: 'iconColor',
//               type: 'text',
//               admin: {
//                 condition: (data, siblingData) => siblingData?.useCustomStyling === true,
//               },
//             },
//           ],
//         },
//       ],
//       hooks: {
//         beforeChange: [
//           ({ data }) => {
//             // Auto-assign order based on array position
//             if (data) {
//               data.forEach((item: any, index: number) => {
//                 item.order = index
//               })
//             }
//             return data
//           },
//         ],
//       },
//     },
//     {
//       name: 'advancedSettings',
//       type: 'group',
//       admin: {
//         description: 'Advanced customization options',
//       },
//       fields: [
//         {
//           name: 'customCSS',
//           type: 'textarea',
//           admin: {
//             description: 'Add custom CSS for this section',
//           },
//         },
//         {
//           name: 'customClassName',
//           type: 'text',
//           admin: {
//             description: 'Add custom CSS class name',
//           },
//         },
//         {
//           name: 'sectionId',
//           type: 'text',
//           admin: {
//             description: 'Custom ID for anchor links',
//           },
//         },
//         {
//           name: 'maxResourcesPerRow',
//           type: 'select',
//           defaultValue: '3',
//           options: [
//             { label: '2 per row', value: '2' },
//             { label: '3 per row', value: '3' },
//             { label: '4 per row', value: '4' },
//           ],
//         },
//         {
//           name: 'cardHoverEffect',
//           type: 'checkbox',
//           defaultValue: true,
//           admin: {
//             description: 'Enable hover effects on cards',
//           },
//         },
//       ],
//     },
//     {
//       name: 'seo',
//       type: 'group',
//       fields: [
//         {
//           name: 'sectionAriaLabel',
//           type: 'text',
//           admin: {
//             description: 'Accessibility label for screen readers',
//           },
//         },
//       ],
//     },
//   ],
// }

// // export default ResourcesSection

import { CollectionConfig } from 'payload'

export const ResourcesSection: CollectionConfig = {
  slug: 'resources-section',
  admin: {
    useAsTitle: 'sectionName',
    defaultColumns: ['sectionName', 'isActive', 'hasBackgroundImage'],
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
        description: 'Internal name to identify this section',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Toggle to show/hide this section',
      },
    },
    {
      name: 'hasBackgroundImage',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Enable background image for this section',
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data) => data.hasBackgroundImage === true,
        description: 'Background image for the section',
      },
    },
    {
      name: 'styling',
      type: 'group',
      fields: [
        {
          name: 'sectionBackgroundColor',
          type: 'text',
          defaultValue: 'transparent',
          admin: {
            description: 'Section background color (e.g., #ffffff, transparent, rgb(255,255,255))',
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
            description: 'Bottom padding (e.g., 100px, 5rem)',
          },
        },
        {
          name: 'dotColor',
          type: 'text',
          defaultValue: '#ff6b35',
          admin: {
            description: 'Color of the heading dot',
          },
        },
        {
          name: 'labelColor',
          type: 'text',
          defaultValue: '#ffffff',
          admin: {
            description: 'Color of "Resources" label',
          },
        },
        {
          name: 'mainHeadingColor',
          type: 'text',
          defaultValue: '#000000',
          admin: {
            description: 'Color of the main heading',
          },
        },
        {
          name: 'descriptionColor',
          type: 'text',
          defaultValue: '#000000',
          admin: {
            description: 'Color of the description text',
          },
        },
        {
          name: 'cardBackgroundColor',
          type: 'text',
          defaultValue: 'transparent',
          admin: {
            description: 'Background color for resource cards',
          },
        },
        {
          name: 'cardTitleColor',
          type: 'text',
          defaultValue: '#000000',
          admin: {
            description: 'Color of card titles',
          },
        },
        {
          name: 'cardDescriptionColor',
          type: 'text',
          defaultValue: '#666666',
          admin: {
            description: 'Color of card descriptions',
          },
        },
        {
          name: 'iconColor',
          type: 'text',
          defaultValue: '#FF6B35',
          admin: {
            description: 'Color of download icons',
          },
        },
      ],
    },
    {
      name: 'content',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: 'Resources',
          required: true,
          admin: {
            description: 'Small label above the main heading',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Technical Resources & Documentation',
          admin: {
            description: 'Main heading for the section',
          },
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
          admin: {
            description: 'Description text for the section',
          },
        },
      ],
    },
    {
      name: 'technicalResources',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 12,
      admin: {
        description: 'List of technical resources (drag to reorder)',
        initCollapsed: true,
        components: {
          RowLabel: ({ data, index }) => {
            return data?.title || `Resource ${index + 1}`
          },
        },
      },
      fields: [
        {
          name: 'order',
          type: 'number',
          admin: {
            description: 'Display order (lower numbers appear first)',
          },
        },
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide this resource',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'Resource title',
          },
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
          admin: {
            description: 'Resource description',
          },
        },
        {
          name: 'file',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Upload the file for download',
          },
        },
        {
          name: 'externalLink',
          type: 'text',
          admin: {
            description: 'Or provide an external link (overrides file upload)',
          },
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Open link in new tab',
          },
        },
        {
          name: 'customStyling',
          type: 'group',
          admin: {
            description: 'Override default styling for this specific card',
          },
          fields: [
            {
              name: 'useCustomStyling',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'backgroundColor',
              type: 'text',
              admin: {
                condition: (data, siblingData) => siblingData?.useCustomStyling === true,
              },
            },
            {
              name: 'titleColor',
              type: 'text',
              admin: {
                condition: (data, siblingData) => siblingData?.useCustomStyling === true,
              },
            },
            {
              name: 'descriptionColor',
              type: 'text',
              admin: {
                condition: (data, siblingData) => siblingData?.useCustomStyling === true,
              },
            },
            {
              name: 'iconColor',
              type: 'text',
              admin: {
                condition: (data, siblingData) => siblingData?.useCustomStyling === true,
              },
            },
          ],
        },
      ],
    
    },
    {
      name: 'advancedSettings',
      type: 'group',
      admin: {
        description: 'Advanced customization options',
      },
      fields: [
        {
          name: 'customCSS',
          type: 'textarea',
          admin: {
            description: 'Add custom CSS for this section',
          },
        },
        {
          name: 'customClassName',
          type: 'text',
          admin: {
            description: 'Add custom CSS class name',
          },
        },
        {
          name: 'sectionId',
          type: 'text',
          admin: {
            description: 'Custom ID for anchor links',
          },
        },
        {
          name: 'maxResourcesPerRow',
          type: 'select',
          defaultValue: '3',
          options: [
            { label: '2 per row', value: '2' },
            { label: '3 per row', value: '3' },
            { label: '4 per row', value: '4' },
          ],
        },
        {
          name: 'cardHoverEffect',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Enable hover effects on cards',
          },
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'sectionAriaLabel',
          type: 'text',
          admin: {
            description: 'Accessibility label for screen readers',
          },
        },
      ],
    },
  ],
}

// export default ResourcesSection