import React, {useState , useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../../../index'
import './pop-up-categories.css'

const Dropdown = observer (() => {

    const {certificate} = useContext(Context)
    const [selected, setSelected] = useState("Categories");
    const [isActive, setIsActive] = useState(false);

    const [hover, setHover] = useState(false)
    const onHover = () => {
      setHover(!hover)
    }

  return (
    <>
    <div className="dropdown_container">

    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        </div>
        {/* <span className="fas fa-caret-down"></span> */}
        {isActive && (
          <div className="dropdown-content">
            {/* <div className="dropdown-item">
              All certificates</div> */}
              
            {certificate.category.map(category => 
            <div
            onClick={(e) => {
                certificate.setSelectedCategory(category); 
                setSelected(category.name);
                setIsActive(false);
              }}
              key={category.id}
              className="dropdown-item"
              >
            {category.name}
            </div>
              )}

        </div>
          
      )}
    </div>
    </div>
    </>

  );
})

export default Dropdown;
