// /api/formConfig.js

export const formConfigs = {
  testimonial: {
    sheetName: 'FormResponses',
    mailTo: 'mudassirahmed915171@gmail.com', // <-- change this
    subject: 'New Testimonial Submitted',
    requiredFields: ['name', 'email', 'mobile', 'product', 'rating', 'review'],
  },
  quickEnquiry: {
    sheetName: 'FormResponses',
    mailTo: 'mudassirahmed915171@gmail.com', // <-- change this
    subject: 'New Quick Enquiry',
    requiredFields: ['name', 'email', 'mobile', 'message'],
  },
  productEnquiry: {
    sheetName: 'FormResponses',
    mailTo: 'mudassirahmed915171@gmail.com', // <-- change this
    subject: 'New Product Page Enquiry',
    requiredFields: ['name', 'email', 'product', 'message'],
  },
};
