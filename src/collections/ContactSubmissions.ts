// // // collections/ContactSubmissions.ts
// // import { CollectionConfig } from 'payload'

// // export const ContactSubmissions: CollectionConfig = {
// //   slug: 'contact-submissions',
// //   admin: {
// //     useAsTitle: 'email_address',
// //     defaultColumns: ['first_name', 'last_name', 'email_address', 'phone', 'createdAt'],
// //   },
// //   access: {
// //     read: () => true,
// //     create: () => true,
// //   },
// //   fields: [
// //     {
// //       name: 'first_name',
// //       type: 'text',
// //       required: true,
// //       label: 'First Name',
// //     },
// //     {
// //       name: 'last_name',
// //       type: 'text',
// //       required: true,
// //       label: 'Last Name',
// //     },
// //     {
// //       name: 'email_address',
// //       type: 'email',
// //       required: true,
// //       label: 'Email Address',
// //     },
// //     {
// //       name: 'phone',
// //       type: 'text',
// //       required: true,
// //       label: 'Phone Number',
// //     },
// //     {
// //       name: 'city',
// //       type: 'text',
// //       label: 'City',
// //     },
// //     {
// //       name: 'message',
// //       type: 'textarea',
// //       required: true,
// //       label: 'Message',
// //     },
// //     {
// //       name: 'status',
// //       type: 'select',
// //       defaultValue: 'new',
// //       options: [
// //         { label: 'New', value: 'new' },
// //         { label: 'Read', value: 'read' },
// //         { label: 'Responded', value: 'responded' },
// //         { label: 'Archived', value: 'archived' },
// //       ],
// //     },
// //     {
// //       name: 'notes',
// //       type: 'textarea',
// //       label: 'Internal Notes',
// //       admin: {
// //         description: 'Internal notes about this submission',
// //       },
// //     },
// //     {
// //       name: 'ipAddress',
// //       type: 'text',
// //       label: 'IP Address',
// //       admin: {
// //         readOnly: true,
// //       },
// //     },
// //     {
// //       name: 'userAgent',
// //       type: 'text',
// //       label: 'User Agent',
// //       admin: {
// //         readOnly: true,
// //       },
// //     },
// //   ],
// //   timestamps: true,
// // }


// // collections/ContactSubmissions.ts
// import { CollectionConfig } from 'payload'

// export const ContactSubmissions: CollectionConfig = {
//   slug: 'contact-submissions',
//   admin: {
//     useAsTitle: 'email_address',
//     defaultColumns: ['first_name', 'last_name', 'email_address', 'phone', 'createdAt'],
//   },
//   access: {
//     read: () => true,
//     create: () => true, // Allow public form submissions
//   },
//   fields: [
//     {
//       name: 'first_name',
//       type: 'text',
//       required: true,
//       label: 'First Name',
//     },
//     {
//       name: 'last_name',
//       type: 'text',
//       required: true,
//       label: 'Last Name',
//     },
//     {
//       name: 'email_address',
//       type: 'text', // Changed from 'email' to 'text' to avoid validation issues
//       required: true,
//       label: 'Email Address',
//     },
//     {
//       name: 'phone',
//       type: 'text',
//       required: true,
//       label: 'Phone Number',
//     },
//     {
//       name: 'city',
//       type: 'text',
//       required: false, // Make city optional
//       label: 'City',
//     },
//     {
//       name: 'message',
//       type: 'textarea',
//       required: true,
//       label: 'Message',
//     },
//     {
//       name: 'status',
//       type: 'select',
//       defaultValue: 'new',
//       options: [
//         { label: 'New', value: 'new' },
//         { label: 'Read', value: 'read' },
//         { label: 'Responded', value: 'responded' },
//         { label: 'Archived', value: 'archived' },
//       ],
//     },
//     {
//       name: 'notes',
//       type: 'textarea',
//       label: 'Internal Notes',
//       admin: {
//         description: 'Internal notes about this submission',
//       },
//     },
//     {
//       name: 'ipAddress',
//       type: 'text',
//       label: 'IP Address',
//       admin: {
//         readOnly: true,
//       },
//     },
//     {
//       name: 'userAgent',
//       type: 'text',
//       label: 'User Agent',
//       admin: {
//         readOnly: true,
//       },
//     },
//   ],
//   timestamps: true,
// }


// src/collections/ContactSubmissions.ts
import { CollectionConfig } from 'payload'
import { sendContactNotification, sendAutoReply } from '../utils/email'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'email_address',
    defaultColumns: ['first_name', 'last_name', 'email_address', 'phone', 'createdAt'],
  },
  access: {
    read: () => true,
    create: () => true,
  },
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        // Only send email on create (new submission)
        if (operation === 'create') {
          try {
            console.log('📧 Sending email notifications...')
            
            // Send notification to you (admin)
            await sendContactNotification({
              first_name: doc.first_name,
              last_name: doc.last_name,
              email_address: doc.email_address,
              phone: doc.phone,
              city: doc.city,
              message: doc.message,
              createdAt: doc.createdAt,
            })

            // Optional: Send auto-reply to the customer
            // Comment out the line below if you don't want auto-reply
            await sendAutoReply({
              first_name: doc.first_name,
              last_name: doc.last_name,
              email_address: doc.email_address,
              phone: doc.phone,
              city: doc.city,
              message: doc.message,
              createdAt: doc.createdAt,
            })

            console.log('✅ All email notifications sent successfully')
          } catch (error) {
            console.error('❌ Error sending email notifications:', error)
            // Don't throw - we still want the submission to succeed
          }
        }
        return doc
      },
    ],
  },
  fields: [
    {
      name: 'first_name',
      type: 'text',
      required: true,
      label: 'First Name',
    },
    {
      name: 'last_name',
      type: 'text',
      required: true,
      label: 'Last Name',
    },
    {
      name: 'email_address',
      type: 'text',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Phone Number',
    },
    {
      name: 'city',
      type: 'text',
      required: false,
      label: 'City',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Read', value: 'read' },
        { label: 'Responded', value: 'responded' },
        { label: 'Archived', value: 'archived' },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Internal Notes',
      admin: {
        description: 'Internal notes about this submission',
      },
    },
    {
      name: 'ipAddress',
      type: 'text',
      label: 'IP Address',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'userAgent',
      type: 'text',
      label: 'User Agent',
      admin: {
        readOnly: true,
      },
    },
  ],
  timestamps: true,
}