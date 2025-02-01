// filepath: /c:/Users/Anas/SustaingineeringWebApp/sustaingineering-web-app/pages/loginpage.tsx
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-8">Login to Your Account</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-8">Get Started</button>
      <div className="flex gap-4">
        <Image src="/images/sustain logo.png" alt="Login Image" width={200} height={200} />
      </div>
    </div>
  );
}