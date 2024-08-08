import React from "react";

export interface CustomerProps {
  id: string;
  name: string;
  email: string;
  status: boolean;
  created_at: string;
  updated_at: string;
}

export interface CustomersSectionProps {
  customers: CustomerProps[];
  setCustomers: React.Dispatch<React.SetStateAction<CustomerProps[]>>;
}

export interface FormProps {
  setCustomers: React.Dispatch<React.SetStateAction<CustomerProps[]>>;
}