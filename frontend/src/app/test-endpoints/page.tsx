'use client';

import { useState } from 'react';
import { apiFetch } from '../../network/utils/FetchApi';

export default function TestEndpointsPage() {
  const [token, setToken] = useState<string | null>(null);
  const [responseText, setResponseText] = useState('');

  const handleResponse = (response: any) => {
    setResponseText(JSON.stringify(response, null, 2));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const pass = form.password.value;
    const response = await apiFetch('/auth/login', { method: 'POST', body: { email, pass } });
    if (response.ok && response.data) {
      // @ts-ignore
      setToken(response.data.access_token);
    }
    handleResponse(response);
  };

  const handleLogout = async () => {
    const response = await apiFetch('/auth/logout', { method: 'POST', token });
    setToken(null);
    handleResponse(response);
  };

  const handleGetProfile = async () => {
    const response = await apiFetch('/auth/profile', { token });
    handleResponse(response);
  };

  const handleGeneric = async (e: React.FormEvent<HTMLFormElement>, endpoint: string, method: 'POST' | 'GET' | 'PATCH' | 'DELETE') => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: { [key: string]: any } = {};
    const formData = new FormData(form);
    formData.forEach((value, key) => {
      data[key] = value;
    });

    let url = endpoint;
    if (method === 'GET' || method === 'PATCH' || method === 'DELETE') {
        if(data.id) {
            url = `${endpoint}/${data.id}`;
            delete data.id;
        }
    }

    const response = await apiFetch(url, { method, body: Object.keys(data).length > 0 ? data : undefined, token });
    handleResponse(response);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Backend Endpoints Testing</h1>
      <pre className="bg-gray-100 p-4 rounded mt-4 overflow-auto">{responseText}</pre>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

        {/* Auth */}
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Auth</h2>
          <form onSubmit={handleLogin} className="mb-4">
            <h3 className="font-semibold">Login</h3>
            <input type="email" name="email" placeholder="Email" className="border p-1 w-full mb-2" />
            <input type="password" name="password" placeholder="Password" className="border p-1 w-full mb-2" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
          </form>
          <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded mb-2">Logout</button>
          <button onClick={handleGetProfile} className="bg-green-500 text-white p-2 rounded">Get Profile</button>
        </div>

        {/* Users */}
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <form onSubmit={(e) => handleGeneric(e, '/users', 'POST')} className="mb-4">
            <h3 className="font-semibold">Create User</h3>
            <input type="text" name="dni" placeholder="DNI" className="border p-1 w-full mb-2" />
            <input type="text" name="firstName" placeholder="First Name" className="border p-1 w-full mb-2" />
            <input type="text" name="lastName" placeholder="Last Name" className="border p-1 w-full mb-2" />
            <input type="email" name="email" placeholder="Email" className="border p-1 w-full mb-2" />
            <input type="password" name="password" placeholder="Password" className="border p-1 w-full mb-2" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create</button>
          </form>
          <button onClick={(e) => handleGeneric(e, '/users', 'GET')} className="bg-green-500 text-white p-2 rounded mb-2">Find All</button>
          <form onSubmit={(e) => handleGeneric(e, '/users', 'GET')} className="mb-4">
            <h3 className="font-semibold">Find One by DNI</h3>
            <input type="text" name="id" placeholder="DNI" className="border p-1 w-full mb-2" />
            <button type="submit" className="bg-green-500 text-white p-2 rounded">Find One</button>
          </form>
          <form onSubmit={(e) => handleGeneric(e, '/users', 'PATCH')} className="mb-4">
            <h3 className="font-semibold">Update User</h3>
            <input type="text" name="id" placeholder="DNI" className="border p-1 w-full mb-2" />
            <input type="text" name="firstName" placeholder="First Name" className="border p-1 w-full mb-2" />
            <input type="text" name="lastName" placeholder="Last Name" className="border p-1 w-full mb-2" />
            <input type="email" name="email" placeholder="Email" className="border p-1 w-full mb-2" />
            <button type="submit" className="bg-yellow-500 text-white p-2 rounded">Update</button>
          </form>
          <form onSubmit={(e) => handleGeneric(e, '/users', 'DELETE')} className="mb-4">
            <h3 className="font-semibold">Delete User</h3>
            <input type="text" name="id" placeholder="DNI" className="border p-1 w-full mb-2" />
            <button type="submit" className="bg-red-500 text-white p-2 rounded">Delete</button>
          </form>
        </div>

        {/* Company */}
        <div className="border p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Company</h2>
            <form onSubmit={(e) => handleGeneric(e, '/company', 'POST')} className="mb-4">
                <h3 className="font-semibold">Create Company</h3>
                <input type="text" name="company_name" placeholder="Company Name" className="border p-1 w-full mb-2" />
                <input type="text" name="cuit" placeholder="CUIT" className="border p-1 w-full mb-2" />
                <input type="date" name="start_of_activities" placeholder="Start of Activities" className="border p-1 w-full mb-2" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create</button>
            </form>
            <button onClick={(e) => handleGeneric(e, '/company', 'GET')} className="bg-green-500 text-white p-2 rounded mb-2">Find All</button>
            <form onSubmit={(e) => handleGeneric(e, '/company', 'GET')} className="mb-4">
                <h3 className="font-semibold">Find One by ID</h3>
                <input type="text" name="id" placeholder="ID" className="border p-1 w-full mb-2" />
                <button type="submit" className="bg-green-500 text-white p-2 rounded">Find One</button>
            </form>
            <form onSubmit={(e) => handleGeneric(e, '/company', 'PATCH')} className="mb-4">
                <h3 className="font-semibold">Update Company</h3>
                <input type="text" name="id" placeholder="ID" className="border p-1 w-full mb-2" />
                <input type="text" name="company_name" placeholder="Company Name" className="border p-1 w-full mb-2" />
                <input type="text" name="cuit" placeholder="CUIT" className="border p-1 w-full mb-2" />
                <input type="date" name="start_of_activities" placeholder="Start of Activities" className="border p-1 w-full mb-2" />
                <button type="submit" className="bg-yellow-500 text-white p-2 rounded">Update</button>
            </form>
            <form onSubmit={(e) => handleGeneric(e, '/company', 'DELETE')} className="mb-4">
                <h3 className="font-semibold">Delete Company</h3>
                <input type="text" name="id" placeholder="ID" className="border p-1 w-full mb-2" />
                <button type="submit" className="bg-red-500 text-white p-2 rounded">Delete</button>
            </form>
        </div>

        {/* Credit */}
        <div className="border p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Credit</h2>
            <form onSubmit={(e) => handleGeneric(e, '/credit', 'POST')} className="mb-4">
                <h3 className="font-semibold">Create Credit</h3>
                <input type="number" name="requestedAmount" placeholder="Requested Amount" className="border p-1 w-full mb-2" />
                <input type="number" name="termMonths" placeholder="Term Months" className="border p-1 w-full mb-2" />
                <input type="number" name="interestRate" placeholder="Interest Rate" className="border p-1 w-full mb-2" />
                <input type="text" name="status" placeholder="Status" className="border p-1 w-full mb-2" />
                <input type="number" name="companyId" placeholder="Company ID" className="border p-1 w-full mb-2" />
                <input type="text" name="userDni" placeholder="User DNI" className="border p-1 w-full mb-2" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create</button>
            </form>
            <button onClick={(e) => handleGeneric(e, '/credit', 'GET')} className="bg-green-500 text-white p-2 rounded mb-2">Find All</button>
            <form onSubmit={(e) => handleGeneric(e, '/credit', 'GET')} className="mb-4">
                <h3 className="font-semibold">Find One by ID</h3>
                <input type="text" name="id" placeholder="ID" className="border p-1 w-full mb-2" />
                <button type="submit" className="bg-green-500 text-white p-2 rounded">Find One</button>
            </form>
            <form onSubmit={(e) => handleGeneric(e, '/credit', 'PATCH')} className="mb-4">
                <h3 className="font-semibold">Update Credit</h3>
                <input type="text" name="id" placeholder="ID" className="border p-1 w-full mb-2" />
                <input type="number" name="requestedAmount" placeholder="Requested Amount" className="border p-1 w-full mb-2" />
                <input type="number" name="termMonths" placeholder="Term Months" className="border p-1 w-full mb-2" />
                <input type="number" name="interestRate" placeholder="Interest Rate" className="border p-1 w-full mb-2" />
                <input type="text" name="status" placeholder="Status" className="border p-1 w-full mb-2" />
                <button type="submit" className="bg-yellow-500 text-white p-2 rounded">Update</button>
            </form>
            <form onSubmit={(e) => handleGeneric(e, '/credit', 'DELETE')} className="mb-4">
                <h3 className="font-semibold">Delete Credit</h3>
                <input type="text" name="id" placeholder="ID" className="border p-1 w-full mb-2" />
                <button type="submit" className="bg-red-500 text-white p-2 rounded">Delete</button>
            </form>
        </div>

        {/* Digital Signature */}
        <div className="border p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Digital Signature</h2>
            <form onSubmit={(e) => handleGeneric(e, '/digital-signature', 'POST')} className="mb-4">
                <h3 className="font-semibold">Create Digital Signature</h3>
                <input type="text" name="documentHash" placeholder="Document Hash" className="border p-1 w-full mb-2" />
                <input type="text" name="signedBy" placeholder="Signed By" className="border p-1 w-full mb-2" />
                <input type="text" name="documentUrl" placeholder="Document URL" className="border p-1 w-full mb-2" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create</button>
            </form>
            <button onClick={(e) => handleGeneric(e, '/digital-signature', 'GET')} className="bg-green-500 text-white p-2 rounded mb-2">Find All</button>
            <form onSubmit={(e) => handleGeneric(e, '/digital-signature', 'GET')} className="mb-4">
                <h3 className="font-semibold">Find One by ID</h3>
                <input type="text" name="id" placeholder="ID" className="border p-1 w-full mb-2" />
                <button type="submit" className="bg-green-500 text-white p-2 rounded">Find One</button>
            </form>
            <form onSubmit={(e) => handleGeneric(e, '/digital-signature', 'PATCH')} className="mb-4">
                <h3 className="font-semibold">Update Digital Signature</h3>
                <input type="text" name="id" placeholder="ID" className="border p-1 w-full mb-2" />
                <input type="text" name="documentHash" placeholder="Document Hash" className="border p-1 w-full mb-2" />
                <input type="text" name="signedBy" placeholder="Signed By" className="border p-1 w-full mb-2" />
                <input type="text" name="documentUrl" placeholder="Document URL" className="border p-1 w-full mb-2" />
                <button type="submit" className="bg-yellow-500 text-white p-2 rounded">Update</button>
            </form>
            <form onSubmit={(e) => handleGeneric(e, '/digital-signature', 'DELETE')} className="mb-4">
                <h3 className="font-semibold">Delete Digital Signature</h3>
                <input type="text" name="id" placeholder="ID" className="border p-1 w-full mb-2" />
                <button type="submit" className="bg-red-500 text-white p-2 rounded">Delete</button>
            </form>
        </div>

        {/* KYC/AML Verification */}
        <div className="border p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">KYC/AML Verification</h2>
            <form onSubmit={(e) => handleGeneric(e, '/kyc-aml-verification', 'POST')} className="mb-4">
                <h3 className="font-semibold">Create KYC/AML Verification</h3>
                <input type="number" name="creditId" placeholder="Credit ID" className="border p-1 w-full mb-2" />
                <input type="text" name="riskLevel" placeholder="Risk Level" className="border p-1 w-full mb-2" />
                <input type="checkbox" name="pep" className="border p-1 mb-2" /> PEP
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create</button>
            </form>
            <button onClick={(e) => handleGeneric(e, '/kyc-aml-verification', 'GET')} className="bg-green-500 text-white p-2 rounded mb-2">Find All</button>
            <form onSubmit={(e) => handleGeneric(e, '/kyc-aml-verification', 'GET')} className="mb-4">
                <h3 className="font-semibold">Find One by ID</h3>
                <input type="text" name="id" placeholder="ID" className="border p-1 w-full mb-2" />
                <button type="submit" className="bg-green-500 text-white p-2 rounded">Find One</button>
            </form>
            <form onSubmit={(e) => handleGeneric(e, '/kyc-aml-verification', 'PATCH')} className="mb-4">
                <h3 className="font-semibold">Update KYC/AML Verification</h3>
                <input type="text" name="id" placeholder="ID" className="border p-1 w-full mb-2" />
                <input type="text" name="riskLevel" placeholder="Risk Level" className="border p-1 w-full mb-2" />
                <input type="checkbox" name="pep" className="border p-1 mb-2" /> PEP
                <input type="checkbox" name="verified" className="border p-1 mb-2" /> Verified
                <button type="submit" className="bg-yellow-500 text-white p-2 rounded">Update</button>
            </form>
            <form onSubmit={(e) => handleGeneric(e, '/kyc-aml-verification', 'DELETE')} className="mb-4">
                <h3 className="font-semibold">Delete KYC/AML Verification</h3>
                <input type="text" name="id" placeholder="ID" className="border p-1 w-full mb-2" />
                <button type="submit" className="bg-red-500 text-white p-2 rounded">Delete</button>
            </form>
        </div>

      </div>
    </div>
  );
}