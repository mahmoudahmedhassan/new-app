import React from 'react'
import './table.css'
function Table({ tableUsersData, loading, error }) {
  return (
    <div>

      <table id="customers">
        <tr>
          <th>Sd</th>
          <th>Name</th>
         </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
         </tr>
      </table>
    </div>
  )
}

export default Table