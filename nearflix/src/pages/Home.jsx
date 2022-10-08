import React,{useState, createContext, useContext} from 'react'
import Main from '../components/Main';
import Row from '../components/Row';
import Overlay from '../components/Overlay';
import PopUp from '../components/PopUp';
import requests from '../Request';
import { CloseContext } from '../App';
import { ItemContext } from '../components/Row';




const Home = () => {
  
  const [close, setClose] = useContext(CloseContext)
  const [item, setItem] = useContext(ItemContext)
  
  return (
    <>
      
      <Main />
      <Row rowId='1' title='Coming Soon' fetchURL={requests.requestUpcoming} />
      <Row rowId='2' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowId='3' title='Action' fetchURL={requests.requestTrending} />
      <Row rowId='4' title='Most watched' fetchURL={requests.requestTopRated} />
      <Row rowId='5' title='Horror' fetchURL={requests.requestHorror} />
      {(close && <Overlay close={() => setClose(!close)}>
      {/*<PopUp key={id} item={item} movietitle={item.title} overview={item?.overview}/>*/} 
      </Overlay>)}
      
    </>
  )
}

export default Home