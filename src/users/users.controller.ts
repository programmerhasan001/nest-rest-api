import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService : UsersService) {}

    @Get() // GET /users or /users?role=value&age=value
    findAll(@Query("role") role?: "INTERN" | "ADMIN" | "SUPER_ADMIN") {
        return this.userService.findAll(role);
    }

    @Get('interns') // GET /users
    findAllInters () {
        return "inters..."
    }

    @Get(":id") //  GET /users/:id
    findOne(@Param("id") id: string) {
        return this.userService.findOne(id)
    }

    @Post() // POST /users
    create(@Body() user: {name: string, email: string, role: "INTERN" | "ADMIN" | "SUPER_ADMIN"}) {
        return this.userService.create(user)
    }

    @Patch(":id") // PATCH /users/:id
    update(@Param("id") id: string, @Body() userUpdate: {}) {
        return this.userService.update(id, userUpdate)
    }

    @Delete(":id") // DELETE /users/:id
    delete(@Param("id") id: string) {
        return this.userService.delete(id)
    }

}
