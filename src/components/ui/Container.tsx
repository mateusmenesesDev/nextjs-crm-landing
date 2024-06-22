type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="m-auto max-w-screen-2xl px-6 lg:px-16 xl:px-[5.88rem] 3xl:px-0">
      {children}
    </div>
  );
}
