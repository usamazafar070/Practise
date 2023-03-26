import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/MainHeader";
import PropsComponent from "./Components/Body/PropsComponent";
import StateClassComponent from "./Components/Body/StateWithClassComponent";
import StateWithFunctionalComponent from "./Components/Body/StateWithFunctionalComponent";
import AdminDBMS from "./SchoolDBMS/AdminDBMS";
import Teacher from "./Components/ContextAPI/Teacher";
import Parents from "./Components/ContextAPI/Parents";
import ParentsDBMS from "./SchoolDBMS/ParentsDBMS";
import Administator from "./Components/ContextAPI/Administator";
import TeacherDBMS from "./SchoolDBMS/TeacherDBMS";
import StudentDBMS, { StudentInfo } from "./SchoolDBMS/StudentDBMS";
import Student from "./Components/ContextAPI/Student";
import ComponentA from "./Components/Context2/ComponentA";
import Services from "./Components/Body/Services";
import Signup from "./Components/Formik Form/Login System/Signup";
import NewLogin from "./Components/Formik Form/Login System/NewLogin";
const Codentire = () => {
  // Array
  let demoArray = [
    {
      name: "Usama Zafar",
      email: "usamazafar@gmail.com",
      count: 0,
    },
  ];

  // localStorage.setItem("userData", JSON.stringify({ name: "bilal" }));

  // console.log(JSON.parse(localStorage.getItem("userData")));

  // localStorage.removeItem('userData')

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/newlogin" element={<NewLogin/>}/>
      </Routes>
      {/* <PropsComponent array={demoArray} />
      <StateClassComponent />
      <StateWithFunctionalComponent array={demoArray} />
      <AdminDBMS>
        <TeacherDBMS>
          <ParentsDBMS>
            <StudentDBMS>
              <Administator />
              <Teacher />
              <Parents />
              <Student />
            </StudentDBMS>
          </ParentsDBMS>
        </TeacherDBMS>
      </AdminDBMS> */}
    </div>
  );
};

export default Codentire;