import { useEffect, useState } from "react";
import { Text, View, Button,Image } from "react-native";

type CatProps = {
  name: string
}

const Cat = (props: CatProps)=>{
  const [isHungry,setIsHungry]=useState(true)
  const [timerRunning,setTimerRunning]=useState(false)
  const [secondsLeft,setSecondsLeft]=useState(60)

  useEffect(()=>{
    let interval: ReturnType<typeof setInterval >;

    if(timerRunning){
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if(prev<=1){
            clearInterval(interval)
            setIsHungry(true)
            setTimerRunning(false)
            return 60;
          }
          return prev-1
        })
      },1000)
    }
    return () => clearInterval(interval)
  },[timerRunning])

  const feedCat = () => {
    setIsHungry(false);
    setTimerRunning(true);
    setSecondsLeft(60)
  }
  return(
    <View>
      <Text>I am {props.name}, and I am {isHungry ? 'hungry': 'full' }!</Text>

      {isHungry ? (
        <Button title="Give me some food! I am hungry!" onPress={feedCat}/>
      ):
       <Text>
        Thank you! Malik mera pet bhara hai
        {"\n"}Hungry again in {secondsLeft} seconds
       </Text>
      }

      {isHungry ? (
        <Image source={{ uri: 'https://tse3.mm.bing.net/th/id/OIP.Afq8_E_Klz-tqfmp4D7SogHaE7?rs=1&pid=ImgDetMain&o=7&rm=3' }}
         className="h-52 w-52" 
         />
      ) : 
       <Image
       source={{
        uri: 'https://tse2.mm.bing.net/th/id/OIP.UjUIpUUcTimSCFfNvjVBigHaE7?w=500&h=333&rs=1&pid=ImgDetMain&o=7&rm=3'
       }}
       className="h-52 w-52"
        />

      }
    </View>
  )
}

const Cafe = () => {
  return (
    <>
      <Cat name="tomy" />
      <Cat name="frak" />
    </>
  );
};

export default Cafe;