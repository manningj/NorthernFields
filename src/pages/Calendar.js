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
Please Note! Outdoor Park Days will be canceled and an online event held instead on our discord in the event of forecast (with windchill) being colder than -25c.

<list>
    
<Month>November </Month>
<li>5 - End Reign - PM Declarations Start</li>
<li>7 - Craft Hall</li>
<li>12 - Park Day</li>
<li>19 - Park Day - PM Declarations Close</li>
<li>21 - Craft Hall</li>
<li>26 - Park Day - Playtest V9 Day</li>

<Month>December</Month>
<li>3 - Park Day - PM Elections Start</li>
<li>5 - Craft Hall</li>
<li>10 - Park Day</li>
<li>17 - Park Day - PM Elections Close</li>
<li>19 - Christmas Craft Hall</li>
<li>24 - Christmas Eve Discord VC</li>
<li>31 - Park Day - Playtest V9 Day</li>

<Month>January</Month>
<li>7 - Park Day</li>
<li>9 - Craft Hall</li>
<li>14 - Park Day</li>
<li>21 - Park Day - Location 448 Burnell St</li>
<li>23 - Craft Hall</li>
<li>28 - Park Day - Playtest V9 Day</li>

<Month>February</Month>
<li>4 - Park Day - Battle Master</li>
<li>6 - Craft Hall</li>
<li>11 - Park Day (Mid Reign) Weapon/Dragon Masters - Location 448 Burnell St</li>
<li>18 - Park Day</li>
<li>20 - Craft Hall</li>
<li>25 - Park Day - Playtest V9 Day</li>

<Month>March</Month>
<li>3 - Park Day - Election Declaration Start</li>
<li>5 - Craft Hall</li>
<li>10 - Park Day</li>
<li>17 - Park Day</li>
<li>19 - Craft Hall</li>
<li>24 - Park Day - Election Declaration End</li>
<li>31 - Park Day - Playtest V9 Day</li>

<Month>April</Month>
<li>7 - Park Day - Election Start</li>
<li>9 - Craft Hall</li>
<li>14 - Park Day</li>
<li>21 - Park Day - Election End</li>
<li>23 - Craft Hall</li>
<li>28 - Park Day - Playtest V9 Day</li>

<Month>May</Month>
<li>5 - Park Day</li>
<li>12 - Park Day - Playtest V9 Day</li>
<li>18 - End Reign - Feast (Star Wars theme) - Location 448 Burnell St</li>
<li>19 - Park Day</li>

</list>
This Schedule is subject to change.
</CalendarPage>
}
export default Calendar;