import React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isOpen: false,
    };
  }

   handleButtonClick = () => {
     const { open } = this.state;
     this.setState({
       open: !open,
     });
   }

   hideScroll= () => {
     const { isOpen } = this.state;
     this.setState({
       isOpen: !isOpen,
     });
     if (isOpen) {
       document.getElementsByTagName('html')[0].setAttribute('style', 'overflow:scroll;');
     } else {
       document.getElementsByTagName('html')[0].setAttribute('style', 'overflow:hidden;');
     }
   }

   render() {
     const { open } = this.state;
     return (
       <Menu onStateChange={this.hideScroll} width="250px">
         <div className="container" id="bm-item">
           <span className="menu-item">Categorias</span>
           <button type="button" onClick={this.handleButtonClick} id="button-click"><i className="fa fa-caret-down" aria-hidden="true" /></button>
           {open && (
           <div className="dropdown">
             <ul className="sidebar-list">
               <Link to="/" className="bm-item menu-item" onClick={this.hideScroll}>
                 <li>Option 1</li>
               </Link>
               <Link to="/" className="bm-item menu-item" onClick={this.hideScroll}>
                 <li>Option 2</li>
               </Link>
               <Link to="/" className="bm-item menu-item" onClick={this.hideScroll}>
                 <li>Option 3</li>
               </Link>
               <Link to="/" className="bm-item menu-item" onClick={this.hideScroll}>
                 <li>Option 4</li>
               </Link>
             </ul>
           </div>
           )}
         </div>

         <Link to="/" className="menu-item" onClick={this.hideScroll}>
           Tus pedidos
         </Link>

         <Link to="/login" className="menu-item" onClick={this.hideScroll}>
           Login
         </Link>

         <Link to="/signin" className="menu-item" onClick={this.hideScroll}>
           Signin
         </Link>

         <Link to="/perfil" className="menu-item" onClick={this.hideScroll}>
           Mis datos
         </Link>

         <Link to="/tiendas" className="menu-item" onClick={this.hideScroll}>
           Tiendas
         </Link>
       </Menu>
     );
   }
}

export default SideBar;
