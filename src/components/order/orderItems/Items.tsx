import React from "react";
import menuItems from "../../../app/data/menuItems.json";
import { ListItemText, ListItemButton, ListItemIcon, List, Collapse } from "@mui/material";
import { useState } from "react";
import { ExpandMore, ExpandLess, AddBoxTwoTone } from '@mui/icons-material'; // {{ edit_2 }}

export default function Items() {

  const [openIndex, setOpenIndex] = useState<number | null>(null); // Ensure openIndex can be number or null

  const handleClick = (index : number | null) => {
    setOpenIndex(openIndex === index ? null : index); // Fecha se já estiver aberto
  };

  return (
    
    <div className="grid grid-cols-2 gap-1">

      {menuItems["menu"].map((item, index) => (

        <div className={openIndex === index ? "col-span-2" : "col-span-1"} key={item.name} id={`item-${index}`}>
          <List key={item.category} >

            <ListItemButton 
              sx={{ backgroundColor: '#7d654b', color: '#fff', borderRadius: '5px', boxShadow: '3px 3px 5px 0px #5c422730',  '&:hover': {backgroundColor: '#5c4227'}}} 
              onClick={() => {
                handleClick(index);
                document.getElementById(`item-${index}`)?.scrollIntoView({ behavior: 'smooth' }); // TA BUGANDO
              }}
            >
              <ListItemText primary={item.category} />
              {openIndex === index ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            


            {item.items.map(item => (

                  
                  <Collapse key={item.name} in={openIndex === index? true : false} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                      <AddBoxTwoTone/>
                      </ListItemIcon>
                      <ListItemText primary={item.name} onClick={() => handleClick(index)} />
                    </ListItemButton>
                  </List>
                  </Collapse>



            ))}
            

          

          </List>
        </div>

      ))}

    </div>


  );
}
