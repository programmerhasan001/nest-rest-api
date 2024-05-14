import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "john doe",
            "email": "john@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 2,
            "name": "charles",
            "email": "charles@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 3,
            "name": "Alex",
            "email": "alex@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 4,
            "name": "Jack",
            "email": "jack@gmail.com",
            "role": "ADMIN"
        },
        {
            "id": 5,
            "name": "Henry",
            "email": "henry@gmail.com",
            "role": "SUPER_ADMIN"
        },
    ]

    findAll(role? : "INTERN" | "ADMIN" | "SUPER_ADMIN" ) {
        if(role) {
            return this.users.filter(user => user.role === role)
        }

        return this.users
    }

    findOne(id: string) {
        const user = this.users.find(user => user.id === parseInt(id))
        return user
    }

    create(user: {name: string, email: string, role: "INTERN" | "ADMIN" | "SUPER_ADMIN"}) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        }

        this.users.push(newUser)
        return {message: "user created successfully", user: newUser};
    }

    update(id: string, updatedUser: {name?: string, email?: string, role?: "INTERN" | "ADMIN" | "SUPER_ADMIN"}) {
        this.users = this.users.map(user => {
            if(user.id === parseInt(id)) {
                return {...user, ...updatedUser}
            }
            return user
        })
        console.log(id)

        return this.users.find(user => user.id === parseInt(id))
    }


    delete(id: string) {
        const removedUser = this.users.find(user => user.id === parseInt(id))

        this.users = this.users.filter(user => user.id !== parseInt(id))

        return removedUser
    }
}
