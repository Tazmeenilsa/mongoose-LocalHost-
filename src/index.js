const mongoose = require("mongoose")
mongoose.set("strictQuery", false)
mongoose.connect("mongodb://localhost:27017/testdb", {
    useNewurlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected")
).catch((err) => console.log(err))

// Schema
// const userInfo = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
//         age: Number,
//         gender: String,
//         active: Boolean,
//         date: {
//             type: Date,
//             default: Date.now
//         }
//     }

// )

const course = new mongoose.Schema({
    name: String,
    cType: String,
    videos: Number,
    active: Boolean
})

// Model.. means creating collection
// const Users = new mongoose.model("User", userInfo)
const Courses = new mongoose.model("Course", course)

// create document or insert
// const createDoc = async () => {
//     try {
//         const userNo1 = new Users({
//             name: "Tazmeen ilsa",
//             age: 22,
//             gender: "Female",
//             active: true
//         })
//         const userNo2 = new Users({
//             name: "Humaira",
//             age: 20,
//             gender: "Female",
//             active: false
//         })
//         const userNo3 = new Users({
//             name: "Afia",
//             age: 23,
//             gender: "Female",
//             active: true
//         })
//         const userNo4 = new Users({
//             name: "Hoor",
//             age: 22,
//             gender: "Female",
//             active: false
//         })
//         const userNo5 = new Users({
//             name: "Yuman",
//             age: 21,
//             gender: "Female",
//             active: true
//         })

//         const result = await Users.insertMany([userNo1, userNo2, userNo3, userNo4, userNo5]);
//         console.log(result)
//     }
//     catch (err) {
//         console.log(err)
//     }

// }

// createDoc()

const creatCourse = async () => {
    try {
        const course1 = new Courses({
            name: "NodeJS",
            cType: "Back End",
            videos: 50,
            active: true,

        })
        const course2 = new Courses({
            name: "Express Js",
            cType: "Back End",
            videos: 80,
            active: true
        })
        const course3 = new Courses({
            name: "MongoDb",
            cType: "Databasee",
            videos: 70,
            active: false
        })
        const course4 = new Courses({
            name: "React JS",
            cType: "Front End",
            videos: 70,
            active: false
        })
        const result = await Courses.insertMany([course1, course2, course3, course4]);
        //         console.log(result)
    }
    catch (err) {
        console.log(err)
    }

}

// creatCourse()


// read doc
const getDoc = async () => {
    try {
        const getData = await Users
            // .find({ age: { $in: [20, 23] } })
            .find({ age: { $nin: [20, 23] } })
            // .find({age:{$lt:22}})
            .select({ name: 1 })
        // .limit(1);
        console.log(getData)
    }
    catch (err) {
        console.log(err)
    }

}

// getDoc()

// logical operator
const getCourseData = async () => {
    try {
        const result = await Courses
            // .find({
            //     $or: [
            //         { cType: "Back End" },
            //         { videos: 50 }
            //     ]
            // })

            // .find({
            //     $and: [
            //         { cType: "Back End" },
            //         { videos: 50 }
            //     ]

            // .find({
            //    videos:{$not:{$gt:50}}

            // })

            .find()
            .select({ name: 1 })
            // .count()
            // .sort("name : 1")  //acending to decending order
            .sort({ name: -1 }) //decending to acending order
        console.log(result)
    }
    catch (err) {
        console.log(err)
    }
}
// getCourseData()


// updatedocuments
const updateDocument = async (_id) => { //findByIdAndUpdate bh use krskty or updateOne bhi 
    try {
        const result = await Courses.findByIdAndUpdate({ _id }, {
            $set: {
                videos: 60
            }
        }
        );
        console.log(result)
    }
    catch (err) {
        console.log(err)
    }

}
updateDocument("63c2794d36f0585675a26551")

// delete documents
const deleteDocuments = async (_id) => { //findByIdAndDelete or deleteOne
    try {
        const result = await Courses.deleteOne({ _id })
        console.log(result)
    }
    catch (err) {
        console.log(err)
    }
}
deleteDocuments("63c2794d36f0585675a26554")