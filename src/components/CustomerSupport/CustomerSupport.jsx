import React, { useState, useRef } from 'react';
import { FaFaceGrin, FaFacebookMessenger, FaPaperPlane, FaPaperclip } from 'react-icons/fa6';
import classes from './CustomerSupport.module.css';
import { createPortal } from 'react-dom';
import { Button } from 'react-bootstrap';
import { FcBusinessman } from 'react-icons/fc';

function CustomerSupport() {
   const [isShown, setIsShown] = useState(false);
   const popupRef = useRef();

   const handleOutsideClick = (event) => {
      if (!popupRef.current?.contains(event.target)) {
         handleToggleButtonClick();
         document.removeEventListener('click', handleOutsideClick, false);
      }
   };

   const handleToggleButtonClick = () => {
      // add listener
      if (!isShown) document.addEventListener('click', handleOutsideClick, false);
      setIsShown((prevState) => !prevState);
   };

   return (
      <>
         {createPortal(
            <div className={classes.box} ref={popupRef}>
               <FaFacebookMessenger className={`${isShown && classes.mess}`} onClick={handleToggleButtonClick} />
               {isShown && (
                  <div className={classes.customer}>
                     <div>
                        <div className={classes.header}>
                           <h5>Customer Support</h5>
                           <Button variant="light" className={classes.btn}>
                              Lets Chat App
                           </Button>
                        </div>
                        <div className={classes.detail}>
                           <p>Xin chào</p>
                           <p>Làm thế nào để xem các sản phẩm</p>
                           <div>
                              <p>
                                 <FcBusinessman className={classes.man} />
                                 <span> ADMIN: Chào bạn</span>
                              </p>
                           </div>
                           <div>
                              <p>
                                 <FcBusinessman className={classes.man} />
                                 <span>ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm</span>
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className={classes.footer}>
                        <FcBusinessman className={classes.man} />
                        <input type="text" className={classes.input}  placeholder='Enter message!'/>
                        <FaPaperclip className={classes.paper}/>
                        <FaFaceGrin  className={classes.paper} />
                        <FaPaperPlane className={classes.paper} />
                     </div>
                  </div>
               )}
            </div>,
            document.getElementById('overlay-root')
         )}
      </>
   );
}

export default CustomerSupport;
