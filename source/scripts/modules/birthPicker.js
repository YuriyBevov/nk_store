import customSelect from 'custom-select';

const birthFields = document.querySelectorAll('.custom-select-birth-controls');

if(birthFields.length) {
  birthFields.forEach(field => {
    const yearSelect = field.querySelector('.custom-select-byear');
    const monthSelect = field.querySelector('.custom-select-bmonth');
    const daySelect = field.querySelector('.custom-select-bday');
    
    function populateYears() {
      const date = new Date();
      const year = date.getFullYear();
    
      for(let i = 0; i <= 100; i++) {
        let option = document.createElement('option');
        option.textContent = year-i;
        yearSelect.appendChild(option);
      }
    }
    
    let sel;
    
    function populateDays(month) {
      while(daySelect.firstChild){
        daySelect.removeChild(daySelect.firstChild);
      }
    
      let dayNum;
    
      if(month === 'Январь' || month === 'Март' || month === 'Май' || month === 'Июль' || month === 'август' || month === 'Октябрь' || month === 'Декабрь') {
        dayNum = 31;
      } else if(month === 'Апрель' || month === 'Июнь' || month === 'Сентябрь' || month === 'Ноябрь') {
        dayNum = 30;
      } else {
        let year = yearSelect.value;
        let leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        dayNum = leap ? 29 : 28;
      }
    
      for(let i = 1; i <= dayNum; i++) {
        let option = document.createElement('option');
        option.textContent = i;
        daySelect.appendChild(option);
      }
    
      if(sel) {
          sel.forEach(i => {
              i.destroy();
          })
      }
      
      sel = customSelect('.custom-select-birth');
    }
  
    yearSelect.onchange = function() {
        populateDays(monthSelect.value);
    }
      
    monthSelect.onchange = function() {
        populateDays(monthSelect.value);
    }
    
    populateYears();
    populateDays('Январь');
  });
}
