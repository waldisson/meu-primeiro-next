import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div>
      <h2>Área de Autenticação</h2>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
