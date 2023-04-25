    {
        "employees"; [ //problem 1
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
            "firstName": "Anna", //problem 3
            "department": "Tech",
            "designation": "Executive",
            "salary": 25600,
            "raiseEligible": false
          }
        ],
        "company"; [ //problem 2
          {
          "companyName": "Tech Stars",
          "website": "www.techstars.site",
          "employees": "array of Employees"
          }
        ]
      }
      
    const employeeJSON = JSON.stringify(employees)  //problem 4
    const employee_object = JSON.parse(employeeJSON);
    const totalSalary = 0;

    function raise(boolean, salary){ //problem 5
        if (boolean = TRUE){
            salary += (salary * .1);
            return salary;
        }
    }

    function wfh(names) //problem 6

    for(var i in employee_object){
            totalSalary += employee_object[i].salary;
            if(employee_object[i].raiseEligible == TRUE){
                employee_object[i].salary = raise(employee_object[i].raiseEligible, employee_object[i].salary);
            };
    }


    console.log(totalSalary);