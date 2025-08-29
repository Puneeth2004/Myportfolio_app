'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function sendMessage(formData: { name: string; email: string; message: string }) {
  const parsedData = contactSchema.safeParse(formData);

  if (!parsedData.success) {
    throw new Error('Invalid form data.');
  }

  try {
    const { name, email, message } = parsedData.data;
    await addDoc(collection(db, 'messages'), {
      name,
      email,
      message,
      createdAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error('Error saving message to Firestore:', error);
    throw new Error('Could not save message.');
  }
}
