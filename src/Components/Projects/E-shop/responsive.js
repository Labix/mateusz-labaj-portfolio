import {css} from'styled-components';

export const mobile = (props) =>{
    return css`
    @media only screen and (max-width: 480px){
        ${props}
    }
    `;
};

export const mobileslider = (props) => {
    return css`
    @media only screen and (max-width: 670px){
        ${props}
    }
    `;
};
