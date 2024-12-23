'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
  pizza: null;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className="mx-4">
      <h2 className="text-xl mb-3 block text-base font-medium text-black dark:text-slate-400">
        Need to reach me? This is the easiest & fastest way to contact me.
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="text-sm mb-1 block text-base font-medium text-black dark:text-slate-600"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('name', { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="text-sm mb-1 block text-base font-medium text-black dark:text-slate-600"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('email', { required: true })}
          />
        </div>
        <div className="mb-5">
          <input
            type="hidden"
            value=""
            placeholder="Favorite pizza?"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('pizza', { required: false })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="text-sm mb-1 block text-base font-medium text-black dark:text-slate-600"
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div>
          <button className="hover:shadow-form hover:bg-sky-400 rounded-md bg-sky-600 py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
