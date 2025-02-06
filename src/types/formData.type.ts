export type TFormData = {
  name: string;
  email: string;
  phone: string;
  phonePermission: string;
  usageType: string;
  invoiceRegistration: string;
  provideRegistrationNumber: string;
  city: string;
  product_info: string;
  inquiry_source: string;
<<<<<<< HEAD
  productsList: Product[]
  additional_notes: string;
};

export type Product = {
  product_details: string;
  product_condition: string;
  images?: (string | null)[]
}


=======
  product_details: string;
  product_condition: string;
  image: string | null;
  additional_notes: string;
};
>>>>>>> 312c5a7969d21a7705b302b56dbbbc95e21be4c8
