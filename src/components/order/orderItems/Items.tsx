import React from "react";
import menuItems from "../../../app/data/menuItems.json";
import { ListItemText, ListItemButton, ListItemIcon, List, Collapse } from "@mui/material";
import { useState } from "react";
import { ExpandMore, ExpandLess, AddBoxTwoTone, StarBorder } from '@mui/icons-material'; // {{ edit_2 }}

export default function Items() {

  const [openIndex, setOpenIndex] = useState(null); // Armazena o índice do item aberto

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Fecha se já estiver aberto
  };

  return (
    <div className="grid grid-cols-2 gap-4">

      {menuItems["menu"].map((item, index) => (

        <List key={item.category} >
          <ListItemButton  sx={{backgroundColor: '#5c422799', color: '#fff',  '&:hover': {backgroundColor: '#5c4227'}}} onClick={() => handleClick(index)}>
            <ListItemText primary={item.category} />
            {openIndex === index ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>


          {item.items.map(item => (

                <Collapse key={item.name} in={openIndex === index? true : false} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <AddBoxTwoTone />
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </List>
                </Collapse>


          ))}


        

       </List>

      ))}

    </div>


  );
}
