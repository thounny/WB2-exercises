const studentName = "Jordan";

const BIOL = "Biology";
const CSCI = "Computer Science";
const ENG = "English";
const HIST = "History";
const MKT = "Marketing";

const studentMajor = ENG; // major code

switch (studentMajor) {
  case BIOL:
    console.log("Student: " + studentName);
    console.log("Major: " + studentMajor);
    console.log("Advising Location: Science Bldg, Room 310");
    break;

  case CSCI:
    console.log("Student: " + studentName);
    console.log("Major: " + studentMajor);
    console.log("Advising Location: Sheppard Hall, Room 314");
    break;

  case ENG:
    console.log("Student: " + studentName);
    console.log("Major: " + studentMajor);
    console.log("Advising Location: Kerr Hall, Room 201");
    break;

  case HIST:
    console.log("Student: " + studentName);
    console.log("Major: " + studentMajor);
    console.log("Advising Location: Kerr Hall, Room 114");
    break;

  case MKT:
    console.log("Student: " + studentName);
    console.log("Major: " + studentMajor);
    console.log("Advising Location: Westly Hall, Room 310");
    break;

  default:
    console.log("<Unknown>");
    console.log("<Unknown>");
    break;
}
