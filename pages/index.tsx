/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { FormEvent, useCallback, useEffect, useState } from "react";
import ReactLoading from "react-loading";
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
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const getMovieRequest = useCallback(async () => {
    if (data.length !== categories.length) {
      let newData: DataProps[] = [];
      setLoading(true);

      for (let i = 0; i < categories.length; i++) {
        const element = categories[i];
        const res = await fetchData(element);
        if (res?.Search) {
          newData[i] = {
            category: element,
            res: res.Search,
          };
        }
      }
      setData(newData);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovieRequest();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetchData(input);
    if (res.Search) {
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

        {loading && (
          <LoadingCard>
            <ReactLoading type="spinningBubbles" color="black" />
          </LoadingCard>
        )}
      </main>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 33px;
`;
const LoadingCard = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  height: 30vh;
`;
