import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as css from './Header.module.scss';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from 'react';
import { Nav } from './../NavBar/NavBar';

export const Header = () => {
    const [navOpen, setNavOpen] = useState (false);

    useEffect(() => {
        // console.log(css);
        // var element = document.getElementById('navigate');
        // element.classList.add("open"); 
    }, [navOpen])

    const onMenuClick = useCallback(()=>{
        setNavOpen(false)
    },[navOpen]);

  return (
    <div className={css.headerContainer}>
      <header>
        <div className={css.logo}>NeedAPI</div>
        <div className={css.rightHeader}>
        <nav 
            className={`${css.navigate} ${navOpen ? css.open:''}`}
            onClick={onMenuClick} 
            onMouseLeave={()=>setNavOpen(false)}
         >
          <a href='/'>Home</a>
          <a href='#'>Service</a>
          <a href='#'>Contact</a>
          {/* <a href='#'>ContactContactContact</a>           */}
        </nav>
        <button className={css.btnLogin}>Login</button>
        <div className={css.menuIcon}>
            <FontAwesomeIcon
              icon={faBars} 
              onClick={ () => setNavOpen(!navOpen) }  
              />
        </div>
        </div>  
      </header>

    </div>
  );
};
