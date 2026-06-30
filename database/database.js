// so it looks like there's no way to read a file with javascript without using Node, which makes testing
// difficult, but then I remembered I can just put the json directly in the javascript.
// I'll leave the json files in as separate files in case we want to read them in with Node instead.
export const buildings =  [{"building_id":2, "building_name":"STC", "latitude":43.81465, "longitude":-111.78466, "coordinates":"43\u00b048'52\"N 111\u00b047'4\"W"},
 {"building_id":3, "building_name":"Austin", "latitude":43.8158, "longitude":-111.78454, "coordinates":"43\u00b048'57\"N 111\u00b047'4\"W"},
 {"building_id":4, "building_name":"Benson", "latitude":43.81538, "longitude":-111.7832, "coordinates":"43\u00b048'55\"N 111\u00b046'59\"W"},
 {"building_id":5, "building_name":"Ricks", "latitude":43.81481, "longitude":-111.78141, "coordinates":"43\u00b048'53\"N 111\u00b046'53\"W"},
 {"building_id":6, "building_name":"Taylor", "latitude":43.81693, "longitude":-111.78252, "coordinates":"43\u00b049'1\"N 111\u00b046'57\"W"},
 {"building_id":7, "building_name":"MC", "latitude":43.81848, "longitude":-111.78254, "coordinates":"43\u00b049'07\"N 111\u00b046'57\"W"},
 {"building_id":9, "building_name":"I-Center", "latitude":43.81849, "longitude":-111.78504, "coordinates":"43\u00b049'07\"N 111\u00b047'06\"W"},
 {"building_id":10, "building_name":"McKay Library", "latitude":43.81933, "longitude":-111.78318, "coordinates":"43\u00b049'10\"N 111\u00b046'59\"W"},
 {"building_id":11, "building_name":"Hart", "latitude":43.8195, "longitude":-111.78457, "coordinates":"43\u00b049'10\"N 111\u00b047'04\"W"},
 {"building_id":12, "building_name":"Smith", "latitude":43.8192, "longitude":-111.78149, "coordinates":"43\u00b049'09\"N 111\u00b046'53\"W"},
 {"building_id":13, "building_name":"Clarke", "latitude":43.82019, "longitude":-111.78175, "coordinates":"43\u00b049'13\"N 111\u00b046'54\"W"},
 {"building_id":14, "building_name":"Spori", "latitude":43.82083, "longitude":-111.78243, "coordinates":"43\u00b049'15\"N 111\u00b046'57\"W"},
 {"building_id":15, "building_name":"Romney", "latitude":43.8202, "longitude":-111.78323, "coordinates":"43\u00b049'13\"N 111\u00b047'00\"W"},
 {"building_id":16, "building_name":"Snow", "latitude":43.82129, "longitude":-111.78382, "coordinates":"43\u00b049'17\"N 111\u00b047'02\"W"},
 {"building_id":17, "building_name":"Kimball", "latitude":43.8171, "longitude":-111.78157, "coordinates":"43\u00b049'02\"N 111\u00b046'54\"W"},
 {"building_id":18, "building_name":"Hinckley", "latitude":43.81584, "longitude":-111.7799, "coordinates":"43\u00b048'57\"N 111\u00b046'48\"W"},
 {"building_id":19, "building_name":"Rigby", "latitude":43.81703, "longitude":-111.78454, "coordinates":"43\u00b049'01\"N 111\u00b047'04\"W"},
 {"building_id":20, "building_name":"Biddulph", "latitude":43.81704, "longitude":-111.78518, "coordinates":"43\u00b049'01\"N 111\u00b047'07\"W"},
 {"building_id":21, "building_name":"Health Center", "latitude":43.81675, "longitude":-111.77938, "coordinates":"43\u00b049'00\"N 111\u00b046'46\"W"},
 {"building_id":22, "building_name":"ETC", "latitude":43.81411, "longitude":-111.78310, "coordinates":"43\u00b048'51\"N 111\u00b046'59\"W"}];
export const microwaves = [{"microwave_id":1, "location_description":"North side of main atrium, next to the vending machines.", "building_id":2, "room_id":6, "latitude":43.8145, "longitude":-111.78452},
 {"microwave_id":6, "location_description":"At the end of the hallway, near the entrance", "building_id":5, "room_id":7, "latitude":43.81513, "longitude":-111.78091},
 {"microwave_id":7, "location_description":"In the northwest corner, on a table next to the railing", "building_id":5, "room_id":12, "latitude":43.81489, "longitude":-111.78102},
 {"microwave_id":8, "location_description":"Unknown", "building_id":13, "room_id":0, "latitude":43.82015, "longitude":-111.78162},
 {"microwave_id":9, "location_description":"Unknown", "building_id":22, "room_id":0, "latitude":43.81411, "longitude":-111.78312},
 {"microwave_id":10, "location_description":"Unknown", "building_id":11, "room_id":0, "latitude":43.81947, "longitude":-111.78496}];
export const printers = [{"printer_id":5, "location_description":"Against the south wall", "building_id":5, "room_id":12, "latitude":43.81479, "longitude":-111.7808},
 {"printer_id":6, "location_description":"Along the south wall, near where the hallway opens into the atrium", "building_id":5, "room_id":8, "latitude":43.8148, "longitude":-111.78113},
 {"printer_id":7, "location_description":"Unknown", "building_id":6, "room_id":17, "latitude":43.81685, "longitude":-111.7825},
 {"printer_id":8, "location_description":"Unknown", "building_id":12, "room_id":0, "latitude":43.81917, "longitude":-111.78153},
 {"printer_id":9, "location_description":"Unknown", "building_id":12, "room_id":0, "latitude":43.81916, "longitude":-111.78155},
 {"printer_id":10, "location_description":"Unknown", "building_id":12, "room_id":0, "latitude":43.81916, "longitude":-111.78155},
 {"printer_id":11, "location_description":"Unknown", "building_id":12, "room_id":0, "latitude":43.819, "longitude":-111.78135},
 {"printer_id":12, "location_description":"Unknown", "building_id":13, "room_id":0, "latitude":43.82017, "longitude":-111.78158},
 {"printer_id":13, "location_description":"Unknown", "building_id":13, "room_id":0, "latitude":43.82021, "longitude":-111.78158},
 {"printer_id":14, "location_description":"Unknown", "building_id":13, "room_id":0, "latitude":43.82035, "longitude":-111.78165},
 {"printer_id":15, "location_description":"Unknown", "building_id":13, "room_id":0, "latitude":43.82038, "longitude":-111.7819},
 {"printer_id":16, "location_description":"Unknown", "building_id":13, "room_id":0, "latitude":43.82029, "longitude":-111.78202},
 {"printer_id":17, "location_description":"Unknown", "building_id":13, "room_id":0, "latitude":43.82008, "longitude":-111.78161},
 {"printer_id":18, "location_description":"Unknown", "building_id":13, "room_id":0, "latitude":43.82021, "longitude":-111.78187},
 {"printer_id":19, "location_description":"Unknown", "building_id":14, "room_id":0, "latitude":43.82085, "longitude":-111.78233},
 {"printer_id":20, "location_description":"Unknown", "building_id":11, "room_id":0, "latitude":43.81964, "longitude":-111.7843},
 {"printer_id":21, "location_description":"Unknown", "building_id":11, "room_id":0, "latitude":43.81947, "longitude":-111.78496},
 {"printer_id":22, "location_description":"Unknown", "building_id":7, "room_id":0, "latitude":43.81824, "longitude":-111.78226},
 {"printer_id":23, "location_description":"Unknown", "building_id":18, "room_id":0, "latitude":43.81581, "longitude":-111.78007},
 {"printer_id":24, "location_description":"Unknown", "building_id":18, "room_id":0, "latitude":43.8159, "longitude":-111.7797},
 {"printer_id":25, "location_description":"Unknown", "building_id":17, "room_id":0, "latitude":43.81707, "longitude":-111.78156},
 {"printer_id":26, "location_description":"Unknown", "building_id":4, "room_id":0, "latitude":43.81594, "longitude":-111.78324},
 {"printer_id":27, "location_description":"Unknown", "building_id":4, "room_id":0, "latitude":43.81526, "longitude":-111.78335},
 {"printer_id":28, "location_description":"Unknown", "building_id":4, "room_id":0, "latitude":43.81592, "longitude":-111.7828},
 {"printer_id":29, "location_description":"Unknown", "building_id":22, "room_id":0, "latitude":43.81411, "longitude":-111.78312}];
export const rooms = [{"room_id":6, "room_name":"Atrium", "building_id":2, "floor":2, "latitude":43.8145, "longitude":-111.78452},
 {"room_id":7, "room_name":"North Hallway", "building_id":5, "floor":2, "latitude":43.81513, "longitude":-111.78091},
 {"room_id":8, "room_name":"West Hallway", "building_id":5, "floor":2, "latitude":0.0, "longitude":0.0},
 {"room_id":9, "room_name":"North Hallway", "building_id":5, "floor":3, "latitude":0.0, "longitude":0.0},
 {"room_id":10, "room_name":"West Hallway", "building_id":5, "floor":3, "latitude":0.0, "longitude":0.0},
 {"room_id":11, "room_name":"Entrance", "building_id":5, "floor":1, "latitude":0.0, "longitude":0.0},
 {"room_id":12, "room_name":"Lounge", "building_id":5, "floor":3, "latitude":0.0, "longitude":0.0},
 {"room_id":13, "room_name":"230", "building_id":15, "floor":2, "latitude":0.0, "longitude":0.0},
 {"room_id":14, "room_name":"201", "building_id":4, "floor":2, "latitude":0.0, "longitude":0.0},
 {"room_id":15, "room_name":"145", "building_id":13, "floor":1, "latitude":0.0, "longitude":0.0},
 {"room_id":16, "room_name":"254", "building_id":11, "floor":2, "latitude":0.0, "longitude":0.0},
 {"room_id":17, "room_name":"Unknown", "building_id":6, "floor":1, "latitude":0.0, "longitude":0.0},
 {"room_id":18, "room_name":"320A", "building_id":2, "floor":3, "latitude":43.81452, "longitude":-111.78471},
 {"room_id":19, "room_name":"367", "building_id":2, "floor":3, "latitude":43.8148, "longitude":-111.7846}];
export const vending_machines = [{"vending_machine_id":6, "vendor":"7 Up", "location_description":"North corner", "building_id":5, "room_id":12, "latitude":43.81481, "longitude":-111.78098},
 {"vending_machine_id":7, "vendor":"Good to Go", "location_description":"At the end of the hallway, near the entrance", "building_id":5, "room_id":7, "latitude":43.81512, "longitude":-111.78091},
 {"vending_machine_id":8, "vendor":"7 Up", "location_description":"At the end of the hallway, near the entrance", "building_id":5, "room_id":7, "latitude":43.81513, "longitude":-111.78091},
 {"vending_machine_id":9, "vendor":"Crossroads (Snacks)", "location_description":"At the end of the hallway, near the entrance", "building_id":5, "room_id":7, "latitude":43.81514, "longitude":-111.78091},
 {"vending_machine_id":10, "vendor":"7 Up", "location_description":"Unknown", "building_id":6, "room_id":17, "latitude":43.81675, "longitude":-111.78247},
 {"vending_machine_id":11, "vendor":"Crossroads (Snacks)", "location_description":"Unknown", "building_id":6, "room_id":17, "latitude":43.81675, "longitude":-111.78247},
 {"vending_machine_id":12, "vendor":"Pepsi", "location_description":"Unknown", "building_id":6, "room_id":17, "latitude":43.81685, "longitude":-111.7825},
 {"vending_machine_id":13, "vendor":"", "location_description":"Unknown", "building_id":4, "room_id":0, "latitude":43.81557, "longitude":-111.78328},
 {"vending_machine_id":14, "vendor":"", "location_description":"Unknown", "building_id":4, "room_id":0, "latitude":43.81594, "longitude":-111.78324},
 {"vending_machine_id":15, "vendor":"", "location_description":"Unknown", "building_id":13, "room_id":0, "latitude":43.82037, "longitude":-111.78195},
 {"vending_machine_id":16, "vendor":"", "location_description":"Unknown", "building_id":13, "room_id":0, "latitude":43.82039, "longitude":-111.78201},
 {"vending_machine_id":17, "vendor":"", "location_description":"Unknown", "building_id":22, "room_id":0, "latitude":43.81411, "longitude":-111.78312},
 {"vending_machine_id":18, "vendor":"", "location_description":"Unknown", "building_id":17, "room_id":0, "latitude":43.81697, "longitude":-111.78136},
 {"vending_machine_id":19, "vendor":"", "location_description":"Unknown", "building_id":11, "room_id":0, "latitude":43.81947, "longitude":-111.78496},
 {"vending_machine_id":20, "vendor":"", "location_description":"Unknown", "building_id":11, "room_id":0, "latitude":43.81987, "longitude":-111.78584},
 {"vending_machine_id":21, "vendor":"", "location_description":"Unknown", "building_id":12, "room_id":0, "latitude":43.81921, "longitude":-111.7817},
 {"vending_machine_id":22, "vendor":"", "location_description":"Unknown", "building_id":14, "room_id":0, "latitude":43.82087, "longitude":-111.78233}];
 let vending_machine_has_items = [{"vending_machine_id":9, "item_id":6, "slot":"101"},
 {"vending_machine_id":9, "item_id":7, "slot":"103"},
 {"vending_machine_id":9, "item_id":8, "slot":"105"},
 {"vending_machine_id":9, "item_id":9, "slot":"107"},
 {"vending_machine_id":9, "item_id":10, "slot":"201"},
 {"vending_machine_id":9, "item_id":11, "slot":"203"},
 {"vending_machine_id":9, "item_id":12, "slot":"205"},
 {"vending_machine_id":9, "item_id":13, "slot":"207"},
 {"vending_machine_id":9, "item_id":14, "slot":"301"},
 {"vending_machine_id":9, "item_id":15, "slot":"303"},
 {"vending_machine_id":9, "item_id":16, "slot":"305"},
 {"vending_machine_id":9, "item_id":17, "slot":"307"},
 {"vending_machine_id":9, "item_id":18, "slot":"401"},
 {"vending_machine_id":9, "item_id":19, "slot":"402"},
 {"vending_machine_id":9, "item_id":20, "slot":"403"},
 {"vending_machine_id":9, "item_id":21, "slot":"404"},
 {"vending_machine_id":9, "item_id":22, "slot":"406"},
 {"vending_machine_id":9, "item_id":23, "slot":"408"},
 {"vending_machine_id":9, "item_id":24, "slot":"501"},
 {"vending_machine_id":9, "item_id":25, "slot":"502"},
 {"vending_machine_id":9, "item_id":26, "slot":"503"},
 {"vending_machine_id":9, "item_id":27, "slot":"504"},
 {"vending_machine_id":9, "item_id":28, "slot":"506"},
 {"vending_machine_id":9, "item_id":29, "slot":"507"},
 {"vending_machine_id":9, "item_id":30, "slot":"601"},
 {"vending_machine_id":9, "item_id":31, "slot":"603"},
 {"vending_machine_id":9, "item_id":32, "slot":"605"},
 {"vending_machine_id":9, "item_id":33, "slot":"607"}];
 let items = [{"item_id":37, "item_name":"BBQ Chicken Wrap", "price":6.29},
 {"item_id":41, "item_name":"Breakfast Burrito", "price":4.19},
 {"item_id":42, "item_name":"Brownie Bites", "price":2.19},
 {"item_id":6, "item_name":"Cheeto's - Crunchy Flamin' Hot", "price":0.0},
 {"item_id":9, "item_name":"Cheeze-It - Original", "price":0.0},
 {"item_id":34, "item_name":"Chocolate Milk", "price":2.74},
 {"item_id":38, "item_name":"Chocolate Muffin", "price":1.89},
 {"item_id":45, "item_name":"Cinnamon Roll", "price":2.19},
 {"item_id":23, "item_name":"Clif Bar - Chocolate Chip", "price":0.0},
 {"item_id":40, "item_name":"Cookies 'n' Cream Milk", "price":2.74},
 {"item_id":21, "item_name":"Cosmic Brownies", "price":0.0},
 {"item_id":12, "item_name":"Doritos - Cool Ranch", "price":0.0},
 {"item_id":46, "item_name":"Eclair", "price":1.99},
 {"item_id":32, "item_name":"Famous Amos Cookies", "price":0.0},
 {"item_id":15, "item_name":"Fruit Snacks", "price":0.0},
 {"item_id":33, "item_name":"Gardetto's Snack Mix", "price":0.0},
 {"item_id":22, "item_name":"Gatorade Protein Bar", "price":0.0},
 {"item_id":16, "item_name":"Honey Bun", "price":0.0},
 {"item_id":43, "item_name":"Honey Ginger Chicken Sandwich", "price":5.99},
 {"item_id":36, "item_name":"Italiano Sandwich", "price":6.29},
 {"item_id":11, "item_name":"Lay's - BBQ", "price":0.0},
 {"item_id":24, "item_name":"M&Ms - Peanut", "price":0.0},
 {"item_id":25, "item_name":"M&Ms - Peanut Butter", "price":0.0},
 {"item_id":20, "item_name":"Mamba", "price":0.0},
 {"item_id":26, "item_name":"Milky Way", "price":0.0},
 {"item_id":8, "item_name":"Miss Vickie's - Sea Salt and Vinegar", "price":0.0},
 {"item_id":13, "item_name":"Munchies - Cheese Fix", "price":0.0},
 {"item_id":17, "item_name":"Nutty Buddy", "price":0.0},
 {"item_id":14, "item_name":"Oatmeal Creme Pies", "price":0.0},
 {"item_id":30, "item_name":"Pop Tarts - Brown Sugar Cinnamon", "price":0.0},
 {"item_id":31, "item_name":"Pop Tarts - Strawberry", "price":0.0},
 {"item_id":39, "item_name":"Roast Beef & Cheddar Sandwich", "price":5.99},
 {"item_id":7, "item_name":"Ruffles - Cheddar and Sour Cream", "price":0.0},
 {"item_id":18, "item_name":"Skittles - Wild Berry", "price":0.0},
 {"item_id":28, "item_name":"Snickers", "price":0.0},
 {"item_id":19, "item_name":"Sour Patch Kids - Watermelon", "price":0.0},
 {"item_id":10, "item_name":"Sun Chips - Garden Salsa", "price":0.0},
 {"item_id":27, "item_name":"Take 5", "price":0.0},
 {"item_id":44, "item_name":"Turkey Bacon Sandwich", "price":6.69},
 {"item_id":29, "item_name":"Twix", "price":0.0}];
 let reviews = [/*{"review_id":0, table:"microwaves", table_index:9, "review_text":"Example review", stars:5}*/];

function addReview(reviewTable, reviewTableIndex, reviewStars, reviewText = "")
{
    reviews.push({"item_id":reviews.length, "table":reviewTable, "table_index":reviewTableIndex, "stars":reviewStars});
    // a bug! this should be >0! 
    // ...is what I would say, if I thought that a review that is just the letter h deserved to be recorded
    if (reviewText.length > 1)
    {
        reviews[reviews.length - 1].review_text = reviewText;
    }
}

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
    // buildings, 'building_id', [microwaves, printers, rooms, vending_machines]
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

function assignDefaultCoordinates(table)
{
    for (let i = 0; i < table.length; i++)
    {
        // I can't fathom a situation in which a room would have 
        // one but not the other, but better safe than sorry.
        if (table[i].latitude === 0.0 || table[i].longitude === 0.0)
        {
            table[i].latitude  = buildings[table[i].building_id].latitude;
            table[i].longitude = buildings[table[i].building_id].longitude;
        }
    }
}

// one downside to remap: it is harder to tell which building_id corresponds to the Ricks building.
// If this were a function that was called regularly, I would write code to get the building_id
// automatically based on the name, but the use case is so extremely specific that I don't care.
// (uncomment this to un-recognize the Ricks west entrance as a legitimate floor)
//firstFloorIsntReal(3, true);

remap(buildings, 'building_id', [/*copiers, */microwaves, printers, rooms, vending_machines]);
remap(rooms, 'room_id', [/*copiers, */microwaves, printers, vending_machines])
//remap(copiers, 'copier_id');
remap(microwaves, 'microwave_id');
remap(printers, 'printer_id');
remap(vending_machines, 'vending_machine_id', [vending_machine_has_items]);
remap(items, 'item_id', [vending_machine_has_items]);
// vending_machine_has_items does not have a primary key of its own, so it will get cleaned up by the two statements above.

// cleanup pt2: check all tables with coordinates for a latitude or longitude of 0 degrees,
// and substitute the coordinates of the building so we don't have a pile of objects at Null Island.
// This will still produce piles of objects at the centers of buildings, however.
// Currently, only the rooms table has data with missing coordinates, and since I don't have nearly enough
// rooms in my database to be of use to us, this is just future-proofing.
[microwaves, printers, vending_machines, rooms].forEach((table) => assignDefaultCoordinates(table));

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