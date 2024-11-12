import React, { useState } from "react";
import menuItems from "../data/menuItems.json";
import { ListItemText, ListItemButton, ListItemIcon, List, Collapse } from "@mui/material";
import { ExpandMore, ExpandLess, AddBoxTwoTone } from '@mui/icons-material';
import { useOrderContext, Dish } from '../context/OrderContext';
import CustomItem from '../components/CustomItem'

export default function Items() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { setDishes } = useOrderContext();

  interface MenuItem {
    category: string;
    departiment?: string;
    items: Item[];
  }

  interface Item {
    id: number;
    name: string;
    description?: string; // Agora é opcional
  }

  const handleClickItem = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index); // Fecha se já estiver aberto
  };

  const handleClickSubItem = (item: Item, departiment: string) => {
    const newDish: Dish = {
      id: item.id,
      name: item.name,
      departiment: departiment, // Usa o departamento passado como argumento
      amount: 1, // Substitua pelo valor correto
      note: null // Inicializa note como null
    };

    setDishes((prevDishes: Dish[]) => { // Specify the type of prevDishes
      const updatedDishes = [...prevDishes, newDish];
      return updatedDishes; // Return the updated array
    });
  };


  return (
    <div className="grid grid-cols-2 gap-1">
      {menuItems["menu"].map((menuItem: MenuItem, index) => (
        <div className={openIndex === index ? "col-span-2" : "col-span-1"} key={menuItem.category} id={`item-${index}`}>
          <List key={menuItem.category}>
            <ListItemButton 
              sx={{
                backgroundColor: menuItem.departiment === "copa" ? '#4d3720' : '#7d654b', // different color for "copa"
                color: '#fff',
                borderRadius: '5px',
                boxShadow: '3px 3px 5px 0px #5c422730',
                '&:hover': { backgroundColor: menuItem.departiment === "copa" ? '#362616' : '#5c4227' }}} 
              onClick={() => {
                handleClickItem(index);
              }}
            >
              <ListItemText primary={menuItem.category} />
              {openIndex === index ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            {menuItem.items.map((subItem: Item) => (
              <Collapse key={subItem.id} in={openIndex === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton onClick={() => handleClickSubItem(subItem, menuItem.departiment!)}>
                    <ListItemIcon>
                      <AddBoxTwoTone />
                    </ListItemIcon>
                    <ListItemText primary={subItem.name} />
                  </ListItemButton>
                </List>
              </Collapse>
            ))}
          </List>
        </div>
      ))}
      <CustomItem/>
    </div>
  );
}
