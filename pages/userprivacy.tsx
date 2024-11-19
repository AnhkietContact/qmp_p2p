import MainLayout from "../src/layout/MainLayout";
import Head from "next/head";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title> User Privacy Policy</title>
      </Head>
      <div className="container rounded-[35px] bg-gray-200 py-10 shadow-md mt-32 mb-20">
        <h1 className="text-3xl font-bold mb-4 text-center">
          User Privacy Policy - NOW CHAIN
        </h1>
        <p className="mb-4 text-center">
          At NOW CHAIN, we are committed to protecting the privacy and security
          of our users&apos; data. This privacy policy explains how we collect,
          use, and protect your personal information when using the NOW CHAIN
          application.
        </p>
        <h2 className="text-[18px] font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          When you use NOW CHAIN, we may collect the following types of
          information:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Device name: To identify the devices participating in the network.
          </li>
          <li>
            Device code: A unique identifier for the device to ensure network
            integrity.
          </li>
          <li>
            Device IP address: To monitor network connections and ensure
            functionality.
          </li>
          <li>
            Node ID: Data identifying the node within the decentralized network.
          </li>
          <li>
            Node account email: Used for user authentication and account
            management.
          </li>
        </ul>
        <p className="mb-4">
          This information helps us ensure that nodes in the network are
          functioning properly and synchronized with each other.
        </p>
        <h2 className="text-[18px] font-semibold mt-6 mb-2">
          2. How We Use the Information
        </h2>
        <p className="mb-4">We use the collected information to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Monitor and maintain the operation of nodes in the decentralized
            network.
          </li>
          <li>
            Improve user experience by ensuring that your devices are connected
            and functioning correctly.
          </li>
          <li>
            Secure the network by verifying device information and related data
            to prevent fraudulent or invalid activities.
          </li>
        </ul>
        <h2 className="text-[18px] font-semibold mt-6 mb-2">
          3. Sharing of Information
        </h2>
        <p className="mb-4">
          TingNode does not share, sell, or trade your personal information with
          third parties, except in the following situations:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>With your consent.</li>
          <li>When required by law or by competent authorities.</li>
          <li>
            When necessary to protect the safety and security of the devices and
            data within the network.
          </li>
        </ul>
        <h2 className="text-[18px] font-semibold mt-6 mb-2">
          4. Information Security
        </h2>
        <p className="mb-4">
          We employ appropriate physical, technical, and managerial security
          measures to protect your personal information from unauthorized
          access, loss, or unlawful disclosure. All information is encrypted and
          securely stored.
        </p>
        <h2 className="text-[18px] font-semibold mt-6 mb-2">5. User Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Request access to the personal information we have collected.</li>
          <li>
            Request corrections or deletions of your personal information.
          </li>
          <li>
            Withdraw consent for the collection and processing of your
            information at any time.
          </li>
        </ul>
        <p className="mb-4">
          To exercise your rights, please contact us via the support email:
          Info@nowchain.co
        </p>
        <h2 className="text-[18px] font-semibold mt-6 mb-2">
          6. Policy Changes
        </h2>
        <p className="mb-4">
          This privacy policy may be updated to comply with changes in the law
          or adjustments in our operations. Any changes will be communicated
          through the app or via email.
        </p>
        <h2 className="text-[18px] font-semibold mt-6 mb-2">7. Contact</h2>
        <p className="mb-4">
          If you have any questions or requests regarding the privacy policy,
          please contact us at: Info@nowchain.co
        </p>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
