function createEmployeeIDCard<T>(
  empCode: T,
  bloodgroup: string,
  emergencyContactNumber: number
) {
  //logic to create employee card with empno, blood group
  console.log(`Employee code = ${empCode}`);
  console.log(`Blood group = ${bloodgroup}`);
  console.log(`Emergency Contact Number = ${emergencyContactNumber}`);
}

createEmployeeIDCard<number>(1001, "A+ve", 8998797987);
createEmployeeIDCard<string>("G1001", "A+ve", 8998797987);
