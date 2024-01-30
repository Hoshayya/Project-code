import React from 'react';

function Pricing() {
  return (
    <div>
      <h1>Pricing Plans</h1>
      <p>Choose the plan that suits your needs best.</p>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price</td>
            <td>Free</td>
            <td>$9.99/month</td>
            <td>$19.99/month</td>
          </tr>
          <tr>
            <td>Number of Courses</td>
            <td>10</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>Progress Tracking</td>
            <td>Basic</td>
            <td>Advanced</td>
            <td>Advanced</td>
          </tr>
          <tr>
            <td>Assignments</td>
            <td>Basic</td>
            <td>Advanced</td>
            <td>Advanced</td>
          </tr>
          {/* Add more features as needed */}
          <tr>
            <td>Action</td>
            <td><button>Upgrade</button></td>
            <td><button>Upgrade</button></td>
            <td><button>Upgrade</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Pricing;
