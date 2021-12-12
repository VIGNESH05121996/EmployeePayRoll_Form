//UC8-Event Listener for salary
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() 
{
    output.textContent = salary.value;
});