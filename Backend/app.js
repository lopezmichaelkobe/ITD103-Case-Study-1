const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
const CarModel = require('./library');
const Borrow = require('./borrowdb');

const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";



  mongoose.connect("mongodb://127.0.0.1:27017/car_database")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");
require("./library");
require("./imageDetails");

const User = mongoose.model("UserInfo");
const Images = mongoose.model("ImageDetails");
app.post("/register", async (req, res) => {
  const { fname, lname, email, password, userType, provincecity} = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      userType,
      provincecity
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post('/borrow-create', (req, res) => {
  Borrow.create(req.body)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})

//about cars directory
app.get('/cars', (req, res) => {
  CarModel.find()
    .then(Cars => {
      console.log(Cars); // Log fetched cars
      res.json(Cars);
    })
    .catch(err => res.json(err))
})

app.get('/getborrow-cars', (req, res) => {
  Borrow.find()
    .then(Cars => {
      console.log(Cars); // Log fetched borrow cars
      res.json(Cars);
    })
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {  //update cars
  const id = req.params.id;
  CarModel.findByIdAndUpdate({_id: id}, {
    CarName: req.body.CarName,
    Manufacturer: req.body.Manufacturer,
    Year: req.body.Year, 
    DriveType: req.body.DriveType,
    Power: req.body.Power
  }).then (user => res.json(user))
    .catch(err => res.json(err))
})

app.put('/update-borrowcars/:id', (req, res) => {  //update borrowed cars
  const id = req.params.id;
  Borrow.findByIdAndUpdate({_id: id}, {
    CarName: req.body.CarName,
    Power: req.body.Power, 
    Name: req.body.Name,
    Provincecity: req.body.Provincecity
  }).then (user => res.json(user))
    .catch(err => res.json(err))
})

app.get('/get/:id', (req, res) => { //get cars by id
  const id = req.params.id
  CarModel.findById({_id: id})
  .then(Cars => res.json(Cars))
  .catch(err => res.json(err))
})

app.get('/getborrow-cars/:id', (req, res) => { //get cars by id
  const id = req.params.id
  Borrow.findById({_id: id})
  .then(Cars => res.json(Cars))
  .catch(err => res.json(err))
})

app.put('/updateuser/:id', (req, res) => {  //update cars
  const id = req.params.id;
  User.findByIdAndUpdate({_id: id}, {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email, 
    provincecity: req.body.provincecity, 
  }).then (user => res.json(user))
    .catch(err => res.json(err))
})


app.get('/getusers/:id', (req, res) => { //get cars by id on user/admin
  const id = req.params.id
  User.findById({_id: id})
  .then(Cars => res.json(Cars))
  .catch(err => res.json(err))
})

app.post('/create-car', (req, res) => {
  CarModel.create(req.body)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})



app.delete('/deletecar/:id',(req, res) =>{
  const id = req.params.id;
 CarModel.findByIdAndDelete({_id: id})
  .then(response => res.json(response))
  .catch(err => res.json(err))
})

app.delete('/delete-borrowcar/:id',(req, res) =>{
  const id = req.params.id;
 Borrow.findByIdAndDelete({_id: id})
  .then(response => res.json(response))
  .catch(err => res.json(err))
})

app.get('/admins-list', (req, res) => {
  User.find({ userType: 'Admin' })
    .then(Users => {
      console.log(Users); // Log fetched Admins
      res.json(Users);
    })
    .catch(err => res.json(err))
})

app.get('/admins-list', (req, res) => {
  User.find({ userType: 'Admin' })
    .then(Users => {
      console.log(Users); // Log fetched Admins
      res.json(Users);
    })
    .catch(err => res.json(err))
})

app.delete('/deleteuser/:id',(req, res) =>{
  const id = req.params.id;
  User.findByIdAndDelete({_id: id}) //Delete either User or Admin...
  .then(response => res.json(response))
  .catch(err => res.json(err))
})

app.get('/users-list', (req, res) => {
  User.find({ userType: 'User' })
    .then(Users => {
      console.log(Users); // Log fetched Users
      res.json(Users);
    })
    .catch(err => res.json(err))
})

app.get('/users-list', (req, res) => {
  User.find({ userType: 'Admin' })
    .then(Users => {
      console.log(Users); // Log fetched cars
      res.json(Users);
    })
    .catch(err => res.json(err))
})


app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "15m",
    });

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) { }
});

app.listen(5000, () => {
  console.log("Server Started");
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ambotnimo@gmail.com",
        pass: "rmdklolcsmswvyfw",
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: "lopezmichaelkobe@gmail.com",
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log(link);
  } catch (error) { }
});

app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
});

app.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );

    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
});

app.get("/getAllUser", async (req, res) => {
  try {
    const allUser = await User.find({});
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
});

app.post("/deleteUser", async (req, res) => {
  const { userid } = req.body;
  try {
    User.deleteOne({ _id: userid }, function (err, res) {
      console.log(err);
    });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});


app.post("/upload-image", async (req, res) => {
  const { base64 } = req.body;
  try {
    await Images.create({ image: base64 });
    res.send({ Status: "ok" })

  } catch (error) {
    res.send({ Status: "error", data: error });

  }
})

app.get("/get-image", async (req, res) => {
  try {
    await Images.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})



app.get("/paginatedUsers", async (req, res) => {
  const allUser = await CarModel.find({});
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)

  const startIndex = (page - 1) * limit
  const lastIndex = (page) * limit

  const results = {}
  results.totalUser=allUser.length;
  results.pageCount=Math.ceil(allUser.length/limit);

  if (lastIndex < allUser.length) {
    results.next = {
      page: page + 1,
    }
  }
  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
    }
  }
  results.result = allUser.slice(startIndex, lastIndex);
  res.json(results)
})

app.get("/paginatedUsers1", async (req, res) => {
  const allUser = await Borrow.find({});
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)

  const startIndex = (page - 1) * limit
  const lastIndex = (page) * limit

  const results = {}
  results.totalUser=allUser.length;
  results.pageCount=Math.ceil(allUser.length/limit);

  if (lastIndex < allUser.length) {
    results.next = {
      page: page + 1,
    }
  }
  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
    }
  }
  results.result = allUser.slice(startIndex, lastIndex);
  res.json(results)
})





/*WebTrafficChart: */


app.get('/getProvincecityIligan', (req, res) => {
  Borrow.find({Provincecity: 'Iligan' })
    .then(Users => {
      console.log(Users); // Log fetched Users
      res.json(Users);
    })
    .catch(err => res.json(err))
})


app.get('/getProvincecityCDO', (req, res) => {
  Borrow.find({Provincecity: 'CDO' })
    .then(Users1 => {
      console.log(Users1); // Log fetched Users
      res.json(Users1);
    })
    .catch(err => res.json(err))
})



app.get('/getProvincecityLanaoDelNorte', (req, res) => {
  Borrow.find({Provincecity: 'LanaoDelNorte' })
    .then(Users2 => {
      console.log(Users2); // Log fetched Users
      res.json(Users2);
    })
    .catch(err => res.json(err))
})


app.get('/getProvincecityBukidnon', (req, res) => {
  Borrow.find({Provincecity: 'Bukidnon' })
    .then(Users3 => {
      console.log(Users3); // Log fetched Users
      res.json(Users3);
    })
    .catch(err => res.json(err))
})

app.get('/getProvincecityMisamisOriental', (req, res) => {
  Borrow.find({Provincecity: 'MisamisOriental' })
    .then(Users4 => {
      console.log(Users4); // Log fetched Users
      res.json(Users4);
    })
    .catch(err => res.json(err))
})

app.get('/getProvincecityMisamisOccidental', (req, res) => {
  Borrow.find({Provincecity: 'MisamisOcciental' })
    .then(Users5 => {
      console.log(Users5); // Log fetched Users
      res.json(Users5);
    })
    .catch(err => res.json(err))
})

app.get('/getProvincecityCamiguin', (req, res) => {
  Borrow.find({Provincecity: 'Camiguin' })
    .then(Users6 => {
      console.log(Users6); // Log fetched Users
      res.json(Users6);
    })
    .catch(err => res.json(err))
})


      /*BudgetChart: */
      /* 1- Diesel */
      /* 2- Gasoline */
      /* 3- Electric */

      
      /*Iligan: */

app.get('/getProvincecityIligan1', (req, res) => {
  Borrow.find({ $and: [{ Provincecity: 'Iligan' }, { Power: 'Diesel' }] })
          .then(iligan1 => {
            console.log(iligan1); // Log fetched Users
            res.json(iligan1);
          })
          .catch(err => res.json(err))
      })

      app.get('/getProvincecityIligan2', (req, res) => {
        Borrow.find({ $and: [{ Provincecity: 'Iligan' }, { Power: 'Gasoline' }] })
          .then(iligan2 => {
            console.log(iligan2); // Log fetched Users
            res.json(iligan2);
          })
          .catch(err => res.json(err))
      })

      app.get('/getProvincecityIligan3', (req, res) => {
        Borrow.find({ $and: [{ Provincecity: 'Iligan' }, { Power: 'Electric' }] })
          .then(iligan3 => {
            console.log(iligan3); // Log fetched Users
            res.json(iligan3);
          })
          .catch(err => res.json(err))
      })




           /*CDO: */

 app.get('/getProvincecityCDO1', (req, res) => {
  Borrow.find({ $and: [{ Provincecity: 'CDO' }, { Power: 'Diesel' }] })
          .then(cdo1 => {
            console.log(cdo1); // Log fetched Users
            res.json(cdo1);
          })
          .catch(err => res.json(err))
      })

      app.get('/getProvincecityCDO2', (req, res) => {
        Borrow.find({ $and: [{ Provincecity: 'CDO' }, { Power: 'Gasoline' }] })
          .then(cdo2 => {
            console.log(cdo2); // Log fetched Users
            res.json(cdo2);
          })
          .catch(err => res.json(err))
      })

      app.get('/getProvincecityCDO3', (req, res) => {
        Borrow.find({ $and: [{ Provincecity: 'CDO' }, { Power: 'Electric' }] })
          .then(cdo3 => {
            console.log(cdo3); // Log fetched Users
            res.json(cdo3);
          })
          .catch(err => res.json(err))
      })



           /*Lanao Del Norte: */

 app.get('/getProvincecityLanaoDelNorte1', (req, res) => {
  Borrow.find({ $and: [{ Provincecity: 'LanaoDelNorte' }, { Power: 'Diesel' }] })
          .then(lanaodelnorte1 => {
            console.log(lanaodelnorte1); // Log fetched Users
            res.json(lanaodelnorte1);
          })
          .catch(err => res.json(err))
      })

      app.get('/getProvincecityLanaoDelNorte2', (req, res) => {
        Borrow.find({ $and: [{ Provincecity: 'LanaoDelNorte' }, { Power: 'Gasoline' }] })
          .then(lanaodelnorte2 => {
            console.log(lanaodelnorte2); // Log fetched Users
            res.json(lanaodelnorte2);
          })
          .catch(err => res.json(err))
      })

      app.get('/getProvincecityLanaoDelNorte3', (req, res) => {
        Borrow.find({ $and: [{ Provincecity: 'LanaoDelNorte' }, { Power: 'Electric' }] })
          .then(lanaodelnorte3 => {
            console.log(lanaodelnorte3); // Log fetched Users
            res.json(lanaodelnorte3);
          })
          .catch(err => res.json(err))
      })



                      /*Bukidnon: */

      app.get('/getProvincecityBukidnon1', (req, res) => {
        Borrow.find({ $and: [{ Provincecity: 'Bukidnon' }, { Power: 'Diesel' }] })
                .then(bukidnon1 => {
                  console.log(bukidnon1); // Log fetched Users
                  res.json(bukidnon1);
                })
                .catch(err => res.json(err))
            })

            app.get('/getProvincecityBukidnon2', (req, res) => {
              Borrow.find({ $and: [{ Provincecity: 'Bukidnon' }, { Power: 'Gasoline' }] })
                .then(bukidnon2 => {
                  console.log(bukidnon2); // Log fetched Users
                  res.json(bukidnon2);
                })
                .catch(err => res.json(err))
            })

            app.get('/getProvincecityBukidnon3', (req, res) => {
              Borrow.find({ $and: [{ Provincecity: 'Bukidnon' }, { Power: 'Electric' }] })
                .then(bukidnon3 => {
                  console.log(bukidnon3); // Log fetched Users
                  res.json(bukidnon3);
                })
                .catch(err => res.json(err))
            })


            
                      /*MisamisOriental: */

      app.get('/getProvincecityMisamisOriental1', (req, res) => {
        Borrow.find({ $and: [{ Provincecity: 'MisamisOriental' }, { Power: 'Diesel' }] })
                .then(misamisoriental1 => {
                  console.log(misamisoriental1); // Log fetched Users
                  res.json(misamisoriental1);
                })
                .catch(err => res.json(err))
            })

            app.get('/getProvincecityMisamisOriental2', (req, res) => {
              Borrow.find({ $and: [{ Provincecity: 'MisamisOriental' }, { Power: 'Gasoline' }] })
                .then(misamisoriental2 => {
                  console.log(misamisoriental2); // Log fetched Users
                  res.json(misamisoriental2);
                })
                .catch(err => res.json(err))
            })

            app.get('/getProvincecityMisamisOriental3', (req, res) => {
              Borrow.find({ $and: [{ Provincecity: 'MisamisOriental' }, { Power: 'Electric' }] })
                .then(misamisoriental3 => {
                  console.log(misamisoriental3); // Log fetched Users
                  res.json(misamisoriental3);
                })
                .catch(err => res.json(err))
            })


                                  /*MisamisOccidental: */

      app.get('/getProvincecityMisamisOccidental1', (req, res) => {
        Borrow.find({ $and: [{ Provincecity: 'MisamisOccidental' }, { Power: 'Diesel' }] })
                .then(misamisoccidental1 => {
                  console.log(misamisoccidental1); // Log fetched Users
                  res.json(misamisoccidental1);
                })
                .catch(err => res.json(err))
            })

            app.get('/getProvincecityMisamisOccidental2', (req, res) => {
              Borrow.find({ $and: [{ Provincecity: 'MisamisOccidental' }, { Power: 'Gasoline' }] })
                .then(misamisoccidental2 => {
                  console.log(misamisoccidental2); // Log fetched Users
                  res.json(misamisoccidental2);
                })
                .catch(err => res.json(err))
            })

            app.get('/getProvincecityMisamisOccidental3', (req, res) => {
              Borrow.find({ $and: [{ Provincecity: 'MisamisOccidental' }, { Power: 'Electric' }] })
                .then(misamisoccidental3 => {
                  console.log(misamisoccidental3); // Log fetched Users
                  res.json(misamisoccidental3);
                })
                .catch(err => res.json(err))
            })


            
                                  /*Camiguin: */

      app.get('/getProvincecityCamiguin1', (req, res) => {
        Borrow.find({ $and: [{ Provincecity: 'Camiguin' }, { Power: 'Diesel' }] })
                .then(camiguin1 => {
                  console.log(camiguin1); // Log fetched Users
                  res.json(camiguin1);
                })
                .catch(err => res.json(err))
            })

            app.get('/getProvincecityCamiguin2', (req, res) => {
              Borrow.find({ $and: [{ Provincecity: 'Camiguin' }, { Power: 'Gasoline' }] })
                .then(camiguin2 => {
                  console.log(camiguin2); // Log fetched Users
                  res.json(camiguin2);
                })
                .catch(err => res.json(err))
            })

            app.get('/getProvincecityCamiguin3', (req, res) => {
              Borrow.find({ $and: [{ Provincecity: 'Camiguin' }, { Power: 'Electric' }] })
                .then(camiguin3 => {
                  console.log(camiguin3); // Log fetched Users
                  res.json(camiguin3);
                })
                .catch(err => res.json(err))
            })

      

           // Modify your backend code to aggregate data for the report chart

// Add this endpoint to get aggregated data for the report chart
app.get('/getReportData', async (req, res) => {
  try {
    const dieselData = await Borrow.aggregate([
      { $match: { Power: 'Diesel' } },
      { $group: { _id: "$timestamp", count: { $sum: 1 } } }
    ]);

    const gasolineData = await Borrow.aggregate([
      { $match: { Power: 'Gasoline' } },
      { $group: { _id: "$timestamp", count: { $sum: 1 } } }
    ]);

    const electricData = await Borrow.aggregate([
      { $match: { Power: 'Electric' } },
      { $group: { _id: "$timestamp", count: { $sum: 1 } } }
    ]);

    res.json({ dieselData, gasolineData, electricData });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
