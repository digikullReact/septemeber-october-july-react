import React from 'react'

const Tableitems = () => {
    const data=[
        {
          "_id": "6402142f588fc1371777a164",
          "age": 57,
          "name": "Erna Davis",
          "address": "990 Richardson Street, Whitehaven, New Jersey, 5828"
        },
        {
          "_id": "6402142fcb02f8d43f9a70d7",
          "age": 40,
          "name": "Margie Pearson",
          "address": "510 Fay Court, Orviston, Virginia, 9199"
        },
        {
          "_id": "6402142fdfe191723bcca9b0",
          "age": 98,
          "name": "Maryanne Brooks",
          "address": "485 Reeve Place, Advance, American Samoa, 3876"
        },
        {
          "_id": "6402142f8c173136dd1ebb42",
          "age": 71,
          "name": "Marva Bonner",
          "address": "571 Crawford Avenue, Northridge, Delaware, 5519"
        },
        {
          "_id": "6402142f4ae544f8f67bb8bd",
          "age": 45,
          "name": "Jenna Mckee",
          "address": "154 Glenmore Avenue, Finderne, Illinois, 1740"
        },
        {
          "_id": "6402142f6b7f197a08ad0f5d",
          "age": 22,
          "name": "Gabrielle Webb",
          "address": "956 Montieth Street, Trail, California, 9655"
        },
        {
          "_id": "6402142f664bee841ebb8734",
          "age": 31,
          "name": "Sharon Odonnell",
          "address": "517 Lloyd Court, Brownlee, Maryland, 1650"
        }
      ]
  return (
    <div>

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(ele=>(
 <tr>
<th scope="row">{ele._id}</th>
<td colspan="2">{ele.name}</td>
<td>{ele.age}</td>
<td>{ele.address}</td>

</tr>
        ))


    }

  </tbody>
</table>



    </div>
  )
}

export default Tableitems