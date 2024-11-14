// localStorage.clear()


const employees = [
  {
      id: 1,
      firstName: "Amit",
      email: "e@e.com",
      password: "123",
      taskNumber: {
          active: 1,
          newTask: 1,
          completed: 1,
          failed: 0
      },
      tasks: [
          {
              active: true, 
              newTask: true,
              completed: false,
              failed: false,
              title: "Task 1",
              description: "Complete the client report.",
              date: "2024-11-10",
              category: "Reporting"
          },
          {
              active: false,
              newTask: false,
              completed: true,
              failed: false,
              title: "Task 2",
              description: "Prepare presentation slides.",
              date: "2024-10-30",
              category: "Presentation"
          }
      ]
  },
  {
      id: 2,
      firstName: "Ravi",
      email: "employee2@example.com",
      password: "123",
      taskNumber: {
          active: 1,
          newTask: 1,
          completed: 0,
          failed: 0
      },
      tasks: [
          {
              active: true,
              newTask: true,
              completed: false,
              failed: false,
              title: "Task 1",
              description: "Update website content.",
              date: "2024-11-12",
              category: "Website Management"
          }
      ]
  },
  {
      id: 3,
      firstName: "Neha",
      email: "employee3@example.com",
      password: "123",
      taskNumber: {
          active: 1,
          newTask: 1,
          completed: 0,
          failed: 1
      },
      tasks: [
          {
              active: false,
              newTask: false,
              completed: false,
              failed: true,
              title: "Task 1",
              description: "Fix bugs in the application.",
              date: "2024-11-01",
              category: "Development"
          },
          {
              active: true,
              newTask: true,
              completed: false,
              failed: false,
              title: "Task 2",
              description: "Plan the new marketing strategy.",
              date: "2024-11-15",
              category: "Marketing"
          }
      ]
  },
  {
      id: 4,
      firstName: "Priya",
      email: "employee4@example.com",
      password: "123",
      taskNumber: {
          active: 1,
          newTask: 1,
          completed: 0,
          failed: 0
      },
      tasks: [
          {
              active: true,
              newTask: true,
              completed: false,
              failed: false,
              title: "Task 1",
              description: "Organize the team meeting.",
              date: "2024-11-13",
              category: "Administration"
          }
      ]
  },
  {
      id: 5,
      firstName: "Rahul",
      email: "employee5@example.com",
      password: "123",
      taskNumber: {
          active: 0,
          newTask: 0,
          completed: 1,
          failed: 0
      },
      tasks: [
          {
              active: false,
              newTask: false,
              completed: true,
              failed: false,
              title: "Task 1",
              description: "Submit monthly budget report.",
              date: "2024-10-28",
              category: "Finance"
          }
      ]
  }
];  
const admin = [{
  id: 1,
  email: "admin@me.com",
  password: "123"
}];
  
export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return{employees,admin};
}