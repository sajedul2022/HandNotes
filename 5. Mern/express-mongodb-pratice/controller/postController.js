

//  Without Databse

let posts = [
  {
    id: 1,
    name: "Post 1 ",
    body: "hello world",
  },
  {
    id: 2,
    name: "Post 2",
    email: "loram ipsum",
  },
];

let index = (req, res) => {
  console.log("in Post All");
  res.json({
    status: true,
    posts,
  });
};



// let getSingleUser = (req, res) => {
//   const { id } = req.params;
//   let result;
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].id == id) {
//       result = users[i];
//       break;
//     }
//   }

//   res.json({
//     status: true,
//     result,
//   });
// };

module.exports = {
 index

};
