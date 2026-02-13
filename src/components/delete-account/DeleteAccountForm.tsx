'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { Input, Button } from '@/components/ui';

export function DeleteAccountForm() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!confirmed) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.kavipay.io/account/delete-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, reason }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center"
      >
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          Request Received
        </h3>
        <p className="text-neutral-600">
          Your request has been received. We&apos;ll process it and send a
          confirmation to your email within 48 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Warning card */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-neutral-900 mb-1">
              What gets permanently deleted
            </h3>
            <p className="text-sm text-neutral-600">
              This action is permanent and irreversible. Once processed, the
              following data will be permanently removed:
            </p>
          </div>
        </div>
        <ul className="space-y-2 ml-9">
          {[
            'Wallet balances (NGN and USD)',
            'Card data',
            'Transaction history',
            'KYC/identity documents',
            'Profile information',
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-neutral-700"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Email address associated with your KaviPay account
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Reason for leaving (optional)
          </label>
          <textarea
            id="reason"
            rows={4}
            placeholder="Let us know why you're leaving..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg text-base text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:outline-none focus:ring-4 focus:border-primary-500 focus:ring-primary-100 resize-none"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            id="confirm"
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-neutral-300 text-red-500 focus:ring-red-500"
            required
          />
          <label htmlFor="confirm" className="text-sm text-neutral-700">
            I understand that this action is permanent and all my data will be
            deleted
          </label>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button
          type="submit"
          disabled={!confirmed || loading}
          className="bg-[#EF4444] hover:bg-red-600 text-white border-0 shadow-none hover:shadow-none"
        >
          {loading ? 'Submitting...' : 'Request Account Deletion'}
        </Button>
      </form>
    </div>
  );
}
