// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, { useRef, FormEvent } from "react";

// Customer props imports...
import { FormProps } from "../utils/Props.ts";

// API URL import...
import { api } from "../services/api.ts";

export default function Form({ setCustomers }: Readonly<FormProps>) {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if(!nameRef || !emailRef) return;

    const response = await api.post("/customer", {
      name: nameRef.current?.value,
      email: emailRef.current?.value
    });

    setCustomers((allCustomers) => [...allCustomers, response.data]);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    nameRef.current.value = "";

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    emailRef.current.value = "";
  };

  return (
    <div
      onSubmit={handleSubmit}
      className="flex flex-col h-full w-96 max-w-full py-5 pb-8 bg-sky-800 mx-auto"
    >
      <h1 className="text-center text-3xl font-medium text-white pb-5">MyCustomers</h1>

      <form className="flex flex-col mx-3.5 gap-2">
        <label className="font-semibold text-white">Full name:</label>
        <input
          type="text"
          name="name"
          id="name"
          ref={nameRef}
          placeholder="What is your full name?"
          className="w-full mb-2 p-2 rounded font-mono font-medium text-black"
        />

        <label className="font-semibold text-white">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          ref={emailRef}
          placeholder="What is your best email?"
          className="w-full mb-2 p-2 rounded font-mono font-medium text-black"
        />

        <input
          type="submit"
          value="Submit data"
          className="cursor-pointer w-full mt-2 p-3 rounded font-semibold text-white bg-pink-800"
        />
      </form>
    </div>
  );
}