// /api/formConfig.js

export const formConfigs = {
  testimonial: {
    sheetName: 'Sheet2', // unified sheet for all forms
    mailTo: 'mudassirahmed915171@gmail.com',
    subject: 'New Testimonial Submitted',
    requiredFields: [
      'Name',
      'Company',
      'Designation',
      'Email',
      'Mobile',
      'Product',
      'Rating',
      'Likes',
      'Review',
    ],
  },

  QuickEnquiry: {
    sheetName: 'Sheet1',
    mailTo: 'mudassirahmed915171@gmail.com',
    subject: 'New Quick Enquiry',
    requiredFields: ['name', 'email', 'mobile', 'message', 'product','country'],
  },
  FlaxEnquiry: {
    sheetName: 'Sheet3',
    mailTo: 'mudassirahmed915171@gmail.com',
    subject: 'New FLax Seeds Enquiry',
    requiredFields: ['name', 'email', 'mobile', 'quantity', 'purpose','countryCode','requirement'],
  },
  CloveEnquiry: {
    sheetName: 'Sheet3',
    mailTo: 'mudassirahmed915171@gmail.com',
    subject: 'New Clove Enquiry',
    requiredFields: ['name', 'email', 'mobile', 'quantity', 'purpose','countryCode','requirement'],
  },
  SoyabeenEnquiry: {
    sheetName: 'Sheet3',
    mailTo: 'mudassirahmed915171@gmail.com',
    subject: 'New Soyabeen Enquiry',
    requiredFields: ['name', 'email', 'mobile', 'quantity', 'purpose','countryCode','requirement'],
  },
  LotusEnquiry: {
    sheetName: 'Sheet3',
    mailTo: 'mudassirahmed915171@gmail.com',
    subject: 'New Lotus Enquiry',
    requiredFields: ['name', 'email', 'mobile', 'quantity', 'purpose','countryCode','requirement'],
  },
  SoyabeanMealEnquiry: {
    sheetName: 'Sheet3',
    mailTo: 'mudassirahmed915171@gmail.com',
    subject: 'New Lotus Enquiry',
    requiredFields: ['name', 'email', 'mobile', 'quantity', 'purpose','countryCode','requirement'],
  },  
  BlackPepperEnquiry: {
    sheetName: 'Sheet3',
    mailTo: 'mudassirahmed915171@gmail.com',
    subject: 'New BlackPepperenquiry Enquiry',
    requiredFields: ['name', 'email', 'mobile', 'quantity', 'purpose','countryCode','requirement'],
  },  
  CardamomEnquiry: {
    sheetName: 'Sheet3',
    mailTo: 'mudassirahmed915171@gmail.com',
    subject: 'New Cardamom enquiry Enquiry',
    requiredFields: ['name', 'email', 'mobile', 'quantity', 'purpose','countryCode','requirement'],
  },

  contact: {
    sheetName: 'Sheet1',
    mailTo: 'mudassirahmed915171@gmail.com',
    subject: 'New Contact Page Enquiry',
    requiredFields: ['name', 'email', 'mobile', 'product', 'granite', 'details'],
  },
};
