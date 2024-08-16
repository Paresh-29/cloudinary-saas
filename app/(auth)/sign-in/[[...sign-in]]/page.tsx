import React from 'react';
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const SignInPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <SignIn
        appearance={{
          baseTheme: dark,
          elements: {
            card: "bg-gray-800 shadow-none p-6 rounded-lg",
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white w-full",
            formFieldInput: "bg-gray-700 border border-gray-600 text-white",
            formFieldLabel: "text-gray-400",
            socialButtonsIconButton: "bg-gray-700 hover:bg-gray-600 text-white",
            headerTitle: "text-white text-2xl font-bold",
            headerSubtitle: "text-gray-400",
          },
          layout: {
            socialButtonsPlacement: "top",
          },
        }}
      />
    </div>
  );
};

export default SignInPage;