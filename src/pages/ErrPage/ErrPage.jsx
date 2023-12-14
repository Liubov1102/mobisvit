

import { Box, Link, P } from './ErrPage.styled'


const ErrPage = () => (
    <Box>
       
        <div style={{marginBottom:"30px",textAlign:"center"}}>
             <P>OOPS!</P>
            <P>404</P>
            <P>Page not found</P>   
</div>
         
        <div style={{marginBottom:"30px",textAlign:"center"}}>
            <P>Maybe this page moved? Got deleted?</P>
            <P>Is hiding out in quarantine?</P>
           <P> Never existed in the first place?</P> 
</div>
       
            <P>Let's go</P> <Link to="/" >home</Link> <P>and try from there.</P>
    

        </Box>
)
export default ErrPage