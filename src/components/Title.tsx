import { headingFont } from '@/config/fonts';

interface TitleProps {
  title: string;
  subtitle?: string;
}

export const PageHeading = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="flex flex-col gap-12">
      <h1 className={`${headingFont.className} text-3xl antialiased`}>
        {title}
      </h1>

      {subtitle && <p className="text-lg">{subtitle}</p>}
    </div>
  );
};
