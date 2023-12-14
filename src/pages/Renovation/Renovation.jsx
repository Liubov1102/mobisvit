import Slide from '@ericcote/react-reveal/Slide';
import renovation from '../../img/renov.png'
import { Item, Wrapper } from '../Servis/Servis.styled';


const Renovation = () => (
    <Wrapper >
        
        <img src={renovation} alt="renovation" />
             <Slide right cascade>
            <ul >
                <Item >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Item>
                <Item >Qui ipsam dolorum quos illo impedit rem nihil beatae laboriosam,</Item>
                <Item >eos perferendis quibusdam facilis veniam cum dicta vitae praesentium amet corrupti molestias.</Item>
                <Item>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ipsam dolorum quos illo impedit rem nihil beatae laboriosam, eos perferendis quibusdam facilis veniam cum dicta vitae praesentium amet corrupti molestias.</Item>
            </ul></Slide>

        
        </Wrapper>
)
export default Renovation