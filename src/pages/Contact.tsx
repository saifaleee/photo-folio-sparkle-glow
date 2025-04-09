
import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <MainLayout>
      <div className="pt-10 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="page-title">Contact</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss a collaboration? Get in touch with me.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
