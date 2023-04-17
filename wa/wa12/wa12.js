    {
        "employees"; [
          {
            "firstName": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true
          },
          {
            "firstName": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true
          },
          {
            "firstName": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false
          },
          {
            "firstName": "Anna",
            "department": "Tech",
            "designation": "Executive",
            "salary": 25600,
            "raiseEligible": false
          }
        ],
        "company"; [
          {
          "companyName": "Tech Stars",
          "website": "www.techstars.site",
          "employees": "array of Employees"
          }
        ]
      }
      
    const employeeJSON = JSON.stringify(employees)
    const employee_object = JSON.parse(employeeJSON);
    const totalSalary = 0;

    function raise(boolean, salary){
        if (boolean = TRUE){
            salary += (salary * .1);
            return salary;
        }
    }

    for(var i in employee_object){
            totalSalary += employee_object[i].salary;
            if(employee_object[i].raiseEligible == TRUE){
                employee_object[i].salary = raise(employee_object[i].raiseEligible, employee_object[i].salary);
            };
    }

    console.log(totalSalary);