let users = [
  {
    id: 1,
    name: "Sajedul Islam",
    email: "s@gmail.com",
  },
  {
    id: 2,
    name: "Rakib",
    email: "r@gmail.com",
  },
];

let getAllUser = (req, res) => {
  console.log("in user- all");
  res.json({
    status: true,
    users,
  });
};

let singleUser = (req, res) => {
    const { id } = req.params;
    let result;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == id) {
        result = users[i];
        break;
      }
    }
  
    res.json({
      status: true,
      result,
    });
  }

module.exports = {
    getAllUser,
    singleUser
}
