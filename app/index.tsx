import { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";

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
    </View>
  )
}

const Cafe = () => {
  return (
    <>
      <Cat name="desi-bili" />
      <Cat name="videshi-billi" />
    </>
  );
};

export default Cafe;