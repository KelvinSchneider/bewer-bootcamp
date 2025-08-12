"use client";

import { LogInIcon, LogOutIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Cart } from "./cart";

export const Header = () => {
  const { data: session } = authClient.useSession();
  return (
    <header className="flex items-center justify-between p-5 md:p-6 lg:p-8">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="BEWEAR"
          width={100}
          height={26.14}
          className="md:w-32 lg:w-40"
        />
      </Link>

      <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:h-10 md:w-10 lg:h-12 lg:w-12"
            >
              <MenuIcon className="md:h-5 md:w-5 lg:h-6 lg:w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="md:w-96 lg:w-[450px]">
            <SheetHeader>
              <SheetTitle className="md:text-xl lg:text-2xl">Menu</SheetTitle>
            </SheetHeader>
            <div className="px-5 md:px-6 lg:px-8">
              {session?.user ? (
                <>
                  <div className="flex justify-between space-y-6">
                    <div className="flex items-center gap-3 md:gap-4">
                      <Avatar className="md:h-12 md:w-12 lg:h-16 lg:w-16">
                        <AvatarImage
                          src={session?.user?.image as string | undefined}
                        />
                        <AvatarFallback className="md:text-lg lg:text-xl">
                          {session?.user?.name?.split(" ")?.[0]?.[0]}
                          {session?.user?.name?.split(" ")?.[1]?.[0]}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-semibold md:text-lg lg:text-xl">
                          {session?.user?.name}
                        </h3>
                        <span className="text-muted-foreground block text-xs md:text-sm">
                          {session?.user?.email}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => authClient.signOut()}
                      className="md:h-10 md:w-10 lg:h-12 lg:w-12"
                    >
                      <LogOutIcon className="md:h-5 md:w-5 lg:h-6 lg:w-6" />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold md:text-lg lg:text-xl">
                    Olá. Faça seu login!
                  </h2>
                  <Button
                    size="icon"
                    asChild
                    variant="outline"
                    className="md:h-10 md:w-10 lg:h-12 lg:w-12"
                  >
                    <Link href="/authentication">
                      <LogInIcon className="md:h-5 md:w-5 lg:h-6 lg:w-6" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
        <Cart />
      </div>
    </header>
  );
};
