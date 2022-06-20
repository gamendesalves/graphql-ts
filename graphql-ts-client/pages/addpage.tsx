import request from "graphql-request";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { addPersonMutation } from "../constants";

const AddPage: NextPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const response = await request(
      "http://localhost:4000/graphql",
      addPersonMutation,
      data
    );
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="Gabriel" {...register("name")} />
      <input defaultValue="Alves" {...register("lastName")} />
      <input type="submit" />
    </form>
  );
};

export default AddPage;
