import servis from '../../img/servis.png'

import { Item, Wrapper } from './Servis.styled'
import Slide from '@ericcote/react-reveal/Slide';

const Servis = () => (
    <Wrapper
    >
       
        
             <Slide left cascade>
            <ul >
                <Item >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Item>
                <Item >Qui ipsam dolorum quos illo impedit rem nihil beatae laboriosam,</Item>
                <Item >eos perferendis quibusdam facilis veniam cum dicta vitae praesentium amet corrupti molestias.</Item>
                <Item>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ipsam dolorum quos illo impedit rem nihil beatae laboriosam, eos perferendis quibusdam facilis veniam cum dicta vitae praesentium amet corrupti molestias.</Item>
            </ul></Slide>
                    
                    

        <img src={servis} alt="servis" />

        

        </Wrapper>
)
export default Servis