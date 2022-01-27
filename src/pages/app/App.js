import styled from 'styled-components';
import Woody from '../../images/woody.png';
import { Quotes } from '../../components/quotes';

export function App() {
    return (
        <Content>    
            <Quotes quote = {'ok'} speaker = {'Speaker'}/>
            <WoodyImg src={Woody} alt='Foto do Woody' />
        </Content>
    )
}

const Content = styled.div`
    height: 200 vh;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const WoodyImg = styled.img`
    max-width: 150vw;
    align-self: flex-end;
`
