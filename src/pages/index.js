import React from 'react'

import { Box, HStack, Pressable, Icon, Avatar, FlatList } from 'native-base'

import { Feather } from '@expo/vector-icons'
import Storys from '../components/Storys'
import Feed from '../components/Feed'

const data = [
  {
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  fullName: "Aafreen Khan",
  timeStamp: "12:47 PM",
  recentText: "Good Day!",
  avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}, {
  id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  fullName: "Sujitha Mathur",
  timeStamp: "11:11 PM",
  recentText: "Cheer up, there!",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
}, {
  id: "58694a0f-3da1-471f-bd96-145571e29d72",
  fullName: "Anci Barroco",
  timeStamp: "6:22 PM",
  recentText: "Good Day!",
  avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
}, {
  id: "68694a0f-3da1-431f-bd56-142371e29d724",
  fullName: "Aniket Kumar",
  timeStamp: "8:56 PM",
  recentText: "All the best",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
}, 
{
  id: "28694a0f-3da1-471f-bd96-142456e29d723",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
},
{
  id: "28694a0f-3da1-471f-bd96-142456e29d722",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
},
{
  id: "28694a0f-3da1-471f-bd96-142456e29d721",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}
];


export default function Home(){
  return(
    <Box flex={1} backgroundColor="#f8f8f8" flexDirection="column">
     
      <HStack padding={4} w="100%" alignItems="center" justifyContent="space-between" safeArea>
        <Box>
          <Pressable>
            <Icon
              as={Feather}
              name="menu"
              size={7}
              color="#000"
            />
          </Pressable>
        </Box>

        <Box rounded="md" flexDir="row" alignItems="center">
          <Pressable>
            <Icon
              as={Feather}
              name="bell"
              size={7}
              color="#000"
              marginRight={4}
            />
          </Pressable>

          <Pressable>
            <Avatar
              source={{ uri: "https://sujeitoprogramador.com/steve.png" }}
              height={12}
              width={12}
            />
          </Pressable>
        </Box>

      </HStack>

      <Box paddingX={4}>
      
        <FlatList
          horizontal={true}
          data={data}
          renderItem={ ({ item }) => <Storys data={item} /> }
          showsHorizontalScrollIndicator={false}
        />

      </Box>


      <Box paddingX={4}>
      
        <FlatList
          data={data}
          renderItem={ ({ item }) => <Feed data={item} /> }
          showsVerticalScrollIndicator={false}
        />

      </Box>

    </Box>
  );
}