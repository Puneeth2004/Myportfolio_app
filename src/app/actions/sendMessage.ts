'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
  success?: boolean;
};

export async function sendMessage(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid form data.',
      success: false,
    };
  }
  
  const { name, email, message } = validatedFields.data;

  try {
    await addDoc(collection(db, 'messages'), {
      name,
      email,
      message,
      createdAt: serverTimestamp(),
    });
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error('Error saving message to Firestore:', error);
    return { success: false, message: 'Could not save message.' };
  }
}