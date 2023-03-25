import { useMemo, useState } from "react";
import Bawah from "../../components/Bawah/Bawah";
import NavHead from "../../components/header/header";
import { LoginState } from "../../CustomHook/LogContex";
import { CartState } from "../../CustomHook/CartContex";
const MainLayout = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [jumlahItem, setJumlahItem] = useState(0);
  const value = useMemo(() => ({ userName, setUserName }), [userName]);
  const jumlah = useMemo(() => ({ jumlahItem, setJumlahItem }), [jumlahItem]);
  return (
    <>
      <LoginState.Provider value={value}>
        <CartState.Provider value={jumlah}>
          {useMemo(
            () => (
              <>
                <NavHead />
                <main className="mt-[100px]">{children}</main>
                <Bawah />
              </>
            ),
            [children]
          )}
        </CartState.Provider>
      </LoginState.Provider>
    </>
  );
};

export default MainLayout;
