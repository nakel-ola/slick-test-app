import Head from "next/head";
import { FormEvent, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import CategoryCard from "../components/CategoryCard";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchCard from "../components/SearchCard";
import { Movies } from "../typing";
import fetchData from "../utils/fetchData";

interface DataProps {
  category: string;
  res: Movies[] | null;
}

let categories = [
  "Avengers",
  "Spider man",
  "Final destination",
  "Harry potter",
  "After",
];
export default function Home() {
  const [data, setData] = useState<DataProps[]>([]);
  const [input, setInput] = useState("");

  const getMovieRequest = useCallback(async () => {
    let newData: DataProps[] = [];
    console.log("fetching...");
    for (let i = 0; i < categories.length; i++) {
      const element = categories[i];
      console.log(`fetching ${element}...`);
      const res = await fetchData(element);
      newData[i] = {
        category: element,
        res: res.Search,
      };
    }
    setData(newData);

    console.log(newData);
  }, []);

  useEffect(() => {
    getMovieRequest();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetchData(input);
    if(res.Search) {
      setData([{ category: input, res: res.Search }]);
    }
  };

  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <Header />

      <Hero />

      <main>
        <SearchCard
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSubmit={handleSubmit}
        />

        {data.map((item) => (
          <CategoryCard
            key={item.category}
            category={item.category}
            data={item.res}
          />
        ))}
      </main>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 33px;
`;
