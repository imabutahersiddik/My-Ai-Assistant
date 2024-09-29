import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";

export function YourComponent() {
  const users = [{ id: "1", name: "John Doe" }, { id: "2", name: "Jane Smith" }];

  // Define Copilot readable state
  useCopilotReadable({
    description: "List of available users",
    value: users,
  });

  // Define Copilot action
  useCopilotAction({
    name: "Select an employee",
    description: "Select an employee from the list",
    parameters: [
      {
        name: "employeeId",
        type: "string",
        description: "The ID of the employee to select",
        required: true,
      }
    ],
    handler: async ({ employeeId }) => {
      console.log(`Selected employee ID: ${employeeId}`);
      // Add logic to handle employee selection here
      alert(`You selected employee ID: ${employeeId}`);
    },
  });

  return (
    <div>
      <h2 className="text-xl">Select an Employee</h2>
      <ul className="list-disc pl-5">
        {users.map(user => (
          <li key={user.id}>
            <button onClick={() => alert(`Selected ${user.name}`)} className="text-blue-500 underline">
              {user.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}