import type { ReactNode } from "react";

type Props = { children: ReactNode };

const Container = ({ children }: Props) => {
  return (
    <div className="min-h-screen w-full bg-neutral-100 flex items-start justify-center py-6">
      <div className="relative w-[375px] h-[812px] bg-white shadow-xl overflow-hidden border border-neutral-200">
        {children}
      </div>
    </div>
  );
};

export default Container;
