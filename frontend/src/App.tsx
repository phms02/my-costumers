// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, { useEffect, useState } from "react";

// Components imports...
import CustomersSection from "./components/CustomersSection";
import Form from "./components/Form";

// API URL import...
import { api } from "./services/api.ts";

// Consumer props import...
import { CustomerProps } from "./utils/Props.ts";

export default function App() {
  const [customers, setCustomers] = useState<CustomerProps[]>([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const response = await api.get("/customers");
    setCustomers(response.data);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-900 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-96 overflow-hidden">
      <main className="flex flex-col h-full w-full my-8">
        <Form setCustomers={setCustomers} />
        <CustomersSection customers={customers} setCustomers={setCustomers} />
      </main>
    </div>
  );
}