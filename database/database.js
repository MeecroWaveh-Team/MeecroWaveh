// so it looks like there's no way to read a file with javascript without using Node, which makes testing
// difficult, but then I remembered I can just put the json directly in the javascript.
// I'll leave the json files in as separate files in case we want to read them in with Node instead.
export const buildings = [
{"building_id":2, "building_name":"STC", "latitude":43.81465, "longitude":-111.78466, "coordinates":"43\u00b048'52\"N 111\u00b047'4\"W"},
{"building_id":3, "building_name":"Austin", "latitude":43.8158, "longitude":-111.78454, "coordinates":"43\u00b048'57\"N 111\u00b047'4\"W"},
{"building_id":4, "building_name":"Benson", "latitude":43.81538, "longitude":-111.7832, "coordinates":"43\u00b048'55\"N 111\u00b046'59\"W"},
{"building_id":5, "building_name":"Ricks", "latitude":43.81481, "longitude":-111.78141, "coordinates":"43\u00b048'53\"N 111\u00b046'53\"W"},
{"building_id":6, "building_name":"Taylor", "latitude":43.81693, "longitude":-111.78252, "coordinates":"43\u00b049'1\"N 111\u00b046'57\"W"},
{"building_id":7, "building_name":"MC", "latitude":43.81848, "longitude":-111.78254, "coordinates":"43\u00b049'07\"N 111\u00b046'57\"W"},
{"building_id":9, "building_name":"I-Center", "latitude":43.81849, "longitude":-111.78504, "coordinates":"43\u00b049'07\"N 111\u00b047'06\"W"},
{"building_id":10, "building_name":"McKay Library", "latitude":43.81933, "longitude":-111.78318, "coordinates":"43\u00b049'10\"N 111\u00b046'59\"W"},
{"building_id":11, "building_name":"Hart", "latitude":43.8195, "longitude":-111.78457, "coordinates":"43\u00b049'10\"N 111\u00b047'04\"W"},
{"building_id":12, "building_name":"Smith", "latitude":43.8192, "longitude":-111.78149, "coordinates":"43\u00b049'09\"N 111\u00b046'53\"W"},
{"building_id":13, "building_name":"Clark", "latitude":43.82019, "longitude":-111.78175, "coordinates":"43\u00b049'13\"N 111\u00b046'54\"W"},
{"building_id":14, "building_name":"Spori", "latitude":43.82083, "longitude":-111.78243, "coordinates":"43\u00b049'15\"N 111\u00b046'57\"W"},
{"building_id":15, "building_name":"Romney", "latitude":43.8202, "longitude":-111.78323, "coordinates":"43\u00b049'13\"N 111\u00b047'00\"W"},
{"building_id":16, "building_name":"Snow", "latitude":43.82129, "longitude":-111.78382, "coordinates":"43\u00b049'17\"N 111\u00b047'02\"W"},
{"building_id":17, "building_name":"Kimball", "latitude":43.8171, "longitude":-111.78157, "coordinates":"43\u00b049'02\"N 111\u00b046'54\"W"},
{"building_id":18, "building_name":"Hinckley", "latitude":43.81584, "longitude":-111.7799, "coordinates":"43\u00b048'57\"N 111\u00b046'48\"W"},
{"building_id":19, "building_name":"Rigby", "latitude":43.81703, "longitude":-111.78454, "coordinates":"43\u00b049'01\"N 111\u00b047'04\"W"},
{"building_id":20, "building_name":"Biddulph", "latitude":43.81704, "longitude":-111.78518, "coordinates":"43\u00b049'01\"N 111\u00b047'07\"W"},
{"building_id":21, "building_name":"Health Center", "latitude":43.81675, "longitude":-111.77938, "coordinates":"43\u00b049'00\"N 111\u00b046'46\"W"}];
let copiers = [{"copier_id":6, "location_description":"Along the south wall, near where the hallway opens into the atrium", "building_id":5, "room_id":8, "latitude":43.8148, "longitude":-111.78113},
{"copier_id":7, "location_description":"Unknown", "building_id":6, "room_id":17, "latitude":43.81685, "longitude":-111.7825}];
let microwaves = [{"microwave_id":1, "location_description":"North side of main atrium, next to the vending machines.", "building_id":2, "room_id":6, "latitude":43.8145, "longitude":-111.78452},
{"microwave_id":6, "location_description":"At the end of the hallway, near the entrance", "building_id":5, "room_id":7, "latitude":43.81513, "longitude":-111.78091},
{"microwave_id":7, "location_description":"In the northwest corner, on a table next to the railing", "building_id":5, "room_id":12, "latitude":43.81489, "longitude":-111.78102}];
let printers = [{"printer_id":6, "location_description":"Against the south wall", "building_id":5, "room_id":12, "latitude":43.81479, "longitude":-111.7808}];
let rooms = [{"room_id":6, "room_name":"Atrium", "building_id":2, "floor":2, "latitude":43.8145, "longitude":-111.78452},
{"room_id":7, "room_name":"North Hallway", "building_id":5, "floor":2, "latitude":43.81513, "longitude":-111.78091},
{"room_id":8, "room_name":"West Hallway", "building_id":5, "floor":2, "latitude":0.0, "longitude":0.0},
{"room_id":9, "room_name":"North Hallway", "building_id":5, "floor":3, "latitude":0.0, "longitude":0.0},
{"room_id":10, "room_name":"West Hallway", "building_id":5, "floor":3, "latitude":0.0, "longitude":0.0},
{"room_id":11, "room_name":"Entrance", "building_id":5, "floor":1, "latitude":0.0, "longitude":0.0},
{"room_id":12, "room_name":"Lounge", "building_id":5, "floor":3, "latitude":0.0, "longitude":0.0}, {"room_id":13, "room_name":"230", "building_id":15, "floor":2, "latitude":0.0, "longitude":0.0},
{"room_id":14, "room_name":"201", "building_id":4, "floor":2, "latitude":0.0, "longitude":0.0},
{"room_id":15, "room_name":"145", "building_id":13, "floor":1, "latitude":0.0, "longitude":0.0},
{"room_id":16, "room_name":"254", "building_id":11, "floor":2, "latitude":0.0, "longitude":0.0},
{"room_id":17, "room_name":"Unknown", "building_id":6, "floor":1, "latitude":0.0, "longitude":0.0}];
let vending_machines = [{"vending_machine_id":6, "vendor":"7 Up", "location_description":"North corner", "building_id":5, "room_id":12, "latitude":43.81481, "longitude":-111.78098},
{"vending_machine_id":7, "vendor":"Good to Go", "location_description":"At the end of the hallway, near the entrance", "building_id":5, "room_id":7, "latitude":43.81512, "longitude":-111.78091},
{"vending_machine_id":8, "vendor":"7 Up", "location_description":"At the end of the hallway, near the entrance", "building_id":5, "room_id":7, "latitude":43.81513, "longitude":-111.78091},
{"vending_machine_id":9, "vendor":"Crossroads (Snacks)", "location_description":"At the end of the hallway, near the entrance", "building_id":5, "room_id":7, "latitude":43.81514, "longitude":-111.78091},
{"vending_machine_id":10, "vendor":"7 Up", "location_description":"Unknown", "building_id":6, "room_id":17, "latitude":43.81675, "longitude":-111.78247},
{"vending_machine_id":11, "vendor":"Crossroads (Snacks)", "location_description":"Unknown", "building_id":6, "room_id":17, "latitude":43.81675, "longitude":-111.78247},
{"vending_machine_id":12, "vendor":"Pepsi", "location_description":"Unknown", "building_id":6, "room_id":17, "latitude":43.81685, "longitude":-111.7825}];



function firstFloorIsntReal(building_id, splice = false)
{
    // Don't think the west entrance to the Ricks building should count as a floor?
    // Feed those rooms through this thing!
    // First parameter is the rooms table (object) in its entirety, the second parameter is the id of the target building
    // Third parameter is splice, true if this is a situation like the Ricks building, false if there's a basement
    // that is never ever called the first floor and you're ok with letting it be floor 0.
    for (let i = 0; i < rooms.length; i++)
    {
        if (rooms[i].building_id === building_id)
        {
            rooms[i].floor--;
            if (rooms[i].floor === 0 && splice)
            {
                rooms.splice(i, 1);
                i--;
            }
        }
    }
}

function remap(parent, keyName, children = [])
{
    // fixes the primary key of a table so it can be used as an index
    // example parameters:
    // buildings, 'building_id', [copiers, microwaves, printers, rooms, vending_machines]
    // example output:
    // [X X 0 1 2 3 4 5 X 6 7 8 9 10 11 12 13 14 15 16 17 18]
    // where X is null and the commas are removed for brevity

    // Create a mapping of each element's index and the value of the primary key.
    // At the same time, rewrite the primary key to be the index.
    let map = [];
    for (let i = 0; i < parent.length; i++)
    {
        map[parent[i][keyName]] = i; // this only works because repeats are never allowed. And because javascript.
        parent[i][keyName] = i;
    }

    // Use the mapping to update all tables that reference the parent table
    for (let child = 0; child < children.length; child++)
    {
        for (let index = 0; index < children[child].length; index++)
        {
            children[child][index][keyName] = map[children[child][index][keyName]];
        }
    }
}

// one downside to remap: it is harder to tell which building_id corresponds to the Ricks building.
// If this were a function that was called regularly, I would write code to get the building_id
// automatically based on the name, but the use case is so extremely specific that I don't care.
// (uncomment this to un-recognize the Ricks west entrance as a legitimate floor)
//firstFloorIsntReal(3, true);

remap(buildings, 'building_id', [copiers, microwaves, printers, rooms, vending_machines]);
remap(rooms, 'room_id', [copiers, microwaves, printers, vending_machines])
remap(copiers, 'copier_id');
remap(microwaves, 'microwave_id');
remap(printers, 'printer_id');
remap(vending_machines, 'vending_machine_id'); // this one will eventually have a child named vending_machine_has_items
//remap(items, 'item_id', ['vending_machine_has_items']); doesn't exist yet

const textBox = document.getElementById('output-text');
const microwave = microwaves[1];

// an example of the power of remap()
// you see that commented out for loop down there?
// do you see the single line of code below it?
// both of them do the same thing, but the second
// one only works because of remap()

// let building = buildings[0];
// for (let i = 0; i < buildings.length; i++)
// {
//     if (buildings[i].building_id === microwave.building_id)
//     {
//         building = buildings[i];
//         break;
//     }
// }
//const building = buildings[microwaves[i].building_id];
let room = rooms[0];
for (let i = 0; i < rooms.length; i++)
{
    if (rooms[i].room_id === microwave.room_id)
    {
        room = rooms[i];
        break;
    }
}

// textBox.innerHTML = `The microwave in the ${room.room_name.toLowerCase()} of the 
// ${building.building_name} can be found here: ${microwave.location_description}.`;

// Exports buildings to map.js for zoomed-out mode