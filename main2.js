(function () {
    const template = document.createElement('template')
    template.innerHTML = `
    <body>
    <div id="main" style="width: 650px; height: 400px;">
  <div class="row" id="Tile" style="width: 99%; height: 85%;">
    <div id="Column3" style="padding: 0px 0px 0px 0px">
      <div class="month">
        <ul>
          <li id="NextButton" class="next">&#10095;</li>
          <li id="nextbuttonText" style="font-size:18px">2024</li>
        </ul>
      </div>

      <div class="grid-container">
      <!-- Example for January -->
      <div class="grid-item-monthitem">January</div>
      <div id="buttonRight_1" class="grid-item week">1</div>
      <div id="buttonRight_2" class="grid-item week">2</div>
      <div id="buttonRight_3" class="grid-item week">3</div>
      <div id="buttonRight_4" class="grid-item week">4</div>
      <div id="buttonRight_5" class="grid-item week"></div>
      <!-- Add more weeks for January -->

      <!-- Example for February -->
      <div class="grid-item-monthitem">February</div>
      <div id="buttonRight_6" class="grid-item week">5</div>
      <div id="buttonRight_7" class="grid-item week">6</div>
      <div id="buttonRight_8" class="grid-item week">7</div>
      <div id="buttonRight_9" class="grid-item week">8</div>
      <div id="buttonRight_10" class="grid-item week">9</div>

      <!-- Example for February -->
      <div class="grid-item-monthitem">March</div>
      <div id="buttonRight_11" class="grid-item week">10</div>
      <div id="buttonRight_12" class="grid-item week">11</div>
      <div id="buttonRight_13" class="grid-item week">12</div>
      <div id="buttonRight_14" class="grid-item week">13</div>
      <div id="buttonRight_15" class="grid-item week"></div>

      <!-- Example for april -->
      <div class="grid-item-monthitem">April</div>
      <div id="buttonRight_16" class="grid-item week">14</div>
      <div id="buttonRight_17" class="grid-item week">15</div>
      <div id="buttonRight_18" class="grid-item week">16</div>
      <div id="buttonRight_19" class="grid-item week">17</div>
      <div id="buttonRight_20" class="grid-item week"></div>

      <!-- Example for May -->
      <div class="grid-item-monthitem">May</div>
      <div id="buttonRight_21" class="grid-item week">18</div>
      <div id="buttonRight_22" class="grid-item week">19</div>
      <div id="buttonRight_23" class="grid-item week">20</div>
      <div id="buttonRight_24" class="grid-item week">21</div>
      <div id="buttonRight_25" class="grid-item week">22</div>

      <!-- Example for June -->
      <div class="grid-item-monthitem">June</div>
      <div id="buttonRight_26" class="grid-item week">23</div>
      <div id="buttonRight_27" class="grid-item week">24</div>
      <div id="buttonRight_28" class="grid-item week">25</div>
      <div id="buttonRight_29" class="grid-item week">26</div>
      <div id="buttonRight_30" class="grid-item week"></div>

      <!-- Example for July-->
      <div class="grid-item-monthitem">July</div>
      <div id="buttonRight_31" class="grid-item week">27</div>
      <div id="buttonRight_32" class="grid-item week">28</div>
      <div id="buttonRight_33" class="grid-item week">29</div>
      <div id="buttonRight_34" class="grid-item week">30</div>
      <div id="buttonRight_35" class="grid-item week"></div>

      <!-- Example for August-->
      <div class="grid-item-monthitem">August</div>
      <div id="buttonRight_36" class="grid-item week">31</div>
      <div id="buttonRight_37" class="grid-item week">32</div>
      <div id="buttonRight_38" class="grid-item week">33</div>
      <div id="buttonRight_39" class="grid-item week">34</div>
      <div id="buttonRight_40" class="grid-item week">35</div>

      <!-- Example for September-->
      <div class="grid-item-monthitem">September</div>
      <div id="buttonRight_41" class="grid-item week">36</div>
      <div id="buttonRight_42" class="grid-item week">37</div>
      <div id="buttonRight_43" class="grid-item week">38</div>
      <div id="buttonRight_44" class="grid-item week">39</div>
      <div id="buttonRight_45" class="grid-item week"></div>

      <!-- Example for October-->
      <div class="grid-item-monthitem">October</div>
      <div id="buttonRight_46" class="grid-item week">40</div>
      <div id="buttonRight_47" class="grid-item week">41</div>
      <div id="buttonRight_48" class="grid-item week">42</div>
      <div id="buttonRight_49" class="grid-item week">43</div>
      <div id="buttonRight_50" class="grid-item week"></div>

      <!-- Example for November-->
      <div class="grid-item-monthitem">November</div>
      <div id="buttonRight_51" class="grid-item week">44</div>
      <div id="buttonRight_52" class="grid-item week">45</div>
      <div id="buttonRight_53" class="grid-item week">46</div>
      <div id="buttonRight_54" class="grid-item week">47</div>
      <div id="buttonRight_55" class="grid-item week">48</div>

      <!-- Example for December-->
      <div class="grid-item-monthitem">December</div>
      <div id="buttonRight_56" class="grid-item week">49</div>
      <div id="buttonRight_57" class="grid-item week">50</div>
      <div id="buttonRight_58" class="grid-item week">51</div>
      <div id="buttonRight_59" class="grid-item week">52</div>
      <div id="buttonRight_60" class="grid-item week"></div>
      </div>
    </div>

    <div id="Column2">
      <div class="month">
        <ul>
          <li id="PreviousButton" class="prev">&#10094;</li>
          <li id="PreviousButtonText" style="font-size:18px">2023</span></li>
        </ul>
      </div>
   <div class="grid-container">
        <!-- Example for January -->
        <div class="grid-item-monthitem">January</div>
        <div id="buttonLeft_1" class="grid-item week">1</div>
        <div id="buttonLeft_2" class="grid-item week">2</div>
        <div id="buttonLeft_3" class="grid-item week">3</div>
        <div id="buttonLeft_4" class="grid-item week">4</div>
        <div id="buttonLeft_5" class="grid-item week"></div>
        <!-- Add more weeks for January -->

        <!-- Example for February -->
        <div class="grid-item-monthitem">February</div>
        <div id="buttonLeft_6" class="grid-item week">5</div>
        <div id="buttonLeft_7" class="grid-item week">6</div>
        <div id="buttonLeft_8" class="grid-item week">7</div>
        <div id="buttonLeft_9" class="grid-item week">8</div>
        <div id="buttonLeft_10" class="grid-item week">9</div>

        <!-- Example for February -->
        <div class="grid-item-monthitem">March</div>
        <div id="buttonLeft_11" class="grid-item week">10</div>
        <div id="buttonLeft_12" class="grid-item week">11</div>
        <div id="buttonLeft_13" class="grid-item week">12</div>
        <div id="buttonLeft_14" class="grid-item week">13</div>
        <div id="buttonLeft_15" class="grid-item week"></div>

        <!-- Example for april -->
        <div class="grid-item-monthitem">April</div>
        <div id="buttonLeft_16" class="grid-item week">14</div>
        <div id="buttonLeft_17" class="grid-item week">15</div>
        <div id="buttonLeft_18" class="grid-item week">16</div>
        <div id="buttonLeft_19" class="grid-item week">17</div>
        <div id="buttonLeft_20" class="grid-item week"></div>

        <!-- Example for May -->
        <div class="grid-item-monthitem">May</div>
        <div id="buttonLeft_21" class="grid-item week">18</div>
        <div id="buttonLeft_22" class="grid-item week">19</div>
        <div id="buttonLeft_23" class="grid-item week">20</div>
        <div id="buttonLeft_24" class="grid-item week">21</div>
        <div id="buttonLeft_25" class="grid-item week">22</div>

        <!-- Example for June -->
        <div class="grid-item-monthitem">June</div>
        <div id="buttonLeft_26" class="grid-item week">23</div>
        <div id="buttonLeft_27" class="grid-item week">24</div>
        <div id="buttonLeft_28" class="grid-item week">25</div>
        <div id="buttonLeft_29" class="grid-item week">26</div>
        <div id="buttonLeft_30" class="grid-item week"></div>

        <!-- Example for July-->
        <div class="grid-item-monthitem">July</div>
        <div id="buttonLeft_31" class="grid-item week">27</div>
        <div id="buttonLeft_32" class="grid-item week">28</div>
        <div id="buttonLeft_33" class="grid-item week">29</div>
        <div id="buttonLeft_34" class="grid-item week">30</div>
        <div id="buttonLeft_35" class="grid-item week"></div>

        <!-- Example for August-->
        <div class="grid-item-monthitem">August</div>
        <div id="buttonLeft_36" class="grid-item week">31</div>
        <div id="buttonLeft_37" class="grid-item week">32</div>
        <div id="buttonLeft_38" class="grid-item week">33</div>
        <div id="buttonLeft_39" class="grid-item week">34</div>
        <div id="buttonLeft_40" class="grid-item week">35</div>

        <!-- Example for September-->
        <div class="grid-item-monthitem">September</div>
        <div id="buttonLeft_41" class="grid-item week">36</div>
        <div id="buttonLeft_42" class="grid-item week">37</div>
        <div id="buttonLeft_43" class="grid-item week">38</div>
        <div id="buttonLeft_44" class="grid-item week">39</div>
        <div id="buttonLeft_45" class="grid-item week"></div>

        <!-- Example for October-->
        <div class="grid-item-monthitem">October</div>
        <div id="buttonLeft_46" class="grid-item week">40</div>
        <div id="buttonLeft_47" class="grid-item week">41</div>
        <div id="buttonLeft_48" class="grid-item week">42</div>
        <div id="buttonLeft_49" class="grid-item week">43</div>
        <div id="buttonLeft_50" class="grid-item week"></div>

        <!-- Example for November-->
        <div class="grid-item-monthitem">November</div>
        <div id="buttonLeft_51" class="grid-item week">44</div>
        <div id="buttonLeft_52" class="grid-item week">45</div>
        <div id="buttonLeft_53" class="grid-item week">46</div>
        <div id="buttonLeft_54" class="grid-item week">47</div>
        <div id="buttonLeft_55" class="grid-item week">48</div>

        <!-- Example for December-->
        <div class="grid-item-monthitem">December</div>
        <div id="buttonLeft_56" class="grid-item week">49</div>
        <div id="buttonLeft_57" class="grid-item week">50</div>
        <div id="buttonLeft_58" class="grid-item week">51</div>
        <div id="buttonLeft_59" class="grid-item week">52</div>
        <div id="buttonLeft_60" class="grid-item week"></div>
      </div>
      
    </div>

    <div id="Column4">
      <div class="buttonrow" style="width: 99%; height: 15%;">
        <div id="options"><b>Options</b></div>
        <div id="YTDButton" class="button">YTD</div>
        <div id="DETButton" class="button">Detail</div>
        <div id="MATButton" class="button">MAT</div>
        <div id="QTDButton" class="button">QTD</div>
        <div id="MQTButton" class="button">MQT</div>
        <div id="WeekButton" class="button">PTD</div>
      </div>
    </div>
  </div>
<div id="TileBottom" style="width: 99%; height: 10%;"> 
<div id="reset"><button id="ResetButton"class="button-22" role="button">Reset</button></div>

  <div id="displayDates" class="date-range-box">
  <div class="date-input">
  <input type="text" id="fromDate" placeholder="From Date" readonly>
  <span class="calendar-icon">&#128197;</span>
</div>
<span class="dash-icon">&#8211;</span>
<div class="date-input">
  <input type="text" id="toDate" placeholder="To Date" readonly>
  <span class="calendar-icon">&#128197;</span>
</div>
</div> 
  <div id="Apply"><button id="ApplyButton">Apply</button></div>
</div>
<div class="date-input" id="gdisplaytext">Select Dates...</div>
</div>



</div>
</body>


      
  
<style>

.date-range-box {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 0px;
  width: 195px;
  margin: 20px auto;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
}

.dash-icon {
  margin: 0 10px; /* Adjust spacing between the date inputs */
}

.date-input {
  position: relative;
}

.date-input input[type="text"] {
  width: 130px; /* Adjust width as needed */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.date-input .calendar-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  cursor: pointer;
}

/* Additional styles for the calendar icon */
.date-input .calendar-icon:before {
  content: "";
}




    /*style for Apply button*/
    #ApplyButton{
      background-color: #046d9e;
      Color: white;
      visibility: hidden;
    }

    #displayDates{
      text-align: center;
      flex: 1;
      font-weight: bold;
    }

    #ApplyButton, #ResetButton{
      margin-left: 20px;
      text-align: center;
      margin-right: 20px;
      justify-content: center;
      text-align: center;
      width: 100%;
      padding: 8px;
      border-radius: 5px;
    }

    #options{
      /* padding: 3% 10%; */
      text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    }

    .button:hover {
      background-color: rgba(52, 152, 219, 0.5); /* Transparent blue color */
    }

    .button
    {
      display: flex;
      text-align: center;
      margin: auto;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 94%;
      background-color: white;
      font-weight: normal;
    }
/* CSS */
.button-22 {
  align-items: center;
  appearance: button;
  background-color: #046d9e;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  font-family: "RM Neue",sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 5px 20px;
  text-align: center;
  text-transform: none;
  transition: color .13s ease-in-out,background .13s ease-in-out,opacity .13s ease-in-out,box-shadow .13s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-22:active {
  background-color: #006AE8;
}

.button-22:hover {
  background-color: #1C84FF;
}
    .button.active
    {
    background-color: #046d9e;
    color: white;
    }
   

    #buttonrow
    {
    width:100%;
    height: 15%;
    text-align: center;
    }

    #Tile {
      border-style: solid;
      border-radius: 3px;
      border: 1px solid black;
  }

  #TileBottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-style: solid; */
    background-color: #ffffff;
    /* border-radius: 3px; */
    /* border: 1px solid black; */
    bottom: 0;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;
}

  #Column2 {
      align-items: center;
      border-left: 1px solid #FF0000;
      float: right;
      text-align: center;
      width: 41%;
      height: 100%;
      border-color: black;
      background-color: white !important;
      
  }
   #Column3 {
      float: right;
      border-left: 1px solid #FF0000;
      width: 41%;
      height: 100%;
      border-color: black;
      background-color: white !important;
      
  }

  #Column4 {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-color: black;
    background-color: white !important;
    
}


    ul {list-style-type: none;}
body {font-family: Verdana, sans-serif;}

/* Month header */
.month {
  /* padding: 20px 40px;*/
  width: 100%;
  height: 15%;
  background: #046d9e;
  text-align: center;
}

/* Month list */
.month ul {
  margin: 0;
  padding: 0;
}

.month ul li {
  color: white;
    display: flex;
    font-size: 25px !important;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    justify-content: center;
    letter-spacing: 3px;
    padding-top: 5%;
}

/* Previous button inside month header */
.month .prev {
  float: left;
  padding-left: 20%;
  padding-top: 3%;
}

/* Next button */
.month .next {
  float: right;
  padding-right: 20%;
  padding-top: 3%;
}

/* Days (1-31) */
.months {
    background: #fff;
    height: 75%;
    margin: 5%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}

.monthsdiv {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 25%;
  text-align: center;
  margin-bottom: 2px;
  font-weight: bold;
  font-size:14px;
  color: #777;
  --x-px: calc(var(--x) * 1px);
  --y-px: calc(var(--y) * 1px);
}

.week:hover {
  background-color: rgba(52, 152, 219, 0.5); /* Transparent blue color */
}

/* Highlight the "current" day */
.grid-item week.active {
  background-color: blue !important; 
  color: white !important;
}

.periodSelectEndDark {
  background-color: #046d9e !important; 
  color: white !important;
  border-radius: 0px 15px 15px 0px;
}

.periodSelectStartLight {
  background-color: #046d9e !important; 
  color: white !important;
  border-radius: 15px 0px 0px 15px;
}

.periodSelectStartAndEndDark {
  background-color: #046d9e !important; 
  color: white !important;
}

.periodSelectBetweenLight {
  background-color: #2ebcff !important; 
  color: white !important;
}

.periodSelectStartDark {
  background-color: #046d9e !important; 
  color: white !important;
  border-radius: 15px 0px 0px 15px;
}


.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 0fr);
  grid-gap: 0px;
width:100%;
height:85%;
}


.grid-item {
padding: 10px;
text-align: center;
width: 30px; /* Adjust according to the number of days in a week */
height: auto; /* Let the height adjust dynamically based on content */
}

.grid-item { 
  padding: 0px;
  text-align: center;
}

.grid-item-monthitem{
width: 97px;
border: 1px solid #ccc;
text-align: center;
}

.week{
width:30px;
border: 1px solid #e6e6e6;
  </style>`;

  //var items;
  var buttonLeftElements;
  var buttonRightElements;
  var gPeriodCharLength = 0;
  var gLimitPeriodSelection = false;

  class WeekRangeSelector extends HTMLElement {

      constructor() {
          super(); 
          this._shadowRoot = this.attachShadow({mode: 'open'});
          this._shadowRoot.appendChild(template.content.cloneNode(true));
          //container for the drill path boxes 
          this._container = this._shadowRoot.getElementById('container');

         this.currentYear = new Date().getFullYear();
         this.gStartPeriod = "";
         this.gEndPeriod = "";

         this.gDisplayText = this._shadowRoot.getElementById('gdisplaytext');
         this.gDisplayText.style.display = "none";

         this.gFromDate = this._shadowRoot.getElementById('fromDate');
         this.gToDate = this._shadowRoot.getElementById('toDate');




         this.MP_MaxAllowedPeriodSelections = 52

         this.OutofOrder =false;//indicates if the order selected in detail is out of order eg end week is before start week 

         this.arrayOfExeptionYears=[];

         //hold the old values of the start end and active button so when reset is clicked apply these values 
         
         this.startPeriodSAC="";
      this.endPeriodSAC="";
          
          //this._box1 = this._shadowRoot.getElementById('box1');
         
          //this._box1.addEventListener('click', this._buttonClicked.bind(this,this._box1));

          buttonLeftElements = Array.from(this._shadowRoot.querySelectorAll('[id^="buttonLeft_"]'));
          buttonRightElements = Array.from(this._shadowRoot.querySelectorAll('[id^="buttonRight_"]'));
          this.weekButtons = buttonLeftElements.concat(buttonRightElements);
          this.optionsbuttons = this._shadowRoot.querySelectorAll('.button');

          this.clearAllWeekBoxes(buttonLeftElements);
          this.clearAllWeekBoxes(buttonRightElements);
          this.checkWeekBoxes(buttonRightElements);
          this.checkJsonFileforYearFormat(2024,buttonRightElements);
          
          this.checkWeekBoxes(buttonLeftElements);
          this.checkJsonFileforYearFormat(2023,buttonLeftElements);


          
          

         

       
          

        for (let i = 0; i < this.weekButtons.length; i++) {     
          var button = this.weekButtons[i];
        if(this.weekButtons[i].className.includes('week')){
          console.log("yes");
        }
               this.weekButtons[i].addEventListener('click', this._buttonClicked.bind(this, this.weekButtons[i]));
              console.log( this.weekButtons[i].textContent);
            
         }
          

          //next and previous year navigation buttons 
          this.nextbuttonText = this._shadowRoot.getElementById('nextbuttonText');
          this.prevoiusbuttonText = this._shadowRoot.getElementById('PreviousButtonText');
          this._nextButton = this._shadowRoot.getElementById('NextButton').addEventListener("click", this._incrementYear.bind(this, this.nextbuttonText, this.prevoiusbuttonText, this.gDisplayText));
          this._previousButton = this._shadowRoot.getElementById('PreviousButton').addEventListener("click", this._decrementYear.bind(this,this.nextbuttonText, this.prevoiusbuttonText, this.gDisplayText));

          //the options buttons
          this.YTDButton = this._shadowRoot.getElementById('YTDButton');
          this.YTDButton.addEventListener('click', this._toggleOptionButton.bind(this, this.YTDButton, this.gDisplayText));
          this.QTDButton = this._shadowRoot.getElementById('QTDButton');
          this.QTDButton.addEventListener('click', this._toggleOptionButton.bind(this, this.QTDButton, this.gDisplayText));
          this.MQTButton = this._shadowRoot.getElementById('MQTButton');
          this.MQTButton.addEventListener('click', this._toggleOptionButton.bind(this, this.MQTButton, this.gDisplayText));
          this.DetailButton = this._shadowRoot.getElementById('DETButton');
          this.DetailButton.addEventListener('click', this._toggleOptionButton.bind(this, this.DetailButton, this.gDisplayText));
          this.SingleWeekButton = this._shadowRoot.getElementById('WeekButton');
          this.SingleWeekButton.addEventListener('click', this._toggleOptionButton.bind(this, this.SingleWeekButton, this.gDisplayText));
          this.MATButton = this._shadowRoot.getElementById('MATButton');
          this.MATButton.addEventListener('click', this._toggleOptionButton.bind(this, this.MATButton, this.gDisplayText));

          this.ResetActiveButton; // holds the current value of the selected option 
          this.activeButton=null;



         

          this.applyButton = this._shadowRoot.getElementById("ApplyButton");
          this.applyButton.addEventListener("click", this._submitApply.bind(this, this.gDisplayText));
          this.resetButton = this._shadowRoot.getElementById("ResetButton").addEventListener("click", this._submitReset.bind(this));
    
          


  
      
          this.addEventListener("click", event => {
              var event = new Event("onClick");
              this.dispatchEvent(event);
          });
          this._setDefaultTime();

          this._props = {};
          } //end constructor 

          

          onCustomWidgetBeforeUpdate(changedProperties) {
          this._props = { ...this._props, ...changedProperties };
          }


          onCustomWidgetAfterUpdate(changedProperties) {
            //   if ("selectedItemDrillpathIndex" in changedProperties) {
            //       //here call code to update the drill path 
            //       this.drillpathSelectedIndex = changedProperties["selectedItemDrillpathIndex"];
            //   }
          }

          onCustomWidgetResize (width, height) {
              
          }

           // decreases the year range by one
          async _decrementYear(next, previous, gDisplayText) {
            console.log("decrement called");
            this.currentYear = this.currentYear - 1;
            next.innerText = this.currentYear;
            previous.innerText = this.currentYear - 1;

            this.clearAllWeekBoxes(this.weekButtons);
            
           //this.checkWeekBoxes(this.weekButtons)
           
           //this._clearPeriodCSS();

         //  this.removeEventListeners();
           
           
            await this.checkJsonFileforYearFormat(this.currentYear - 1,buttonLeftElements);
            await this.checkJsonFileforYearFormat(this.currentYear,buttonRightElements);
            
            this.checkWeekBoxes(this.weekButtons);

          



          
            //  this.addEventListeners();


            this._yearButtonCSS(this.gDisplayText, previous, next);
            this._toggleLimitPeriodSelection(previous, next);
           //this.resetWeekButtonsCSSandClickFuntionaility();
          }

          async _incrementYear(next, previous, gDisplayText) {
            this.currentYear = this.currentYear + 1;
            next.innerText = this.currentYear;
            previous.innerText = this.currentYear - 1;

            this.clearAllWeekBoxes(this.weekButtons);
            //this.clearAllWeekBoxes(buttonRightElements);
            
          // this.checkWeekBoxes(buttonRightElements)
        //    this.checkWeekBoxes(buttonLeftElements)
           await this.checkJsonFileforYearFormat(this.currentYear,buttonRightElements);
            //this._clearPeriodCSS();
            
           await this.checkJsonFileforYearFormat(this.currentYear - 1,buttonLeftElements);

           this.checkWeekBoxes(this.weekButtons);
            

          
           this._yearButtonCSS(this.gDisplayText, previous, next);
            this._toggleLimitPeriodSelection(previous, next);

         //   this.resetWeekButtonsCSSandClickFuntionaility();
            
          }

          resetWeekButtonsCSSandClickFuntionaility(){

            for(let i=0;i<weekBoxs.length;i++){
              if(weekBoxs[i].classList.contains('grid-item')&&weekBoxs[i].classList.contains('week')) {
                if (weekBoxs[i].innerText === "") {
                  weekBoxs[i].className='grid-item';
                //  weekBoxs[i].classList.remove('periodSelectBetweenLight');
                }
            }
              // weekBoxs.forEach(function(div) {
              //     if (div.classList.contains('grid-item')) {
              //         if (div.textContent.trim() === "") {
              //             div.classList.remove('week');
              //         }
              //     }
              // });
          }

            for (let i = 0; i < this.weekButtons.length; i++) {   
              
              console.log()
        

              this.weekButtons[i].removeAttribute("click");
           
            if(this.weekButtons[i].className.includes('week')){
              this.weekButtons[i].addEventListener('click', this._buttonClicked.bind(this, this.weekButtons[i]));
            }
                 
                
             }
          }

          _enableAllPeriods() {
            for (var i = 0; i < this.weekButtons.length; i++) {
              if(this.weekButtons[i].innerText===""){
                this.weekButtons[i].style.visibility = 'hidden';
              }else{
              this.weekButtons[i].style.visibility = 'visible';
            }
          }
          }

          addEventListeners(){
            for(let i=0; i<this.weekButtons.length; i++){
              if(this.weekButtons[i].innerText===""){
              
            }else{
              console.log("button "+i +" has no text");
              this.weekButtons[i].addEventListener('click', this._buttonClicked.bind(this, this.weekButtons[i]));
            }
        }
      }
          
          removeEventListeners(){
            for(let i=0; i<this.weekButtons.length; i++){
              this.weekButtons[i].removeEventListener('click', this._buttonClicked.bind(this, this.weekButtons[i]));
        }
      }

          
  
              clearAllWeekBoxes(weekButtons){
                for(var i=0;i<weekButtons.length;i++){
                  weekButtons[i].innerText="";
                 // weekButtons[i].classList.remove("week");
                  weekButtons[i].className = "grid-item week";
                  weekButtons[i].style.visibility = 'visible';
                } 
              }
  
            checkWeekBoxes(weekBoxs) {
              for(let i=0;i<weekBoxs.length;i++){
                if(weekBoxs[i].classList.contains('grid-item')) {
                  if (weekBoxs[i].innerText === "") {
                    weekBoxs[i].classList.remove('week');
                    weekBoxs[i].classList.remove('periodSelectBetweenLight');
                  }
              }
            }
          }
  
            _clearPeriodCSS() {
              var i = 0
              for (i = 0; i < this.weekButtons.length; i++) {
               // console.log(this.weekButtons[i].innerText);
                if(this.weekButtons[i].innerText === "" && !this.weekButtons[i].style.visibility ==="hidden"){
                  //console.log(this.weekButtons[i].id + "HAS NO TEXT ")
                  this.weekButtons[i].className = "grid-item";
                  this.weekButtons[i].style.visibility = 'visible';
                }else{
                  this.weekButtons[i].className = "grid-item week";
                  this.weekButtons[i].style.visibility = 'visible';
                }
              }
              // this.gStartPeriod = "";
              // this.gEndPeriod = "";
              // this.gDisplayText.innerText = "Select dates...";
              // this._setDateText();
            }

           async _submitReset(e) {
              console.log("NEW START AND END submit reset 1 = "+ this.startPeriod +" - "+ this.endPeriod);
              console.log("NEW START AND END submit reset 2 = "+ this.gStartPeriod +" - "+ this.gEndPeriod);
              this._clearPeriodCSS();
             //currentYear = parseInt(this.endYear);
      console.log("_submitReset function called = "+ this.ResetActiveButton)
      this.gStartPeriod=this.startPeriodSAC;
      this.gEndPeriod=this.endPeriodSAC;
     // this.activeButton = this.ResetActiveButton;
     this._setResetTime();
     this.clearAllWeekBoxes(this.weekButtons);
     //this.clearAllWeekBoxes(buttonRightElements);
     
   // this.checkWeekBoxes(buttonRightElements)
 //    this.checkWeekBoxes(buttonLeftElements)
    await this.checkJsonFileforYearFormat(this.currentYear,buttonRightElements);
     //this._clearPeriodCSS();
     
    await this.checkJsonFileforYearFormat(this.currentYear - 1,buttonLeftElements);

    this.checkWeekBoxes(this.weekButtons);
     if(this.activeButton!==null){this.activeButton.classList.remove("active");}
      this.activeButton = this.ResetActiveButton;
      this.activeButton.classList.add("active");
      this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
            }

                //called when apply button is clicked
    //
    _submitApply(e) {
      // if (this.startPeriod !== "" && this.endPeriod !== "") {
      //   this.ResetActiveButton = this.activeButton.id
      // } else {
      //   this.ResetActiveButton = "YTDButton";
      // }
    //  e.preventDefault();

    if (this.gDisplayText === "Select Dates..." || this.gEndPeriod === "select end" || this.gEndPeriod === "") {
      //display error popup 
      console.log(" dev 1 : submit reset");
      this._submitReset()
    }  else {
        this.startPeriodSAC=this.gStartPeriod;
        this.endPeriodSAC=this.gEndPeriod;
        this.dispatchEvent(new CustomEvent("propertiesChanged", {
          detail: {
            properties: {
              selectedTimeFrame: this.selectedTimeFrame,
              startPeriod: this.startPeriod,
              endPeriod: this.endPeriod,
            }
          }
        }));
      }
    }


      //set the default text for right andf left year 
      _setDefaultTime() {
        //get current year and set it as right . set the left year to the right -1 
        var currentTime = new Date();
        var year = currentTime.getFullYear();
        var prevYear = (currentTime.getFullYear() - 1);
        this.prevoiusbuttonText.innerText = prevYear;
        this.nextbuttonText.innerText = year;
      }
  
      _setResetTime() {
        //get current year and set it as right . set the left year to the right -1 
        var year = parseInt(this.endYear)
        var prevYear = (year - 1);
        this.prevoiusbuttonText.innerText = prevYear;
        this.nextbuttonText.innerText = year;
        this.currentYear=year;
      }
          _yearButtonCSS(gDisplayText, prevoiusbuttonText, nextbuttonText) {
           // this._clearPeriodCSS();
            console.log("year button css called = "+ this.activeButton.id);
            if (this.activeButton.id === "MATButton") {
              this._setCSSBetween_MAT(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
            } else if (this.activeButton.id === "YTDButton") {
              this._setCSSBetween_YTD(this.prevoiusbuttonText, this.nextbuttonText);
            } else if (this.activeButton.id === "DETButton") {
              this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
            } else if (this.activeButton.id === "WeekButton") {
              this._setCSSBetween_PTD(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
            } else if (this.activeButton.id === "QTDButton") {
              this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
            } else if (this.activeButton.id === "MQTButton") {
              this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
            }
          }

            //change the selected time period option
          _toggleOptionButton(button1) {
            
            this.gStartPeriod="";//test
            this.gEndPeriod="";//test
this._clearPeriodCSS();
// this.checkWeekBoxes();
              this.gDisplayText.innerText = "Select dates...";
           // this._clearSelections(this.gDisplayText);
            if (this.activeButton !== null) {
              this.activeButton.classList.remove("active");
            }
            if (this.activeButton !== button1) {
              button1.classList.add("active");
              this.activeButton = button1;
            } else {
              this.activeButton = null;
            }

            this._setDateText();
          }

          //called when a month button is clicked 
        _buttonClicked(ButtonName) {
          
          if (this.activeButton.id === "WeekButton") {
            //this._setSinglePeriod(ButtonName);
            this._changeState_PTD(ButtonName);
            this._setDateText(this.gDisplayText);
          }
          else if (this.activeButton.id === "YTDButton") {
            this._changeState_YTD(ButtonName);
            this._setDateText(this.gDisplayText);
          }
          else if (this.activeButton.id === "MQTButton") {
            this._changeState_MQT(ButtonName, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
            this._setDateText(this.gDisplayText);
          }
          else if (this.activeButton.id === "QTDButton") {
            this._changeState_QTD(ButtonName, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
            this._setDateText(this.gDisplayText);
          }
          else if (this.activeButton.id === "DETButton") {
            if (this.MP_MaxAllowedPeriodSelections === 1) {
              // set the max allowed weeks param to 0 to prevent a call loop
              this.MP_MaxAllowedPeriodSelections = 0;
              MP_Scripts.setSingleWeek(thisButton);
              // now set it back again to 1
              this.MP_MaxAllowedPeriodSelections = 1;
            } else {
              this._changeState(ButtonName);
              this._setDateText(this.gDisplayText);
            }
          }
          else if (this.activeButton.id === "MATButton") {
            this._changeState_MAT(ButtonName, this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
            this._setDateText(this.gDisplayText);
          };

          this._enableAllPeriods();
        }

            //function to change the state of the month picker to accomodate YTD selections
        _changeState_YTD(thisButton) {
         // console.log(thisButton.id);
          //clear all the css 
          this._clearPeriodCSS();

          this.gEndPeriod = this._getSelectedPeriod(thisButton, this.prevoiusbuttonText, this.nextbuttonText);

          this.gStartPeriod = ("001" + "." + this.gEndPeriod.split(".")[1]);
          this.gStartPeriod = this.gStartPeriod.substring(this.gStartPeriod.length, gPeriodCharLength);
          var delimiterPosition = this.gStartPeriod.indexOf(".");

         // MP_gYMStartPeriod = this.gStartPeriod.substring(delimiterPosition + 1, this.gStartPeriod.length) + "." + this.gStartPeriod.substring(0, delimiterPosition);

          //sets the css of the start month
          if (thisButton.id.includes("Right")) {
            console.log("RIGHT SIDE CLICKED");
            this.weekButtons[60].classList.add("periodSelectStartLight");
          } else {
            console.log("LEFT SIDE CLICKED");
            this.weekButtons[0].classList.add("periodSelectStartLight");
          }
          var populatedPeriods = this._checkPopulatedPeriods();
          if (populatedPeriods === "both") {
            thisButton.classList.add("periodSelectEndDark");
          
            // fill in css for between periods
            this._setDateText(this.gDisplayText);
            this._fillBetweenCSS(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
          }

        }

        _changeState_PTD(thisButton) {
          // console.log(thisButton.id);
           //clear all the css 
          //  this._clearPeriodCSS();
 
          //  this.gEndPeriod = this._getSelectedPeriod(thisButton, this.prevoiusbuttonText, this.nextbuttonText);
 
          //  this.gStartPeriod = ("001" + "." + this.gEndPeriod.split(".")[1]);
          //  this.gStartPeriod = this.gStartPeriod.substring(this.gStartPeriod.length, gPeriodCharLength);
          //  var delimiterPosition = this.gStartPeriod.indexOf(".");
 
          // // MP_gYMStartPeriod = this.gStartPeriod.substring(delimiterPosition + 1, this.gStartPeriod.length) + "." + this.gStartPeriod.substring(0, delimiterPosition);
 
          //  //sets the css of the start month
          //  if (thisButton.id.includes("Right")) {
          //    console.log("RIGHT SIDE CLICKED");
          //    this.weekButtons[60].classList.add("periodSelectStartLight");
          //  } else {
          //    console.log("LEFT SIDE CLICKED");
          //    this.weekButtons[0].classList.add("periodSelectStartLight");
          //  }
          //  var populatedPeriods = this._checkPopulatedPeriods();
          //  if (populatedPeriods === "both") {
          //    thisButton.classList.add("periodSelectEndDark");
          //    // fill in css for between periods
          //    this._setDateText(this.gDisplayText);
          //    this._fillBetweenCSS(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
          //  }

          //  ////////

            this.gStartPeriod = this._getSelectedPeriod(thisButton);
            this.gEndPeriod = this._getSelectedPeriod(thisButton);

            //APPLICATION.log("WeekSelector: " + gEndPeriod);

            var startPeriod =
              "00" + this.getPeriodStartWeek(this.gEndPeriod.split(".")[0], this.gEndPeriod.split(".")[1]);  // <---------
            startPeriod = startPeriod.substring(startPeriod.length - 2, startPeriod.length);

            

            this.gStartPeriod = startPeriod + "." + this.gEndPeriod.split(".")[1];

            var populatedPeriods = this._checkPopulatedPeriods();

            if (populatedPeriods == "both") {
              // <-- start is populated so fill end
              this._clearPeriodCSS();
              
              // fill in css for between periods
              
              this._setDateText(this.gDisplayText);
              this._setCSSBetween_PTD();
              
            }

         }


         _changeState_QTD(thisButton) {
          this._clearPeriodCSS();

      var buttonName = thisButton.id;
      var year = "";
      var selectedPeriod = parseInt(buttonName.split("_")[1]);
      var isExceptionYear=false;


      if (buttonName.indexOf("Left") !== -1) {
        year = this.prevoiusbuttonText.innerText || this.prevoiusbuttonText.textContent
      } else {
        year = this.nextbuttonText.innerText || this.nextbuttonText.textContent
      }

      for(var item of this.arrayOfExeptionYears){
        var tempYear = item[0];
        console.log(tempYear)
        console.log(year)
        var start,end;
        if(parseInt(year) === tempYear ){
          console.log("exception is true");
          isExceptionYear =true;

          var selected = parseInt(thisButton.innerText);

          var count =0;
          var oldcount =0;

          for(var i=0;i<item[1].length;i++){
           console.log(item[1][i])
           oldcount=count;
           count = count+item[1][i];
           console.log("count ="+count)
           console.log("count ="+oldcount)
           if(selected>=oldcount && selected<=count){
            console.log(" i = "+i)
            if(i>=0 && i<=2){

              var temp=0
              for(var j=0;j<3;j++){
                temp = temp+item[1][j];
                
              }
              console.log("end = "+ (parseInt(temp)))
              end =(parseInt(temp))
              start=1


            }else if(i>=3 && i<=5){
              var temp=0
              for(var j=0;j<6;j++){
                temp = temp+item[1][j];
                console.log(temp)
                if(j===2){
                  console.log("start ="+ (parseInt(temp)+1))
                  start=(parseInt(temp)+1)
                }
              }
              console.log("end = "+ (parseInt(temp)))
              end =(parseInt(temp))

            }else if(i>=6 && i<=8){

              var temp=0
              for(var j=0;j<9;j++){
                temp = temp+item[1][j];
                console.log(temp)
                if(j===5){
                  console.log("start ="+ (parseInt(temp)+1))
                  start=(parseInt(temp)+1)
                }
              }
              console.log("end = "+ (parseInt(temp)))
              end =(parseInt(temp))


            }else if(i>=9 && i<=11){

              var temp=0
              for(var j=0;j<12;j++){
                temp = temp+item[1][j];
                console.log(temp)
                if(j===8){
                  console.log("start ="+ (parseInt(temp)+1))
                  start=(parseInt(temp)+1)
                }
              }
              console.log("end = "+ (parseInt(temp)))
              end =(parseInt(temp))


            }

            this.gStartPeriod = "00" + start + "." + year;
            this.gEndPeriod = "00" + end + "." + year;
           }
          }
          
          break;
        }
      }

      if(isExceptionYear===true){

       console.log( "clciked button = "+thisButton.innerText);

      }else{

      if (selectedPeriod >= 1 && selectedPeriod <= 14) {
        this.gStartPeriod = "00" + "1" + "." + year;
        this.gEndPeriod = "00" + "13" + "." + year;
      } else if (selectedPeriod >= 16 && selectedPeriod <= 29) {
        this.gStartPeriod = "00" + "14" + "." + year;
        this.gEndPeriod = "00" + "26" + "." + year;
      } else if (selectedPeriod >= 31 && selectedPeriod <=44) {
        this.gStartPeriod = "00" + "27" + "." + year;
        this.gEndPeriod = "00" + "39" + "." + year;
      } else if (selectedPeriod >= 46 && selectedPeriod <= 59) {
        this.gStartPeriod = "00" + "40" + "." + year;
        this.gEndPeriod = "00" + "52" + "." + year;
      }

    }

      this.gStartPeriod = this.gStartPeriod.substring(this.gStartPeriod.length, gPeriodCharLength);
      this.gEndPeriod = this.gEndPeriod.substring(this.gEndPeriod.length, gPeriodCharLength);

      var populatedPeriods = this._checkPopulatedPeriods();

      if (populatedPeriods === "both") {
        // <-- start is populated so fill end
        thisButton.classList.add("periodSelectEndDark");
        // fill in css for between periods
        this._setDateText(this.gDisplayText);
        this._fillBetweenCSS(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      }

         }

          //function to change the state of the month picker to accomodate MQT selections
    _changeState_MQT(thisButton, gDisplayText, prevoiusbuttonText, nextbuttonText) {
      //clear all the css 
      this._clearPeriodCSS();
      this.gEndPeriod = this._getSelectedPeriod(thisButton, this.prevoiusbuttonText, this.nextbuttonText);

      var period = parseInt(this.gEndPeriod.split(".")[0]);
      var year = parseInt(this.gEndPeriod.split(".")[1]);
      var previousYear = (year-1);

      var buttonName = thisButton.id;
      var selectedPeriod = parseInt(buttonName.split("_")[1]);
      var isExceptionYear=false;
      var isExceptionPreviousYear=false;
      var start,end;
      var weeks;

      for(var item of this.arrayOfExeptionYears){
        var tempYear = item[0];
        console.log(tempYear)
        console.log(year)
       
        if(parseInt(year) === tempYear ){
          console.log("exception is true");
          isExceptionYear =true;
          weeks = item[1];
          break;
        }
        else{
          weeks=[4,5,4,4,5,4,4,5,4,4,5,4];
        }
      }

          var selected = parseInt(thisButton.innerText);

       //   if(isExceptionYear===true){
          var count =0;
          var oldcount =0;
          var oldestCount =0;

          for(var i=0;i<weeks.length;i++){
           console.log(weeks[i])
           oldestCount = oldcount
           oldcount=count;
           count = count+weeks[i];
           console.log("count ="+count)
           console.log("old count ="+oldcount)
           console.log("oldest count ="+oldestCount)
           if(selected>=oldcount && selected<=count){
            console.log(" i = "+i)

            var temp=0
            for(var j=0;j<i-2;j++){
              temp = temp+weeks[j];
              console.log(temp)
            }
            console.log("start ="+ (parseInt(temp)+1))
            start=(parseInt(temp)+1)
           
            this.gStartPeriod = "00" + start + "." + year;
            this.gEndPeriod = "00" + count + "." + year;

            //if end week is in the second month then make start period the last month of the previous year 
            if(oldestCount===0){
              console.log("behind one");

              //check if the previous year is an exception year 

              for(var item of this.arrayOfExeptionYears){
                var tempYear = item[0];
                if(parseInt(year)-1 === tempYear ){
                  console.log("previous year exception 2");
                  isExceptionPreviousYear =true;
                  weeks = item[1];
                  start = 52 - weeks[11];
                  console.log( item[1])
                  this.gStartPeriod = "00" + (start+1) + "." + (year-1);

                  break;
                }
              }
              if(isExceptionPreviousYear ===false){
                this.gStartPeriod = "00" + 49 + "." + (year-1);
              }
              
            }
            if(oldcount===0){
              console.log("behind two");
              
              for(var item of this.arrayOfExeptionYears){
                var tempYear = item[0];
                if(parseInt(year)-1 === tempYear ){
                  console.log("previous year exception 2");
                  isExceptionPreviousYear =true;
                  weeks = item[1];
                  start = 52 - weeks[11]-weeks[10];
                  console.log( item[1])
                  this.gStartPeriod = "00" + (start+1) + "." + (year-1);

                  break;
                }
              }
              if(isExceptionPreviousYear ===false){
                this.gStartPeriod = "00" + 44 + "." + (year-1);
              }
            }
            break;

           }
      }

      

      this.gStartPeriod = this.gStartPeriod.substring(this.gStartPeriod.length, gPeriodCharLength);
      this.gEndPeriod = this.gEndPeriod.substring(this.gEndPeriod.length, gPeriodCharLength);

      var populatedPeriods = this._checkPopulatedPeriods();

      if (populatedPeriods === "both") {
       // thisButton.classList.add("periodSelectEndDark");
        // fill in css for between periods
        this._setDateText(this.gDisplayText);
        this._fillBetweenCSS(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
      }
    }


        _changeState_MAT(thisButton, gDisplayText, prevoiusbuttonText, nextbuttonText) {
          this._clearPeriodCSS();
    
          //end period = last week 
          this.gEndPeriod = this._getSelectedPeriod(thisButton, this.prevoiusbuttonText, this.nextbuttonText);
          this.gStartPeriod = "01" + "." + this.gEndPeriod.split(".")[1];
    
          var period = parseInt(this.gEndPeriod.split(".")[0]);
          var year = parseInt(this.gEndPeriod.split(".")[1]);
    
          if (period === 52) {
            this.gStartPeriod = "001" + "." + (year).toString();
          }
          else {
            this.gStartPeriod = "00" + (period + 1).toString() + "." + (year - 1).toString();
            //	gStartPeriod = gStartPeriod.substring(gStartPeriod.length - gPeriodCharLength);
          }
          var delimiterPosition = this.gStartPeriod.indexOf(".");
    
         // MP_gYMStartPeriod = this.gStartPeriod.substring(delimiterPosition + 1, this.gStartPeriod.length) + "." + this.gStartPeriod.substring(0, delimiterPosition);
         // MP_gYMEndPeriod = this.gEndPeriod.substring(delimiterPosition + 1, this.gEndPeriod.length) + "." + this.gEndPeriod.substring(0, delimiterPosition);
    
          //APPLICATION.createErrorMessage(gStartPeriod + "->" + gEndPeriod);
    
          var populatedPeriods = this._checkPopulatedPeriods();
    
          if (populatedPeriods === "both") {
            // <-- start is populated so fill end
    
            thisButton.classList.add("periodSelectEndDark");
            // fill in css for between periods
            this._setDateText(this.gDisplayText);
            this._fillBetweenCSS(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
          }
        }

        _changeState(thisButton, gDisplayText, prevoiusbuttonText, nextbuttonText) {
         // var delimiterPosition = this.gStartPeriod.indexOf(".");
          var populatedPeriods = this._checkPopulatedPeriods();
          
    
          if (populatedPeriods === "both") {
            // <-- both are populated so start again
            // clear the variables, the selection text, reset the CSS and the next CSS class to be applied
            this._clearPeriodCSS();
            this.gStartPeriod = this._getSelectedPeriod(thisButton, this.prevoiusbuttonText, this.nextbuttonText);
            // delimiterPosition = this.gStartPeriod.indexOf(".");
            this.gEndPeriod = "";
            //MP_gYMStartPeriod = this.gStartPeriod.substring(delimiterPosition + 1, this.gStartPeriod.length) + "." + this.gStartPeriod.substring(0, delimiterPosition);
           // MP_gYMEndPeriod = "";
            thisButton.classList.add("periodSelectStartDark");
          }
          else if (populatedPeriods === "start") {
            // <-- start is populated so fill end
            thisButton.classList.add("periodSelectEndDark")
            this.gEndPeriod = this._getSelectedPeriod(thisButton, this.prevoiusbuttonText, this.nextbuttonText);
            // fill in css for between periods
            this._setDateText(this.gDisplayText);
            this._fillBetweenCSS(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
          }
          else if (populatedPeriods === "") {
            // <-- nothing is populated so start again
            this.gStartPeriod = this._getSelectedPeriod(thisButton, this.prevoiusbuttonText, this.nextbuttonText);
            thisButton.classList.add("periodSelectStartDark");
          }
          this._toggleLimitPeriodSelection(this.prevoiusbuttonText, this.nextbuttonText);

          console.log("populatedPeriods == "+populatedPeriods);
    
        }

        //sets what buttons can and cant be clicked then the option is Deatil. max of 52 Weeks left or right of chosen Week can be selected 
    _toggleLimitPeriodSelection(prevoiusbuttonText, nextbuttonText) {
      if (this.activeButton.id === "DETButton" && this.MP_MaxAllowedPeriodSelections > 0 && this.gStartPeriod !== "" && this.gEndPeriod === "") {
        gLimitPeriodSelection = true;
       
      }
      else {
        gLimitPeriodSelection = false;
        this._enableAllPeriods();
      }
     

      if (gLimitPeriodSelection === true) {
        // enable everything then disable what is not allowed
        this._enableAllPeriods();

        var yearPeriodArray = this._calcWeeksYears(this.MP_MaxAllowedPeriodSelections);
        var minMaxPeriodArray = this._calcPeriodOffset(this.gStartPeriod, yearPeriodArray[0], yearPeriodArray[1]);
        var minAllowedPeriodYear = minMaxPeriodArray[0];
        var maxAllowedPeriodYear = minMaxPeriodArray[1];
        var sMinYear = minAllowedPeriodYear.split(".")[1];
        var sMinPeriod = "0" + minAllowedPeriodYear.split(".")[0];


        sMinPeriod = sMinPeriod.substring(sMinPeriod.length - 2, sMinPeriod.length);

        var iMinYearPeriod = parseInt((sMinYear + sMinPeriod));
        var sMaxYear = maxAllowedPeriodYear.split(".")[1];
        var sMaxPeriod = "0" + maxAllowedPeriodYear.split(".")[0];

        sMaxPeriod = sMaxPeriod.substring(sMaxPeriod.length - 2, sMaxPeriod.length);

        var iMaxYearPeriod = parseInt(sMaxYear + sMaxPeriod);
        var sSelectedPeriod = "0" + this.gStartPeriod.split(".")[0];

        sSelectedPeriod = sSelectedPeriod.substring(sSelectedPeriod.length - 2, sSelectedPeriod.length);

        var tempArray=[]

          for (var i = 0; i < this.weekButtons.length; i++) {
           if(!this.weekButtons[i].innerText.length<1){
              tempArray.push(this.weekButtons[i])
            }
          }
          console.log("tempArray.length"+tempArray.length)
          console.log("tempArray.length"+tempArray.length)

        for (var i = 0; i < tempArray.length; i++) {
          var elementYear = "";
          var elementPeriod = "0" + tempArray[i].innerText;
          var elementYearPeriod = 0;

          if (tempArray[i].id.indexOf("Left") !== -1) {
            elementYear = this.prevoiusbuttonText.innerText
          } else {
            elementYear = this.nextbuttonText.innerText;
          }

          elementPeriod = elementPeriod.substring(elementPeriod.length - 2, elementPeriod.length);
          elementYearPeriod = parseInt(elementYear + elementPeriod);

         // console.log("elementPeriod "+elementPeriod)
         // console.log("elementYearPeriod "+elementYearPeriod)
         // console.log("iMinYearPeriod" +iMinYearPeriod )
         // console.log("iMaxYearPeriod" + iMaxYearPeriod)


          if (elementYearPeriod > iMinYearPeriod && elementYearPeriod < iMaxYearPeriod) {
          
            tempArray[i].style.visibility = 'visible';
            if (tempArray[i].className === "grid-item") {
          
              tempArray[i].classList ='grid-item week';
            }
          } else {
            
            tempArray[i].style.visibility = 'hidden';
            tempArray[i].classList = "grid-item week";
          }
        }
      }
      console.log("end toggle");
      

    }

        _fillBetweenCSS(gDisplayText, prevoiusbuttonText, nextbuttonText) {
          var startPeriod = parseInt(this.gStartPeriod.split(".")[0]);
          var startYear = parseInt(this.gStartPeriod.split(".")[1]);
    
          var endPeriod = parseInt(this.gEndPeriod.split(".")[0]);
          var endYear = parseInt(this.gEndPeriod.split(".")[1]);
    
          var delimiterPosition = this.gStartPeriod.indexOf(".");
          var startZero = "0";
          var endZero = "0";
    
          if (startPeriod >= 10) {
            startZero = "";
          }
    
          if (endPeriod >= 10) {
            endZero = "";
          }
    
          var intStartPeriod = parseInt((startYear).toString() + startZero + (startPeriod).toString());
          var intEndPeriod = parseInt((endYear).toString() + endZero + (endPeriod).toString());
    
          var temp = "";
    
          // swap start and end if out of order
          if (intStartPeriod > intEndPeriod) {
            temp = this.gStartPeriod;
            this.gStartPeriod = this.gEndPeriod;
            this.gEndPeriod = temp;
            console.log("out of order");
            this.OutofOrder=true;
          }
    
          this._setDateText(this.gDisplayText);
    
          if (this.activeButton.id === "DETButton") {
            this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
          } else if (this.activeButton.id === "YTDButton") {
            this._setCSSBetween_YTD(this.prevoiusbuttonText, this.nextbuttonText);
          } else if (this.activeButton.id === "MATButton") {
            this._setCSSBetween_MAT(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
          } else if (this.activeButton.id === "QTDButton") {
            this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
          } else if (this.activeButton.id === "MQTButton") {
            this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
          }
        }

        _setCSSBetween_YTD(prevoiusbuttonText, nextbuttonText) {
          var period = this.gEndPeriod.split(".")[0];
          var year = this.gEndPeriod.split(".")[1];

          console.log("year and period = "+year +" / "+period);
    
          var buttonString = "none";
     
          
    
          if (this.prevoiusbuttonText.innerText === year) {
            buttonString = "Left";
          } else if (this.nextbuttonText.innerText === year) {
            buttonString = "Right";
          }


          //// test

          var tempArray=[]

          for (var i = 0; i < this.weekButtons.length; i++) {
           if(!this.weekButtons[i].innerText.length<1){
          
              tempArray.push(this.weekButtons[i])
            }
          }
          //console.log(tempArray);
          var j=0;

          for( j=0;j<tempArray.length;){
            var temp = tempArray[j].id;

            var leftrightSideIndex = 0 
            if(buttonString==="Left"){
              leftrightSideIndex=1;
            }else{
              leftrightSideIndex=-51
            }
            
          
             
              if (temp.indexOf(buttonString) !== -1 && parseInt(period) === 1 && j+leftrightSideIndex === 1) {
                tempArray[j].classList.add("periodSelectStartAndEndDark");
       
            } else if (
              temp.indexOf(buttonString) !== -1 && parseInt(period) !== 1 && j+leftrightSideIndex === 1
            ) {
              tempArray[j].classList.add("periodSelectStartLight");
              
            } else if (
              temp.indexOf(buttonString) !== -1 && parseInt(period) !== 1 && j+leftrightSideIndex > parseInt(period)
            ) {
            } else if (
              temp.indexOf(buttonString) !== -1 && parseInt(period) !== 1 &&j+leftrightSideIndex !== parseInt(period)
            ) {
              tempArray[j].classList.add("periodSelectBetweenLight");
             
            } else if (
              temp.indexOf(buttonString) !== -1 && parseInt(period) !== 1 && j+leftrightSideIndex === parseInt(period)
            ) {
              tempArray[j].classList.add("periodSelectEndDark");
       
            } else {
             // console.log(console.log(this.weekButtons[i]));
             
            }
            j++
          
          }


        }
      

        _indexToButtonConvert(weekButton){
          var weekText = weekButton.innerText;
          var result 
          for(let i = 0; i < this.weekButtons.length; i++) {
            if(this.weekButtons[i].innerText === weekText) {
                result = weekButtons[i];
            }
            else{
              result=null
            }
        }
        }

        //function to set the css of the selected months range 
     _setCSSBetween(gDisplayText, prevoiusbuttonText, nextbuttonText) {
     //  this._clearPeriodCSS();
     this._setDateText(this.gDisplayText);

      // this.clearAllWeekBoxes(this.weekButtons);

      //  await this.checkJsonFileforYearFormat(this.currentYear - 1,buttonLeftElements);
      //  await this.checkJsonFileforYearFormat(this.currentYear,buttonRightElements);
       
      //  this.checkWeekBoxes(this.weekButtons);

      if (this.gDisplayText.innerText !== "Select Dates...") {
        var startPeriodSelection = this.gDisplayText.innerText.split(" -> ")[0];
        var endPeriodSelection = this.gDisplayText.innerText.split(" -> ")[1];
        startPeriodSelection = startPeriodSelection.trim();

        console.log("selections---");
        console.log(startPeriodSelection);
        console.log(endPeriodSelection);
        


        var startYear = "";
        var startPeriod = "";
        var endYear = "";
        var endPeriod = "";
        var action = "";

        var startButtonString = "none";
        var endButtonString = "none";
        var singleSelectionStart = "";
        console.log("endPeriodSelection = "+endPeriodSelection)
        console.log("startPeriodSelection = "+startPeriodSelection)

        if (startPeriodSelection.includes("select start")) {
          console.log("endPeriodSelection is select end ")
          // just do the start CSS assignment
          startYear = startPeriodSelection.split(".")[1];
          startPeriod = startPeriodSelection.split(".")[0];
          endYear = "";
          endPeriod = "";
          action = "start";

          if (this.prevoiusbuttonText.innerText.includes(startYear)) {
            startButtonString = "Left";
          } else if (this.nextbuttonText.innerText.includes(startYear)) {
            endButtonString = "Right";
            console.log("yes")
            singleSelectionStart = "Right";
          }
        } else {
          startYear = startPeriodSelection.split(".")[1];
          startPeriod = startPeriodSelection.split(".")[0];
          endYear = endPeriodSelection.split(".")[1];
          endPeriod = endPeriodSelection.split(".")[0];
          action = "both";

          if (this.prevoiusbuttonText.innerText.includes(startYear)) {
            startButtonString = "Left";
          } else if (this.nextbuttonText.innerText.includes(startYear)) {
            startButtonString = "Right";
          }
          if (this.nextbuttonText.innerText === endYear) {
            endButtonString = "Right";
          } else if (this.prevoiusbuttonText.innerText === endYear) {
            endButtonString = "Left";
          }

          if (action === "start") {
            console.log("only start")
            var tempArray2=[]

            for (var i = 0; i < this.weekButtons.length; i++) {
             if(!this.weekButtons[i].innerText.length<1){
                tempArray2.push(this.weekButtons[i])
              }
            }
            for (var i = 0; i < tempArray2.length; i++) {
              var temp2 = tempArray2[i].id;
              if (temp2.includes(startButtonString) && parseInt(temp2.split("_")[1]) === parseInt(startPeriod)) {
                tempArray2[i].classList.add("periodSelectStartDark");
              } else {
                tempArray2[i].className = "grid-item week"; //might be different code ??
              }
            }
          } else if (action === "both") {

            var tempArray=[]

          for (var i = 0; i < this.weekButtons.length; i++) {
           if(!this.weekButtons[i].innerText.length<1){
              tempArray.push(this.weekButtons[i])
            }
          }

            console.log("action = both");
            console.log(startButtonString)
            console.log(endButtonString)
            console.log(tempArray.length);

             var startleftrightSideIndex = 1
            if(startButtonString==="Left"){
               
              startleftrightSideIndex=1;
            }else{
              startleftrightSideIndex=-51+(104-tempArray.length)
            //  console.log("startleftrightSideIndex"+startleftrightSideIndex)
            }

            var endleftrightSideIndex = 0 
            if(endButtonString==="Left"){
              endleftrightSideIndex=1;
            }else{
           
              endleftrightSideIndex=-51+(104-tempArray.length)
              // console.log("startleftrightSideIndex"+endleftrightSideIndex)
            }

            if(endButtonString==="Right"&&startButtonString==="Left"){
              console.log("trueee")
              startleftrightSideIndex=1
              endleftrightSideIndex=-51
            }

            if(endButtonString==="Right"&&startButtonString==="Left"&&this.OutofOrder===true){
              startleftrightSideIndex=(105-tempArray.length)
              endleftrightSideIndex=-51+(104-tempArray.length)
              console.log("start right end left")
            }

            
            for (var j = 0; j < tempArray.length; j++) {
              if(tempArray[j].classList.contains('week')){
              var temp = tempArray[j].id;

              


              console.log( " j  value is =  "+j +"id ="+temp);
              console.log( " startleftrightSideIndex  value is =  "+(j+startleftrightSideIndex));

              if (tempArray[j].className === "periodSelectableBold") {
                tempArray[j].className = "grid-item week";
              }
              if (
                temp.includes(startButtonString) &&
                (j+startleftrightSideIndex) === parseInt(startPeriod) &&
                startPeriodSelection === endPeriodSelection
              ) {
                console.log(tempArray[j].id+ " is periodSelectStartAndEndDark");
                tempArray[j].classList.add("periodSelectStartAndEndDark");
              } else if (
                temp.includes(startButtonString) &&
                (j+startleftrightSideIndex) === parseInt(startPeriod)
              ) {
                tempArray[j].classList.add("periodSelectStartDark");
                console.log(tempArray[j].id+ " is periodSelectStartDark");
              } else if (
                temp.includes(endButtonString) &&
                (j+endleftrightSideIndex) === parseInt(endPeriod)
              ) {
                tempArray[j].classList.remove("periodSelectStartDark");
                tempArray[j].classList.add("periodSelectEndDark");
                console.log(tempArray[j].id+ " is periodSelectEndDark");
              } else if (
                parseInt(this.prevoiusbuttonText.innerText) > parseInt(startYear) &&
                parseInt(this.prevoiusbuttonText.innerText) < parseInt(endYear) &&
                temp.includes("Left")
              ) {
                console.log(tempArray[j].id+ " is periodSelectBetweenLight 1");
                tempArray[j].classList.add("periodSelectBetweenLight");
              } else if (
                parseInt(this.nextbuttonText.innerText) > parseInt(startYear) &&
                parseInt(this.nextbuttonText.innerText) < parseInt(endYear) &&
                temp.includes("Right")
              ) {
                console.log(tempArray[j].id+ " is periodSelectBetweenLight 2");
                tempArray[j].classList.add("periodSelectBetweenLight");
              } else if (
                temp.includes(startButtonString) &&
                parseInt(startYear) === parseInt(endYear) &&
                (j+startleftrightSideIndex) > parseInt(startPeriod) &&
                (j+startleftrightSideIndex)< parseInt(endPeriod)
              ) {
                tempArray[j].classList.remove("periodSelectEndDark");
                tempArray[j].classList.add("periodSelectBetweenLight");
                console.log(tempArray[j].id+ " is periodSelectBetweenLight 3");
              } else if (
                temp.includes(startButtonString) &&
                parseInt(startYear) !== parseInt(endYear) &&
                (j+startleftrightSideIndex) > parseInt(startPeriod)
              ) {
                tempArray[j].classList.add("periodSelectBetweenLight");
                console.log(tempArray[j].id+ " is periodSelectBetweenLight 4");
              } else if (
                temp.includes(endButtonString) &&
                parseInt(startYear) !== parseInt(endYear) &&
                (j+endleftrightSideIndex) < parseInt(endPeriod)
              ) {
                tempArray[j].classList.add("periodSelectBetweenLight");
                console.log(tempArray[j].id+ " is periodSelectBetweenLight 5");
              }
            }
          }

          }

        }
      }
      this.OutofOrder=false;
    }

        _setCSSBetween_PTD(){
          var period = this.gEndPeriod.split(".")[0];
          var year = this.gEndPeriod.split(".")[1];

        var buttonString = "none";

        if (this.prevoiusbuttonText.innerText === year) {
          buttonString = "Left";
        } else if (this.nextbuttonText.innerText === year) {
          buttonString = "Right";
        }


        
    

        var selectedPeriod = parseInt(period);
        var startPeriod = 0;

        if (selectedPeriod >= 1 && selectedPeriod <= 4) {
          startPeriod = 1;
        } else if (selectedPeriod >= 5 && selectedPeriod <= 9) {
          startPeriod = 5;
        } else if (selectedPeriod >= 10 && selectedPeriod <= 13) {
          startPeriod = 10;
        } else if (selectedPeriod >= 14 && selectedPeriod <= 17) {
          startPeriod = 14;
        } else if (selectedPeriod >= 18 && selectedPeriod <= 22) {
          startPeriod = 18;
        } else if (selectedPeriod >= 23 && selectedPeriod <= 26) {
          startPeriod = 23;
        } else if (selectedPeriod >= 27 && selectedPeriod <= 30) {
          startPeriod = 27;
        } else if (selectedPeriod >= 31 && selectedPeriod <= 35) {
          startPeriod = 31;
        } else if (selectedPeriod >= 36 && selectedPeriod <= 39) {
          startPeriod = 36;
        } else if (selectedPeriod >= 40 && selectedPeriod <= 43) {
          startPeriod = 40;
        } else if (selectedPeriod >= 44 && selectedPeriod <= 48) {
          startPeriod = 44;
        } else if (selectedPeriod >= 49 && selectedPeriod <= 52) {
          startPeriod = 49;
        }

        // change for finance change for 544
        if (year === "2022"|| year === "2024") {
          if (selectedPeriod >= 1 && selectedPeriod <= 5) {
            startPeriod = 1;
          } else if (selectedPeriod >= 6 && selectedPeriod <= 9) {
            startPeriod = 6;
          }
        }

        console.log("year = year "+year);
         // change for finance change for 544
         if (year === "2023") {
          console.log("true");
          if (selectedPeriod >= 1 && selectedPeriod <= 5) {
            startPeriod = 1;
          } else if (selectedPeriod >= 5 && selectedPeriod <= 8) {
            startPeriod = 5;
          }else if (selectedPeriod >= 9 && selectedPeriod <= 12) {
              startPeriod = 9;
          }else if (selectedPeriod >= 13 && selectedPeriod <= 16) {
            startPeriod = 13;
          }else if (selectedPeriod >= 17 && selectedPeriod <= 21) {
            startPeriod = 17;
          }else if (selectedPeriod >= 22 && selectedPeriod <= 25) {
            startPeriod = 22;
          }else if (selectedPeriod >= 26 && selectedPeriod <= 29) {
            startPeriod = 26;
            console.log(startPeriod)
          }else if (selectedPeriod >= 30 && selectedPeriod <= 34) {
            startPeriod = 30;
            console.log(startPeriod)
          }else if (selectedPeriod >= 35 && selectedPeriod <= 38) {
            startPeriod = 35;
          }else if (selectedPeriod >= 39 && selectedPeriod <= 42) {
            startPeriod = 39;
          }else if (selectedPeriod >= 43 && selectedPeriod <= 47) {
            startPeriod = 43;
          }else if (selectedPeriod >= 48 && selectedPeriod <= 52) {
            startPeriod = 48;
          }
      
        }

        

        var tempArray=[]

        for (var i = 0; i < this.weekButtons.length; i++) {
         if(!this.weekButtons[i].innerText.length<1){
           // console.log(this.weekButtons[i]);
            tempArray.push(this.weekButtons[i])
          }
        }
        console.log(startPeriod);

        for (var i = 0; i <tempArray.length; i++) {

          var leftrightSideIndex = 0 
          if(buttonString==="Left"){
            leftrightSideIndex=1;
          }else{
            leftrightSideIndex=-51
          }

          var temp = tempArray[i];
          if (
            temp.id.indexOf(buttonString) != -1 &&
            parseInt(period) == startPeriod &&
            i+leftrightSideIndex == startPeriod
          ) {
            temp.classList.add("periodSelectStartAndEndDark");
          } else if (
            temp.id.indexOf(buttonString) != -1 &&
            parseInt(period) != startPeriod &&
            i+leftrightSideIndex == startPeriod
          ) {
            temp.classList.add("periodSelectStartLight");
          } else if (
            temp.id.indexOf(buttonString) != -1 &&
            parseInt(period) != startPeriod &&
            i+leftrightSideIndex >
              parseInt(period)
          ) {
           // temp.setCSSClass("");
          } else if (
            temp.id.indexOf(buttonString) != -1 &&
            parseInt(period) != startPeriod &&
            i+leftrightSideIndex < startPeriod
          ) {
           // temp.setCSSClass("");
          } else if (
            temp.id.indexOf(buttonString) != -1 &&
            parseInt(period) != startPeriod &&
            i+leftrightSideIndex !=
              parseInt(period)
          ) {
            temp.classList.add("periodSelectBetweenLight");
          } else if (
            temp.id.indexOf(buttonString) != -1 &&
            parseInt(period) != startPeriod &&
            i+leftrightSideIndex ==
              parseInt(period)
          ) {
            temp.classList.add("periodSelectEndDark");
          } else {
           // temp.setCSSClass("");
          }
        }
      

        //APPLICATION.createErrorMessage(startPeriod + "");

    }

      //function called when the option MAT is clicked and a range is selected 
      _setCSSBetween_MAT(gDisplayText, prevoiusbuttonText, nextbuttonText) {

        var leftYear = parseInt(this.prevoiusbuttonText.innerText);
        var rightYear = parseInt(this.nextbuttonText.innerText);
  
        var startYear = parseInt(
          this.gDisplayText.innerText.split(" -> ")[0].split(".")[1]
        );
        var endYear = parseInt(
          this.gDisplayText.innerText.split(" -> ")[1].split(".")[1]
        );
  
  
        var startPeriod = parseInt(
          this.gDisplayText.innerText.split(" -> ")[0].split(".")[0]
        );
        var endPeriod = parseInt(
          this.gDisplayText.innerText.split(" -> ")[1].split(".")[0]
        );
  
        var leftAction = "";
        var rightAction = "";
  
        if (leftYear === startYear && leftYear === endYear) {
          leftAction = "both";
        } else if (leftYear === startYear) {
          leftAction = "start";
        } else if (leftYear === endYear) {
          leftAction = "end";
        } else {
          leftAction = "nothing";
        }
  
        if (rightYear === startYear && rightYear === endYear) {
          rightAction = "both";
        } else if (rightYear === startYear) {
          rightAction = "start";
        } else if (rightYear === endYear) {
          rightAction = "end";
        } else {
          rightAction = "nothing";
        }
  
  
        var tempArray=[]

        for (var i = 0; i < this.weekButtons.length; i++) {
         if(!this.weekButtons[i].innerText.length<1){
           // console.log(this.weekButtons[i]);
            tempArray.push(this.weekButtons[i])
          }
        }
  console.log("temparat len = "+ tempArray.length);
        for (var i = 0; i < tempArray.length; i++) {
          var leftrightSideIndex = 0 
          var temp = tempArray[i].id;
          if (temp.indexOf("Left") !== -1){
            leftrightSideIndex =1
          }else{
            leftrightSideIndex=-51
          }

          

          var buttonPeriod = i+leftrightSideIndex;
          if (temp.indexOf("Left") !== -1) {
            if (leftAction === "start") {
              if (buttonPeriod < startPeriod) {
              } else if (buttonPeriod === startPeriod) {
                tempArray[i].classList.add("periodSelectStartLight");
              } else if (buttonPeriod > startPeriod) {
                tempArray[i].classList.add("periodSelectBetweenLight");
              }
            } else if (leftAction === "end") {
              if (buttonPeriod < endPeriod) {
                tempArray[i].classList.add("periodSelectBetweenLight");
                
              } else if (buttonPeriod === endPeriod) {
                tempArray[i].classList.add("periodSelectEndDark");
                
              } else if (buttonPeriod > endPeriod) {
              }
            } else if (leftAction === "both") {
              if (buttonPeriod === 1) {
                tempArray[i].classList.add("periodSelectStartLight");
              } else if (buttonPeriod === 52) {
                tempArray[i].classList.add("periodSelectEndDark");
              } else {
                tempArray[i].classList.add("periodSelectBetweenLight");
              }
            }
          } else {
            if (rightAction === "start") {
              if (buttonPeriod < startPeriod) {
              } else if (buttonPeriod === startPeriod) {
                tempArray[i].classList.add("periodSelectStartLight");
              } else if (buttonPeriod > startPeriod) {
                tempArray[i].classList.add("periodSelectBetweenLight");
              }
            } else if (rightAction === "end") {
              if (buttonPeriod < endPeriod) {
                tempArray[i].classList.add("periodSelectBetweenLight");
              } else if (buttonPeriod === endPeriod) {
                tempArray[i].classList.add("periodSelectEndDark");
              } else if (buttonPeriod > endPeriod) {
              }
            } else if (rightAction === "both") {
              if (buttonPeriod === 1) {
                tempArray[i].classList.add("periodSelectStartLight");
              } else if (buttonPeriod === 52) {
                tempArray[i].classList.add("periodSelectEndDark");
              } else {
                tempArray[i].classList.add("periodSelectBetweenLight");
              }
            }
          }
        
      }
  
      }

      getPeriodStartWeek(period, year){
        var result = 0;
        var selectedPeriod = parseInt(period);
        var startPeriod = 0;

        if (selectedPeriod >= 1 && selectedPeriod <= 4) {
          startPeriod = 1;
        } else if (selectedPeriod >= 5 && selectedPeriod <= 9) {
          startPeriod = 5;
        } else if (selectedPeriod >= 10 && selectedPeriod <= 13) {
          startPeriod = 10;
        } else if (selectedPeriod >= 14 && selectedPeriod <= 17) {
          startPeriod = 14;
        } else if (selectedPeriod >= 18 && selectedPeriod <= 22) {
          startPeriod = 18;
        } else if (selectedPeriod >= 23 && selectedPeriod <= 26) {
          startPeriod = 23;
        } else if (selectedPeriod >= 27 && selectedPeriod <= 30) {
          startPeriod = 27;
        } else if (selectedPeriod >= 31 && selectedPeriod <= 35) {
          startPeriod = 31;
        } else if (selectedPeriod >= 36 && selectedPeriod <= 39) {
          startPeriod = 36;
        } else if (selectedPeriod >= 40 && selectedPeriod <= 43) {
          startPeriod = 40;
        } else if (selectedPeriod >= 44 && selectedPeriod <= 48) {
          startPeriod = 44;
        } else if (selectedPeriod >= 49 && selectedPeriod <= 52) {
          startPeriod = 49;
        }

        // change for finance change for 544
        if (year == "2022") {
          if (selectedPeriod >= 1 && selectedPeriod <= 5) {
            startPeriod = 1;
          } else if (selectedPeriod >= 6 && selectedPeriod <= 9) {
            startPeriod = 6;
          }
        }

        result = startPeriod;

        //APPLICATION.log("WeekSelector - GLOBAL_SCRIPTS_1.getPeriodStartWeek: " + year);

        return result;
      }
  

    
    setSingleWeek(){
      this._setWeekRange(this._getSelectedPeriod(thisButton), this._getSelectedPeriod(thisButton));
    }

    setWeekRange(startPeriodYear,endPeriodYear){

      var startPeriod = parseInt(startPeriodYear.split(Delimiter)[0]);
      var startYear = parseInt(startPeriodYear.split(Delimiter)[1]);

      var endPeriod = parseInt(endPeriodYear.split(Delimiter)[0]);
      var endYear = parseInt(endPeriodYear.split(Delimiter)[1]);

      var thisbuttonStart = this.weekButtons[0];
      var thisbuttonStartIndex = 0;
      var thisbuttonEnd = this.weekButtons[0];
      var thisbuttonEndIndex = 0;

      this._clearPeriodCSS();
      //GLOBAL_SCRIPTS_1.clearSelections();

      if (this.activeButton.id == "YTD" || this.activeButton.id == "MAT" || this.activeButton.id == "PTD" ) {
      //	startPeriod = endPeriod;
        startYear = endYear;
      }

      // if (startYear === endYear) {
      //   TEXT_LEFT_YEAR.setText(endYear - 1 + "");
      //   TEXT_RIGHT_YEAR.setText(endYear + "");
      //   thisbuttonStartIndex = startPeriod + 51;
      //   thisbuttonEndIndex = endPeriod + 51;
      // } else {
      //   TEXT_LEFT_YEAR.setText(startYear + "");
      //   TEXT_RIGHT_YEAR.setText(endYear + "");
      //   thisbuttonStartIndex = startPeriod - 1;
      //   thisbuttonEndIndex = endPeriod + 51;
      //   }


      if (gTimeframe == "DET") {
        this._buttonClicked(this.weekButtons[thisbuttonStartIndex]);
        this._buttonClicked(this.weekButtons[thisbuttonEndIndex]);
      } else {
        this._buttonClicked(this.weekButtons[thisbuttonEndIndex]);
      }
    }
      

         //formats the period into the right format depedning on the button picked 
        _getSelectedPeriod(thisButton) {

          
          var selectedPeriod = thisButton.innerText;
           var buttonName = thisButton.id;
          // var selectedPeriod = buttonName.split("_")[1];
          var year = "";
          var periodYear = "";

          if (buttonName.indexOf("Left") !== -1) {
            year = this.prevoiusbuttonText.innerText || this.prevoiusbuttonText.textContent
          } else {
            year = this.nextbuttonText.innerText || this.nextbuttonText.textContent
          }

          periodYear = "00" + selectedPeriod + "." + year;
          periodYear = periodYear.substring(periodYear.length, gPeriodCharLength);
          //APPLICATION.createErrorMessage(buttonName + " - " + periodYear);
          return periodYear;
        }

        _checkPopulatedPeriods() {
          
          var result = "";
          if (this.gStartPeriod !== "" && this.gEndPeriod !== "") {
            result = "both";
          } else if (this.gEndPeriod !== "") {
            result = "end";
          } else if (this.gStartPeriod !== "") {
            result = "start";
          } else {
            result = "";
          }
          return result;
        }

        _setDateText(gDisplayText) {
          var populatedPeriods = this._checkPopulatedPeriods();
          if (populatedPeriods === "both") {
            if (this.gDateFormat === "MY") {
              // DatesPickedText_MP.applyText(gStartPeriod + "  ->  " + gEndPeriod);
            } else {
              //  DatesPickedText_MP.applyText(gYMStartPeriod + "  ->  " + gYMEndPeriod);
            }
            this.gDisplayText.innerText = this.gStartPeriod + "  ->  " + this.gEndPeriod;
            var matchstart = this.gStartPeriod.replace(/^0*(\d{2})\.(\d{4})$/, '$1.$2');
            var matchend = this.gEndPeriod.replace(/^0*(\d{2})\.(\d{4})$/, '$1.$2');
            this.gFromDate.value = matchstart;
            this.gToDate.value = matchend;
    
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
              detail: {
                properties: {
                  startPeriod: this.startPeriod,
                  endPeriod: this.endPeriod,
                  startWeek: this.startWeek,
                  startYear: this.startYear,
                  endWeek: this.endWeek,
                  endYear: this.endYear,
                 // selectedTimeFrame: this.selectedTimeFrame
                }
              }
            }));
           }
          else if (populatedPeriods === "start") {
            if (this.gDateFormat === "MY") {
              //  DatesPickedText_MP.applyText(gStartPeriod + "  ->  " + "select end");
            } else {
              //  DatesPickedText_MP.applyText(gYMStartPeriod + "  ->  " + "select end");
            }
            this.gDisplayText.innerText = this.gStartPeriod + "  ->  " + "select end";
            var matchstart = this.gStartPeriod.replace(/^0*(\d{2})\.(\d{4})$/, '$1.$2');
            this.gFromDate.value = matchstart;
            this.gToDate.value = "To Date";
          }
          else if (populatedPeriods === "") {
            //DatesPickedText_MP.applyText("Select Dates...");
            this.gDisplayText.innerText = "Select Dates...";
            this.gFromDate.value = "From Date";
            this.gToDate.value = "To Date";
          }
    
        }

       

            /*method to check json file to see if the next / previous year had a format other than 4-5-4
              *pass the year you want to check as a parmater 
              *
            */


        async checkJsonFileforYearFormat(year,weekButtons){
           
            console.log("checkJsonFileforYearFormat called start ");
            var Counter = 0; //counts the grid boxes used
            var weekCount = 1; //counts the weeks being populated up to 52

            const response = await fetch('https://kerry-bi.github.io/Week_Range_Selector/yearformat.json');
            const jsonData = await response.json();

         
          if(this.arrayOfExeptionYears.length<=0){
          // Transform the data 
          this.arrayOfExeptionYears= this.transformData(jsonData);
          console.log("transformedData");
          console.log(this.arrayOfExeptionYears);
          }
    
              // Process the JSON data here
              if (jsonData.years.hasOwnProperty(year)) {
                // If the year exists, return the months as an array
               // console.log(Object.keys(jsonData.years[year].months));
               // console.log(Object.values(jsonData.years[year].months));
               Counter = 0; //counts the grid boxes used
                weekCount = 1; //counts the weeks being populated up to 52

                //go through the json months data to see if each month is 4 or 5 weeks
                 for(let x=0;x<Object.values(jsonData.years[year].months).length;x++){
                   //if month is = 4
                   if(Object.values(jsonData.years[year].months)[x]===4){
                    for(var y=Counter;y<Counter+4;y++){
                      weekButtons[y].innerText=weekCount;
                      weekButtons[y].classList.add("week");
                      
                    
                      weekCount++
                    }
                    Counter= Counter+5;  
                   }else if(Object.values(jsonData.years[year].months)[x]===5){
                    for(var z=Counter;z<Counter+5;z++){
                      weekButtons[z].innerText=weekCount;
                      weekButtons[z].classList.add("week");
                      weekCount++;
                    }
                    Counter= Counter+5;
                   }
                 }
              } else {
                var j=0
                Counter = 0; //counts the grid boxes used
                weekCount = 1; //counts the weeks being populated up to 52
                // If the year doesn't exist, populate normally as 4-5-4
                //do 4 loops of a 4-5-4 format to populate the 52 weeks
                for(var k=0;k<4;k++){
                  
                  for(j=Counter;j<Counter+4;j++){
                    console.log("j ex1 = "+j);
                    weekButtons[j].innerText=weekCount;
                    weekButtons[j].classList.add("week");
                    weekCount++
                  }
                  Counter= Counter+5;
                  for(j=Counter;j<Counter+5;j++){
                    weekButtons[j].innerText=weekCount;
                    weekButtons[j].classList.add("week");
                    weekCount++
                  }
                  Counter= Counter+5;
                  for(j=Counter;j<Counter+4;j++){
                    weekButtons[j].innerText=weekCount;
                    weekButtons[j].classList.add("week");
                    weekCount++
                  }
                  Counter= Counter+5;
                }
                
              }
            
            console.log("checkJsonFileforYearFormat called end ");
            //this.checkWeekBoxes(weekButtons)
         //   this._clearPeriodCSS();
         this.clearAllWeekBoxes

         
        }

        transformData = (jsonData) => {
          const result = [];
          for (const [year, yearData] of Object.entries(jsonData.years)) {
              const months = yearData.months;
              const monthValues = Object.values(months);
              result.push([parseInt(year), monthValues]);
          }
          return result;
      }

    

        _calcPeriodOffset(periodYear, numYears, numPeriods) {
          var result = [""];
          result.pop();
    
          var year = parseInt(periodYear.split(".")[1]);
          var period = parseInt(periodYear.split(".")[0]);
    
          var maxYear = year + numYears;
          var minYear = year - numYears;
    
          var maxPeriod = period + numPeriods;
          var minPeriod = period - numPeriods;
    
          if (maxPeriod > 52) {
            maxPeriod = maxPeriod - 52;
            maxYear = maxYear + 1;
          }
    
          if (minPeriod < 1) {
            if (minPeriod < 0) {
              minPeriod = minPeriod * -1;
            }
            minPeriod = 52 - minPeriod;
            minYear = minYear - 1;
          }
    
          var minPeriodYear = (minPeriod).toString() + "." + (minYear).toString();
          var maxPeriodYear = (maxPeriod).toString() + "." + (maxYear).toString();
    
          //APPLICATION.createErrorMessage("startPeriodYear: " + periodYear);
          //APPLICATION.createErrorMessage("minPeriodYear: " + minPeriodYear);
          //APPLICATION.createErrorMessage("maxPeriodYear: " + maxPeriodYear);
    
          result.push(minPeriodYear);
          result.push(maxPeriodYear);
    
    
          return result;
        }
    
        _calcWeeksYears(numberOfWeeks) {
          var result = [0];
    
          result.pop();
    
          var years = 0;
          var Weeks = 0;
    
          //numberOfWeeks = numberOfWeeks - 1;
    
          if (numberOfWeeks >= 0) {
            years = Math.floor(numberOfWeeks / 52);
            Weeks = numberOfWeeks - years * 52;
          }
    
    
          result.push(years);
          result.push(Weeks);
    
          return result;
        }

        onCustomWidgetBeforeUpdate(changedProperties) {
          this._props = { ...this._props, ...changedProperties };
        }

        
    get startPeriod() {
      return this.gStartPeriod;
    }

    get endPeriod() {
      return this.gEndPeriod;
    }
    get startWeek() {
      return this._getWeek(this.gStartPeriod);
    }
    get endWeek() {
      return this._getWeek(this.gEndPeriod);
    }
    get startYear() {
      return this._getYear(this.gStartPeriod);
    }
    get selectedTimeFrame() {
      return this.activeButton.id;
    }


    get endYear() {
      return this._getYear(this.gEndPeriod);
    }
    get activeButtonID() {
      return this.activeButton.id;
    }

    
    _getWeek(startperiod) {
      var result = "";
      var inputString = startperiod;
      var regex = /(.{2})\./; // This regex captures the first 2 characters before a dot (.)

      var match = inputString.match(regex);

      if (match) {
        result = match[1]; // Get the first captured group
      } else {

      }
      return result;
    }

    _getYear(endperiod) {
      var result = "";
      var inputString = endperiod;
      var regex = /\.(.{4})/; // This regex matches a period followed by any 4 characters

      var match = regex.exec(inputString);

      if (match) {
        result = match[1];
      } else {
        console.log("No match found.");
      }
      return result;
    }

    _updateSelectedOptionOnResetAction(button1) {
  
      if (this.activeButton !== null) {
        this.activeButton.classList.remove("active");
      }
      if (this.activeButton !== button1) {
        button1.classList.add("active");
        this.activeButton = button1;
      } else {
        //this.activeButton = null;
        button1.classList.add("active");
      }


      this._setDateText();
    }
    
      async  onCustomWidgetAfterUpdate(changedProperties, gDisplayText, prevoiusbuttonText, nextbuttonText) {

          //checks options in the array of the options porperty to see what is missing. if one of the options is missing it then removes the button from the html code 
          if ("options" in changedProperties) {
            var options = changedProperties["options"];
            if(!options.includes('YTD')){
              this._YTDButton.parentNode.removeChild(this._YTDButton);
            }
            if(!options.includes('DET')){
              this.DetailButton.parentNode.removeChild(this.DetailButton);
            }
            if(!options.includes('MAT')){
              this.MATButton.parentNode.removeChild(this.MATButton);
            }
            if(!options.includes('QTD')){
              this.QTDButton.parentNode.removeChild(this.QTDButton);
            }
            if(!options.includes('MQT')){
              this.MQTButton.parentNode.removeChild(this.MQTButton);
            }
            if(!options.includes('PTD')){
              this.SingleWeekButton.parentNode.removeChild(this.SingleWeekButton);
            }
    
            //change the height of the ther option buttons left to evenly fill the column height they are sitting in 
            switch(options.length) {
              case 1:
                for(var i = 0; i < this.optionsbuttons.length; i++) {
                  this.optionsbuttons[i].style.height = '189%'; // Change '50px' to the height you want
              }
                break;
              case 2:
                for(var i = 0; i < this.optionsbuttons.length; i++) {
                  this.optionsbuttons[i].style.height = '284%'; // Change '50px' to the height you want
              }
                
                break;
              case 3:
                for(var i = 0; i < this.optionsbuttons.length; i++) {
                  this.optionsbuttons[i].style.height = '189%'; // Change '50px' to the height you want
              }
                
                break;
              case 4:
                for(var i = 0; i < this.optionsbuttons.length; i++) {
                  this.optionsbuttons[i].style.height = '142%'; // Change '50px' to the height you want
              }
                break;
              case 5:
                for(var i = 0; i < this.optionsbuttons.length; i++) {
                  this.optionsbuttons[i].style.height = '113%'; // Change '50px' to the height you want
              }
                break;
              case 6:
                // Select all elements with the class 'button'
                for(var i = 0; i < this.optionsbuttons.length; i++) {
                  this.optionsbuttons[i].style.height = '94%'; // Change '50px' to the height you want
              }
                
                break;
              default:
                console.log("The array has more than 6 elements or is empty.");
            }
          }
    
          if ("showApplyButton" in changedProperties) {
            var temp = changedProperties["showApplyButton"];
            if (temp === true) {
              this.applyButton.style.visibility = 'visible';
            } else {
              this.applyButton.style.visibility = 'hidden';
            }
          }
    
          // }
          if ("startPeriod" in changedProperties) {
            this.gStartPeriod = changedProperties["startPeriod"];
            // this._toggleOptionButton(changedProperties["selectedTimeFrame"],this.gDisplayText)
            this._clearPeriodCSS();
            this._setDateText(this.gDisplayText);
      
            this.clearAllWeekBoxes(this.weekButtons);
      
             await this.checkJsonFileforYearFormat(this.currentYear - 1,buttonLeftElements);
             await this.checkJsonFileforYearFormat(this.currentYear,buttonRightElements);
             
             this.checkWeekBoxes(this.weekButtons);
            this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
          }
    
          if ("endPeriod" in changedProperties) {
            console.log("END PERIOD SELECTED ");
            this.gEndPeriod = changedProperties["endPeriod"];
            // this._toggleOptionButton(changedProperties["selectedTimeFrame"],this.gDisplayText)
            this.startPeriodSAC=this.gStartPeriod;
            this.endPeriodSAC=this.gEndPeriod;
          
    
            this.dispatchEvent(new CustomEvent("propertiesChanged", {
              detail: {
                properties: {
                  startPeriod: this.startPeriod,
                  endPeriod: this.endPeriod,
                  startWeek: this.startWeek,
                  startYear: this.startYear,
                  endWeek: this.endWeek,
                  endYear: this.endYear,
                }
              }
            }));

            this.clearAllWeekBoxes(this.weekButtons);
      
            await  this.checkJsonFileforYearFormat(this.currentYear - 1,buttonLeftElements);
            await  this.checkJsonFileforYearFormat(this.currentYear,buttonRightElements);
           
           this.checkWeekBoxes(this.weekButtons);
      this._setCSSBetween(this.gDisplayText, this.prevoiusbuttonText, this.nextbuttonText);
            console.log("NEW START AND END  = "+ this.startPeriod +" - "+ this.endPeriod);
          }
    
          if ("selectedTimeFrame" in changedProperties) {
            
         
        var time = changedProperties["selectedTimeFrame"];
        console.log("SELECTED TIME FRAME IN CHANGED PROPS. = "+ time);
        if (time === "YTDButton") {
          this._updateSelectedOptionOnResetAction(this.YTDButton);
        } else if (time === "DETButton") {
          this._updateSelectedOptionOnResetAction(this.DetailButton);
        } else if (time === "MATButton") {
          this._updateSelectedOptionOnResetAction(this.MATButton);
        } else if (time === "QTDButton") {
          this._updateSelectedOptionOnResetAction(this.QTDButton);
        } else if (time === "MQTButton") {
          this._updateSelectedOptionOnResetAction(this.MQTButton);
        } else if (time === "PTDButton") {
          this._updateSelectedOptionOnResetAction(this.SingleWeekButton);
        } else {
        }


            this.ResetActiveButton=this.activeButton;
        console.log("Selted time frame = "+this.activeButton)
          }
    
          //only do if apply button is hidden and you want to apply the new dates range
    
          if ("selectedAction" in changedProperties) {

            console.log("changedProperties[selectedAction] = "+changedProperties["selectedAction"]);
           if(changedProperties["selectedAction"]==="Reset"){
                this._submitReset();   
                }
                else if(changedProperties["selectedAction"]==="Apply"){
                  console.log("APPLY CLICKED")
                  this._submitApply();
              }
           
    
        }
        }
        
    }


      customElements.define('week-range-selector', WeekRangeSelector)
    })()
