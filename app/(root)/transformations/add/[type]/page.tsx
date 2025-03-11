import { Header } from "@/components/shared/Header";
import React from "react";
import { SearchParamProps } from "@/types";
import { transformationTypes } from "@/data/constants";
import TransformationForm from "@/components/Forms/TransformationForm";

const AddTranformationTypePage = ({ params: { type } }: SearchParamProps) => {
  const transformatiom = transformationTypes[type];
  return (
    <>
      <Header title={transformatiom.title} subTitle={transformatiom.subTitle} />
      <TransformationForm />
    </>
  );
};

export default AddTranformationTypePage;
