// so it looks like there's no way to read a file with javascript without using Node, which makes testing
// difficult, but then I remembered I can just put the json directly in the javascript.
// I'll leave the json files in as separate files in case we want to read them in with Node instead.
const microwaves = [{"microwave_id":1, "location_description":"North side of main atrium, next to the vending machines.", "building_id":2, "room_id":6},
{"microwave_id":6, "location_description":"At the end of the hallway, near the entrance", "building_id":5, "room_id":7}];
const buildings = [{"building_id":2, "building_name":"STC", "latitude":43.81465, "longitude":-111.78466, "coordinates":"43\u00b048'52\"N 111\u00b047'4\"W"},
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
const rooms = [{"room_id":6, "room_name":"Atrium", "building_id":2, "floor":2},
{"room_id":7, "room_name":"North Hallway", "building_id":5, "floor":2},
{"room_id":8, "room_name":"West Hallway", "building_id":5, "floor":2},
{"room_id":9, "room_name":"North Hallway", "building_id":5, "floor":3},
{"room_id":10, "room_name":"West Hallway", "building_id":5, "floor":3},
{"room_id":11, "room_name":"Entrance", "building_id":5, "floor":1},
{"room_id":12, "room_name":"Lounge", "building_id":5, "floor":3},
{"room_id":13, "room_name":"230", "building_id":15, "floor":2},
{"room_id":14, "room_name":"201", "building_id":4, "floor":2},
{"room_id":15, "room_name":"145", "building_id":13, "floor":1},
{"room_id":16, "room_name":"254", "building_id":11, "floor":2}];


const textBox = document.getElementById('output-text');
const microwave = microwaves[1];
let building = buildings[0];
for (let i = 0; i < buildings.length; i++)
{
    if (buildings[i].building_id = microwave.building_id)
    {
        building = buildings[i];
        break;
    }
}
let room = rooms[0];
for (let i = 0; i < rooms.length; i++)
{
    if (rooms[i].room_id = microwave.room_id)
    {
        room = rooms[i];
        break;
    }
}
textBox.innerHTML = `The microwave in the ${room.room_name.toLowerCase()} of the 
${building.building_name} can be found here: ${microwave.location_description}.`;