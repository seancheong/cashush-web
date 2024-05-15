import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface Props {
  iconPath: string;
  className?: string;
}

export const TitleIcon = ({ iconPath, className }: Props) => {
  return (
    <div className={twMerge('w-fit rounded-lg bg-brand p-4', className)}>
      <Image
        src={iconPath}
        alt="bank"
        width={0}
        height={0}
        className="h-4 w-4"
      />
    </div>
  );
};
