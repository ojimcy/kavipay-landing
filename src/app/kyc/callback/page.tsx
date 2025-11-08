'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import { Button } from '@/components/ui';
import { CheckCircle, Smartphone } from 'lucide-react';
import { analytics } from '@/lib/analytics';

export default function KYCCallbackPage() {
  const [appUrl, setAppUrl] = useState<string>('');

  useEffect(() => {
    // Track page view
    analytics.pageView();
    analytics.sectionView('kyc_callback');

    // Determine app URL based on user agent
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);

    // Try deep link first, fallback to store
    if (isIOS) {
      setAppUrl('kavipay://kyc?status=completed'); // Deep link to app
      // Fallback to App Store if app not installed
      setTimeout(() => {
        const appStoreUrl =
          process.env.NEXT_PUBLIC_APP_STORE_URL ||
          'https://apps.apple.com/app/kavipay';
        setAppUrl(appStoreUrl);
      }, 2500);
    } else if (isAndroid) {
      setAppUrl('kavipay://kyc?status=completed'); // Deep link to app
      // Fallback to Play Store if app not installed
      setTimeout(() => {
        const playStoreUrl =
          process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
          'https://play.google.com/store/apps/kavipay';
        setAppUrl(playStoreUrl);
      }, 2500);
    } else {
      // Desktop - show app store links
      setAppUrl('#download-section');
    }
  }, []);

  const handleOpenApp = () => {
    analytics.ctaClick('kyc_callback_open_app');

    // Attempt to open the app
    if (appUrl) {
      window.location.href = appUrl;
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2,
                }}
                className="mb-8 inline-block"
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-14 h-14 text-white" />
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
              >
                Submission Complete!
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-neutral-600 mb-4"
              >
                Thank you for submitting your KYC verification.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-neutral-600 mb-12"
              >
                Open the Kavipay app to check your verification status and
                complete the process.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <Button size="lg" onClick={handleOpenApp} className="gap-2">
                  <Smartphone className="w-5 h-5" />
                  Open Kavipay App
                </Button>
              </motion.div>

              {/* Download Section for Desktop Users */}
              <motion.div
                id="download-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-neutral-200"
              >
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Don&apos;t have the app yet?
                </h2>
                <p className="text-neutral-600 mb-6">
                  Download Kavipay to start managing your finances
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={
                      process.env.NEXT_PUBLIC_APP_STORE_URL ||
                      'https://apps.apple.com/app/kavipay'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => analytics.downloadClick('ios')}
                    className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition font-semibold"
                  >
                    Download for iOS
                  </a>
                  <a
                    href={
                      process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
                      'https://play.google.com/store/apps/kavipay'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => analytics.downloadClick('android')}
                    className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition font-semibold"
                  >
                    Download for Android
                  </a>
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 text-sm text-neutral-500"
              >
                <p>
                  Need help? Contact our support team at{' '}
                  <a
                    href="mailto:support@kavipay.com"
                    className="text-primary-600 hover:text-primary-700 underline"
                  >
                    support@kavipay.com
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
