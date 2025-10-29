import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export function VisaLogo({ className = "h-6" }: LogoProps) {
  return (
    <div className={className} style={{ position: 'relative', width: 'auto', aspectRatio: '3/1' }}>
      <Image
        src="/images/payment-logos/visa.png"
        alt="Visa"
        width={90}
        height={30}
        className="object-contain"
        style={{ height: '100%', width: 'auto' }}
      />
    </div>
  );
}

export function MastercardLogo({ className = "h-6" }: LogoProps) {
  return (
    <div className={className} style={{ position: 'relative', width: 'auto', aspectRatio: '3/1' }}>
      <Image
        src="/images/payment-logos/mastercard.png"
        alt="Mastercard"
        width={90}
        height={30}
        className="object-contain"
        style={{ height: '100%', width: 'auto' }}
      />
    </div>
  );
}

export function ApplePayLogo({ className = "h-6" }: LogoProps) {
  return (
    <div className={className} style={{ position: 'relative', width: 'auto', aspectRatio: '3/1' }}>
      <Image
        src="/images/payment-logos/apple-pay.png"
        alt="Apple Pay"
        width={90}
        height={30}
        className="object-contain"
        style={{ height: '100%', width: 'auto' }}
      />
    </div>
  );
}

export function GooglePayLogo({ className = "h-6" }: LogoProps) {
  return (
    <div className={className} style={{ position: 'relative', width: 'auto', aspectRatio: '3/1' }}>
      <Image
        src="/images/payment-logos/google-pay.png"
        alt="Google Pay"
        width={90}
        height={30}
        className="object-contain"
        style={{ height: '100%', width: 'auto' }}
      />
    </div>
  );
}
