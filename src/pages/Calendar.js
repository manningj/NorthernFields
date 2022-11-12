import styled from "@emotion/styled";
import React from "react";
 
let CalendarPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding: 1%;
justify-content: space-evenly;
& p {
  font-size: 1.5em;
}` 
 
let Month = styled.div`
    font-size: 1.5em;
    padding: 1%
`;

function Calendar() {

return <CalendarPage>
<list>
    <Month>November</Month>
    <li>    8th- Craft Hall</li>
    <li>    9th- Fight Practice</li>
    <li>    10th- Online Movie Night</li>
    <li>    12th- Fanquest </li>
    <li>    13th- Fanquest</li>
    <li>    15th- Craft Hall</li>
    <li>    16th- Fight Practice</li>
    <li>    17th- Online Movie Night</li>
    <li>    20th- Regular Park Day</li>
    <li>    23rd- Fight Practice </li>
    <li>    24th- Online Movie Night</li>
    <li>    27th- Quest Day</li>
    <li>    29th- Craft Hall</li>
    <li>    30th- Fight Practice</li>
<Month>December</Month>
    <li>    1st- Online Movie Night</li>
    <li>    4th- Regular Park Day</li>
    <li>    6th- Craft Hall</li>
    <li>    7th- Fight Practice</li>
    <li>    8th- Online Movie Night</li>
    <li>    11th- Christmas tournament</li>
    <li>    14th- Fight Practice</li>
    <li>    15th- Online Movie Night</li>
    <li>    18th- Christmas Quest </li>
    <li>    20th- Craft Hall</li>
    <li>    21st- Fight Practice</li>
    <li>    22nd- Online Movie Night</li>
    <li>    28th- Fight Practice  </li>
    <Month>January </Month>
    <li>    1st- No Park</li>
    <li>    4th- Fight Practice</li>
    <li>    5th- Online Movie Night</li>
    <li>    8th- Regular Park Day</li>
    <li>    11th- Fight Practice</li>
    <li>    12th- Online Movie Night</li>
    <li>    15th- Regular Park Day</li>
    <li>    17th- Craft Hall</li>
    <li>    18th- Fight Practice</li>
    <li>    19th- Online Movie Night</li>
    <li>    22nd- Regular Park Day</li>
    <li>    24th- Craft hall</li>
    <li>    25th- Fight Practice</li>
    <li>    26th- Online Movie Night</li>
    <li>    29th- Quest Day</li>
    <Month>February</Month>
    <li>    1st- Fight Practice </li>
    <li>    2nd- Online Movie Night</li>
    <li>    5th- Midreign (Location to be determined)</li>
    <li>        -Dragon Master (Northern Fields Pride) </li>
    <li>        -Weapon Master</li>
    <li>        -Awards</li>
    <li>    7th- Craft Hall</li>
    <li>    8th- Fight Practice</li>
    <li>    9th- Online Movie Night</li>
    <li>    12th- Regular Park Day</li>
    <li>    14th- Craft Hall</li>
    <li>    15th- Fight Practice</li>
    <li>    16th- Online Movie Night</li>
    <li>    19th- Regular Park Day</li>
    <li>    22nd- Fight Practice</li>
    <li>    23rd- Online Movie Night</li>
    <li>    26th- Quest Day</li>
    <li>    28th- Craft Hall</li>
    <Month>March </Month>
    <li>    1st- Fight Practice</li>
    <li>    2nd- Online Movie Night</li>
    <li>    5th-Sir Corwyn’s & Ezira Birthday Bash</li>
    <li>    7th- Craft Hall</li>
    <li>    8th- Fight Practice</li>
    <li>    9th- Online Movie Night </li>
    <li>    12th- Regular Park Day</li>
    <li>    14th- Craft Hall</li>
    <li>    15th- Fight Practice</li>
    <li>    16th- Online Movie Night</li>
    <li>    19th- Regular Park Day</li>
    <li>    22nd- Fight Practice</li>
    <li>    23rd- Online Movie Night</li>
    <li>    26th- Quest Day</li>
    <li>    28th- Craft Hall</li>
    <li>    29th- Fight Practice</li>
    <li>    30th- Online Movie Night</li>
    <Month>April</Month>
    <li>    2nd- Regular Park Day</li>
    <li>    4th- Craft Hall</li>
    <li>    5th- Fight Practice</li>
    <li>    6th- Online Movie Night </li>
    <li>    9th- Battle Master (Tournament)</li>
    <li>    11th- Craft Hall</li>
    <li>    12th- Fight Practice </li>
    <li>    13th- Online Movie Night</li>
    <li>    15th- End Reign!!!!</li>
    <li>        -Potluck Feast</li>
    <li>        -Awards</li>
    <li>        -Coronation </li>
    This Schedule is subject to change.
</list>

</CalendarPage>
}
export default Calendar;