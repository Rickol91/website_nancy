import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const [subject, setSubject] = useState('question');
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log('Form submitted:', data);  // Add this line for debugging
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: subject === 'question' ? data.subject : 'Booking Request',
          message: JSON.stringify(data, null, 2)
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-8">
      <div className="mb-4">
        <label className="block mb-2">Subject:</label>
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        >
          <option value="question">Question</option>
          <option value="booking">Booking</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Name *</label>
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
          className="w-full p-2 border rounded"
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Email *</label>
        <input
          type="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          className="w-full p-2 border rounded"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>

      {subject === 'question' && (
        <div className="mb-4">
          <label className="block mb-2">Question *</label>
          <textarea
            {...register('question', { required: 'Question is required' })}
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
          {errors.question && <span className="text-red-500">{errors.question.message}</span>}
        </div>
      )}

      {subject === 'booking' && (
        <>
          <div className="mb-4">
            <label className="block mb-2">From (time) *</label>
            <input
              type="time"
              {...register('fromTime', { required: 'Start time is required' })}
              className="w-full p-2 border rounded"
            />
            {errors.fromTime && <span className="text-red-500">{errors.fromTime.message}</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Until (time) *</label>
            <input
              type="time"
              {...register('untilTime', { required: 'End time is required' })}
              className="w-full p-2 border rounded"
            />
            {errors.untilTime && <span className="text-red-500">{errors.untilTime.message}</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Genre *</label>
            <select
              {...register('genre', { required: 'Genre is required' })}
              className="w-full p-2 border rounded"
            >
              <option value="">Select a genre</option>
              <option value="diner">Diner</option>
              <option value="party">Party</option>
              <option value="mix">Mix</option>
            </select>
            {errors.genre && <span className="text-red-500">{errors.genre.message}</span>}
          </div>
        </>
      )}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;