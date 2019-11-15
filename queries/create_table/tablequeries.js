var Student_Details = "CREATE TABLE Student_Details ( StudentId int NOT NULL, StudentCode varchar(255) NOT NULL, StudentName varchar(255), DateOfBirth Date, Address_1 varchar(255), Address_2 varchar(255), CountryId int, StateId int, CityId int, DepartmentId int, Pincode int, PhoneNumber int unique, MobileNumber int unique, PRIMARY KEY (StudentId));"

var Country_Master = "CREATE TABLE Country_Master ( CountryId int NOT NULL, CountryName varchar(255) NOT NULL);"

var State_Master = "CREATE TABLE State_Master ( StateId int NOT NULL, StateName varchar(255) NOT NULL, CountryId int );"

var City_Master = "CREATE TABLE City_Master ( CityId int NOT NULL, CityName varchar(255) NOT NULL, StateId int);"

var Department_Master = "CREATE TABLE Department_Master ( DepartmentId int NOT NULL, Department_Name varchar(255) NOT NULL);"

var Subject_Master = "CREATE TABLE Subject_Master ( SubjectId int NOT NULL, PRIMARY KEY (SubjectId), SubjectName varchar(255) NOT NULL);"

var Mark_Details = "CREATE TABLE Mark_Details (MarkId int NOT NULL, StudentId int NOT NULL, SubjectId int NOT NULL, TotalMark float);"