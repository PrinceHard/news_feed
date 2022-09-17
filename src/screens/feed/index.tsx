import React, { useEffect } from 'react';
import { Text, useColorScheme, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsFeed } from '../../redux/actions';
import styles from './styles';

export const Feed: React.FC = () => {
    const { newsFeed } = useSelector((state: any) => state.feedReducer);
    const dispatch: Function = useDispatch();

    useEffect(() => {
        dispatch(getNewsFeed())
    }, [dispatch])
    const backgroundColor = useColorScheme() === 'dark' ? '#000' : '#fff'
    return(
        <View style={[styles.container, {backgroundColor}]}>
            {newsFeed?.map((item: any) =>(
                <Text>{item.title}</Text>
            ))}
        </View>
    )
}