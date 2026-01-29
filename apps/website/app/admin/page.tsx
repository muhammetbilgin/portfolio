import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function ProtectedPage() {
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="h-screen bg-gray-1 p-12 text-gray-12">
      <h1>Welcome to the gang page</h1>
      <p>Only authenticated users can access this page.</p>
    </div>
  );
}
