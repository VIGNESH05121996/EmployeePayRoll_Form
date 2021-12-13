//UC12-on Document Load Set Event Listener
window.addEventListener('DOMContentLoaded',(event)=>{
    const name = document.querySelector('#name') ;
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.value;;
            textError.textContent="";
        }
        catch(e){
            textError.textContent=e;
        }
    });

   const salary=document.querySelector('#salary');
   const output=document.querySelector('.salary-output');
   output.textContent=salary.value;
   salary.addEventListener('input',function(){
       output.textContent=salary.value;
   });
});

//UC13-On Save Create Employee Payroll Object
const save=()=>{
    try{

        let employeePayrollData=createEmployeePayroll();
    }
    catch(e)
    {
        return;
    }
}

const createEmployeePayroll=()=>{
    let employeePayrollData=new EmployeePayrollData();
    try{
        //let employeePayrollData=new EmployeePayrollData();
        employeePayrollData.name=getInputValueById('#name');
    }
    catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayrollData.profilePic=getSelectedvalues('[name=profile]').pop();
    employeePayrollData.gender=getSelectedvalues('[name=gender]').pop();
    employeePayrollData.department=getSelectedvalues('[name=department]');
    employeePayrollData.salary=getSelectedvalues('#salary');
    employeePayrollData.note=getSelectedvalues('#note');
    let date=getInputValueId('#day')+" "+getInputValueId('#month')+" "+getInputValueId('#year');
    employeePayrollData.date=Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedvalues=(propertyValue)=>{
    let allItems=document.querySelectorAll(propertyValue);
    let selItems=[];
    allItems.forEach(item=>{
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById=(id)=>{
    let value=document.querySelector(id).value;
    return value;
}
