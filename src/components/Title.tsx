import { headingFont } from '@/config/fonts';

interface TitleProps {
  title: string;
  subtitle?: string;
}

export const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className={`${headingFont.className} text-4xl antialiased`}>
        {title}
      </h1>
      {subtitle && <p className="text-lg">{subtitle}</p>}
    </div>
  );
};
