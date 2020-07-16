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

   // hideScroll= () => {
   //   const { isOpen } = this.state;
   //   // this.setState({
   //   //   isOpen: !isOpen,
   //   // });
   //   if (isOpen) {
   //     document.getElementsByTagName('html')[0].setAttribute('style', 'overflow:scroll;');
   //   } else {
   //     document.getElementsByTagName('html')[0].setAttribute('style', 'overflow:hidden;');
   //   }
   // }

   render() {
     const { open } = this.state;
     return (
       <Menu onStateChange={this.hideScroll} burgerButtonClassName={ "my-class" }>
         <div className="container" id="bm-item">
           <span className="menu-item">Categorias</span>
           <button type="button" onClick={this.handleButtonClick} id="button-click"><i className="fa fa-caret-down" aria-hidden="true" /></button>
           {open && (
           <div className="dropdown">
             <ul>
               <li>Option 1</li>
               <li>Option 2</li>
               <li>Option 3</li>
               <li>Option 4</li>
             </ul>
           </div>
           )}
         </div>

         <Link to="/" className="menu-item">
           Tus pedidos
         </Link>

         <Link to="/login" className="menu-item">
           Login
         </Link>

         <Link to="/signin" className="menu-item">
           Signin
         </Link>

         <Link to="/perfil" className="menu-item">
           Mis datos
         </Link>

         <Link to="/tiendas" className="menu-item">
           Tiendas
         </Link>
       </Menu>
     );
   }
}

export default SideBar;
