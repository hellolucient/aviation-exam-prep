'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Forest Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/forest.png"
          alt="Forest background"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay to make text more readable */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center pt-12 sm:pt-24">
        <h1 className="text-5xl sm:text-8xl font-bold mb-8 sm:mb-16 text-white drop-shadow-lg px-4 text-center">
          Be The Moose
        </h1>
        
        <div className="relative w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] mx-auto sm:ml-[365px] cursor-pointer" onClick={() => router.push('/tests')}>
          <Image
            src="/images/moose.png"
            alt="Cartoon Moose"
            fill
            priority
            className="object-contain"
          />
          <div 
            className="absolute bottom-[30%] left-[40%] w-[20%] h-[15%] rounded-full hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              router.push('/tests');
            }}
          />
        </div>
        <p className="mt-4 text-base sm:text-lg text-white/80 dark:text-gray-300 animate-bounce px-4 text-center">
          Click the moose to begin
        </p>
      </div>
    </div>
  );
} 