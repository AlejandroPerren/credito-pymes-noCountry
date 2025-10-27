import { AuthFormRegister } from '@/components/organism/AuthFormRegister';

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <AuthFormRegister />
      </div>
    </div>
  );
}
