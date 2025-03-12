import { Header } from "@/components/shared/Header";
import React from "react";
import { SearchParamProps, TransformationTypeKey } from "@/types";
import { transformationTypes } from "@/data/constants";
import TransformationForm from "@/components/Forms/TransformationForm";
import { auth } from "@clerk/nextjs/server";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const AddTranformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const transformatiom = transformationTypes[type];
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await getUserById(userId);

  return (
    <>
      <Header title={transformatiom.title} subTitle={transformatiom.subTitle} />
      <TransformationForm
        action="Add"
        userId={user._id}
        type={transformatiom.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  );
};

export default AddTranformationTypePage;
