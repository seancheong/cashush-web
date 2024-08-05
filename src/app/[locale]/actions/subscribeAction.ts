'use server';

import { createSubscriber } from '@/db/queries/subscribersQueries';
import { z } from 'zod';

interface SubscribeFormState {
  done: string;
  error: string | null;
}

export async function subscribeAction(
  prevState: SubscribeFormState,
  formData: FormData,
) {
  const schema = z.object({
    email: z.string().email(),
  });

  let data: z.infer<typeof schema>;

  try {
    data = schema.parse(Object.fromEntries(formData));
  } catch (error) {
    return {
      done: '',
      error: 'invalid',
    };
  }

  try {
    await createSubscriber({
      ...data,
      optIn: true,
    });

    return {
      done: new Date().toString(),
      error: null,
    };
  } catch (error) {
    console.log(error);

    return {
      done: '',
      error: 'unknown',
    };
  }
}
