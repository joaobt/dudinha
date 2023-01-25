import styled,{css} from "styled-components";


export type ButtonVariant = 'primary'|'secondary'|'danger'|'success'|'neutral';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary:'purple',
    secondary:'orange',
    danger:'red',
    success:'green',
    neutral:'blue',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 100px;
height: 48px;

${props => {
    return css
    `background-color: ${buttonVariants[props.variant]}`;
}}
`