import  goBack  from "../../img/goBack4.svg";
import {  StyledLink } from "./BackLink.styled";


export const BackLink = ({ to, children }) => {
    return (
        <StyledLink to={to}>
            
            <img src={goBack} alt="goBack" width={24} />
            {children}
        </StyledLink>
    );
};