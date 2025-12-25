import "./College.css";

function College() {
  let collegeData = [
    {
      name: "DY Patil College",
      city: "Kolhapur",
      website: "www.dypatil.com",
      student: [
        { name: "Aniket", age: 24, email: "aniket@123" },
      ],
    },
    {
      name: "KIT College",
      city: "Kolhapur",
      website: "www.kit.com",
      student: [
        { name: "Sachin", age: 23, email: "sachin@123" },
      ],
    },
    {
      name: "Barwale College",
      city: "Jalna",
      website: "www.barwale.com",
      student: [
        { name: "Vishal", age: 25, email: "vishal@123" },
      ],
    },
  ];

  return (
    <div className="page">
      <h1 className="title">College & Student Details</h1>

      {collegeData.map((college, index) => (
        <div className="card" key={index}>
          
          <h2 className="section-title">College</h2>
          <ul className="list">
            <li><strong>Name:</strong> {college.name}</li>
            <li><strong>City:</strong> {college.city}</li>
            <li><strong>Website:</strong> {college.website}</li>
          </ul>

          <h2 className="section-title">Students</h2>
          <ul className="list">
            {college.student.map((stu, i) => (
              <li key={i} className="student-box">
                <ul>
                  <li><strong>Name:</strong> {stu.name}</li>
                  <li><strong>Age:</strong> {stu.age}</li>
                  <li><strong>Email:</strong> {stu.email}</li>
                </ul>
              </li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
}

export default College;
