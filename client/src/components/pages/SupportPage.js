import React, { useEffect } from "react";
import MetaData from "../layouts/MetaData";

const SupportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="py-40 px-5 md:px-24">
      <MetaData title={"Support"} />
      <h1 className="text-4xl font-bold mb-6">Support</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">
          Here you can find answers to common questions and inquiries.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Q: How can I place an order?</h3>
          <p className="text-gray-600">
            A: To place an order, simply browse our collection, select the
            desired item, choose the size and quantity, and click on the "Add to
            Cart" button. Then proceed to the checkout page to provide your
            shipping and payment details.
          </p>

          <h3 className="text-xl font-bold">
            Q: What payment methods do you accept?
          </h3>
          <p className="text-gray-600">
            A: We accept major credit cards, Card Payments, Bank Transfers, USSD
            Payments, Mobile Money.
          </p>

          <h3 className="text-xl font-bold">Q: How long does shipping take?</h3>
          <p className="text-gray-600">
            A: Shipping times may vary depending on your location. Typically,
            orders are processed within 1-2 business days, and delivery can take
            up to 7 business days. Please note that international
            orders may take longer to arrive.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Help and Assistance</h2>
        <p className="text-gray-600">
          If you need to cancel an order, any help or have specific questions,
          please reach out the contact info below.
        </p>
        <ul className="list-disc ml-6 mt-4 text-gray-600">
          <li>Email: info@xpression.com</li>
          <li>Phone: +2348138669521</li>
        </ul>
      </div>
    </div>
  );
};

export default SupportPage;
