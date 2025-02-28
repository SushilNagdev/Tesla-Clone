import React from 'react'
import styled from 'styled-components'

function Section({title, description,leftBtnText, rightBtnText, backgroundImg}) {
    
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    { rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                    {/* <RightButton>
                        {rightBtnText}
                    </RightButton> */}
                </ButtonGroup>
                <DownArrow src="/Images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section
const Wrap = styled.div`
    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/Images/${props.bgImage}")`}; // Corrected this line
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const ItemText = styled.div`
    padding-top:15vh;
    text-align: center;



    `
const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row; // Set horizontal layout by default
    margin-top: 30px;    // Fix missing semicolon

    @media(max-width: 768px) {
        flex-direction: column;  // Switch to vertical layout on smaller screens
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width:256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    `



const RightButton = styled(LeftButton)`
    background: white;
    opacity:0.65;
    color: black;

    
`
const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;

    overflow-x: hidden;
    animation:animateDown infinite 1.5s;
`;
const Buttons=styled.div`
`
