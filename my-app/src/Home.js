import React from 'react'
import { Title, Button } from './styledComponents'
import { useDispatch } from 'react-redux'

const Home = () => {

    const dispatch = useDispatch()
    
    return <div style={{  textAlign: 'center' }}>
        <Title>
            <h1>MBTI 유형에 따른 추천 스포츠</h1>
        </Title>
        <Button onClick={() => dispatch({ type: 'BEGIN' })}>시작하기</Button>
        {/* <p style={{ color: 'blue' }} >MADE BY 만든사람</p> */}
    </div>
}

export default Home