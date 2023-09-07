import express from 'express';
const router = express.Router();
import axios from 'axios';

//GET
router.get('/sayWelcome', (req,res) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(results => {
        
        const users = results.data;
        let new_arr = [];

        users.forEach(y => {
            const person = {
                person_name: y.name,
                person_email: y.email,
                person_company: y.company.name,
                person_city: y.address.city
            }
            new_arr.push(person)
        })

        // console.log('Number of users: ' + users.length);
        // users.forEach(x => {
        //     console.log(x.name + " - " + x.company.name);
        // })

        //FILTER -> Return ARRAY
        //const arr = users.filter(x => x.email != '');

        //FIND -> Return Object
        //const obj = users.find(x => x.email != '');
    
        return res.status(200).json({data: new_arr});
    })
    .catch(error => {
        return res.status(500).json({message: error.message});
    })
})

//POST
router.post('/sayMyName', (req,res) => {
    const {username, password} = req.body;
    return res.status(200).json({message: `Hello ${username} Your password is ${password}`})
})


export default router;