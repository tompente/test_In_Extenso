import React from 'react';
import './App.css';

function App() {

  function SelectAll(items) {

      for (var i = 0; i < items.length; i++) {
        if (items[i].type === 'checkbox' && items[i].checked === false) {
          items[i].checked = true;
        }
      }
    }

  function UNSelectAll(items) {

      for (var i = 0; i < items.length; i++) {
        if (items[i].type === 'checkbox' && items[i].checked === true) {
          items[i].checked = false;
        }
      }
  }

  function Select() {
    var all = document.getElementsByName('all');
    var items = document.getElementsByName('chck');
    
    if (all[0].checked === false) {
      UNSelectAll(items);
    } else {
      SelectAll(items);
    }
  }

  return (
    <div>
        <input type="checkbox" name="all" onClick={Select} value="Select All"></input> All <br></br>
        <input type="checkbox" name="chck" value="1"></input> 1 <br></br>
        <input type="checkbox" name="chck" value="2"></input> 2 <br></br>
        <input type="checkbox" name="chck" value="3"></input> 3 <br></br>
        <input type="checkbox" name="chck" value="4"></input> 4 <br></br>
    </div>
  );
}

export default App;
