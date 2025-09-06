// Example environment configuration for The Listening Lounge

export const environment = {
  production: false, // change to true in environment.prod.ts
  emailJs: {
    serviceId: 'your_service_id_here',      // EmailJS Service ID
    templateId: 'your_template_id_here',    // EmailJS Team Template ID
    templateAckId: 'your_ack_template_id',  // EmailJS Acknowledgment Template ID
    publicKey: 'your_public_key_here'       // EmailJS Public Key
  }
};
