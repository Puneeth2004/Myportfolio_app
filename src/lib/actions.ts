"use server";

import { z } from "zod";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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

  try {
    await addDoc(collection(db, "messages"), {
      ...validatedFields.data,
      timestamp: serverTimestamp(),
    });

    return {
      message: "Thank you for your message! I will get back to you soon.",
      errors: null,
      success: true,
    };
  } catch (error) {
    console.error("Error writing to Firestore: ", error);
    return {
      message: "Something went wrong. Please try again.",
      errors: null,
      success: false,
    };
  }
}
