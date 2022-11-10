let furniture = [
    {view: "cupboard", bolts: 50, wood: "maple", color: "red",height: 216},
    {view: "armchair", bolts: 120, wood: "oak", color: "black",height: 150},
    {view: "bed", bolts: 70, wood: "Birch", color: "white",height: 100},
    {view: "sofa", bolts: 90, wood: "Pine", color: "bloo",height: 110},
    {view: "table", bolts: 40, wood: "Beech", color: "gray",height: 120},
    {view: "chair", bolts: 4, wood: "Cherry", color: "white",height: 100},
    {view: "stool", bolts: 4, wood: "Nut", color: "brown",height: 50},
    {view: "bench", bolts: 10, wood: "Linden", color: "white",height: 70},
    {view: "pedestal", bolts: 40, wood: "Birch", color: "brown",height: 100},
    {view: "door", bolts: 6, wood: "maple", color: "brown",height: 300},

]
localStorage.setItem("furniture", JSON.stringify(furniture))