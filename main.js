(function () {
    const template = document.createElement('template')
    template.innerHTML = `
    <body>
    <div class="container">
        <div class="row row1">
            <div class="col">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="col">
                <div class="coltop"></div>
            </div>
            <div class="col">
                <div class="coltop"></div>
              <body>
    <div class="grid-container">
    <!-- Example for January -->
     <div class="grid-item month">January</div>
     <div id="buttonLeft_1" class="grid-item week">1</div>
     <div id="buttonLeft_2" class="grid-item week">2</div>
     <div id="buttonLeft_3" class="grid-item week">3</div>
     <div id="buttonLeft_4" class="grid-item week">4</div>
     <div id="buttonLeft_" class="grid-item"></div>
     <!-- Add more weeks for January -->
     
     <!-- Example for February -->
     <div class="grid-item month">February</div>
     <div id="buttonLeft_5" class="grid-item week">5</div>
     <div id="buttonLeft_6" class="grid-item week">6</div>
     <div id="buttonLeft_7" class="grid-item week">7</div>
     <div id="buttonLeft_8" class="grid-item week">8</div>
     <div id="buttonLeft_9" class="grid-item week">9</div>
 
         <!-- Example for February -->
     <div class="grid-item month">March</div>
     <div id="buttonLeft_10" class="grid-item week">10</div>
     <div id="buttonLeft_11" class="grid-item week">11</div>
     <div id="buttonLeft_12" class="grid-item week">12</div>
     <div id="buttonLeft_13" class="grid-item week">13</div>
     <div id="buttonLeft_" class="grid-item"></div>
   
         <!-- Example for april -->
     <div class="grid-item month">April</div>
     <div id="buttonLeft_14" class="grid-item week">14</div>
     <div id="buttonLeft_15" class="grid-item week">15</div>
     <div id="buttonLeft_16" class="grid-item week">16</div>
     <div id="buttonLeft_17" class="grid-item week">17</div>
     <div id="buttonLeft_" class="grid-item"></div>
   
        <!-- Example for May -->
     <div class="grid-item month">May</div>
     <div id="buttonLeft_18" class="grid-item week">18</div>
     <div id="buttonLeft_19" class="grid-item week">19</div>
     <div id="buttonLeft_20" class="grid-item week">20</div>
     <div id="buttonLeft_21" class="grid-item week">21</div>
     <div id="buttonLeft_22" class="grid-item week">22</div>
   
          <!-- Example for June -->
     <div class="grid-item month">June</div>
     <div id="buttonLeft_23" class="grid-item week">23</div>
     <div id="buttonLeft_24" class="grid-item week">24</div>
     <div id="buttonLeft_25" class="grid-item week">25</div>
     <div id="buttonLeft_26" class="grid-item week">26</div>
     <div id="buttonLeft_" class="grid-item"></div>
   
          <!-- Example for July-->
     <div class="grid-item month">July</div>
     <div id="buttonLeft_27" class="grid-item week">27</div>
     <div id="buttonLeft_28" class="grid-item week">28</div>
     <div id="buttonLeft_29" class="grid-item week">29</div>
     <div id="buttonLeft_30" class="grid-item week">30</div>
     <div id="buttonLeft_" class="grid-item"></div>
   
            <!-- Example for August-->
     <div class="grid-item month">August</div>
     <div id="buttonLeft_31" class="grid-item week">31</div>
     <div id="buttonLeft_32" class="grid-item week">32</div>
     <div id="buttonLeft_33" class="grid-item week">33</div>
     <div id="buttonLeft_34" class="grid-item week">34</div>
     <div id="buttonLeft_35" class="grid-item week">35</div>
   
              <!-- Example for September-->
     <div class="grid-item month">September</div>
     <div id="buttonLeft_36" class="grid-item week">36</div>
     <div id="buttonLeft_37" class="grid-item week">37</div>
     <div id="buttonLeft_38" class="grid-item week">38</div>
     <div id="buttonLeft_39" class="grid-item week">39</div>
     <div id="buttonLeft_" class="grid-item"></div>
   
                <!-- Example for October-->
     <div class="grid-item month">October</div>
     <div id="buttonLeft_40" class="grid-item week">40</div>
     <div id="buttonLeft_41" class="grid-item week">41</div>
     <div id="buttonLeft_42" class="grid-item week">42</div>
     <div id="buttonLeft_43" class="grid-item week">43</div>
     <div id="buttonLeft_" class="grid-item"></div>
   
                  <!-- Example for November-->
     <div class="grid-item month">November</div>
     <div id="buttonLeft_44" class="grid-item week">44</div>
     <div id="buttonLeft_45" class="grid-item week">45</div>
     <div id="buttonLeft_46" class="grid-item week">46</div>
     <div id="buttonLeft_47" class="grid-item week">47</div>
     <div id="buttonLeft_48" class="grid-item week">48</div>
   
                    <!-- Example for December-->
     <div class="grid-item month">December</div>
     <div id="buttonLeft_49" class="grid-item week">49</div>
     <div id="buttonLeft_50" class="grid-item week">50</div>
     <div id="buttonLeft_51" class="grid-item week">51</div>
     <div id="buttonLeft_52" class="grid-item week">52</div>
     <div id="buttonLeft_" class="grid-item"></div>
 </div>
            </div>
        </div>
        <div class="row row2">
            <div class="col"></div>
        </div>
    </div>
</body>


      
  
<style>
body {
    margin: 0;
    padding: 0;
}
.container {
    width: 700px;
    height: 340px;
    border: 1px solid black;
}
.row {
    display: flex;
}
.col {
    border: 1px solid black;
}
.coltop {
    border: 1px solid black;
height:20%;
width:100%;
}
.col:nth-child(1) {
    flex: 1;
    width: 20%;
}
.col:nth-child(2),
.col:nth-child(3) {
    flex: 2;
    width: 40%;
}
.row1 {
    height: 90%;
}
.row2 {
    height: 10%;
}
.row1 .col {
    display: flex;
    flex-direction: column;
}
.row1 .col:nth-child(1) {
    justify-content: space-between;
}
.row1 .col div {
    flex: 1;
    border: 1px solid black;
}
.row2 .col {
    height: 100%;
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

.monthitem{
width: 90px;
border: 1px solid #ccc;
}

.week{
width:30px;
border: 1px solid #ccc;
}
  </style>`;

  //var items;

  class WeekRangeSelector extends HTMLElement {

      
      constructor() {
          super(); 
          this._shadowRoot = this.attachShadow({mode: 'open'});
          this._shadowRoot.appendChild(template.content.cloneNode(true));
          //container for the drill path boxes 
          this._container = this._shadowRoot.getElementById('container');
  
        //  this._box1 = this._shadowRoot.getElementById('box1');
         
          //this._box1.addEventListener('click', this._buttonClicked.bind(this,this._box1));


  
      
          this.addEventListener("click", event => {
              var event = new Event("onClick");
              this.dispatchEvent(event);
          });

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



    }

      customElements.define('week-range-selector', WeekRangeSelector)
    })()
