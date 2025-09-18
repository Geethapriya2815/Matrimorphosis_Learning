class Employee<T> {
  listOfUsers: T[] = [];
  addUser(userData: T) {
    this.listOfUsers.push(userData);
  }
  printListOfUsers() {
    console.log(this.listOfUsers);
  }
}
class FTE {
  empNo: number;
  empName: string;

  constructor(empNo: number, empName: string) {
    this.empNo = empNo;
    this.empName = empName;
    // this.empDesignation = empDesignation
  }
}
class Interns {
  internCode: number;
  internName: string;
  reportingManager: string;
  constructor(
    internCode: number,
    internName: string,
    reportingManager: string
  ) {
    this.internCode = internCode;
    this.internName = internName;
    this.reportingManager = reportingManager;
  }
}

let fte1 = new FTE(100, "Sudha");
let fte2 = new FTE(100, "GeethaPriya");
let fte3 = new FTE(100, "Hari");

let in1 = new Interns(1001, "Aravind", "Interns");
let in2 = new Interns(1002, "Aayush", "Interns");
let in3 = new Interns(1003, "Ajay", "Interns");

let empobj = new Employee<FTE>();
empobj.addUser(fte1);
empobj.addUser(fte2);
empobj.addUser(fte3);

empobj.printListOfUsers();
let empInterns = new Employee<Interns>();
empInterns.addUser(in1);
empInterns.addUser(in2);
empInterns.addUser(in3);

empInterns.printListOfUsers();
