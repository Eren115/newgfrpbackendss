// collections/Contact.ts
import { CollectionConfig } from 'payload'

export const Contact: CollectionConfig = {
  slug: 'contact',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'componentType', 'isActive'],
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
      name: 'componentType',
      type: 'select',
      required: true,
      options: [
        { label: 'Contact Hero', value: 'contact-hero' },
        { label: 'Hero', value: 'hero' },
        { label: 'About', value: 'about' },
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
      defaultValue: 0,
      label: 'Display Order',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Sections',
      fields: [
        {
          name: 'sectionName',
          type: 'text',
          required: true,
        },
        {
          name: 'sectionOrder',
          type: 'number',
          defaultValue: 0,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          defaultValue: '#ffffff',
          label: 'Background Color',
          admin: {
            description: 'Enter hex color code (e.g., #ff6b35)',
          },
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Background Image',
        },
        {
          name: 'backgroundImageUrl',
          type: 'text',
          label: 'Background Image URL (Alternative)',
          admin: {
            description: 'Use this if you want to provide an external image URL',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          defaultValue: '#000000',
          label: 'Text Color',
        },
        {
          name: 'accentColor',
          type: 'text',
          defaultValue: '#ff6b35',
          label: 'Accent Color',
          admin: {
            description: 'Color for headings, dots, buttons, etc.',
          },
        },
        {
          name: 'padding',
          type: 'group',
          fields: [
            {
              name: 'top',
              type: 'text',
              defaultValue: '0',
            },
            {
              name: 'bottom',
              type: 'text',
              defaultValue: '0',
            },
            {
              name: 'left',
              type: 'text',
              defaultValue: '0',
            },
            {
              name: 'right',
              type: 'text',
              defaultValue: '0',
            },
          ],
        },
        {
          name: 'content',
          type: 'group',
          label: 'Section Content',
          fields: [
            {
              name: 'badge',
              type: 'text',
              label: 'Badge Text',
            },
            {
              name: 'badgeColor',
              type: 'text',
              defaultValue: '#ff6b35',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Main Title',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
            {
              name: 'descriptionColor',
              type: 'text',
              label: 'Description Color',
            },
          ],
        },
        {
          name: 'contactDetails',
          type: 'group',
          label: 'Contact Details',
          admin: {
            condition: (data, siblingData) => {
              // Show this only for contact-hero component type
              return true
            },
          },
          fields: [
            {
              name: 'detailsOrder',
              type: 'array',
              label: 'Contact Details (Drag to Reorder)',
              fields: [
                {
                  name: 'type',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Phone', value: 'phone' },
                    { label: 'Email', value: 'email' },
                    { label: 'Address', value: 'address' },
                  ],
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'Label',
                },
                {
                  name: 'labelColor',
                  type: 'text',
                  defaultValue: '#ff6b35',
                },
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                  label: 'Value',
                },
                {
                  name: 'valueColor',
                  type: 'text',
                  label: 'Value Color',
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Link (tel:, mailto:, or map URL)',
                },
                {
                  name: 'isVisible',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'order',
                  type: 'number',
                  defaultValue: 0,
                },
              ],
            },
          ],
        },
        {
          name: 'formSettings',
          type: 'group',
          label: 'Form Settings',
          fields: [
            {
              name: 'showForm',
              type: 'checkbox',
              defaultValue: true,
              label: 'Show Contact Form',
            },
            {
              name: 'formBackgroundColor',
              type: 'text',
              defaultValue: '#ffffff',
            },
            {
              name: 'formTextColor',
              type: 'text',
              defaultValue: '#000000',
            },
            {
              name: 'inputBorderColor',
              type: 'text',
              defaultValue: '#e7e7e7',
            },
            {
              name: 'submitButtonColor',
              type: 'text',
              defaultValue: '#ff6b35',
            },
            {
              name: 'submitButtonTextColor',
              type: 'text',
              defaultValue: '#ffffff',
            },
            {
              name: 'submitButtonText',
              type: 'text',
              defaultValue: 'Submit',
            },
            {
              name: 'successMessage',
              type: 'text',
              defaultValue: 'Thank you! Your submission has been received!',
            },
            {
              name: 'errorMessage',
              type: 'text',
              defaultValue: 'Oops! Something went wrong. Please try again.',
            },
            {
              name: 'formFields',
              type: 'array',
              label: 'Form Fields (Drag to Reorder)',
              fields: [
                {
                  name: 'fieldName',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'fieldLabel',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'fieldType',
                  type: 'select',
                  options: [
                    { label: 'Text', value: 'text' },
                    { label: 'Email', value: 'email' },
                    { label: 'Phone', value: 'tel' },
                    { label: 'Textarea', value: 'textarea' },
                  ],
                },
                {
                  name: 'placeholder',
                  type: 'text',
                },
                {
                  name: 'isRequired',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'fieldWidth',
                  type: 'select',
                  options: [
                    { label: 'Full Width', value: 'full' },
                    { label: 'Half Width', value: 'half' },
                  ],
                  defaultValue: 'full',
                },
                {
                  name: 'order',
                  type: 'number',
                  defaultValue: 0,
                },
                {
                  name: 'isVisible',
                  type: 'checkbox',
                  defaultValue: true,
                },
              ],
            },
          ],
        },
        {
          name: 'customCSS',
          type: 'textarea',
          label: 'Custom CSS',
          admin: {
            description: 'Add any custom CSS for this section',
          },
        },
      ],
    },
  ],
}
