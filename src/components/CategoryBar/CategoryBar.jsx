// import { getProducts } from "../../fakeAPI";
import { NavLink } from "react-router-dom";
import Data from "../../fakeAPI";
import { Link } from "../ui/Link";
import { Box, Item } from "./CategoryBar.styled";
import styles from './TypeBar.module.css';
import { useSelector } from "react-redux";


const TypeBar = ({ types,filterItem, setItem, menuItems }) => {
    // const {device} = useContext(Context)
    // const { list } = useSelector(({ types }) => types);
    return (
        <Box>
            <Link to="/catalog" onClick={() => setItem(Data)}>каталог</Link>
            {menuItems.map((product, id) => {
                return (
            //         <NavLink
            //          onClick={() => filterItem(product)}
            //         key={id}

            //     className={({ isActive }) =>
            //       `${styles.link} ${isActive ? styles.active : ""}`
            //     }
            //     //   to={`/categories/${id}`}
            //   >
            //     {product}
            //   </NavLink>
                    
               <Item                  
                    
              onClick={() => filterItem(product)}
              key={id}
            >
                  {product}
                  
            </Item>
          );
             })}
            
                
            
            {/* {types.map(type =>
                <Item
                    style={{cursor: 'pointer'}}
                    // active={type.id === device.selectedType.id}
                    // onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </Item>
            )} */}
        </Box>
    );
};

export default TypeBar;