import type { ReactNode } from "react";

type Props = { children: ReactNode };

const Content = ({ children }: Props) => {
  return <main className="h-full overflow-y-auto pb-[84px]">{children}</main>;
};

export default Content;
