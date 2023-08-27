import {
  Image,
  Text,
  FormLabel,
  FormControl,
  Input,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

const AddTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initData = {
    title: "",
    description: "",
    dueDate: "",
  };
  const [formData, setFormData] = useState(initData);



    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <Button leftIcon={<MdAdd />} onClick={onOpen} size="sm" mb="20px">
        Add Task
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textAlign={"center"}
            color={"#E57373"}
            fontWeight={"bold"}
          >
            {"ADD TASK"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired mb="15px">
              <FormLabel color={"gray.600"}>Task Name</FormLabel>
              <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
                type="text"
                placeholder="task"
              />
            </FormControl>

            <FormControl isRequired mb="15px">
              <FormLabel color={"gray.600"}>Due Date</FormLabel>
              <Input
                name="birthDate"
                value={formData.dueDate}
                onChange={handleChange}
                type="date"
                placeholder="Due Date"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              variant={"solid"}
              color={"gray.700"}
              _hover={{ backgroundColor: "#558B2F", color: "white" }}
              backgroundColor={"#DCEDC8"}
              mr={3}
              onClick={handleSubmit}
            >
              ADD
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTask;
