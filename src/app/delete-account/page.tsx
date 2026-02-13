import { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import { DeleteAccountForm } from '@/components/delete-account/DeleteAccountForm';

export const metadata: Metadata = {
  title: 'Delete Account — KaviPay',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DeleteAccountPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Delete Your KaviPay Account
            </h1>
            <p className="text-lg text-neutral-600 mb-10">
              We&apos;re sorry to see you go. Submitting this form will initiate
              a request to permanently delete your KaviPay account.
            </p>
            <DeleteAccountForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
