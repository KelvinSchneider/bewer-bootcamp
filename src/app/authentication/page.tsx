import { Header } from "@/components/common/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sign-up-form";

const Authentication = async () => {
  return (
    <>
      <Header />

      <div className="flex w-full flex-col gap-6 md:gap-8 lg:gap-10 p-5 md:p-6 lg:p-8">
        <Tabs defaultValue="sign-in" className="w-full">
          <TabsList className="md:h-12 lg:h-14 md:text-base lg:text-lg">
            <TabsTrigger value="sign-in" className="md:text-base lg:text-lg">
              Entrar
            </TabsTrigger>
            <TabsTrigger value="sign-up" className="md:text-base lg:text-lg">
              Criar conta
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in" className="w-full">
            <SignInForm />
          </TabsContent>
          <TabsContent value="sign-up" className="w-full">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Authentication;
