type Props = {
  children: React.ReactNode;
};

export default function CompanyBox({ children }: Props) {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-[0.5625rem] border border-[#E4E4E4] bg-base-100 p-2">
      {children}
    </div>
  );
}
