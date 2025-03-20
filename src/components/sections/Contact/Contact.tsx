'use client';

import React, { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);

  const submitHundle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    setFormData({ name: '', email: '', message: '' });

    const accept = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    setIsSending(false);
    const result = await accept.json();

    if (result.ok) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <section className="  w-full   px-12 py-36 md:pt-36 md:py-0">
      <div className="container mx-auto text-center" id="contact">
        <div className=" grid grid-cols-1  md:grid-cols-[4fr,6fr] items-center ">
          <div className="order-1 md:pr-8 pb-20">
            <h2 className="text-6xl font-bold md:mt-12 md:my-8">Contact</h2>
            <p className="mt-16 md:mt-0 text-xl">
              私に興味を持ってくださった方はご一報ください。即時対応します。
            </p>
          </div>
          <form className="order-2 space-y-12" onSubmit={submitHundle}>
            <div>
              <label className="text-white block text-xl font-bold mb-3">
                お名前
              </label>
              <input
                type="text"
                name="name"
                className="w-full border border-inputBorder bg-input px-4 py-4 text-black"
                required
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
              />
            </div>
            <div>
              <label className="text-white block text-xl font-bold mb-3">
                メールアドレス
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                className="w-full border border-inputBorder bg-input px-4 py-4 text-black "
                required
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </div>
            <div>
              <label className="text-white block text-xl font-bold mb-3">
                メッセージ
              </label>
              <textarea
                name="message"
                value={formData.message}
                className="w-full border border-inputBorder bg-input px-4 py-4 text-black "
                required
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                }}
              ></textarea>
            </div>
            <button className="px-8 py-3 bg-red-300 font-bold rounded-lg hover:scale-125 transition-all duration-300 mt-10">
              {isSending ? (
                <AiOutlineLoading className="animate-spin" />
              ) : (
                <span>送信する</span>
              )}
            </button>
          </form>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed bottom-0 left-0 mx-auto w-full bg-white text-black opacity-80 text-center">
          <p className="text-xl font-bold py-5 ">送信成功</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
