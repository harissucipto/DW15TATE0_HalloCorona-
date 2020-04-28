/* eslint-disable no-unused-vars */
// Const List
const List = {
  id: 1,
  name: "Doctor",
};

// npx sequelize-cli model:generate --name List --attributes  name:string

//  User
const User = {
  id: 1,
  fullName: "Harwin",
  username: "harwin",
  email: "harwin@gmail.com",
  password: "kepobanget",
  listAs: "0",
  gender: "male",
  phone: "083896831233",
  address: "Tangerang Selatan",
};

//  npx sequelize-cli model:generate --name User --attributes  fullName:string,userName:string,email:string,password:string,listId:integer,gender:string,phone:string,address:string

// Article
const Article = {
  id: 1,
  title: "WHO Tengah Uji 3 dari 70 Vaksin Virus Corona",
  userId: {
    id: 1,
    name: "Dr Anto Ariza",
    listAs: 0,
  },
  attache: "who.jpg",
  description: `Lorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type specimen book.`,
};

// npx sequelize-cli model:generate --name Article --attributes title:string,userId:integer,attacthe:string,description:string

const Consultation = {
  fullName: "Harwin",
  phone: "083896833132",
  bornDate: "1994-03-30",
  age: "26",
  height: "165",
  wight: "49",
  gender: "male",
  subject: "sakit kepala",
  liveConsul: "2020-04-17",
  description: "sakit kepala banget ini kalau tidak ada uang",
  user: [
    {
      id: 1,
      username: "Harwin",
    },
  ],
  status: "Waiting Approve Consultation Live",
  reply: [
    {
      id: 1,
      response: "",
      createdAt: "12-12-2019",
      updateAt: "12-12-2019",
    },
  ],
};

//  npx sequelize-cli model:generate --name Consultation --attributes  fullName:string,phone:string,bornDate:date,age:string,height:string,weight:string,gender:string,subject:string,liveConsul:date,description:date,userId:integer,status:string,replyId:integer

const reply = {
  id: "2",
  consultantationId: "",
  userId: {},
  response: "",
};

// npx sequelize-cli model:generate --name Reply --attributes userId:integer,consultationId:integer,response:string
