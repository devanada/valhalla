import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

import { useAuthStore } from "@/utils/states";

const Index = () => {
  const { token, logout } = useAuthStore((state) => state);

  return (
    <Layout centerX centerY>
      <p className="text-wrap break-all text-center">Your token is: {token}</p>
      <Button onClick={logout}>Logout</Button>
    </Layout>
  );
};

export default Index;
