import peoples from "../datasets/datasets";

const Resolvers = {
  Query: {
    getAllPeople: () => peoples,
    getPerson: (_: any, args: any) => {
      console.log(args);
      return peoples.find((people) => people.id == args.id);
    },
  },

  Mutation: {
    addPerson: (_: any, args: any) => {
      const newPeople = {
        id: peoples.length + 1,
        name: args.name,
        lastName: args.lastName,
      };
      console.log(newPeople);
      peoples.push(newPeople);
      return newPeople;
    },
  },
};

export default Resolvers;
