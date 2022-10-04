import * as React from "react";
import { usePeople, Person } from "../core/people";

type PeopleContextType = {
  handleSearch: (e: React.ChangeEvent) => void;
  search: string;
  newPeople: Person[];
};

export const PeopleContext = React.createContext({} as PeopleContextType);

export const usePeopleContext = () => React.useContext(PeopleContext);

interface Props {
  children: React.ReactNode;
}

const PeopleProvider = ({ children }: Props) => {
  const [search, setSearch] = React.useState("");
  const [newPeople, setNewPeople] = React.useState<Person[]>([]);

  const people: Person[] = usePeople();
  React.useEffect(() => {
    if (people) {
      setNewPeople(people);
    }
  }, [people]);

  const handleSearch = (e: React.ChangeEvent) => {
    setSearch((e.target as HTMLInputElement).value);

    let text = (e.target as HTMLInputElement).value.trim();
    if (text !== "") {
      const pattern = new RegExp(text, "gi");

      const foundPeople = newPeople.filter((item) => {
        return pattern.test(item.firstName);
      });
      setNewPeople(foundPeople);
    } else {
      setNewPeople(people);
    }
  };

  const values = {
    newPeople,
    search,
    handleSearch,
  };
  return (
    <PeopleContext.Provider value={values}>{children}</PeopleContext.Provider>
  );
};

export default PeopleProvider;
