import { View, Text } from 'react-native';
import InputText from '~/src/components/InputText';

export default function Home() {
    return (
        <View className='flex-1 bg-gray-50 items-center'>
            <View className='w-full bg-palette-3 h-60 items-center'>
                <View className='w-40 h-40 absolute top-60 bg-blue-500 rounded-full -translate-y-1/2'></View>
            </View>

            <View className="flex-1 items-center justify-center w-full">
                <InputText placeholder='Digite seu email:' caption='Email' style={{ width: '80%'}}/>
            </View>
        </View>
    );
}
