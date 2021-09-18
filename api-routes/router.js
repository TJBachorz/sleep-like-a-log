import { sleepDB } from '../data/db.js';

export const root = {
    userEmailById: (id) => {
        return new Promise((resolve, reject) => {
            // const query = "SELECT * FROM users WHERE id = '" + id + "'";
            const query = {text: "SELECT current_user"}

            sleepDB.query(query, (err, res) => {
                console.log(res)
                if (err) {
                    console.log("hitting rej", err)
                    reject(err);
                } else {
                    console.log("hitting res")

                    console.log(res)
                    resolve(res.rows[0].current_user);
                }
            });
        });
    }
};