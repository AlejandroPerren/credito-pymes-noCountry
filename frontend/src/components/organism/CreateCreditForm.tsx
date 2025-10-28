"use client";

import { useState } from "react";

const CreateCreditForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Step 1: Credit Information</h2>
          {/* Form for credit information will go here */}
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: KYC/AML Verification</h2>
          {/* Form for KYC/AML verification will go here */}
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: Digital Signature</h2>
          {/* Form for digital signature will go here */}
          <button onClick={prevStep}>Previous</button>
          <button>Submit</button>
        </div>
      )}
    </div>
  );
};

export default CreateCreditForm;
