import styled from 'styled-components';
import {string} from 'prop-types';

export const Quotes = ({ quote, speaker}) => {
    return(
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>- {speaker}</Speaker>
            <button>Quote Toy Story</button>
        </Wrapper>
    );
};

Quotes.propTypes = {
    quote: string,
    speaker: string
}

const Wrapper = styled.div` 
    flex-direction: column;
    align-items: center;
`
const Quote = styled.p`
    font-size: 2em;
    margin: 0;
    text-align: center;
    
`
const Speaker = styled(Quote)`
    text-align: center;
    margin-bottom: 50px
`
