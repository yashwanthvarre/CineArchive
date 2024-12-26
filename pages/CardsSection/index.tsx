import { Flex, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import moviesData from "../../data/movies.json";

const CardsSection = () => {
  return (
    <Flex
      minHeight="100vh"
      backgroundColor="slategrey"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="1rem"
    >
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={5}
        width="100%"
        maxW="1200px"
      >
        {moviesData.map((movie) => (
          <Flex key={movie.name}>
            <MovieCard movie={movie} />
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default CardsSection;
