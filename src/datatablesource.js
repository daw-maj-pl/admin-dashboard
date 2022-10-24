export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: params => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    }
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230
  },

  {
    field: 'age',
    headerName: 'Age',
    width: 100
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: params => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    }
  }
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: 'Scott Rodger',
    img: 'https://i.pravatar.cc/150?img=3',
    status: 'active',
    email: 'scottrodger@gmail.com',
    age: 45
  },
  {
    id: 2,
    username: 'Jill Wilson',
    img: 'https://i.pravatar.cc/150?img=31',
    email: 'jillwilson@gmail.com',
    status: 'passive',
    age: 22
  },
  {
    id: 3,
    username: 'John Weigel',
    img: 'https://i.pravatar.cc/150?img=65',
    email: 'johnweigel@gmail.com',
    status: 'pending',
    age: 65
  },
  {
    id: 4,
    username: 'Rosalie Flores',
    img: 'https://i.pravatar.cc/150?img=28',
    email: 'rosalieflores@gmail.com',
    status: 'active',
    age: 19
  },
  {
    id: 5,
    username: 'Jason Guthrie',
    img: 'https://i.pravatar.cc/150?img=52',
    email: 'jasonguthrie@gmail.com',
    status: 'passive',
    age: 36
  },
  {
    id: 6,
    username: 'Viola Fitzgibbons',
    img: 'https://i.pravatar.cc/150?img=24',
    email: 'violafitzgibbons@gmail.com',
    status: 'active',
    age: 31
  },
  {
    id: 7,
    username: 'James Merriman',
    img: 'https://i.pravatar.cc/150?img=53',
    email: 'jamesmerriman@gmail.com',
    status: 'passive',
    age: 34
  },
  {
    id: 8,
    username: 'Shannon Roman',
    img: 'https://i.pravatar.cc/150?img=41',
    email: 'shannonroman@gmail.com',
    status: 'active',
    age: 28
  },
  {
    id: 9,
    username: 'Joyce Bond',
    img: 'https://i.pravatar.cc/150?img=9',
    email: 'joycebond@gmail.com',
    status: 'pending',
    age: 25
  },
  {
    id: 10,
    username: 'Wallace Bogart',
    img: 'https://i.pravatar.cc/150?img=22',
    email: 'wallacebogart@gmail.com',
    status: 'active',
    age: 38
  }
];
