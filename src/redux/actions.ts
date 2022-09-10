import { apiClient } from "../api";

export const GET_NEWS_FEED = 'GET_NEWS_FEED';

export const getNewsFeed = 
() => async (dispatch: Function) =>{
    try{
        const res = await apiClient.get(
            'top-headlines?language=pt'
        )
        if(res.status === 200){
            dispatch({
                type: GET_NEWS_FEED,
                payload: res?.data?.articles,
            })
        } else {
            console.warn('Somenthing went wrong')
        }
    } catch (err){
        console.log(err)
    }
}