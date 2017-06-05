

var employee={
    name: 'Kulldiep',
    age: 25,
    salary: '5 Lakhs',
    address: {
	 city: 'Chennai',
	 state: 'Tamilnadu',
	 pincode: '600082'	
	}
};
document.getElementById("myName").innerHTML = employee.name;
document.getElementById("myAge").innerHTML = employee.age;
document.getElementById("mySalary").innerHTML = employee.salary;
document.getElementById("myCity").innerHTML = employee.address.city;
document.getElementById("myState").innerHTML = employee.address.state;
document.getElementById("myPincode").innerHTML = employee.address.pincode;
