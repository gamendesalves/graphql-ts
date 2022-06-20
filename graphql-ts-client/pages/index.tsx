import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { request } from "graphql-request";

import Link from "next/link";
import { getAllPeopleQuery } from "../constants";

const Home: NextPage = ({
  result,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      {result.map((item: any) => {
        console.log(item);
        return (
          <p key={item.id}>
            {item.name} {item.lastName}
          </p>
        );
      })}

      <Link href="/addpage">Add a new entry </Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await request("http://localhost:4000/graphql", getAllPeopleQuery);
  const result = res.getAllPeople;
  return {
    props: {
      result,
    },
  };
};

export default Home;
