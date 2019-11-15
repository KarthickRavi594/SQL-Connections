var insert_Student_Details = "insert into Student_Details(StudentId,StudentCode,StudentName,DateOfBirth,Address_1,Address_2,CountryId,StateId,CityId,DepartmentId,Pincode,PhoneNumber,MobileNumber) values ('12','122','Shiva','','aaa','null','1','12','22','4','600028','0441234566','1234567890');"

var insert_Country_Master = "insert into Country_Master(CountryId,CountryName) values('1','India');"

var insert_State_Master = "insert into State_Master(StateId,StateName,CountryId) values('1','TamilNadu','1');"

var insert_City_Master = "insert into City_Master(CityId,CityName,StateId) values('1','Chennai','1');"

var insert_Department_Master = "insert into Department_Master(DepartmentId,Department_Name) values('1','Masters');"

var insert_Subject_Master = "insert into Subject_Master(SubjectId,SubjectName) values('1','Maths');"

var insert_Mark_Details = "insert into Mark_Details(MarkId,StudentId,SubjectId,TotalMark) values('1','1','1','90');"

module.exports = {
    insert_Student_Details : insert_Student_Details,
    insert_Country_Master : insert_Country_Master,
    insert_State_Master : insert_State_Master,
    insert_City_Master : insert_City_Master,
    insert_Department_Master : insert_Department_Master,
    insert_Subject_Master : insert_Subject_Master,
    insert_Mark_Details : insert_Mark_Details
}