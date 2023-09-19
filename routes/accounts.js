import {
    getAccountsAction,
    getAccountByIdAction,
    getAccountByEmailAction,
    createNewAccountAction,
    updateAccountByIdAction,
    deleteAccountByIdAction
} from '../controllers/accounts.js';

//CRUD - Create Read Update Delete
//HTTP - Create = post, Read = get, Update = put, Delete = delete

export default (router) => {
    router.get('/accounts/getAccounts', getAccountsAction); //READ = get
    router.get('/accounts/getAccountById/:id', getAccountByIdAction); //READ = get
    router.get('/accounts/getAccountByEmail/:email', getAccountByEmailAction); //READ = get
    router.post('/accounts/createNewAccount', createNewAccountAction); //CREATE = post
    router.put('/accounts/updateAccountById/:id', updateAccountByIdAction); //UPDATE = put
    router.delete('/accounts/deleteAccountById/:id', deleteAccountByIdAction); //DELETE = delete
}