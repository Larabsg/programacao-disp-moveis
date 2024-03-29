import styled from 'styled-components/native';

interface ButtonContainerProps {
    margin?: string;
    backColor?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    width: 100%;
    height: 48px;
    border-radius:4px;
    justify-content: center;
    align-items: center;
    ${(props)=> props.margin ? `margin: ${props.margin};` : ''	}
    ${(props)=> props.backColor ? `background-color: ${props.backColor};` : 'background-color: #0000ff;'	}

     
`