import React from "react";

const Policies = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-center text-4xl font-bold mb-8">Policies</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          Refund and Returns Policy
        </h2>
        <p className="text-lg">
          All sales are final. We do not offer refunds or returns for any
          reason. This includes, but is not limited to, changes of mind,
          dissatisfaction with the service, or unexpected events.
        </p>
        <p className="text-lg mt-4">
          We understand that this policy may be inconvenient for some customers,
          but it is necessary to ensure the quality of our services. We take
          great pride in our work, and we want to make sure that our customers
          are satisfied with the results. If you are not sure if our services
          are right for you, please contact us for more information.
        </p>
        <p className="text-lg mt-4">Thank you for your understanding.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Privacy Policy</h2>
        <h3 className="text-2xl font-medium mb-2">
          Personal and Payment Information
        </h3>
        <p className="text-lg">
          All credit/debit card details and personally identifiable information
          will <span className="text-primary">NOT</span> be stored, sold,
          shared, rented, or leased to any third parties by{" "}
          <span className="text-primary">Bettr Fitness</span>.
        </p>

        <h3 className="text-2xl font-medium mt-6 mb-2">Third-Party Sharing</h3>
        <p className="text-lg">
          <span className="text-primary">Bettr Fitness</span> will{" "}
          <span className="text-primary">not</span> pass any debit/credit card
          details to third parties.
        </p>

        <h3 className="text-2xl font-medium mt-6 mb-2">Data Security</h3>
        <p className="text-lg">
          <span className="text-primary">Bettr Fitness</span> takes appropriate
          steps to ensure data privacy and security using various hardware and
          software methodologies. However, we cannot guarantee the security of
          any information disclosed online.
        </p>

        <h3 className="text-2xl font-medium mt-6 mb-2">Third-Party Links</h3>
        <p className="text-lg">
          <span className="text-primary">Bettr Fitness</span> is{" "}
          <span className="text-primary">not</span> responsible for the privacy
          policies of websites to which it links. If you provide any information
          to such third parties, different rules regarding the collection and
          use of your personal information may apply. You are encouraged to
          contact these entities directly with any questions about how they use
          the information they collect.
        </p>

        <h3 className="text-2xl font-medium mt-6 mb-2">Policy Updates</h3>
        <p className="text-lg">
          The Privacy Policy and Terms & Conditions may be changed or updated
          occasionally to meet legal requirements and industry standards.
          Customers are encouraged to frequently review these sections to stay
          informed of updates. Changes will take effect on the day they are
          posted on the website.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Terms & Conditions</h2>
        <p className="text-lg">
          <span className="text-primary">
            "BETTR FITNESS PERSONAL SPORT COACHING SERVICES"
          </span>
        </p>
        <p className="text-lg mt-4">
          "Bettr Fitness Personal Sport Coaching Services" maintains the{" "}
          <a href="https://bettrfitness.com" className="text-primary">
            https://bettrfitness.com
          </a>{" "}
          Website ("Site").
        </p>

        <h3 className="text-2xl font-medium mt-6 mb-2">
          Cardholder Responsibility
        </h3>
        <p className="text-lg">
          Cardholders must retain a copy of transaction records and Merchant
          policies and rules. This includes the responsibility to keep a record
          of credit card transactions and to be aware of the policies and rules
          established by <span className="text-primary">Bettr Fitness</span>.
        </p>

        <h3 className="text-2xl font-medium mt-6 mb-2">
          Account Confidentiality
        </h3>
        <p className="text-lg">
          Users are responsible for maintaining the confidentiality of their
          account credentials, including their username and password, and must
          take necessary steps to prevent unauthorized access to their account.
        </p>

        <h3 className="text-2xl font-medium mt-6 mb-2">Country of Domicile</h3>
        <p className="text-lg">
          <span className="text-primary">Egypt</span> is our country of
          domicile. All disputes arising in connection with the use of this
          website shall be governed by the laws of{" "}
          <span className="text-primary">Egypt</span> and shall be heard
          exclusively by a court of competent jurisdiction in{" "}
          <span className="text-primary">Egypt</span>.
        </p>

        <h3 className="text-2xl font-medium mt-6 mb-2">
          Accepted Payment Methods
        </h3>
        <p className="text-lg">
          Visa or MasterCard debit and credit cards in{" "}
          <span className="text-primary">EGP (Egyptian Pounds)</span> will be
          accepted for payment.
        </p>

        <h3 className="text-2xl font-medium mt-6 mb-2">Minors</h3>
        <p className="text-lg">
          Customers under the age of 18 are{" "}
          <span className="text-primary">not</span> permitted to register as
          users of the website and shall{" "}
          <span className="text-primary">not</span> transact on or use the
          website.
        </p>

        <h3 className="text-2xl font-medium mt-6 mb-2">Pricing and Currency</h3>
        <p className="text-lg">
          The price and currency displayed at the checkout page will match the
          price and currency printed on the transaction receipt. The amount
          charged to the card will reflect in the cardholder’s currency as per
          their bank’s exchange rate.
        </p>

        <h3 className="text-2xl font-medium mt-6 mb-2">Payment Confirmation</h3>
        <p className="text-lg">
          Once payment is successfully made, a confirmation notice will be sent
          to the customer via email within 24 hours of receipt of payment.
        </p>
      </section>
    </div>
  );
};

export default Policies;
