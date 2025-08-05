import { useActionState } from 'react';

// This would be your form submission handler
async function submitForm(prevState, formData) {
  // Extract form data
  const newEntry = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    age: formData.get('age'),
    jobRole: formData.get('jobRole')
  };
  
  // Return the updated state (adding the new entry to previous entries)
  return {
    entries: [...(prevState.entries || []), newEntry]
  };
}

function UseActionHook() {
  const [state, formAction, isPending] = useActionState(submitForm, { entries: [] });

  return (
    <div className="app-container">
      <h1>Employee Information</h1>
      
      <form action={formAction} className="employee-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" min="18" max="99" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="jobRole">Job Role:</label>
          <select id="jobRole" name="jobRole" required>
            <option value="">Select a role</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
            <option value="QA">QA Engineer</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <button type="submit" disabled={isPending}>
          {isPending ? 'Adding...' : 'Add Employee'}
        </button>
      </form>
      
      {state.entries && state.entries.length > 0 && (
        <div className="employee-table-container">
          <h2>Employee List</h2>
          <table className="employee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Job Role</th>
              </tr>
            </thead>
            <tbody>
              {state.entries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.phone}</td>
                  <td>{entry.age}</td>
                  <td>{entry.jobRole}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UseActionHook;