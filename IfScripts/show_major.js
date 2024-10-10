const studentName = "Jordan";

const BIOL = "Biology";
const CSCI = "Computer Science";
const ENG = "English";
const HIST = "History";
const MKT = "Marketing";

const studentMajor = ENG; //major code

if (studentMajor === BIOL) {
  console.log("Student: " + studentName);
  console.log("Major: " + studentMajor);
  console.log("Advising Location: Science Bldg, Room 310");
} else if (studentMajor === CSCI) {
  console.log("Student: " + studentName);
  console.log("Major: " + studentMajor);
  console.log("Advising Location: Sheppard Hall, Room 314");
} else if (studentMajor === ENG) {
  console.log("Student: " + studentName);
  console.log("Major: " + studentMajor);
  console.log("Advising Location: Kerr Hall, Room 201");
} else if (studentMajor === HIST) {
  console.log("Student: " + studentName);
  console.log("Major: " + studentMajor);
  console.log("Advising Location: Kerr Hall, Room 114");
} else if (studentMajor === MKT) {
  console.log("Student: " + studentName);
  console.log("Major: " + studentMajor);
  console.log("Advising Location: Westly Hall, Room 310");
} else {
  console.log("Unknown");
  console.log("Unknown");
}
