import { View, Text} from "react-native"
import "../global.css"
type funProp={
  name: string,
}
const Dog = (props: funProp) => {
  return (
    <View>
      <Text className="text-center font-bold text-green-600">how are you {props.name}!</Text>
    </View>
  )
}

const DogFunction = () =>{
 return(
   <View >
    <Text className="text-center">Hello bro!</Text>
    <Dog name="Alen"/>
    <Dog name="Bob" />
  </View>
 )
}

export default DogFunction;