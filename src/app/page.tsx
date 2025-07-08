"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { TRPCBuilder } from "@trpc/server";

const Page=()=>{
  const trpc=useTRPC();
  const invoke=useMutation(trpc.invoke.mutationOptions({}));
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Button onClick={()=>invoke.mutate({text:"John"})}>
        Invoke background job
      </Button>
    </div>
  );
}
export default Page;