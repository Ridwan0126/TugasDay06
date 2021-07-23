import React, { Component } from "react";
import "../../App.css";
import Footer from "../Footer";
import "../HeroSection.css";

class Table extends Component {
  // constructor(props) {
  //   super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
  //   this.state = {
  //     //state is by default an object
  //     students: [
  //       {
  //         id: 1,
  //         name: "Fian Ilham Pratama",
  //         age: 21,
  //         email: "./images/amg1(1).png",
  //       },
  //       { id: 2, name: "Alfaizuna Aulia", age: 19, email: "ali@email.com" },
  //       { id: 3, name: "Jansen Stanlie", age: 16, email: "saad@email.com" },
  //       { id: 4, name: "Harry", age: 25, email: "asad@email.com" },
  //       { id: 5, name: "Eko Cahyanto", age: 21, email: "wasif@email.com" },
  //       {
  //         id: 6,
  //         name: "Muhammad Adzka Anshory",
  //         age: 19,
  //         email: "ali@email.com",
  //       },
  //       { id: 7, name: "Firdho Pratama", age: 16, email: "saad@email.com" },
  //       { id: 8, name: "Sefrinaldi", age: 25, email: "asad@email.com" },
  //       { id: 9, name: "Dimas Rosady", age: 16, email: "saad@email.com" },
  //       {
  //         id: 10,
  //         name: "Muhamad Nur Ridwan",
  //         age: 25,
  //         email: "asad@email.com",
  //       },
  //     ],
  //   };
  // }

  // renderTableData() {
  //   return this.state.students.map((student, index) => {
  //     const { id, name, age, email } = student; //destructuring
  //     return (
  //       <tr key={id}>
  //         <td>{id}</td>
  //         <td>{name}</td>
  //         <td>{age}</td>
  //         <td>{email}</td>
  //       </tr>
  //     );
  //   });
  // }

  // renderTableHeader() {
  //   let header = Object.keys(this.state.students[0]);
  //   return header.map((key, index) => {
  //     return <th key={index}>{key.toUpperCase()}</th>;
  //   });
  // }

  render() {
    return (
      <>
        <div className="sign-up">
          <h1 id="title">React Dynamic Table</h1>
          <table id="students">
            <thead>
              <th>No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Username</th>
              <th>Thumbnail</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Fian Ilham Pratama</td>
                <td>22</td>
                <td>Mr. Black</td>
                <td>
                  <img
                    src="https://i0.wp.com/teknokuys.com/wp-content/uploads/2020/12/1-4-300x300.jpg"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Alfaizuna Aulia</td>
                <td>25</td>
                <td>Mr. White</td>
                <td>
                  <img
                    src="https://i0.wp.com/teknokuys.com/wp-content/uploads/2020/12/1-11-300x300.jpg"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jansen Stanlie</td>
                <td>23</td>
                <td>Mr. Orange</td>
                <td>
                  <img
                    src="https://i0.wp.com/teknokuys.com/wp-content/uploads/2020/12/1-3-300x300.jpg"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Harry</td>
                <td>27</td>
                <td>Mr. Impostor</td>
                <td>
                  <img
                    src="https://i0.wp.com/teknokuys.com/wp-content/uploads/2020/12/1-9-300x300.jpg"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Eko Cahyanto</td>
                <td>30</td>
                <td>Mr. Yellow</td>
                <td>
                  <img
                    src="https://i0.wp.com/teknokuys.com/wp-content/uploads/2020/12/1-2-300x300.jpg"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Muhammad Adzka Anshory</td>
                <td>29</td>
                <td>Mr. Purple</td>
                <td>
                  <img
                    src="https://i0.wp.com/teknokuys.com/wp-content/uploads/2020/12/1-5-300x300.jpg"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Firdho Pratama</td>
                <td>24</td>
                <td>Mr. Brown</td>
                <td>
                  <img
                    src="https://i0.wp.com/teknokuys.com/wp-content/uploads/2020/12/1-12-300x300.jpg"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Sefrinaldi</td>
                <td>32</td>
                <td>Mr. Puples</td>
                <td>
                  <img
                    src="https://i0.wp.com/teknokuys.com/wp-content/uploads/2020/12/1-5-300x300.jpg"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>Dimas Rosady</td>
                <td>26</td>
                <td>Mr. Blue</td>
                <td>
                  <img
                    src="https://i0.wp.com/teknokuys.com/wp-content/uploads/2020/12/1-1-300x300.jpg"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>Muhamad Nur Ridwan</td>
                <td>20</td>
                <td>Mr. Yell_Die</td>
                <td>
                  <img
                    src="https://i0.wp.com/teknokuys.com/wp-content/uploads/2020/12/1-13-300x300.jpg"
                    alt=""
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Footer />
      </>
    );
  }
}

export default Table;

// export default function SignUp() {
//   return (
//     <>
//       <h1 className="sign-up">Belum Di Buat Guys</h1>
//       <Footer />
//     </>
//   );
// }
