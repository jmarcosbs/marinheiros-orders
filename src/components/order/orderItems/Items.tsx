import React from "react";
import menuItems from "../../../app/data/menuItems.json";
import { Button } from "@mui/material";
import { useState } from "react";

export default function Items() {
  const [showSubItems, setShowSubItems] = useState(false);

  console.log(showSubItems);

  return (
    <div className="grid grid-cols-2 gap-4">

        {menuItems["menu"].map((item) => (
          <div key={item.category} className={showSubItems ? "col-span-2" : ""}>
          <Button
              sx={{ padding: "20px", backgroundColor: "#8a633d", width: '100%'}}
              variant="contained"
              onClick={() => setShowSubItems(!showSubItems)}
              key={item.category}
            >
              {item.category}
          </Button>
          </div>  

      ))}

      {/* <List
                sx={{ width: '100%', maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                >
                <ListItemButton sx={{padding: 2}}>
                    <ListItemIcon>
                        <AddBoxTwoToneIcon sx={{color: '#4b3621'}}></AddBoxTwoToneIcon>
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                <ListItemIcon>
                        <AddBoxTwoToneIcon></AddBoxTwoToneIcon>
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Sent mailSent maiSent maiSent maiSent maiSent mai" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>
                </List> */}
    </div>
  );
}
