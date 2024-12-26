import { Card, CardBody, Text, Image, Flex } from "@chakra-ui/react";

interface Movie {
  name: string;
  title?: string;
  poster?: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Card backgroundColor="none">
      <CardBody backgroundColor="black" borderRadius={10}>
        <Text color="white" fontWeight="bold" marginBottom="1rem">
          {movie.name}
        </Text>
        <Flex justifyContent="center">
          <Image
            borderRadius={50}
            src={movie.poster}
            alt={movie.poster}
            color="white"
            objectFit="cover"
          />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
