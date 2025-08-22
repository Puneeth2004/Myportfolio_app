"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
  success: boolean;
} | null;

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
      success: false,
    };
  }

  // Here you would typically send an email.
  // For this example, we'll just log the data and simulate success.
  console.log("Contact form submitted successfully:");
  console.log(validatedFields.data);

  return {
    message: "Thank you for your message! I will get back to you soon.",
    errors: null,
    success: true,
  };
}
