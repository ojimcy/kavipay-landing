'use client';

import { motion } from 'framer-motion';
import { Smartphone, Wifi, Zap, Tv } from 'lucide-react';

export function Utilities() {
  const utilities = [
    {
      icon: Smartphone,
      title: 'Airtime',
      description: 'Top up any network instantly',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Wifi,
      title: 'Data Bundles',
      description: 'Buy data for all networks',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Zap,
      title: 'Electricity',
      description: 'Pay power bills in seconds',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Tv,
      title: 'TV Subscriptions',
      description: 'Renew cable & streaming',
      color: 'from-pink-500 to-red-500',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-500 to-accent-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            More Than Just a Card
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Pay bills, buy airtime, and manage utilities—all from one app
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {utilities.map((utility, index) => {
            const Icon = utility.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  {/* Icon with gradient */}
                  <div className="mb-4 flex justify-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${utility.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {utility.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {utility.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/90 text-lg">
            Everything you need for daily life, right at your fingertips
          </p>
        </motion.div>
      </div>
    </section>
  );
}
