const Table = ({ sat }) => {

  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {sat.map((row) => (
        <tr key={row.id}>
          <td>{row.name}</td>
          <td>{row.type}</td>
          <td>{row.launchDate}</td>
          <td>{row.operational ? 'Operational' : 'Not Operational'}</td>
          </tr>
      ))}
     </tbody>
   </table>
  );
};



export default Table;
