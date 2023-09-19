import {
    getAccounts,
    getAccountById,
    getAccountByEmail,
    createNewAccount,
    updateAccountById,
    deleteAccountById
} from '../models/accounts.js';

export const deleteAccountByIdAction = async(req,res) => {
    try {
        const id = req.params.id;
        const account = await deleteAccountById(id);
        return res.status(200).json(account);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export const updateAccountByIdAction = async(req,res) => {
    try {
        const id = req.params.id;
        const user = req.body.user;
        const account = await updateAccountById(id,user);
        return res.status(200).json(account);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export const createNewAccountAction = async(req,res) => {
    try {
        const user = req.body.user;
        const account = await createNewAccount(user);
        return res.status(200).json(account);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export const getAccountByEmailAction = async(req,res) => {
    try {
        const email = req.params.email;
        const account = await getAccountByEmail(email);
        return res.status(200).json(account);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export const getAccountByIdAction = async(req,res) => {
    try {
        const id = req.params.id;
        console.log('ID: ' + id);
        const account = await getAccountById(id);
        return res.status(200).json(account);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export const getAccountsAction = async(req,res) => {
    try {
        const accounts = await getAccounts();
        return res.status(200).json(accounts);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}