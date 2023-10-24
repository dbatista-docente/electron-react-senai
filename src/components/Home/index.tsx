import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Textarea,
  background,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IProps {
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = ({ setLogged }: IProps) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/");
  };

  return (
    <>
      <button onClick={logout}>Logout</button>
      <Flex
        border={"1px solid black"}
        width={"60rem"}
        height={"40rem"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"1rem"}
        justifyContent={"center"}
        borderRadius={"2rem"}
        margin={"auto"}
        backgroundColor={"white"}
        color={"black"}
        boxShadow={"1rem 1rem 2rem 0rem"}
      >
        <h1 id="title-h1">Programar Mensagem telegram</h1>

        <FormControl color={"black"} display={"flex"} flexDirection={"column"}>
          <label>Token Bot:</label>
          <Input
            id="token-bot"
            width={"48rem"}
            height={"1rem"}
            padding={"0.5rem"}
            borderRadius={"0.5rem"}
          />
        </FormControl>

        <FormControl color={"black"} display={"flex"} flexDirection={"column"}>
          <label>Chat Id:</label>
          <Input
            id="chat-id"
            width={"48rem"}
            height={"1rem"}
            padding={"0.5rem"}
            borderRadius={"0.5rem"}
          />
        </FormControl>

        <FormControl color={"black"} display={"flex"} flexDirection={"column"}>
          <label>Mensagem:</label>
          <Textarea
            id="mensagem"
            width={"48rem"}
            height={"3rem"}
            padding={"0.5rem"}
            borderRadius={"0.5rem"}
          ></Textarea>
        </FormControl>

        <Box
          color={"black"}
          borderStyle={"dotted"}
          width={"80%"}
          height={"6rem"}
          padding={"0.5rem"}
          borderRadius={"1.5rem"}
          fontSize={"2rem"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <text>Clique ou arraste para adicionar arquivos</text>
        </Box>

        <Box
          color={"black"}
          display={"flex"}
          justifyContent={"flex-start"}
          width={"80%"}
        >
          <span>Imagens selecionadas:</span>
        </Box>

        <Button
          padding={"1.5rem 2.3rem"}
          borderRadius={"1.3rem"}
          fontSize={"1.3rem"}
          fontWeight={"600"}
          backgroundColor={"#00a2ff"}
          color={"white"}
          border={"none"}
          cursor={"pointer"}
          _hover={{
            color: "#00a2ff",
            border: "1px solid",
            background: "white",
          }}
        >
          Programar mensagem
        </Button>
      </Flex>
    </>
  );
};

export default Home;
