'use client';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
  pizza: null;
};

const Contact: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormData>();
  const [serverError, setServerError] = useState<string | null>(null);

  async function onSubmit(data: FormData) {
    setServerError(null);
    try {
      await sendEmail(data);
      reset();
    } catch (error: any) {
      setServerError(
        'There was an error sending your message. Please try again later.',
      );
    }
  }

  return (
    <div className="m-auto max-w-[600px]">
      <h2 className="text-xl mb-3 font-medium text-black dark:text-slate-400">
        Need to reach me? This is the easiest & fastest way to contact me.
      </h2>
      {isSubmitSuccessful && (
        <div className="mb-4 text-green-600">
          Your message has been sent successfully!
        </div>
      )}
      {serverError && <div className="mb-4 text-red-600">{serverError}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="text-sm mb-1 block font-medium text-black dark:text-slate-600"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className={`w-full rounded-md border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } bg-white py-3 px-6 font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md`}
            {...register('name', { required: 'Full name is required' })}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="text-sm mb-1 block font-medium text-black dark:text-slate-600"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className={`w-full rounded-md border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } bg-white py-3 px-6 font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Enter a valid email address',
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-5">
          <input
            type="hidden"
            value=""
            placeholder="Favorite pizza?"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('pizza')}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="text-sm mb-1 block font-medium text-black dark:text-slate-600"
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className={`w-full resize-none rounded-md border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } bg-white py-3 px-6 font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md`}
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="hover:shadow-form hover:bg-sky-400 rounded-md bg-sky-600 py-3 px-8 font-semibold text-white outline-none disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
