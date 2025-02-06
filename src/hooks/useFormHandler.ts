<<<<<<< HEAD
import { useState } from "react";
import Swal from "sweetalert2";
import { TFormData } from "@/types/formData.type";
=======
import { TFormData } from "@/types/formData.type";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Swal from "sweetalert2";
>>>>>>> 312c5a7969d21a7705b302b56dbbbc95e21be4c8

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const initialFormData: TFormData = {
  name: "",
  email: "",
  phone: "",
  phonePermission: "",
  usageType: "",
  invoiceRegistration: "",
  provideRegistrationNumber: "",
  city: "",
  product_info: "",
  inquiry_source: "",
<<<<<<< HEAD
  productsList: [
    {
      product_details: "",
      product_condition: "",
      images: new Array(3).fill(null),
    }
  ],
=======
  product_details: "",
  product_condition: "",
  image: null,
>>>>>>> 312c5a7969d21a7705b302b56dbbbc95e21be4c8
  additional_notes: "",
};

export const useFormHandler = () => {
  const [formData, setFormData] = useState<TFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD

=======
  // Handle input change
>>>>>>> 312c5a7969d21a7705b302b56dbbbc95e21be4c8
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

<<<<<<< HEAD
  const addProduct = () => {
    setFormData((prevData) => ({
      ...prevData,
      productsList: [
        ...prevData.productsList,
        {
          product_details: "",
          product_condition: "",
          images: new Array(3).fill(null),
        },
      ],
    }));
  };

  const handleProductInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      productsList: prevData.productsList.map((product, i) =>
        i === index ? { ...product, [name]: value } : product
      ),
    }));
  };


  const deleteProduct = (index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      productsList: prevData.productsList.filter((_, i) => i !== index),
    }));
  };

  const handleImageChange = (images: (string | null)[], index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      productsList: prevData.productsList.map((product, i) =>
        i === index ? { ...product, images } : product
      ),
    }));
  };

=======
  // Handle image change
  const handleImageChange = (image: string | null) => {
    setFormData((prevData) => ({ ...prevData, image }));
  };

  // Handle form submission
>>>>>>> 312c5a7969d21a7705b302b56dbbbc95e21be4c8
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

<<<<<<< HEAD
    try {
      // Send only the Base64 image in `attachment`, and exclude it from `formData`
      const emailData = {
        ...formData,
        // attachment: formData.image || null, // Send Base64 image as attachment
        // fileName: formData.fileName || "attachment", // Include file name
      };

      // Remove the image field from the email's context
      // delete emailData.image;

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Email sending failed");
      }

      setFormData(initialFormData);
      Toast.fire({
        icon: "success",
        title: "メールが送信されました！確認メールをお送りしました。",
      });
=======
    // EmailJS Configuration
    const serviceID = "service_p3to9nt";
    const systemTemplateID = "template_xf3foxn"; // For sending to your system
    const welcomeTemplateID = "template_id6emd5"; // For sending to the client
    const publicKey = "0xF8VQGwM-H1P-NVr";

    const emailParams = {
      ...formData,
      image: formData.image || "No Image Provided",
      from_name: formData.name,
    };

    const welcomeParams = {
      ...formData,
      image: formData.image || "No Image Provided",
      name: formData.name,
      user_email: formData.email,
    };

    try {
      // Send email to system
      await emailjs.send(serviceID, systemTemplateID, emailParams, publicKey);

      // Reset form
      setFormData(initialFormData);

      // Success toast
      Toast.fire({ icon: "success", title: "メールが送信されました！" });

      // Send welcome email
      await emailjs.send(
        serviceID,
        welcomeTemplateID,
        welcomeParams,
        publicKey
      );

      // Welcome email toast
      Toast.fire({ icon: "success", title: "Welcome email sent to client!" });
>>>>>>> 312c5a7969d21a7705b302b56dbbbc95e21be4c8
    } catch (error: unknown) {
      const errMsg = error instanceof Error ? error.message : "Unknown error";
      Toast.fire({
        icon: "error",
        title: `送信中にエラーが発生しました: ${errMsg}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleImageChange,
    handleSubmit,
<<<<<<< HEAD
    addProduct,
    deleteProduct,
    handleProductInputChange
  };
};

=======
  };
};
>>>>>>> 312c5a7969d21a7705b302b56dbbbc95e21be4c8
