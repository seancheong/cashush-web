import { twMerge } from 'tailwind-merge';

interface Props {
  label: string;
  className?: string;
}

export const Chip = ({ label, className }: Props) => {
  return (
    <div
      className={twMerge(
        'rounded-3xl bg-brand px-4 py-1 font-semibold text-white',
        className,
      )}
    >
      {label}
    </div>
  );
};
