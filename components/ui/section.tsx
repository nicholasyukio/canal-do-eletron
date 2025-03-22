'use client';

import Image from 'next/image';
import Button from '@/components/ui/button';

interface SectionProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

const Section: React.FC<SectionProps> = ({ id, title, description, imageSrc }) => {
  return (
    <section id={id} className="w-full py-8 flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
        <Button />
      </div>
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image src={imageSrc} alt={title} width={500} height={300} className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default Section;