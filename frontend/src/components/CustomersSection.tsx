// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";

// API URL import..
import { api } from "../services/api.ts";

// ConsumerSection props import...
import { CustomersSectionProps } from "../utils/Props.ts";

// Icon import...
import { FiTrash } from "react-icons/fi";

export default function CustomersSection({ customers, setCustomers }: Readonly<CustomersSectionProps>) {
  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/customer/${id}`);

      const allCustomers = customers.filter((customer) => customer.id !== id);

      setCustomers(allCustomers);
    } catch(error) {
      console.error(error);
    }
  };

  return (
    <section className="flex flex-col gap-5 my-5 h-full max-h-[calc(100vh-6rem)] pb-10 overflow-y-auto overflow-y-hidden">
      {
        customers.map((customer) => (
          <article
            key={customer.id}
            className="relative w-full max-w-md mx-auto p-4 rounded bg-white hover:scale-105 duration-200"
          >
            <p className="flex gap-1 text-black">
              <span className="font-semibold">Name:</span>
              {customer.name}
            </p>

            <p className="flex gap-1 text-black">
              <span className="font-semibold">Email:</span>
              {customer.email}
            </p>

            <p className="flex gap-1 text-black">
              <span className="font-semibold">Status:</span>
              {customer.status ? "Active" : "Inactive"}
            </p>

            <button
              className="flex items-center justify-center absolute h-8 w-8 top-0 right-0 m-1 rounded-lg bg-red-700"
              onClick={() => handleDelete(customer?.id)}
            >
              <FiTrash size={20} color={"#FFFFFF"} />
            </button>
          </article>
        ))
      }
    </section>
  );
}